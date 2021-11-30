"use strict";

/**
 * VARIABLES
**/
let content = document.querySelector('#content');
let html = document.querySelectorAll("button:not(#export)");
let popup = document.querySelector("#popup");
popup.addEventListener("dblclick", hidePopup);
/**
 * FONCTIONS
**/

function generateHTML(){
    if (this.id == "hr") {
        content.insertAdjacentHTML("beforeend", `<hr>`);
    } else {
        switch(this.id){
            case "h1":
                content.insertAdjacentHTML("beforeend", `<${this.id} contenteditable="true">Saisir un Titre 1</${this.id}>`);
                break;
            case "h2":
                content.insertAdjacentHTML("beforeend", `<${this.id} contenteditable="true">Saisir un Titre 2</${this.id}>`);
                break;
            case "h3":
                content.insertAdjacentHTML("beforeend", `<${this.id} contenteditable="true">Saisir un Titre 3</${this.id}>`);
                break;
            case "p":
                content.insertAdjacentHTML("beforeend", `<${this.id} contenteditable="true">Saisir un paragraphe</${this.id}>`);
                break;
        }
    }
}

function exportationHTML(){
    let exportation = content.innerHTML.replace(/ contenteditable="true"/g, "");
    let div = document.createElement("div");
    div.textContent = exportation;
    popup.innerHTML = "";
    popup.appendChild(div);
    popup.classList.remove("hide");
}

function hidePopup() {
    popup.classList.add("hide");
}  

/**
 * CODE GENERALE
**/

html.forEach((button) => button.addEventListener("click", generateHTML));
document.querySelector("#export").addEventListener("click", exportationHTML);