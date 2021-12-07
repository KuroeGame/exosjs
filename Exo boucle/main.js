'use strict';   // Mode strict du JavaScript

let tab = [
    {
        prenom : "Toto",
        age : 12
    },
    {
        prenom : "Lucette",
        age : 14
    },
    {
        prenom : "Antoinette",
        age : 13
    },
    {
        prenom : "Gribouille",
        age : 13
    }
];

// Boucle while = la moins adaptée ici
document.write("<h2>Avec un compteur et un while</h2>");
let cpt = 0; //le while n'intègre pas de compteur comme le for, il faut donc le gérer manuellement
while (cpt < tab.length){
    document.write("Prénom : " + tab[cpt].prenom + " | Age : " + tab[cpt].age + " ans<br>");
    cpt++;
}

// Boucle for classique
document.write("<h2>Avec un for classique</h2>");
for(let i = 0; i < tab.length; i++){
    document.write("Prénom : " + tab[i].prenom + " | Age : " + tab[i].age + " ans<br>");
}

// Boucle for of
document.write("<h2>Avec un for...of</h2>");
for(let item of tab){
    document.write("Prénom : " + item.prenom + " | Age : " + item.age + " ans<br>");
}

//la variable item contient la ligne du tableau de l'itération en cours.

// Boucle foreach
document.write("<h2>Avec un foreach</h2>");
tab.forEach(function(item){
    document.write("Prénom : " + item.prenom + " | Age : " + item.age + " ans<br>");
});