"use strict";

/*****************
 * VARIABLES
*****************/

let pictures = document.querySelectorAll("li");
let select = document.querySelector("#selectAll").addEventListener("click", onClickSelectAll);
let unselect = document.querySelector("#deselectAll").addEventListener("click", onClickUnselectAll);
let count = 0;


/*****************
 * FONCTIONS
*****************/

function displayCount(){
    let text = document.querySelector("#total em");
    text.innerHTML = `${count}`;
}

function onClickListItem(){
    this.classList.toggle("selected");
    if (this.classList.contains("selected")) {
        count++;
    } else {
        count--;
    }
    displayCount();
}

function onClickSelectAll(){
    pictures.forEach((li) => li.classList.add("selected"));
    count = pictures.length;
    displayCount();
}

function onClickUnselectAll(){
    pictures.forEach((li) => li.classList.remove("selected"));
    count = 0;
    displayCount();
}

/*****************
 * CODE GENERALE
*****************/

pictures.forEach((picture) => picture.addEventListener("click", onClickListItem));