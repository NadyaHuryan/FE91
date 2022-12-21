"use strict";
let inputFio = document.querySelector("input[name=fio]");
let inputCountry = document.querySelector("input[name=country]")

window.addEventListener("load", () => {
    if(!!localStorage.getItem("formData")){
        let obj = JSON.parse(localStorage.getItem("formData"));
        inputFio.value = obj.fio;
        inputCountry.value = obj.country;

    }
});


let checkForm = function(inputArr) {
    let flag = true;
    let [inputFio, inputCountry] = inputArr;
    if (inputFio.value.length < 3) {
        inputFio.classList.add("error");
        flag = false;
    }
    if (inputCountry.value.length < 5) {
        inputCountry.classList.add("error");
        flag = false;
    }
    return flag;
}

let sendForm = function(inputFio, inputCountry) {
    let obj = {
        fio: inputFio.value,
        country: inputCountry.value,
    }
    localStorage.setItem("formData", JSON.stringify(obj));
}
let btnSend = document.getElementById('btnsend');


let form = document.querySelector("form");
form.addEventListener("submit",function(e) {
    e.preventDefault();
    let inputArr = [inputFio, inputCountry];
    if (checkForm(inputArr)) {
        sendForm(inputFio, inputCountry);
    };
});


let inputNames = ["country", "fio"];
for (let i=0; i < inputNames.length; i++) {
    let input = document.querySelector(`[name=${inputNames[i]}]`);
    input.addEventListener("focus", function(){
        this.classList.remove("error");
    })
}

let checkFlag = document.querySelector("[name=checkFlag]");
checkFlag.addEventListener("click", function(){
    if (this.checked) {
        btnSend.removeAttribute("disabled")
    } else {
        btnSend.setAttribute("disabled","disabled")
    }
})