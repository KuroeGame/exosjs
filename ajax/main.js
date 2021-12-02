"use strict";

/**************************
 * FONCTIONS
 **************************/

/**
 * Affiche du HTML dans #target
 * @param {string} htmlDatas
 */
function displayHTML(htmlDatas) {
  $("#target").html(htmlDatas);
}

/**
 * Génère du HTML dans #target
 * @param {string} contacts
 */
function displayContact(contacts) {
  let html = "<ul>";
  contacts.forEach((contact) => {
    html += `<li>
                <strong>Prénom :</strong> ${contact.firstName}<br/>
                <i>Téléphone : ${contact.phone}</i>
            </li>`;
  });
  html += "</ul>";
  displayHTML(html);
}

/**
 * Génère du HTML dans #target
 * @param {string} films
 */
function displayFilm(films) {
  let html = "<ul class='movie-list'>";
  films.forEach((film) => {
    html += `<li>
                <img src="images/${film.cover}">
                <p>
                    <strong>${film.title}</strong> -
                    <em>${film.duration}</em>
                </p>
            </li>`;
  });
  html += "</ul>";
  displayHTML(html);
}

/**
 * Gestion du choix utilisateur
 */
function onClickExecute() {
  //récupérer la valeur de l'input coché
  let radio = $('input[name="what"]:checked').val();
  //en focntion de cette valeur, gérer les différents (appel AJAX)
  switch (radio) {
    case "1":
      $.get("data/1-get-html-article.html", displayHTML);
      break;
    case "2":
      $.getJSON("data/2-get-contacts-list.json", displayContact);
      break;
    case "3":
      $.get("data/3-get-html-movies.html", displayHTML);
      break;
    case "4":
      $.getJSON("data/4-get-json-movies.json", displayFilm);
      break;
  }
}

/**************************
 * CODE PRINCIPAL
 **************************/
$(document).ready(function () {
  $("#run").on("click", onClickExecute);
  //autre syntaxe : $("#run").click(onClickExecute)
});
