"use strict";
//Fichier du Cloé Dufau-Sansot 👩🏻

/********************
 * VARIABLE(S)
 ********************/
let menu = [
  "Pâtes carbonara",
  "Soupe au pistou",
  "Steak frites",
  "Entrecote frites",
  "Salade César",
  "Pizza 4 fromages",
  "Poutargue",
  "Porc caramel",
  "Sushis",
  "Couscous",
];

/********************
 * FONCTIONS
 ********************/

//Affichage de la liste de plats dans un ul créé
function displayMeals() {
  //Création de la liste de plats qui sont dans le menu
  let contentMenu = "<ul>";
  menu.forEach((dish) => {
    contentMenu += `<li><a>${dish}</a></li>`;
  });
  contentMenu += "</ul>";

  //Affichage du menu avec insertion du nombre de plats au menu
  document.querySelector(
    "#meals"
  ).innerHTML = `<h3>Le menu contient ${menu.length} plat(s).</h3>${contentMenu}`;
  document.querySelector("form").reset();
}

//Ajout d'un plat par l'utilisateur
function addDish() {
  //Récupération de la valeur insérée par l'utilisateur
  let newDish = document.querySelector("#prompt").value;
  let sameDish = "false";
  //Parcours du tableau pour vérifier si le plat existe déjà ou non
  menu.forEach((dish) => {
    if (dish.toLowerCase() == newDish.toLowerCase()) {
      sameDish = "true";
    }
  });
  /**
   * Alertes signalant si l'utilisateur à renseigné ou non un plat et si celui ci existe ou non
   * Si le plat n'exite pas déjà on l'ajoute à la liste et on actualise celle ci
   */
  if (newDish == "") {
    alert(`Vous n'avez rien saisie 😱`);
  } else if (sameDish == "true") {
    alert(`Ce plat est deja dans la liste ! Veuillez saisir un autre plat 🤬`);
  } else {
    alert(`Votre plat : "${newDish}" à était ajouté à la liste 🥳`);
    menu.push(newDish);
    displayMeals();
  }
}

/********************
 * CODE GENERALE
 ********************/
//Le js se déclanche une fois la page HTML chargée et appel la fonction qui affiche le menu
document.addEventListener("DOMContentLoaded", function () {
  displayMeals();
  //Au clic sur le boutton "Ajouter" on appel la focntion qui ajoute un plat
  document.querySelector("#submit").addEventListener("click", addDish);
});
