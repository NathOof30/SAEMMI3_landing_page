const A11Y_STORAGE_KEY = 'expeditionA11yPrefs';

const VALID_THEMES = new Set(['auto', 'light', 'dark']);
const VALID_TEXT_SIZES = new Set(['normal', 'large', 'xlarge']);
const VALID_MOTIONS = new Set(['auto', 'reduce', 'no-preference']);

const DEFAULT_PREFS = {
  theme: 'auto',
  textSize: 'normal',
  motion: 'auto',
  reading: false,
};

const listeners = new Set();
let globalListenersBound = false;
let currentPrefs = { ...DEFAULT_PREFS };

/**
 * Lit les préférences d'accessibilité persistées dans `localStorage`.
 *
 * @returns {{ theme: 'auto' | 'light' | 'dark', textSize: 'normal' | 'large' | 'xlarge', motion: 'auto' | 'reduce' | 'no-preference', reading: boolean }}
 */
function readStoredPrefs() {
  try {
    const raw = window.localStorage.getItem(A11Y_STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PREFS };
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return { ...DEFAULT_PREFS };

    return {
      theme: VALID_THEMES.has(parsed.theme) ? parsed.theme : 'auto',
      textSize: VALID_TEXT_SIZES.has(parsed.textSize) ? parsed.textSize : 'normal',
      motion: VALID_MOTIONS.has(parsed.motion) ? parsed.motion : 'auto',
      reading: parsed.reading === true,
    };
  } catch {
    return { ...DEFAULT_PREFS };
  }
}

/**
 * Enregistre les préférences d'accessibilité dans `localStorage`.
 *
 * @param {{ theme: string, textSize: string, motion: string, reading: boolean }} prefs
 * @returns {void}
 */
