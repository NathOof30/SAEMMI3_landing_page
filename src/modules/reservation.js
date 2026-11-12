import { RESERVATION_STORAGE_KEY, validateEmailField } from './validation.js';

/**
 * Génère un code de référence aléatoire pour une réservation de kit.
 *
 * @returns {string} Code au format `EXP-2027-XXXX`.
 */
function generateReservationCode() {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let suffix = '';

  if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
    const bytes = new Uint8Array(4);
    crypto.getRandomValues(bytes);
    bytes.forEach((byte) => {
      suffix += alphabet[byte % alphabet.length];
    });
  } else {
    suffix = String(Date.now()).slice(-4);
  }

  return `EXP-2027-${suffix}`;
}

/**
 * Initialise la validation, l'enregistrement temporaire en session et la confirmation du formulaire de réservation.
 *
 * @returns {void}
 */
export function initReservationForm() {
  const formPanel = document.getElementById('reservation-form-panel');
  const form = document.getElementById('kit-reservation-form');
  const errorEl = document.getElementById('reservation-error');
  const confirmationEl = document.getElementById('reservation-confirmation');
  const resetBtn = document.getElementById('reservation-reset-btn');

  if (!form || !confirmationEl) return;

  form.noValidate = true;

  const contactInput = document.getElementById('team-contact');
  const emailInput = document.getElementById('parent-email');
  const daySelect = document.getElementById('pickup-day');
  const slotSelect = document.getElementById('pickup-slot');
  const sizeSelect = document.getElementById('team-size');
  const consentCheckbox = document.getElementById('rgpd-consent');

  const outContact = document.getElementById('confirm-contact-name');
  const outEmail = document.getElementById('confirm-email');
  const outDay = document.getElementById('confirm-pickup-day');
  const outSlot = document.getElementById('confirm-pickup-slot');
  const outSize = document.getElementById('confirm-team-size');
  const outRef = document.getElementById('confirm-reference');

  const clearCustomErrors = () => {
    [contactInput, emailInput, daySelect, slotSelect, sizeSelect, consentCheckbox].forEach((field) => {
      if (field && typeof field.setCustomValidity === 'function') {
        field.setCustomValidity('');
      }
    });
    if (errorEl) {
      errorEl.hidden = true;
      errorEl.textContent = '';
    }
  };

  form.addEventListener('input', clearCustomErrors);
  form.addEventListener('change', clearCustomErrors);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearCustomErrors();

    const contactName = (contactInput?.value || '').trim();
    if (contactInput) {
      contactInput.value = contactName;
      if (contactName.length > 0 && contactName.length < 2) {
        contactInput.setCustomValidity(
          'Veuillez saisir votre prénom et nom ou un nom d\'équipe (au moins 2 caractères).',
        );
      }
    }

    const email = validateEmailField(emailInput);

    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector(':invalid');
      const message =
        firstInvalid?.validationMessage ||
        'Merci de vérifier les champs obligatoires avant de valider votre réservation.';

      if (errorEl) {
        errorEl.textContent = message;
        errorEl.hidden = false;
      }

      form.reportValidity();
      firstInvalid?.focus();
      return;
    }

    const pickupDayLabel = daySelect?.options[daySelect.selectedIndex]?.textContent?.trim() || '';
    const pickupSlotLabel = slotSelect?.options[slotSelect.selectedIndex]?.textContent?.trim() || '';
    const teamSizeLabel = sizeSelect?.options[sizeSelect.selectedIndex]?.textContent?.trim() || '';
    const reference = generateReservationCode();

    if (outContact) outContact.textContent = contactName;
    if (outEmail) outEmail.textContent = email;
    if (outDay) outDay.textContent = pickupDayLabel;
    if (outSlot) outSlot.textContent = pickupSlotLabel;
    if (outSize) outSize.textContent = teamSizeLabel;
    if (outRef) outRef.textContent = reference;

    try {
      window.sessionStorage.setItem(
        RESERVATION_STORAGE_KEY,
        JSON.stringify({
          contactName,
          email,
          pickupDay: pickupDayLabel,
          pickupSlot: pickupSlotLabel,
          teamSize: teamSizeLabel,
          reference,
        }),
      );
    } catch {
      // Ignorer si le stockage de session est restreint par le navigateur
    }

    if (formPanel) {
      formPanel.hidden = true;
    } else {
      form.hidden = true;
    }
    confirmationEl.hidden = false;
    confirmationEl.focus();
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      clearCustomErrors();
      confirmationEl.hidden = true;
      if (formPanel) {
        formPanel.hidden = false;
      } else {
        form.hidden = false;
      }
      contactInput?.focus();
    });
  }
}
