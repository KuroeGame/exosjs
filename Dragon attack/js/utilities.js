"use strict";

/**
 * 1.FONCTIONS
**/


function requestInteger(message, min, max){
    let nb;
    do {
        nb = parseInt(prompt(message));
    } while ( nb < min || nb > max || isNaN(nb));
    return nb;
}

function getRandomInteger(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}