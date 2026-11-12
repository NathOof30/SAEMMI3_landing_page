import { initGameAccessPage } from './modules/game-access.js';
import {
  initFaqAccordion,
  initHeroParallax,
  initMobileStickyCta,
  initMysteryStage,
  initPhoneTilt,
  initScrollReveal,
} from './modules/interactions.js';
import { initKeyForge } from './modules/key-forge.js';
import { initReservationForm } from './modules/reservation.js';

/**
 * Initialise l'ensemble des modules interactifs présents sur la page courante.
 *
 * @returns {void}
 */
function bootstrap() {
  initScrollReveal();
  initKeyForge();
  initMysteryStage();
  initFaqAccordion();
  initHeroParallax();
  initPhoneTilt();
  initMobileStickyCta();
  initReservationForm();
  initGameAccessPage();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
