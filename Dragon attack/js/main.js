"use strict";

/**
 * 1.VARIBABLES
**/
let game = new Object();
let DIV = document.querySelector("#game");
let content;

/**
 * 2.FONCTIONS
**/

function initializeGame(){
    game.round = 1;
    game.difficulty = requestInteger("Niveau de difficulté ? \n 1.Facile - 2.Moyen - 3.Difficile", 1, 3);
    switch(game.difficulty){
    case 1:
        game.hpDragon = getRandomInteger(150, 200);
        game.hpPlayer = getRandomInteger(200, 250);
        break;
    case 2:
        game.hpDragon = getRandomInteger(200, 250);
        game.hpPlayer = getRandomInteger(200, 250);
        break;
    case 3:
        game.hpDragon = getRandomInteger(200, 250);
        game.hpPlayer = getRandomInteger(150, 200);
        break;
    default:
        break;
    };
    game.sword = requestInteger("Epée ? \n 1.Bois - 2.Acier - 3.Excalibur", 1, 3);
    switch(game.sword){
        case 1:
            game.swordRatio = 0.5;
            break;
        case 2:
            game.swordRatio = 1;
            break;
        case 3:
            game.swordRatio = 1.5;
            break;
        default:
            break;
    }
    game.shield = requestInteger("Armure ? \n 1.Cuir - 2.Fer - 3.Magique", 1, 3);
    switch(game.shield){
	case 1:
		game.armorRatio = 1;
		break;
	case 2:
		game.armorRatio = 0.75;
		break;
	case 3:
		game.armorRatio = 0.5;
		break;
	default:
		break;
    }
    DIV.innerHTML = "<h3>Points de vie de départ</h3>";
    displayHp();
}

function computeDragonDamagePoint(){
    let damage;
    if(game.difficulty == 1){
        damage = getRandomInteger(10, 20);
    }else{
        damage = getRandomInteger(20, 30);
    }
    
    return Math.floor(damage * game.armorRatio);
    
}

function computePlayerDamagePoint(){
    let damage;
    switch(game.difficulty){
        case 1:
            damage = getRandomInteger(25, 30);
            break;
        case 2:
            damage = getRandomInteger(15, 20);
            break;
        case 3:
            damage = getRandomInteger(5, 10);
            break;
        default:
            break;
    }
    return parseInt(nb*game.swordRatio);
}

function gameLoop(){
    let damage;
    while(game.hpPlayer > 0 && game.hpDragon > 0){
        DIV.innerHTML += `<h3>==== TOUR n°${game.round} ====</h3>`;
        let speed = getRandomInteger(1, 2);
        if(speed == 1){
            damage = computeDragonDamagePoint();
            game.hpPlayer -= damage;
            if (game.hpKnight < 0) game.hpKnight = 0;
                DIV.innerHTML += "<p>dragon attaque, il vous retire " + damage + "PV.</p>";
        }else{
            damage = computeDragonDamagePoint();
            game.hpDragon -= damage;
            if (game.hpDragon < 0) game.hpDragon = 0;
                DIV.innerHTML += "<p>chevalier attaque, il  retire " + damage + "PV au dragon.</p>";
        }
        displayHp();
        game.round++;
    }
    
}


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

/**
 * 3.CODE PRINCIPAL
**/

document.querySelector("#go").addEventListener("click", startGame);

document
  .querySelector("#toggleWinner")
  .addEventListener("click", displayHideWinner);





