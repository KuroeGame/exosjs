"use strict";

/*****************
 * VARIABLES
*****************/

let pictures = $("li");
let select = $("#selectAll").on("click", onClickSelectAll);
let unselect = $("#deselectAll").on("click", onClickUnselectAll);

/*****************
 * FONCTIONS
*****************/

function displayCount(){
    $("#total em").text($(".selected").length);
}

function onClickListItem(){
    $(this).toggleClass("selected");
    displayCount();
}

function onClickSelectAll(){
    pictures.addClass("selected");
    displayCount();
}

function onClickUnselectAll(){
    pictures.removeClass("selected");
    displayCount();
}

/*****************
 * CODE GENERALE
*****************/

pictures.click(onClickListItem); //reduction max du gestionnaire d'évènement