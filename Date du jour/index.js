"use strict";

let weekDays = [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
]

let month = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
]

let today = new Date();

let monthIndex = today.getMonth();
let year = today.getFullYear();
let dayIndex = today.getDay();
let date = today.getDate();
let hour = today.getHours();
let min = today.getMinutes();

document.querySelector("#content");
const DIV = document.querySelector("#content");
let content = DIV.innerHTML;
DIV.innerHTML = `<p>Nous sommes le ${weekDays[dayIndex]} ${date} ${month[monthIndex]} ${year}</p>
<p>à ${hour}h${min}</p>`;

let dateFR = today.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
});
document.querySelector("#content").innerHTML = `<p>Nous sommes le ${dateFR}</p>`;
