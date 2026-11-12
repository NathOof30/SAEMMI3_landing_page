import { isReducedMotionPreferred, onAccessibilityChange } from './accessibility.js';

/**
 * Active la progression interactive des fragments de la Clé Antique au défilement et au focus/survol.
 *
 * @returns {void}
 */
export function initKeyForge() {
  const stepTriggers = document.querySelectorAll('[data-forge-step]');
  const keyShards = document.querySelectorAll('[data-key-shard]');

  if (!stepTriggers.length || !keyShards.length) return;

  let highestForged = 0;

  const forgeUpTo = (upTo) => {
    const targetStep = Number(upTo) || 0;
    if (targetStep <= highestForged) return;
    highestForged = targetStep;

    keyShards.forEach((shard) => {
      const shardIndex = Number(shard.getAttribute('data-key-shard')) || 0;
      if (shardIndex <= highestForged) {
        shard.classList.add('is-forged');
        shard.setAttribute('data-forged', 'true');
      }
    });
  };

  if (isReducedMotionPreferred() || !('IntersectionObserver' in window)) {
    forgeUpTo(keyShards.length);
    return;
  }

  const forgeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          forgeUpTo(entry.target.getAttribute('data-forge-step'));
          forgeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.35 },
  );

  stepTriggers.forEach((trigger) => {
    forgeObserver.observe(trigger);

    trigger.addEventListener('pointerenter', (event) => {
      if (event.pointerType !== 'touch') {
        forgeUpTo(trigger.getAttribute('data-forge-step'));
      }
    });

    trigger.addEventListener('focusin', () => {
      forgeUpTo(trigger.getAttribute('data-forge-step'));
    });

    trigger.addEventListener('click', () => {
      forgeUpTo(trigger.getAttribute('data-forge-step'));
    });

    trigger.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        forgeUpTo(trigger.getAttribute('data-forge-step'));
      }
    });
  });

  onAccessibilityChange((state) => {
    if (state.reducedMotion) {
      forgeObserver.disconnect();
      forgeUpTo(keyShards.length);
    }
  });
}
