import { isReducedMotionPreferred, onAccessibilityChange } from './accessibility.js';

/**
 * Active l'apparition progressive au défilement des blocs `[data-reveal]`
 * sans jamais masquer le contenu si JavaScript ou IntersectionObserver est indisponible.
 *
 * @returns {void}
 */
export function initScrollReveal() {
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (!revealEls.length) return;

  const revealAllNow = () => {
    document.documentElement.classList.remove('js-reveal-ready');
    revealEls.forEach((el) => {
      el.style.transitionDelay = '';
      el.classList.add('is-revealed');
    });
  };

  if (isReducedMotionPreferred() || !('IntersectionObserver' in window)) {
    revealAllNow();
    return;
  }

  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const pendingEls = [];

  revealEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < viewportHeight * 0.96) {
      el.classList.add('is-revealed');
    } else {
      pendingEls.push(el);
    }
  });

  if (!pendingEls.length) return;

  document.documentElement.classList.add('js-reveal-ready');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const target = entry.target;
        const delay = Number(target.getAttribute('data-reveal-delay')) || 0;
        if (delay > 0 && !isReducedMotionPreferred()) {
          target.style.transitionDelay = `${delay}ms`;
          target.addEventListener(
            'transitionend',
            () => {
              target.style.transitionDelay = '';
            },
            { once: true },
          );
        }

        target.classList.add('is-revealed');
        revealObserver.unobserve(target);
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -24px 0px' },
  );

  pendingEls.forEach((el) => revealObserver.observe(el));

  onAccessibilityChange((state) => {
    if (state.reducedMotion) {
      revealObserver.disconnect();
      revealAllNow();
    }
  });
}

/**
 * Gère la scène Grand Lot Mystère : accélération des rayons et changement de silhouette
 * mystère au survol, au focus ou au clavier des cartes de lots (jamais au survol direct de l'image).
 *
 * @returns {void}
 */
export function initMysteryStage() {
  const stages = document.querySelectorAll('.mystery-stage');
  const prizeList = document.querySelector('[data-prize-list]');
  const prizeTriggers = prizeList ? [...prizeList.querySelectorAll('[data-prize-trigger]')] : [];
  const prizeSvgs = [...document.querySelectorAll('[data-mystery-prize]')];
  const stageStatus = document.getElementById('mystery-stage-status');
  const defaultPrize = 'grand-lot';

  if (!stages.length) return;

  const setStageSpeed = (stage, rate) => {
    if (isReducedMotionPreferred()) return;
    const starburst = stage.querySelector('.mystery-starburst-svg');
    const anim = starburst?.getAnimations?.()[0];
    if (anim && typeof anim.updatePlaybackRate === 'function') {
      anim.updatePlaybackRate(rate);
    }
  };

  let lockedPrize = null;

  const setActivePrize = (prizeId, previewing, { announceReset = false } = {}) => {
    const targetPrize = prizeId || defaultPrize;

    prizeSvgs.forEach((svg) => {
      const isMatch = svg.getAttribute('data-mystery-prize') === targetPrize;
      svg.classList.toggle('is-active', isMatch);
      svg.setAttribute('aria-hidden', String(!isMatch));
    });

    prizeTriggers.forEach((trigger) => {
      const card = trigger.closest('.prize-card') || trigger;
      const isMatch = previewing && trigger.getAttribute('data-prize-trigger') === targetPrize;
      card.classList.toggle('is-selected', isMatch);
      if (trigger.hasAttribute('aria-pressed')) {
        const isLocked = lockedPrize === trigger.getAttribute('data-prize-trigger');
        trigger.setAttribute('aria-pressed', String(isLocked));
      }
    });

    if (stageStatus && previewing) {
      const activeTrigger = prizeTriggers.find(
        (trigger) => trigger.getAttribute('data-prize-trigger') === targetPrize,
      );
      const card = activeTrigger?.closest('.prize-card') || activeTrigger;
      const title = card?.querySelector('h3')?.textContent?.trim() || activeTrigger?.textContent?.trim();
      if (title) {
        stageStatus.textContent = `Aperçu affiché : ${title}.`;
      }
    } else if (stageStatus && !previewing) {
      stageStatus.textContent = announceReset ? 'Aperçu réinitialisé sur le lot mystère principal.' : '';
    }

    stages.forEach((stage) => {
      stage.setAttribute('data-active-prize', targetPrize);
      stage.classList.toggle('is-previewing', Boolean(previewing));
      setStageSpeed(stage, previewing ? 2.4 : 1);
    });
  };

  stages.forEach((stage) => {
    stage.addEventListener('pointerenter', (event) => {
      if (event.pointerType !== 'touch') {
        setStageSpeed(stage, 2.4);
      }
    });
    stage.addEventListener('pointerleave', () => {
      if (!stage.classList.contains('is-previewing')) {
        setStageSpeed(stage, 1);
      }
    });
  });

  if (prizeList && prizeTriggers.length && prizeSvgs.length) {
    const hoverCapable =
      typeof window.matchMedia === 'function'
        ? window.matchMedia('(hover: hover) and (pointer: fine)')
        : null;

    const toggleLockedPrize = (prizeId) => {
      if (lockedPrize === prizeId) {
        lockedPrize = null;
        setActivePrize(defaultPrize, false, { announceReset: true });
      } else {
        lockedPrize = prizeId;
        setActivePrize(prizeId, true);
      }
    };

    prizeTriggers.forEach((trigger) => {
      const prizeId = trigger.getAttribute('data-prize-trigger') || defaultPrize;
      const card = trigger.closest('.prize-card') || trigger;

      card.addEventListener('pointerenter', (event) => {
        if (event.pointerType === 'touch') return;
        lockedPrize = null;
        setActivePrize(prizeId, true);
      });

      trigger.addEventListener('focusin', () => {
        setActivePrize(prizeId, true);
      });

      if (trigger.tagName !== 'BUTTON') {
        trigger.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleLockedPrize(prizeId);
          }
        });
      }

      trigger.addEventListener('click', (event) => {
        const isTouchLike = event.pointerType === 'touch' || (hoverCapable && !hoverCapable.matches);
        if (!isTouchLike && event.detail !== 0) return;
        toggleLockedPrize(prizeId);
      });
    });

    prizeList.addEventListener('pointerleave', (event) => {
      if (event.pointerType === 'touch') return;
      if (lockedPrize) {
        setActivePrize(lockedPrize, true);
        return;
      }
      setActivePrize(defaultPrize, false);
    });

    prizeList.addEventListener('focusout', (event) => {
      if (!prizeList.contains(event.relatedTarget)) {
        if (lockedPrize) {
          setActivePrize(lockedPrize, true);
          return;
        }
        setActivePrize(defaultPrize, false);
      }
    });

    document.addEventListener('click', (event) => {
      if (lockedPrize !== null && !prizeList.contains(event.target)) {
        lockedPrize = null;
        setActivePrize(defaultPrize, false);
      }
    });
  }

  onAccessibilityChange((state) => {
    if (state.reducedMotion) {
      stages.forEach((stage) => {
        const starburst = stage.querySelector('.mystery-starburst-svg');
        const anim = starburst?.getAnimations?.()[0];
        if (anim && typeof anim.updatePlaybackRate === 'function') {
          anim.updatePlaybackRate(1);
        }
      });
    }
  });
}

