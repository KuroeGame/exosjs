"use strict";

/*********************
 * FONCTIONS
 ********************/
function displayName() {
  let name = document.querySelector("#firstname").value.trim();
  fetch(`https://api.agify.io?name=${name}`)
    .then((response) => response.json())
    .then((datas) => {
      document.querySelector("article").classList.remove("hide");
      document.querySelector(
        "article h2"
      ).innerHTML = `D'après Agify, avec le prénom ${name}, tu as ${datas.age} ans.`;
      document.querySelector("article strong").innerHTML = `${datas.count}`;
    })
    .catch((error) => alert("Erreur : " + error));
}

/*******************
 * CODE GENERAL
 *******************/
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#submit").addEventListener("click", displayName);
});
