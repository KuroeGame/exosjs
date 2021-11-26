"use strict";

/*****************
 * VARIABLES
*****************/

let pictures = document.querySelectorAll("li");
let select = document.querySelector("#selectAll").addEventListener("click", onClickSelectAll);
let unselect = document.querySelector("#deselectAll").addEventListener("click", onClickUnselectAll);


/*****************
 * FONCTIONS
*****************/

function onClickListItem(){
    this.classList.toggle("selected");
    countPictureSelected();
}

function onClickSelectAll(){
    let pictures = document.querySelectorAll("li");
    pictures.forEach((li) => li.classList.add("selected"));
    countPictureSelected();
}

function onClickUnselectAll(){
    let pictures = document.querySelectorAll("li");
    pictures.forEach((li) => li.classList.remove("selected"));
    countPictureSelected();
}

function countPictureSelected(){
    let text = document.querySelector("#total em");
    let count = 0;
    for(let picture of pictures){
        if(picture.classList.contains("selected")){
            count += 1;
        }
    }text.innerHTML = `${count}`;
}

/*****************
 * CODE GENERALE
*****************/

pictures.forEach((picture) => picture.addEventListener("click", onClickListItem));