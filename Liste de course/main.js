"use strict";

/**
 * VARIBABLES
**/
let liste = new Array();
let choixUtilisateur;
let produit;


/**
 * FONCTIONS
**/
function display() {
  console.log(liste);
}

function addProduit(produit) {
  liste.push(produit);
}

function findAndRemoveProduit(produit) {
  if (liste.indexOf(produit) != -1) {
    liste.splice(liste.indexOf(produit), 1);
  } else {
    alert("Ce produit ne figure pas dans la liste !");
  }
}

function demandeUtilisateur() {
  do {
    choixUtilisateur = parseInt(
      prompt(
        "Saisir votre choix : 1 pour afficher, 2 pour ajouter, 3 pour supprimer, 4 pour quitter"
      )
    );
  } while (
    choixUtilisateur != 1 &&
    choixUtilisateur != 2 &&
    choixUtilisateur != 3 &&
    choixUtilisateur != 4
  );
  console.log("");
  // return choixUtilisateur;
}


/**
 * CODE GENERALE
**/

display();
do {
  demandeUtilisateur();
  switch (choixUtilisateur) {
    case 1:
      console.log("cas 1 : affichage de la liste");
      display();
      break;

    case 2:
      produit = prompt("Saisir le produit à ajouter").toLowerCase();
      addProduit(produit);
      console.log("cas 2 : ajout de " + produit);
      break;

    case 3:
      produit = prompt("Saisir le produit à supprimer").toLowerCase();
      findAndRemoveProduit(produit);
      console.log("cas 3 : suppression de " + produit);
      break;

    case 4:
      console.log("Au revoir");
      break;
  }
} while (choixUtilisateur != 4);