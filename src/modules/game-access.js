import { readStoredReservation, validateEmailField } from './validation.js';

/**
 * Initialise la page d'accès au jeu : rappel de réservation en session et vérification d'e-mail.
 *
 * @returns {void}
 */
export function initGameAccessPage() {
  const sessionBanner = document.getElementById('session-reservation-banner');
  const sessionSummary = document.getElementById('session-reservation-summary');
  const lookupForm = document.getElementById('game-access-lookup-form');
  const lookupEmail = document.getElementById('access-email');
  const lookupStatus = document.getElementById('game-access-status');

  const saved = readStoredReservation();

  if (sessionBanner && sessionSummary && saved) {
    sessionSummary.textContent =
      `Réservation enregistrée (${saved.reference}) pour ${saved.contactName}, retrait prévu le ${saved.pickupDay} (${saved.pickupSlot}), e-mail associé : ${saved.email}.`;
    sessionBanner.hidden = false;
  }

  if (lookupForm && lookupEmail && lookupStatus) {
    lookupForm.noValidate = true;

    lookupEmail.addEventListener('input', () => {
      lookupEmail.setCustomValidity('');
      lookupStatus.hidden = true;
      lookupStatus.textContent = '';
    });

    lookupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = validateEmailField(lookupEmail);

      if (!lookupForm.checkValidity()) {
        lookupStatus.textContent =
          lookupEmail.validationMessage || 'Veuillez saisir une adresse e-mail complète.';
        lookupStatus.hidden = false;
        lookupForm.reportValidity();
        lookupEmail.focus();
        return;
      }

      const currentSaved = readStoredReservation();
      if (currentSaved && currentSaved.email.toLowerCase() === email.toLowerCase()) {
        lookupStatus.textContent =
          `Réservation confirmée sur cet appareil (${currentSaved.reference}) pour ${currentSaved.contactName} : retrait du kit prévu le ${currentSaved.pickupDay} (${currentSaved.pickupSlot}). Votre lien d'accès à l'application sera envoyé à ${currentSaved.email} dès le lancement le 5 juillet 2027 à 10h00.`;
      } else {
        lookupStatus.textContent =
          `Si l'adresse ${email} est associée à une réservation de kit, votre lien d'accès personnel à l'application sera envoyé automatiquement à l'ouverture de l'événement à partir du 5 juillet 2027 à 10h00. Vous disposez déjà du kit papier ? Scannez directement le QR code imprimé sur la carte d'explorateur dès le jour du lancement.`;
      }

      lookupStatus.hidden = false;
      lookupStatus.focus();
    });
  }
}
