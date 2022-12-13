"use strict"


window.addEventListener("load", () => {

    document.cookie = "user=Nadya";
    document.cookie = "pass=123"
    console.log(document.cookie)
    console.log(typeof document.cookie)
    document.cookie = "message="+encodeURIComponent("Привет мир");
    console.log(decodeURIComponent("%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%20%D0%BC%D0%B8%D1%80"));

    document.cookie = "user2=Pete; path=/main.html";

    // Tue, 19 Jan 20:50:08 GMT
    let cookieDate = new Date(Date.now() + 20000);
    console.log(cookieDate);
    cookieDate.toUTCString();
    // document.cookie = "user3=Ivan; expires="+cookieDate;

    // document.cookie = "user4=Andrew; max-age=20"

    localStorage.setItem("user","Pete");
    sessionStorage.setItem("user","Pete");
    localStorage.setItem("user2","Sergio");
    localStorage.setItem("user3","Ivan");
    localStorage.setItem("user4","Mario");
    localStorage.setItem("user5","Kate");
    // sessionStorage.setItem("user2","Sergio");


    console.log(localStorage.getItem("user"))
    localStorage.removeItem("user2");

    // localStorage.clear()
    console.log(localStorage.length);
    let key = Object.keys(localStorage);
    console.log(key);
    key.forEach(item=> {
        console.log(item)
    })
});