"use strict";

//déclaration des var
const TAUX_TVA = 20;

let montantTVA;
let montantTTC;
let montantHT;

//affectation de valeur
montantHT = parseFloat(prompt("Veuillez saisir un montant HT", ""));
console.log(montantHT);

//calcul montant TVA
montantTVA = (montantHT * TAUX_TVA) / 100;

//calcul montant TTC : HT + TVA
montantTTC = montantHT + montantTVA;

//cibler la balise HTML
document.querySelector("#content");
const DIV = document.querySelector("#content");
let content = DIV.innerHTML;
DIV.innerHTML = `<p>Pour un montant HT de ${montantHT} € il y a ${montantTVA} € de TVA.</p>
<p>Le montant TTC est donc de ${montantTTC} €</p>`;