function savePrefs(prefs) {
  try {
    window.localStorage.setItem(A11Y_STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    // Ignorer si le stockage local est bloqué par le navigateur
  }
}

/**
 * Indique si le système demande actuellement le mode sombre.
 *
 * @returns {boolean}
 */
function isSystemDark() {
  return (
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
}

/**
 * Indique si le système demande actuellement la réduction des animations.
 *
 * @returns {boolean}
 */
function isSystemReducedMotion() {
  return (
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/**
 * Retourne l'état résolu courant d'accessibilité.
 *
 * @returns {{ themePref: string, resolvedTheme: 'light' | 'dark', textSize: string, motionPref: string, reducedMotion: boolean, readingEnhanced: boolean }}
 */
export function getAccessibilityState() {
  const resolvedTheme =
    currentPrefs.theme === 'dark' || currentPrefs.theme === 'light'
      ? currentPrefs.theme
      : isSystemDark()
        ? 'dark'
        : 'light';

  const reducedMotion =
    currentPrefs.motion === 'reduce'
      ? true
      : currentPrefs.motion === 'no-preference'
        ? false
        : isSystemReducedMotion();

  return {
    themePref: currentPrefs.theme,
    resolvedTheme,
    textSize: currentPrefs.textSize,
    motionPref: currentPrefs.motion,
    reducedMotion,
    readingEnhanced: Boolean(currentPrefs.reading),
  };
}

/**
 * Indique si la réduction des animations est active (préférence utilisateur ou système).
 *
 * @returns {boolean}
 */
export function isReducedMotionPreferred() {
  const attr = document.documentElement.getAttribute('data-motion');
  if (attr === 'reduce') return true;
  if (attr === 'no-preference') return false;
  return isSystemReducedMotion();
}

/**
 * Enregistre un écouteur appelé à chaque changement des préférences d'accessibilité.
 *
 * @param {(state: ReturnType<typeof getAccessibilityState>) => void} callback
 * @returns {() => void} Fonction de désabonnement.
 */
export function onAccessibilityChange(callback) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

/**
 * Applique les attributs `data-*` sur `<html>` et notifie les abonnés.
 *
 * @returns {ReturnType<typeof getAccessibilityState>}
 */
function applyAccessibilityToDom() {
  const state = getAccessibilityState();
  const root = document.documentElement;

  root.setAttribute('data-theme', state.resolvedTheme);
  root.setAttribute('data-text-size', state.textSize);
  root.setAttribute('data-motion', state.reducedMotion ? 'reduce' : 'no-preference');
  root.setAttribute('data-reading', state.readingEnhanced ? 'enhanced' : 'normal');

  listeners.forEach((cb) => {
    try {
      cb(state);
    } catch {
      // Isoler les erreurs éventuelles d'un abonné
    }
  });

  return state;
}

/**
 * Construit le panneau de réglages d'accessibilité dans le DOM.
 *
 * @returns {HTMLElement}
 */
function createAccessibilityPanel() {
  const panel = document.createElement('div');
  panel.id = 'a11y-panel';
  panel.className = 'a11y-panel card-l1';
  panel.setAttribute('role', 'region');
  panel.setAttribute('aria-labelledby', 'a11y-panel-title');
  panel.hidden = true;

  panel.innerHTML = `
    <div class="flex items-center justify-between gap-3 pb-3 mb-3.5 border-b-2 border-ink/15">
      <h2 id="a11y-panel-title" class="text-base font-extrabold text-ink m-0">
        Options d'accessibilité
      </h2>
      <button type="button" id="a11y-close-btn"
        class="a11y-close-btn inline-flex items-center justify-center w-9 h-9 rounded-lg border-2 border-ink bg-surface text-ink font-extrabold text-base cursor-pointer hover:bg-gold-soft"
        aria-label="Fermer les options d'accessibilité">
        <span aria-hidden="true">✕</span>
      </button>
    </div>

    <div class="space-y-4">
      <div>
        <p id="a11y-theme-label" class="text-xs font-extrabold uppercase tracking-wider text-text-muted mb-2 mt-0">
          Thème d'affichage
        </p>
        <div role="group" aria-labelledby="a11y-theme-label" class="grid grid-cols-3 gap-1.5">
          <button type="button" data-a11y-theme="auto" aria-pressed="true" class="a11y-chip">
            Système
          </button>
          <button type="button" data-a11y-theme="light" aria-pressed="false" class="a11y-chip">
            Clair
          </button>
          <button type="button" data-a11y-theme="dark" aria-pressed="false" class="a11y-chip">
            Sombre
          </button>
        </div>
      </div>

      <div>
        <p id="a11y-text-label" class="text-xs font-extrabold uppercase tracking-wider text-text-muted mb-2 mt-0">
          Taille du texte
        </p>
        <div role="group" aria-labelledby="a11y-text-label" class="grid grid-cols-3 gap-1.5">
          <button type="button" data-a11y-text="normal" aria-pressed="true" class="a11y-chip" aria-label="Taille normale, 100 %">
            100 %
          </button>
          <button type="button" data-a11y-text="large" aria-pressed="false" class="a11y-chip" aria-label="Texte agrandi, 115 %">
            115 %
          </button>
          <button type="button" data-a11y-text="xlarge" aria-pressed="false" class="a11y-chip" aria-label="Très grand texte, 130 %">
            130 %
          </button>
        </div>
      </div>

      <div class="space-y-2.5 pt-1">
        <button type="button" id="a11y-motion-switch" role="switch" aria-checked="false"
          class="a11y-switch-row w-full text-left">
          <span>
            <strong class="block text-sm font-extrabold text-ink">Réduire les animations</strong>
            <span class="block text-xs text-text-subtle">Coupe les mouvements et transitions</span>
          </span>
          <span class="a11y-switch-track" aria-hidden="true">
            <span class="a11y-switch-thumb"></span>
          </span>
        </button>

        <button type="button" id="a11y-reading-switch" role="switch" aria-checked="false"
          class="a11y-switch-row w-full text-left">
          <span>
            <strong class="block text-sm font-extrabold text-ink">Lecture facilitée</strong>
            <span class="block text-xs text-text-subtle">Liens soulignés et texte plus aéré</span>
          </span>
          <span class="a11y-switch-track" aria-hidden="true">
            <span class="a11y-switch-thumb"></span>
          </span>
        </button>
      </div>

      <div class="pt-3 border-t-2 border-ink/15 flex items-center justify-between gap-2">
        <button type="button" id="a11y-reset-btn"
          class="text-xs font-extrabold text-blood underline underline-offset-4 hover:text-ink cursor-pointer bg-transparent border-0 p-1">
          Réinitialiser les réglages
        </button>
      </div>
    </div>

    <p id="a11y-live-status" class="sr-only" aria-live="polite"></p>
  `;

  return panel;
}

/**
 * Initialise le panneau d'accessibilité, la persistance des préférences et les raccourcis clavier.
 *
 * @returns {void}
 */
export function initAccessibility() {
  currentPrefs = readStoredPrefs();
  applyAccessibilityToDom();

  const headerWidget = document.getElementById('a11y-widget');
  const headerToggleBtn = document.getElementById('a11y-toggle-btn');
  const floatingWidget = document.getElementById('a11y-floating-widget');
  const floatingToggleBtn = document.getElementById('a11y-floating-toggle-btn');

  const contexts = [];
  if (headerWidget && headerToggleBtn) {
    contexts.push({ type: 'mobile', widget: headerWidget, toggleBtn: headerToggleBtn });
  }
  if (floatingWidget && floatingToggleBtn) {
    contexts.push({ type: 'desktop', widget: floatingWidget, toggleBtn: floatingToggleBtn });
  }

  if (!contexts.length) return;

  if (contexts.every(({ widget }) => widget.dataset.a11yBound === 'true')) {
    return;
  }
  contexts.forEach(({ widget }) => {
    widget.dataset.a11yBound = 'true';
  });

  const desktopQuery =
    typeof window.matchMedia === 'function' ? window.matchMedia('(min-width: 768px)') : null;

  const isDesktopViewport = () =>
    desktopQuery ? desktopQuery.matches : window.innerWidth >= 768;

  const getActiveContext = () => {
    const desktopCtx = contexts.find((ctx) => ctx.type === 'desktop');
    const mobileCtx = contexts.find((ctx) => ctx.type === 'mobile');
    if (isDesktopViewport() && desktopCtx) return desktopCtx;
    if (!isDesktopViewport() && mobileCtx) return mobileCtx;
    return contexts[0];
  };

  let panel = document.getElementById('a11y-panel');
  if (!panel) {
    panel = createAccessibilityPanel();
  }

  const mountPanelInActiveWidget = () => {
    const ctx = getActiveContext();
    if (ctx && panel.parentElement !== ctx.widget) {
      ctx.widget.appendChild(panel);
    }
    return ctx;
  };

  mountPanelInActiveWidget();

  const closeBtn = panel.querySelector('#a11y-close-btn');
  const themeButtons = [...panel.querySelectorAll('[data-a11y-theme]')];
  const textButtons = [...panel.querySelectorAll('[data-a11y-text]')];
  const motionSwitch = panel.querySelector('#a11y-motion-switch');
  const readingSwitch = panel.querySelector('#a11y-reading-switch');
  const resetBtn = panel.querySelector('#a11y-reset-btn');
  const liveStatus = panel.querySelector('#a11y-live-status');

  const announce = (message) => {
    if (!liveStatus || !message) return;
    liveStatus.textContent = '';
    window.requestAnimationFrame(() => {
      liveStatus.textContent = message;
    });
  };

  const syncPanelUi = () => {
    const state = getAccessibilityState();

    themeButtons.forEach((btn) => {
      const value = btn.getAttribute('data-a11y-theme');
      btn.setAttribute('aria-pressed', String(value === state.themePref));
    });

    textButtons.forEach((btn) => {
      const value = btn.getAttribute('data-a11y-text');
      btn.setAttribute('aria-pressed', String(value === state.textSize));
    });

    if (motionSwitch) {
      motionSwitch.setAttribute('aria-checked', String(state.reducedMotion));
    }

    if (readingSwitch) {
      readingSwitch.setAttribute('aria-checked', String(state.readingEnhanced));
    }
  };

  const setOpen = (open, { restoreFocus = false } = {}) => {
    const ctx = mountPanelInActiveWidget();
    panel.hidden = !open;
    contexts.forEach(({ toggleBtn }) => {
      toggleBtn.setAttribute('aria-expanded', String(open && toggleBtn === ctx?.toggleBtn));
    });
    if (!open && restoreFocus) {
      ctx?.toggleBtn?.focus();
    }
  };

  syncPanelUi();

  contexts.forEach(({ widget, toggleBtn }) => {
    toggleBtn.addEventListener('click', () => {
      const isOpen = !panel.hidden;
      setOpen(!isOpen);
    });

    widget.addEventListener('focusout', (event) => {
      if (panel.parentElement !== widget) return;
      if (!panel.hidden && event.relatedTarget && !widget.contains(event.relatedTarget)) {
        setOpen(false);
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      setOpen(false, { restoreFocus: true });
    });
  }

  const syncResponsiveHost = () => {
    const wasOpen = !panel.hidden;
    const activeEl = document.activeElement;
    const focusInPanel = Boolean(activeEl && panel.contains(activeEl));
    const focusOnToggle = contexts.some((ctx) => ctx.toggleBtn === activeEl);

    const ctx = mountPanelInActiveWidget();
    contexts.forEach(({ toggleBtn }) => {
      toggleBtn.setAttribute('aria-expanded', String(wasOpen && toggleBtn === ctx?.toggleBtn));
    });

    if (wasOpen) {
      if (focusInPanel && typeof activeEl.focus === 'function') {
        activeEl.focus({ preventScroll: true });
      } else if (focusOnToggle && ctx?.toggleBtn) {
        ctx.toggleBtn.focus({ preventScroll: true });
      }
    }
  };

  if (desktopQuery) {
    if (typeof desktopQuery.addEventListener === 'function') {
      desktopQuery.addEventListener('change', syncResponsiveHost);
    } else if (typeof desktopQuery.addListener === 'function') {
      desktopQuery.addListener(syncResponsiveHost);
    }
  }

  themeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const nextTheme = btn.getAttribute('data-a11y-theme');
      if (!VALID_THEMES.has(nextTheme)) return;
      currentPrefs.theme = nextTheme;
      savePrefs(currentPrefs);
      const state = applyAccessibilityToDom();
      syncPanelUi();
      const label =
        nextTheme === 'auto'
          ? `Thème automatique selon le système (${state.resolvedTheme === 'dark' ? 'sombre' : 'clair'}).`
          : nextTheme === 'dark'
            ? 'Thème sombre activé.'
            : 'Thème clair activé.';
      announce(label);
    });
  });

  textButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const nextSize = btn.getAttribute('data-a11y-text');
      if (!VALID_TEXT_SIZES.has(nextSize)) return;
      currentPrefs.textSize = nextSize;
      savePrefs(currentPrefs);
      applyAccessibilityToDom();
      syncPanelUi();
      const label =
        nextSize === 'xlarge'
          ? 'Taille du texte réglée sur 130 %.'
          : nextSize === 'large'
            ? 'Taille du texte réglée sur 115 %.'
            : 'Taille du texte réglée sur 100 %.';
      announce(label);
    });
  });

  if (motionSwitch) {
    motionSwitch.addEventListener('click', () => {
      const currentlyReduced = getAccessibilityState().reducedMotion;
      currentPrefs.motion = currentlyReduced ? 'no-preference' : 'reduce';
      savePrefs(currentPrefs);
      const state = applyAccessibilityToDom();
      syncPanelUi();
      announce(state.reducedMotion ? 'Réduction des animations activée.' : 'Animations activées.');
    });
  }

  if (readingSwitch) {
    readingSwitch.addEventListener('click', () => {
      currentPrefs.reading = !currentPrefs.reading;
      savePrefs(currentPrefs);
      const state = applyAccessibilityToDom();
      syncPanelUi();
      announce(state.readingEnhanced ? 'Lecture facilitée activée.' : 'Lecture facilitée désactivée.');
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentPrefs = { ...DEFAULT_PREFS };
      savePrefs(currentPrefs);
      applyAccessibilityToDom();
      syncPanelUi();
      announce('Préférences d\'accessibilité réinitialisées.');
    });
  }

  if (!globalListenersBound) {
    globalListenersBound = true;

    document.addEventListener('keydown', (event) => {
      const activePanel = document.getElementById('a11y-panel');
      if (event.key === 'Escape' && activePanel && !activePanel.hidden) {
        event.preventDefault();
        activePanel.hidden = true;
        document.querySelectorAll('.a11y-toggle-btn').forEach((btn) => {
          btn.setAttribute('aria-expanded', 'false');
        });
        const hostToggle = activePanel.parentElement?.querySelector('.a11y-toggle-btn');
        hostToggle?.focus();
      }
    });

    document.addEventListener('click', (event) => {
      const activePanel = document.getElementById('a11y-panel');
      const activeWidget = activePanel?.parentElement;
      if (activeWidget && activePanel && !activePanel.hidden && !activeWidget.contains(event.target)) {
        activePanel.hidden = true;
        document.querySelectorAll('.a11y-toggle-btn').forEach((btn) => {
          btn.setAttribute('aria-expanded', 'false');
        });
      }
    });

    if (typeof window.matchMedia === 'function') {
      const darkMedia = window.matchMedia('(prefers-color-scheme: dark)');
      const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');

      const handleSystemChange = () => {
        applyAccessibilityToDom();
        const activePanel = document.getElementById('a11y-panel');
        if (activePanel) {
          const state = getAccessibilityState();
          activePanel.querySelectorAll('[data-a11y-theme]').forEach((btn) => {
            btn.setAttribute('aria-pressed', String(btn.getAttribute('data-a11y-theme') === state.themePref));
          });
          const mSwitch = activePanel.querySelector('#a11y-motion-switch');
          if (mSwitch) mSwitch.setAttribute('aria-checked', String(state.reducedMotion));
        }
      };

      if (typeof darkMedia.addEventListener === 'function') {
        darkMedia.addEventListener('change', handleSystemChange);
      }
      if (typeof motionMedia.addEventListener === 'function') {
        motionMedia.addEventListener('change', handleSystemChange);
      }
    }
  }
}
