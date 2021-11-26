"use strict";


/*****************
 * VARIABLES
 *****************/
let clic = document.querySelector("#toggle-rectangle").addEventListener("click", onClickButton);
let square = document.querySelector(".rectangle");

/*****************
 * FONCTIONS
 *****************/

function onClickButton (){
    let square = document.querySelector(".rectangle");
    square.classList.toggle("hide");
}

function onMouseOverRectangle(){
    let square = document.querySelector(".rectangle");
    square.classList.add("important");
}

function onMouseOutRectangle(){
    let square = document.querySelector(".rectangle");
    square.classList.remove("important", "good");
}

function onDoubleClickRectangle(){
    let square = document.querySelector(".rectangle");
    square.classList.add("good");
}


/*****************
 * CODE PRINCIPAL
 *****************/
square.addEventListener("mouseover", onMouseOverRectangle);
square.addEventListener("mouseout", onMouseOutRectangle);
square.addEventListener("dblclick", onDoubleClickRectangle);

