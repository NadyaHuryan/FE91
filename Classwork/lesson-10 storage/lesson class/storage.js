"use strict"


window.addEventListener("load", () => {

    let contactsData = [];

    let loadPage = function() {
        let localContactsData = localStorage.getItem("contactsData");
        if (localContactsData) {
            contactsData = JSON.parse(localContactsData)
        } 
        console.log(contactsData);
    }

    loadPage();
    let addNewContact = function() {
        let form = this.closest(".form-add");
        let nameUser = form.querySelector("#nameUser").value;
        let phoneUser = form.querySelector("#phoneUser").value;

        let contact = {
            name: nameUser,
            phone: phoneUser
        }
        contactsData.push(contact);
        console.log(contactsData)
        localStorage.setItem("contactsData", JSON.stringify(contactsData));

        
    }


    let buttonAdd = document.querySelector("#buttonAdd");
    if (buttonAdd) {
        buttonAdd.addEventListener("click", addNewContact)
    }
});