/**
 * Anime en douceur l'ouverture et la fermeture des accordéons FAQ et disclosures (`.faq-details`).
 * Respecte dynamiquement la préférence de réduction des animations.
 *
 * @returns {void}
 */
export function initFaqAccordion() {
  const detailsList = document.querySelectorAll('.faq-details');
  if (!detailsList.length) return;

  detailsList.forEach((details) => {
    const summary = details.querySelector('summary');
    const answer = details.querySelector('.faq-answer');
    if (!summary || !answer || typeof answer.animate !== 'function') return;

    let animation = null;
    let isClosing = false;
    let isExpanding = false;

    const finishAnimation = (open) => {
      details.open = open;
      details.classList.remove('is-closing');
      animation = null;
      isClosing = false;
      isExpanding = false;
      answer.style.height = '';
      answer.style.opacity = '';
      answer.style.overflow = '';
    };

    const shrink = () => {
      isClosing = true;
      isExpanding = false;
      details.classList.add('is-closing');

      const startHeight = `${answer.offsetHeight}px`;
      const startOpacity = Number(getComputedStyle(answer).opacity || 1);

      if (animation) animation.cancel();

      answer.style.overflow = 'hidden';
      const currentAnim = answer.animate(
        [
          { height: startHeight, opacity: startOpacity },
          { height: '0px', opacity: 0 },
        ],
        {
          duration: 240,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        },
      );
      animation = currentAnim;

      currentAnim.onfinish = () => {
        if (animation !== currentAnim) return;
        finishAnimation(false);
      };
      currentAnim.oncancel = () => {
        if (animation !== currentAnim) return;
        isClosing = false;
      };
    };

    const expand = () => {
      isExpanding = true;
      isClosing = false;
      details.classList.remove('is-closing');

      const startHeight = details.open ? `${answer.offsetHeight}px` : '0px';
      const startOpacity = details.open ? Number(getComputedStyle(answer).opacity || 1) : 0;

      if (animation) animation.cancel();

      details.open = true;
      answer.style.overflow = 'hidden';
      const endHeight = `${answer.scrollHeight}px`;

      const currentAnim = answer.animate(
        [
          { height: startHeight, opacity: startOpacity },
          { height: endHeight, opacity: 1 },
        ],
        {
          duration: 280,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        },
      );
      animation = currentAnim;

      currentAnim.onfinish = () => {
        if (animation !== currentAnim) return;
        finishAnimation(true);
      };
      currentAnim.oncancel = () => {
        if (animation !== currentAnim) return;
        isExpanding = false;
      };
    };

    summary.addEventListener('click', (event) => {
      if (isReducedMotionPreferred()) {
        if (animation) {
          animation.cancel();
          finishAnimation(details.open);
        }
        return;
      }

      event.preventDefault();
      if (isClosing || !details.open) {
        expand();
      } else if (isExpanding || details.open) {
        shrink();
      }
    });

    onAccessibilityChange((state) => {
      if (state.reducedMotion && animation) {
        animation.cancel();
        finishAnimation(!isClosing);
      }
    });
  });
}

