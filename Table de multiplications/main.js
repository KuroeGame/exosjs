"use strict";

//Variables :
let table = document.querySelector("#content").innerHTML;
let startTable ="<table><tbody>";
let size = 10;


for (let row = 1; row <= size; row++) {
    startTable += "<tr>";
  
    for (let column = 1; column <= size; column++) {
        if (row == column) {
            startTable += '<td class="same-number">';
        }else {
            startTable += "<td>";
        }
        startTable += row * column;
        startTable += "</td>";
    }
    startTable += "</tr>";
}
  

startTable += "</tbody></table>";

document.querySelector("#content").innerHTML = startTable;
