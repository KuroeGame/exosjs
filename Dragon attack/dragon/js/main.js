"use strict";

/*****************
 * VARIABLES
 *****************/
let game = new Object();

/*****************
 * FONCTIONS
 *****************/

/**
 * Détermine les valeurs qui composent le jeu : niveau, épée, armure
 */
function initializeGame() {
  game.round = 1;

  game.difficulty = requestInteger(
    "Choisir la difficulté ? \n 1- Facile 2- Moyen 3-Difficile",
    1,
    3
  );

  switch (game.difficulty) {
    case 1:
      game.hpDragon = getRandomInteger(150, 200);
      game.hpKnight = getRandomInteger(200, 250);
      break;
    case 2:
      game.hpDragon = getRandomInteger(200, 250);
      game.hpKnight = getRandomInteger(200, 250);
      break;
    case 3:
      game.hpDragon = getRandomInteger(200, 250);
      game.hpKnight = getRandomInteger(150, 200);
      break;
  }

  game.armor = requestInteger(
    "Choisir l'armure ? \n 1- cuivre 2- fer 3-magique",
    1,
    3
  );
  switch (game.armor) {
    case 1:
      game.armorRatio = 1;
      break;
    case 2:
      game.armorRatio = 0.75;
      break;
    case 3:
      game.armorRatio = 0.5;
      break;
  }

  game.sword = requestInteger(
    "Choisir l'épée ? \n 1- bois 2- acier 3-Excalibur",
    1,
    3
  );
  switch (game.sword) {
    case 1:
      game.swordRatio = 0.5;
      break;
    case 2:
      game.swordRatio = 1;
      break;
    case 3:
      game.swordRatio = 1.5;
      break;
  }

  DIV.innerHTML = "<h3>Points de vie de départ</h3>";
  displayHp();
}

/**
 * Calcule les points de dégats infligés par le dragon au chevalier, impactés par l'armure
 * @returns points de dégats
 */
function computeDragonDamagePoint() {
  let damage;
  if (game.difficulty === 1) {
    damage = getRandomInteger(10, 20);
  } else {
    damage = getRandomInteger(20, 30);
  }
  return Math.floor(damage * game.armorRatio);
}

/**
 * Calcule les points de dégats infligés par le chevalier au dragon, impactés par l'épée
 * @returns points de dégats
 */
function computeKnightDamagePoint() {
  let damage;
  switch (game.difficulty) {
    case 1:
      damage = getRandomInteger(25, 30);
      break;
    case 2:
      damage = getRandomInteger(15, 20);
      break;
    case 2:
      damage = getRandomInteger(5, 10);
      break;
  }
  return Math.floor(damage * game.swordRatio);
}

/**
 * Combat tour à tour
 */
function gameLoop() {
  let damage;
  //combat tour à tour
  while (game.hpKnight > 0 && game.hpDragon > 0) {
    DIV.innerHTML += `<h3>==== TOUR n°${game.round} ====</h3>`;
    let vitesse = getRandomInteger(1, 2);
    if (vitesse == 1) {
      damage = computeDragonDamagePoint();
      game.hpKnight -= damage;
      if (game.hpKnight < 0) game.hpKnight = 0;
      DIV.innerHTML +=
        "<p>dragon attaque, il vous retire " + damage + "PV.</p>";
    } else {
      damage = computeKnightDamagePoint();
      game.hpDragon -= damage;
      if (game.hpDragon < 0) game.hpDragon = 0;
      DIV.innerHTML +=
        "<p>chevalier attaque, il  retire " + damage + "PV au dragon.</p>";
    }
    displayHp();
    game.round++;
  }
}

/**
 * Affiche le tableau des PV
 */
function displayHp() {
  DIV.innerHTML += `
    <table>
            <thead>
                <th>Personnage</th>
                <th>PV</th>
            </thead>
            <tbody>
                <tr>
                    <td>Chevalier</td>
                    <td>${game.hpKnight}</td>
                </tr>
                <tr>
                    <td>Dragon</td>
                    <td>${game.hpDragon}</td>
                </tr>
            </tbody>
        </table>
  `;
}

/**
 * Affiche le gagnant
 */
function showWinner() {
  if (game.hpDragon > 0) {
    DIV.insertAdjacentHTML(
      "afterbegin",
      `<article>
            <img src="img/dragon.png" alt="">
            <h2>Le dragon vous a carbonnisé</h2>
            <p>Il lui restait ${game.hpDragon}PV.</p>
        </article>`
    );
  } else {
    DIV.insertAdjacentHTML(
      "afterbegin",
      `<article>
            <img src="img/knight.png" alt="">
            <h2>Vous avez vaincu le dragon</h2>
            <p>Il vous restait ${game.hpKnight}PV.</p>
        </article>`
    );
  }
}

/**
 * Lance l'appel à toutes les fonctions du jeu
 */
function startGame() {
  initializeGame();
  gameLoop();
  showWinner();
}

function displayHideWinner() {
  let article = document.querySelector("#game article");
  //méthode manuelle
  // if (article.classList.contains("hide")) {
  //   article.classList.remove("hide");
  // } else {
  //   article.classList.add("hide");
  // }
  //méthode automatique
  article.classList.toggle("hide");
}

/*****************
 * CODE PRINCIPAL
 *****************/
let DIV = document.querySelector("#game");

document.querySelector("#go").addEventListener("click", startGame);

document
  .querySelector("#toggleWinner")
  .addEventListener("click", displayHideWinner);
