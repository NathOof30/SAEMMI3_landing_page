/**
 * Indique si l'utilisateur demande la réduction des animations système.
 *
 * @returns {boolean} `true` si `prefers-reduced-motion: reduce` est actif.
 */
function prefersReducedMotion() {
  return (
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/**
 * Active l'apparition progressive au défilement des blocs `[data-reveal]`
 * sans jamais masquer le contenu si JavaScript ou IntersectionObserver est indisponible.
 *
 * @returns {void}
 */
export function initScrollReveal() {
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (!revealEls.length) return;

  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-revealed'));
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
        if (delay > 0) {
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
}

/**
 * Gère la scène Lot Mystère Switch : accélération des rayons et changement de silhouette
 * mystère au survol ou au focus des cartes de lots (jamais au survol direct de l'image).
 *
 * @returns {void}
 */
export function initMysteryStage() {
  const reducedMotion = prefersReducedMotion();
  const stages = document.querySelectorAll('.mystery-stage');
  const prizeList = document.querySelector('[data-prize-list]');
  const prizeTriggers = prizeList ? [...prizeList.querySelectorAll('[data-prize-trigger]')] : [];
  const prizeSvgs = [...document.querySelectorAll('[data-mystery-prize]')];
  const defaultPrize = 'grand-lot';

  if (!stages.length) return;

  const setStageSpeed = (stage, rate) => {
    if (reducedMotion) return;
    const starburst = stage.querySelector('.mystery-starburst-svg');
    const anim = starburst?.getAnimations?.()[0];
    if (anim && typeof anim.updatePlaybackRate === 'function') {
      anim.updatePlaybackRate(rate);
    }
  };

  const setActivePrize = (prizeId, previewing) => {
    const targetPrize = prizeId || defaultPrize;

    prizeSvgs.forEach((svg) => {
      const isMatch = svg.getAttribute('data-mystery-prize') === targetPrize;
      svg.classList.toggle('is-active', isMatch);
      svg.setAttribute('aria-hidden', String(!isMatch));
    });

    prizeTriggers.forEach((trigger) => {
      const isMatch = previewing && trigger.getAttribute('data-prize-trigger') === targetPrize;
      trigger.classList.toggle('is-selected', isMatch);
    });

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

    let activeTouchPrize = null;

    prizeTriggers.forEach((trigger) => {
      const prizeId = trigger.getAttribute('data-prize-trigger') || defaultPrize;

      trigger.addEventListener('pointerenter', (event) => {
        if (event.pointerType === 'touch') return;
        activeTouchPrize = null;
        setActivePrize(prizeId, true);
      });

      trigger.addEventListener('focusin', () => {
        setActivePrize(prizeId, true);
      });

      trigger.addEventListener('click', (event) => {
        const isTouchLike = event.pointerType === 'touch' || (hoverCapable && !hoverCapable.matches);
        if (!isTouchLike) return;

        if (activeTouchPrize === prizeId) {
          activeTouchPrize = null;
          setActivePrize(defaultPrize, false);
        } else {
          activeTouchPrize = prizeId;
          setActivePrize(prizeId, true);
        }
      });
    });

    prizeList.addEventListener('pointerleave', (event) => {
      if (event.pointerType === 'touch') return;
      activeTouchPrize = null;
      setActivePrize(defaultPrize, false);
    });

    prizeList.addEventListener('focusout', (event) => {
      if (!prizeList.contains(event.relatedTarget)) {
        setActivePrize(defaultPrize, false);
      }
    });
  }
}

/**
 * Anime en douceur l'ouverture et la fermeture des accordéons FAQ et disclosures (`.faq-details`).
 *
 * @returns {void}
 */
export function initFaqAccordion() {
  const detailsList = document.querySelectorAll('.faq-details');
  if (!detailsList.length || prefersReducedMotion()) return;

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
      animation = answer.animate(
        [
          { height: startHeight, opacity: startOpacity },
          { height: '0px', opacity: 0 },
        ],
        {
          duration: 240,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        },
      );

      animation.onfinish = () => finishAnimation(false);
      animation.oncancel = () => {
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

      animation = answer.animate(
        [
          { height: startHeight, opacity: startOpacity },
          { height: endHeight, opacity: 1 },
        ],
        {
          duration: 280,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        },
      );

      animation.onfinish = () => finishAnimation(true);
      animation.oncancel = () => {
        isExpanding = false;
      };
    };

    summary.addEventListener('click', (event) => {
      event.preventDefault();
      if (isClosing || !details.open) {
        expand();
      } else if (isExpanding || details.open) {
        shrink();
      }
    });
  });
}

/**
 * Applique une parallaxe légère sur les couches du collage Hero sur ordinateur (`>= 1024px`).
 *
 * @returns {void}
 */
export function initHeroParallax() {
  const hero = document.getElementById('hero');
  const layers = hero?.querySelectorAll('.hero-parallax-layer[data-parallax]');
  if (!hero || !layers?.length || prefersReducedMotion()) return;

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
    if (desktopHoverQuery && !desktopHoverQuery.matches) {
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
    if (event.pointerType === 'touch') return;
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
  if (!phoneSlot || !phoneCard || prefersReducedMotion()) return;

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
    if (hoverFineQuery && !hoverFineQuery.matches) {
      resetTilt();
      return;
    }

    phoneCard.style.setProperty('--rx', `${nextRx.toFixed(2)}deg`);
    phoneCard.style.setProperty('--ry', `${nextRy.toFixed(2)}deg`);
  };

  phoneSlot.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') return;
    if (hoverFineQuery && !hoverFineQuery.matches) return;

    const rect = phoneSlot.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const nx = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2));
    const ny = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2));

    // Inversé : survol haut-droit (nx > 0, ny < 0) => rotateX > 0, rotateY > 0 (haut-droit recule, bas-gauche avance)
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