/**
 * Ajoute des contrôles clavier accessibles (Précédent / Suivant) au carrousel mobile des ambiances de Lens.
 *
 * @returns {void}
 */
export function initLensCarouselControls() {
  const carousel = document.getElementById('lens-carousel');
  const prevBtn = document.getElementById('lens-carousel-prev');
  const nextBtn = document.getElementById('lens-carousel-next');

  if (!carousel || !prevBtn || !nextBtn) return;

  const updateButtons = () => {
    const maxScroll = Math.max(0, carousel.scrollWidth - carousel.clientWidth);
    const isScrollable = maxScroll > 2;
    if (isScrollable) {
      carousel.setAttribute('tabindex', '0');
    } else {
      carousel.removeAttribute('tabindex');
    }
    prevBtn.disabled = carousel.scrollLeft <= 4;
    nextBtn.disabled = carousel.scrollLeft >= maxScroll - 4;
  };

  const scrollByCard = (direction) => {
    const firstCard = carousel.querySelector('li');
    const step = firstCard ? firstCard.getBoundingClientRect().width + 16 : 280;
    const behavior = isReducedMotionPreferred() ? 'auto' : 'smooth';
    carousel.scrollBy({ left: direction * step, behavior });
  };

  prevBtn.addEventListener('click', () => scrollByCard(-1));
  nextBtn.addEventListener('click', () => scrollByCard(1));
  carousel.addEventListener('scroll', updateButtons, { passive: true });
  window.addEventListener('resize', updateButtons, { passive: true });
  updateButtons();
}

/**
 * Applique une parallaxe légère sur les couches du collage Hero sur ordinateur (`>= 1024px`).
 *
 * @returns {void}
 */
export function initHeroParallax() {
  const hero = document.getElementById('hero');
  const layers = hero?.querySelectorAll('.hero-parallax-layer[data-parallax]');
  if (!hero || !layers?.length) return;

  const desktopHoverQuery =
    typeof window.matchMedia === 'function'
      ? window.matchMedia('(min-width: 1024px) and (hover: hover)')
      : null;

  let rafId = 0;
  let targetX = 0;
  let targetY = 0;

  const resetLayers = () => {
    if (rafId) {
      window.cancelAnimationFrame(rafId);
      rafId = 0;
    }
    layers.forEach((layer) => {
      layer.style.setProperty('--px', '0px');
      layer.style.setProperty('--py', '0px');
    });
  };

  const applyLayers = () => {
    rafId = 0;
    if (isReducedMotionPreferred() || (desktopHoverQuery && !desktopHoverQuery.matches)) {
      resetLayers();
      return;
    }

    layers.forEach((layer) => {
      const factor = Number(layer.getAttribute('data-parallax')) || 0;
      const px = (targetX * 6 * factor).toFixed(2);
      const py = (targetY * 6 * factor).toFixed(2);
      layer.style.setProperty('--px', `${px}px`);
      layer.style.setProperty('--py', `${py}px`);
    });
  };

  hero.addEventListener('pointermove', (event) => {
    if (isReducedMotionPreferred() || event.pointerType === 'touch') return;
    if (desktopHoverQuery && !desktopHoverQuery.matches) return;

    const rect = hero.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const normX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const normY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    targetX = Math.max(-1, Math.min(1, normX));
    targetY = Math.max(-1, Math.min(1, normY));

    if (!rafId) {
      rafId = window.requestAnimationFrame(applyLayers);
    }
  });

  hero.addEventListener('pointerleave', resetLayers);
  window.addEventListener(
    'resize',
    () => {
      if (desktopHoverQuery && !desktopHoverQuery.matches) {
        resetLayers();
      }
    },
    { passive: true },
  );

  onAccessibilityChange((state) => {
    if (state.reducedMotion) resetLayers();
  });
}

