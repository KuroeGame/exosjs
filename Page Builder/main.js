"use strict";

/**
 * VARIABLES
**/
let content = document.querySelector('#content');
let html = document.querySelectorAll("button#h1, button#h2,button#h3, button#p, button#hr");
/**
 * FONCTIONS
**/

function generateHTML(){
    if (this.id == "hr") {
        content.innerHTML += `<${this.id}></${this.id}>`;
    } else {
        content.innerHTML += `<${this.id} contenteditable="true">Saisir un text</${this.id}>`;
    }
    
}

/**
 * CODE GENERALE
**/

html.forEach((button) => button.addEventListener("click", generateHTML));