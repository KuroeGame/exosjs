"use strict";

/**************************
    * 1.VARIBABLES
**************************/
let FORM;

/**************************
    * 2.FONCTIONS
**************************/ 

/**
 * Affiche le formulaire
*/ 
function addContact(){ 
    FORM.removeClass("hide");
}

/**
 * Récupère les datas stockées
*/ 
function lowdDatas(){
    //Création liste de contacts
    let datas  = JSON.parse(localStorage.getItem("address-book"));
    if (datas === null) datas = [];
    return datas;
}

/**
 * Liste des contacts
*/ 
function displayContacts() {
    let contacts = lowdDatas();
    $("#address-book").html("<ul></ul>");
    //pour chaque élément dans le tableau contacts ça génère une LI injectée avant la fermeture de la ul
    contacts.forEach((contact, index)=>{
        $("#address-book ul").append(`<li><a data-index="${index}">${contact.lastName} ${contact.firstName}</a><i data-index="${index}"
        class="fa fa-trash-o"></i></li>`);
    });
};


/**
 * Afficher les infos contact
*/ 
function showDetailsContact() {
    let contacts = lowdDatas();
    //Récupération de l'index
    let index = this.dataset.index;
    let contact = contacts[index];

    //Insertion des données dans le html
    $("#contact-details h3").text(`${displayTitle(contact.title)} ${contact.lastName} ${contact.firstName}`);
    $("#contact-details p").text(`${contact.phone}`);
    //Envoi à l'edition de contact
    $("#contact-details a").data("index", index)
    //Afficher le html
    $("#contact-details").removeClass("hide");
}

/**
 * Transforme notre donnée de civilité en text
*/ 
function displayTitle(title){
    let textTitle = "";
    switch(title){
        case "1":
            textTitle = "Mme";
            break;
        case "2":
            textTitle = "Mlle";
            break;
        case "3":
            textTitle = "M.";
            break;
    };
    return textTitle;
}

/**
 * Modifier un contact contact
*/ 
function editContact(){
    let contacts = lowdDatas();
    //Récupération de l'index
    let index = $("#contact-details a").data("index");
    let contact = contacts[index];

    //Affichage préremplissage des champs :
    $("#title").val(contact.title);
    $("#lastName").val(contact.lastName);
    $("#firstName").val(contact.firstName);
    $("#phone").val(contact.phone);

    //Changement du data mode du formulaire
    FORM.data("mode", "edit").removeClass("hide");
    $("#contact-details").addClass("hide");
}

/**
 * Enregistrer ou modifier un contact
*/ 
function getVal(){
    let contacts = lowdDatas();
    //Insert un contact
    let contact = {
        title: $("#title").val(),
        lastName: $("#lastName").val().trim(),
        firstName: $("#firstName").val().trim(),
        phone: $("#phone").val().trim(),
    };

    if (FORM.data("mode") == "add"){
        contacts.push(contact);
    } else{
        let index = $("#contact-details a").data("index");
        contacts[index] = contact;
    }
    
    //Transformer la liste de contacts en JSON
    let jsonContacts = JSON.stringify(contacts);
    localStorage.setItem("address-book", jsonContacts);
    
    //Affichage
    displayContacts();
    FORM[0].reset();
    FORM.addClass("hide");

}

/**
 * Supprimer la liste de contacts
*/ 
function deletedContacts(){
    localStorage.removeItem("address-book");
    displayContacts();
}

/**
 * Supprimer un contact
*/
function deletedContact(){
    let contacts = lowdDatas();
    let index = this.dataset.index;

    contacts.splice(index, 1);
    localStorage.setItem("address-book", JSON.stringify(contacts));
    displayContacts();
}


/**************************
    * 3.CODE PRINCIPAL
**************************/

$(document).ready(function(){
    displayContacts();
    FORM = $("#contact-form");
    $("#add-contact").on("click", addContact);
    $("#clear-address-book").on("click", deletedContacts);
    $("#save-contact").on("click", getVal);
    $("#contact-details a").on("click", editContact);
    $("#address-book").on("click", "li a", showDetailsContact);
    $("#address-book").on("click", "li i", deletedContact);
});