/**
 * Applique un léger basculement 3D inversé au survol de l'aperçu mobile dans le Hero
 * (survoler le coin haut-droit fait reculer ce coin et avancer le bas-gauche).
 *
 * @returns {void}
 */
export function initPhoneTilt() {
  const phoneSlot = document.querySelector('#hero [data-phone-tilt]');
  const phoneCard = phoneSlot?.querySelector('.hero-collage__phone-card') || phoneSlot;
  if (!phoneSlot || !phoneCard) return;

  const hoverFineQuery =
    typeof window.matchMedia === 'function'
      ? window.matchMedia('(hover: hover) and (pointer: fine)')
      : null;

  const MAX_TILT_X = 4.5;
  const MAX_TILT_Y = 6;
  let rafId = 0;
  let nextRx = 0;
  let nextRy = 0;

  const resetTilt = () => {
    if (rafId) {
      window.cancelAnimationFrame(rafId);
      rafId = 0;
    }
    phoneCard.style.setProperty('--rx', '0deg');
    phoneCard.style.setProperty('--ry', '0deg');
  };

  const applyTilt = () => {
    rafId = 0;
    if (isReducedMotionPreferred() || (hoverFineQuery && !hoverFineQuery.matches)) {
      resetTilt();
      return;
    }

    phoneCard.style.setProperty('--rx', `${nextRx.toFixed(2)}deg`);
    phoneCard.style.setProperty('--ry', `${nextRy.toFixed(2)}deg`);
  };

  phoneSlot.addEventListener('pointermove', (event) => {
    if (isReducedMotionPreferred() || event.pointerType === 'touch') return;
    if (hoverFineQuery && !hoverFineQuery.matches) return;

    const rect = phoneSlot.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const nx = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2));
    const ny = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2));

    nextRx = -ny * MAX_TILT_X;
    nextRy = nx * MAX_TILT_Y;

    if (!rafId) {
      rafId = window.requestAnimationFrame(applyTilt);
    }
  });

  phoneSlot.addEventListener('pointerleave', resetTilt);
  phoneSlot.addEventListener('pointercancel', resetTilt);

  if (hoverFineQuery && typeof hoverFineQuery.addEventListener === 'function') {
    hoverFineQuery.addEventListener('change', (event) => {
      if (!event.matches) resetTilt();
    });
  }

  window.addEventListener(
    'resize',
    () => {
      if (hoverFineQuery && !hoverFineQuery.matches) {
        resetTilt();
      }
    },
    { passive: true },
  );

  onAccessibilityChange((state) => {
    if (state.reducedMotion) resetTilt();
  });
}

/**
 * Synchronise l'affichage de la barre d'action flottante mobile (`#mobile-sticky-cta`)
 * entre la sortie de `#hero` et l'arrivée sur `#inscription`.
 *
 * @returns {void}
 */
export function initMobileStickyCta() {
  const stickyCta = document.getElementById('mobile-sticky-cta');
  const heroSection = document.getElementById('hero');
  const inscriptionSection = document.getElementById('inscription');

  if (!stickyCta || !heroSection || !inscriptionSection) return;

  if (!inscriptionSection.hasAttribute('tabindex')) {
    inscriptionSection.setAttribute('tabindex', '-1');
  }

  let rafPending = false;

  const syncStickyCta = () => {
    rafPending = false;
    const isMobile =
      typeof window.matchMedia === 'function'
        ? window.matchMedia('(max-width: 767px)').matches
        : window.innerWidth < 768;

    const heroRect = heroSection.getBoundingClientRect();
    const inscriptionRect = inscriptionSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const isPastHero = heroRect.bottom <= 0;
    const isInscriptionReachedOrPassed = inscriptionRect.top < viewportHeight;
    const shouldShow = isMobile && isPastHero && !isInscriptionReachedOrPassed;

    if (!shouldShow && stickyCta.contains(document.activeElement)) {
      inscriptionSection.focus({ preventScroll: true });
    }

    stickyCta.classList.toggle('is-visible', shouldShow);
    stickyCta.setAttribute('aria-hidden', String(!shouldShow));
    if ('inert' in stickyCta) {
      stickyCta.inert = !shouldShow;
    }
  };

  const scheduleStickySync = () => {
    if (rafPending) return;
    rafPending = true;
    window.requestAnimationFrame(syncStickyCta);
  };

  syncStickyCta();
  window.addEventListener('scroll', scheduleStickySync, { passive: true });
  window.addEventListener('resize', scheduleStickySync, { passive: true });

  if ('IntersectionObserver' in window) {
    const stickyObserver = new IntersectionObserver(scheduleStickySync, { threshold: 0 });
    stickyObserver.observe(heroSection);
    stickyObserver.observe(inscriptionSection);
  }
}
