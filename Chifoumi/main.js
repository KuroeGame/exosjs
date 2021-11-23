"use strict";

//déclaration des var
let choix =  window.prompt("Que choisisez-vous : pierre, feuille ou ciseau ?");
let choixpc;

//affectation de valeur
choix = choix.toLowerCase();

switch(choix){
	case "pierre":
		console.log("pierre");
		break;
	case "feuille":
		console.log("feuille");
		break;
	case "ciseau":
		console.log("ciseau");
		break;
	default:
		console.log("Veuillez actualiser la page");
		break;
}

function getRandom() {
    return Math.random();
}

choixpc = Math.random()
console.log(choixpc);

if (choixpc < 0.33) {
    choixpc = "pierre";
} else if((choixpc > 0.33)||(choixpc < 0.66)){
    choixpc = "feuille";
}else if(choixpc > 0.66){
    choixpc = "ciseau";
}

const DIV = document.querySelector("#content");
DIV.innerHTML = `<ul>
                    <li><figure><img src="img/${choix}.png" width="100"><figcaption>Vous</figcaption></figure></li>
                    <li><figure><img src="img/${choixpc}.png" width="100"><figcaption>L'ordinateur</figcaption></figure></li>
                </ul>`;

if (choixpc === choix) {
    DIV.innerHTML = DIV.innerHTML + `<p>Egalité</p>`;
} else if((choix == "pierre")&&(choixpc == "feuille")){
    DIV.innerHTML = DIV.innerHTML + `<p>La feuille recouvre la pierre : vous perdez !</p>`;
}else if((choix == "pierre")&&(choixpc == "ciseau")){
    DIV.innerHTML = DIV.innerHTML + `<p>La pierre casse les ciseaux : vous gagnez !</p>`;
}else if((choix == "feuille")&&(choixpc == "pierre")){
    DIV.innerHTML = DIV.innerHTML + `<p>La feuille recouvre la pierre : vous gagnez !</p>`;
}else if((choix == "feuille")&&(choixpc == "ciseau")){
    DIV.innerHTML = DIV.innerHTML + `<p>Les ciseaux coupent la feuille: vous perdez !</p>`;
}else if((choix == "ciseau")&&(choixpc == "pierre")){
    DIV.innerHTML = DIV.innerHTML + `<p>La pierre casse les ciseaux : vous perdez !</p>`;
}else if((choix == "ciseau")&&(choixpc == "feuille")){
    DIV.innerHTML = DIV.innerHTML + `<p>Les ciseaux coupent la feuille: vous gagnez !</p>`;
}

