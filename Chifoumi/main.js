"use strict";

//déclaration des var
let choix;
let choixpc;
let message;

//affectation de valeur

do {
    choix = window.prompt("Que choisisez-vous : pierre, feuille ou ciseau ?").toLowerCase();
} while (
    choix != "pierre" &&
    choix != "feuille" &&
    choix != "ciseau"
);


function getRandom() {
    return Math.random();
}

choixpc = Math.random()
console.log(choixpc);

if (choixpc < 0.33) {
    choixpc = "pierre";
}else if((choixpc > 0.33)||(choixpc < 0.66)){
    choixpc = "feuille";
}else{
    choixpc = "ciseau";
}

const DIV = document.querySelector("#content");

if(choix === choixpc){
    message = "Il y a égalité !";
}else{
    switch(choix){
        case "pierre":
            if (choixpc === "feuille") {
                message = "La feuille recouvre la pierre : vous perdez !";
            } else {
                message = "La pierre casse les ciseaux : vous gagnez !";
            }
        break;
        case "feuille":
            if (choixpc === "ciseau") {
                message = "Les ciseaux coupent la feuille: vous perdez !";
            } else {
                message = "La feuille recouvre la pierre : vous gagnez !";
            }
        break;
        case "ciseau":
            if (choixpc === "pierre") {
                message = "La pierre casse les ciseaux : vous perdez !";
            } else {
                message = "Les ciseaux coupent la feuille: vous gagnez !";
            }
        break;
    }
}



DIV.innerHTML = `<ul>
                    <li>
                        <img src="img/${choix}.png" width="100">
                        <p>Vous</p>
                    </li>
                    <li>
                        <img src="img/${choixpc}.png" width="100">
                        <p>L'ordinateur</p>
                    </li>
                </ul>
                <p>${message}</p>`;