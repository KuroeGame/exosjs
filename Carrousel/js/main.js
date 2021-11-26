"use strict";

/**************************
    * VARIABLES
***************************/
let slides = [
    {
        src: "1.jpg",
        legend: "Frères pandas",
    },{
        src: "2.jpg",
        legend: "Zen",
    },{
        src: "3.jpg",
        legend: "Coucher de soleil",
    },{
        src: "4.jpg",
        legend: "Ciel nocturne",
    },{
        src: "5.jpg",
        legend: "Salon de thé",
    },{
        src: "6.jpg",
        legend: "Tiramisu",
    }
]
let toolbar = document.querySelector(".toolbar a").addEventListener("click", changeArrow);
let sliderNext = document.querySelector("#slider-next").addEventListener("click", next);
let sliderPrevious = document.querySelector("#slider-previous").addEventListener("click", previous);
let sliderRandom = document.querySelector("#slider-random").addEventListener("click", random);
let sliderToggle = document.querySelector("#slider-toggle").addEventListener("click", toggle);
const state = {
    index: 0,
    timer: null
};
let id;
/**************************
    * FONCTIONS
**************************/

function changeArrow(){
    document.querySelector("#toolbar-toggle i").classList.toggle("fa-rotate-90");
    document.querySelector(".toolbar ul").classList.toggle("hide");
    /**let icon = document.querySelector("#toolbar-toggle i")
     * icon.classList.toggle("fa-arrow-right");
     * icon.classList.toggle("fa-arrow-down");
    **/
}

//permet d'afficher la photo en cours de visionnage 
function resfreshSlider(){
    document.querySelector("#slider img").src = "images/" + slides[state.index].src;
    document.querySelector("#slider figcaption").textContent = slides[state.index].legend;
  /**ou
    document
        .querySelector("#slider img")
        .setAttribute("src", "cheminfichier.jpg");
    **/
}

function next(){
    state.index++;
    if(state.index == slides.length) state.index = 0;
    resfreshSlider();
}

function previous(){
    state.index--;
    if(state.index == 0-1) state.index = slides.length-1;
    resfreshSlider();
}

function random(){
    let random = getRandomInteger(0, slides.length-1);
    while(state.index == random) random = getRandomInteger(0, slides.length-1);
    state.index = random;
    resfreshSlider();
}


function toggle(){
    if (state.timer == null) {
        state.timer = "play";
        id = setInterval(next, 2000);
    } else {
        clearInterval(id);
        state.timer = null;
    }
    document.querySelector("#slider-toggle i").classList.toggle("fa-play");
    document.querySelector("#slider-toggle i").classList.toggle("fa-stop");
}

/**************************
    * CODE PRINCIPALE
**************************/

resfreshSlider();





