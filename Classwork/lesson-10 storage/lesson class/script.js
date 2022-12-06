"use strict"


window.addEventListener("load", () => {
    let authData = {
        login: "admin",
        pass: "nimba"
    }

    function getCookie(name) {

        let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ))
        return matches ? decodeURIComponent(matches[1]) : undefined
    }


    let authForm = function() {
        let form = this.closest("form");
        let userLogin = form.querySelector("#login").value;
        let userPass = form.querySelector("#pass").value;
        if (userLogin === authData.login && userPass === authData.pass) {
            window.location = "main.html";
            document.cookie = "auth=true"
            document.cookie = "login="+userLogin;
            document.cookie = "pass="+userPass;
        }
    }

    if (getCookie("auth") && (window.location.pathname == "/lesson-11%20storage/lesson%20class/index.html")) {
        // путь от локалки
        window.location = "main.html";
    }
    

    let buttonSignIn = document.querySelector("#signIn");
    if (buttonSignIn) {
        buttonSignIn.addEventListener("click", authForm);
    }
});