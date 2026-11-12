/**
 * Clé de stockage dans `sessionStorage` pour conserver la réservation courante.
 *
 * @type {string}
 */
export const RESERVATION_STORAGE_KEY = 'expeditionLensReservation';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[^\s@.]{2,}$/;

/**
 * Nettoie et valide un champ e-mail contre les erreurs de format et de domaine malformé.
 *
 * @param {HTMLInputElement | null | undefined} emailInput Élément de saisie e-mail à contrôler.
 * @returns {string} Adresse e-mail nettoyée, ou chaîne vide si le champ est absent ou vide.
 */
export function validateEmailField(emailInput) {
  if (!emailInput) return '';

  const email = (emailInput.value || '').trim();
  emailInput.value = email;
  emailInput.setCustomValidity('');

  if (!email) {
    return '';
  }

  if (emailInput.validity.typeMismatch || !EMAIL_PATTERN.test(email)) {
    emailInput.setCustomValidity(
      'Veuillez saisir une adresse e-mail complète (ex. prenom.nom@exemple.fr).',
    );
  }

  return email;
}

/**
 * Lit et vérifie les données de réservation stockées dans `sessionStorage`.
 *
 * @returns {{ reference: string, contactName: string, email: string, pickupDay: string, pickupSlot: string, teamSize?: string } | null} Réservation valide ou `null`.
 */
export function readStoredReservation() {
  try {
    const raw = window.sessionStorage.getItem(RESERVATION_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (
      parsed &&
      typeof parsed.reference === 'string' &&
      typeof parsed.contactName === 'string' &&
      typeof parsed.email === 'string' &&
      typeof parsed.pickupDay === 'string' &&
      typeof parsed.pickupSlot === 'string' &&
      parsed.reference &&
      parsed.contactName &&
      parsed.email &&
      parsed.pickupDay &&
      parsed.pickupSlot
    ) {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

