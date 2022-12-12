
import {getLocalData, setLocalData} from './modules/userData.js';
import {mainblock} from './modules/mainblock.js'



window.addEventListener("load", () => {
    let main = [];
    let completed = [];
    let searched = [];

    let date = new Date(Date.now());

    if (!localStorage.getItem("todo")){
        setLocalData();
    } else{
        getLocalData();
    }

    mainblock();
});