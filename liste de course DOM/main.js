"use strict";


/**************************
    * 1.VARIBABLES
**************************/
let list = []; //Liste contenant les produits
let popup;

/**************************
    * 2.FONCTIONS
**************************/
function addItems(item){
    list.push(item);
    displayList();
}

//Au clic "Ajouter" ajout de l'aliment ecris en valeur à la liste
function getValue(selector, fct){
    let item = document.querySelector(selector).value.toLowerCase();
    fct(item);
    document.querySelector("form").reset();
}

//Affichage de la liste dans un ul ciblé
function displayList(){
    let displayShopList = document.querySelector(".list");
    document.querySelector("h2").textContent = `La liste contient ${list.length} produit(s).`
    displayShopList.innerHTML = "";
    list.forEach((item) => {
        displayShopList.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
    });
}

//Suppression de la liste
function deleteList(){
    list = new Array();
    displayList();
}

//Ouvrir ou fermer la popup
function togglePopup(){
    popup.classList.toggle("hide");

}

//Supprime un item
function removeItems(item) {
    // Recherche de l'index de l'item cherché
    let index = list.indexOf(item);
  
    // Si pas d'item
    if (index == -1) {
      // Oui, affichage d'une erreur.
      alert(`ERREUR : le produit ${item} n'existe dans la liste de courses`);
      return;
    }
 
    // Si item : suppression du produit spécifié dans la liste de courses
    list.splice(index, 1);
    displayList();
    togglePopup();
}


/**************************
    * 2.CODE GENERALE
**************************/

document.addEventListener("DOMContentLoaded", function(){
    popup = document.querySelector("#popup");
    displayList();
    //Appel boutton "Vider"
    document.querySelector("#delete").addEventListener("click", deleteList);
    //Appel boutton "Supprimer 1 aliment"
    document.querySelector("#deleteOne").addEventListener("click", togglePopup); 
    //Appel boutton "X"
    document.querySelector("#popup span").addEventListener("click", togglePopup); 
    //gestionnaire d'événement au clic sur le bouton ajouter qui ajoute un item à la liste
    document.querySelector("#submit").addEventListener("click", function(){
        getValue("#toAdd", addItems);
    });
    //gestionnaire d'événement au clic sur le bouton supprimer 1 qui supprime un item de la liste
    document.querySelector("#btnDelete").addEventListener("click", function(){
        getValue("#toDelete", removeItems);
    });

});
