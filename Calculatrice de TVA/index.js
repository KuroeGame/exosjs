"use strict";

//déclaration des var
let TAUX_TVA = 20;
let aRemise;
let remise = 0;
let montantTVA;
let montantTTC;
let montantHT;

//affectation de valeur

do {
    montantHT = parseFloat(window.prompt("Veuillez saisir un montant HT"));
} while (isNaN(montantHT));
    


aRemise = prompt("Avez vous une remise ?");


if (aRemise === "yes" || aRemise === "oui") {
    do {
        remise = parseInt(prompt("Quel est le % de la remise ?"));
    } while (isNaN(remise));
    
    montantHT = montantHT - ((remise*montantHT)/100);
}

//calcul montant TVA
montantTVA = (montantHT * TAUX_TVA) / 100;

//calcul montant TTC : HT + TVA
montantTTC = montantHT + montantTVA;

//cibler la balise HTML
const DIV = document.querySelector("#content");
DIV.innerHTML = `<p>Pour un montant HT de ${montantHT} € il y a ${montantTVA} € de TVA.</p>
<p>Le montant TTC est donc de ${montantTTC} €</p>`;

if (aRemise === "yes" || aRemise === "oui") {
    DIV.innerHTML = DIV.innerHTML + `<p>Une remise de ${remise} % à était appliquée</p>`;
} else {
    DIV.innerHTML = DIV.innerHTML + `<p>Aucune remise n'a etait appliquée</p>`;
}

