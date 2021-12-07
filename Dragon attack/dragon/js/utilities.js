"use strict";

/**
 * Demande à lutilisateur de saisir un nombre
 * @param {string} message
 * @param {number} min
 * @param {number} max
 * @returns {number} nombre saisi
 */
function requestInteger(message, min, max) {
  let nb;
  do {
    nb = parseInt(prompt(message, 1));
  } while (isNaN(nb) || nb < min || nb > max);
  return nb;
}

/**
 * Retourne un nombre entier aléatoire compris entre un minimum et un maximum
 * @param {number} min
 * @param {number} max
 * @returns nombre aléatoire
 */
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
