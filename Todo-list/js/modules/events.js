import {cssImage} from './style.js'

export const setCardStyle = function(){
    let card = this.closest(".card");    
    (this.checked) ? card.style.backgroundColor= "gray" : card.style.backgroundColor= "lightgray";
    let text = card.querySelector(".card--text");
    (this.checked) ? text.style.textDecoration = "line-through" : text.style.textDecoration = "none"
    let content = card.querySelector("span");
    (this.checked) ? content.style.backgroundImage = cssImage : content.style.backgroundImage = "none";

}

export const setHover = function (color, transition, obj){
    let curretColor = obj.style.backgroundColor;
    let setHoverColor = color;

    obj.addEventListener("mouseover", function(){
        obj.style.backgroundColor = setHoverColor;
        obj.style.transition = `background-color ${transition}s`;
    })
    obj.addEventListener("mouseout", function(){
        obj.style.backgroundColor = curretColor;
    })
}

export const setFocus = function (focusObj, paintedObj = focusObj, efect = "0 0 0 0.2em DodgerBlue"){
    focusObj.addEventListener("focus", function(){
        paintedObj.style.boxShadow = efect;
    })
    focusObj.addEventListener("focusout", function(){
        paintedObj.style.boxShadow = "none";
    })
}

