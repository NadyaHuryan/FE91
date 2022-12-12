import{cssCard, cssCardStatusWraper, cssStatusSpan, cssCardStatus, cssCardDate, cssCardText, cssCardCloseButton, setHover, setCardStyle, setFocus, cssImage} from './style.js'
import {cardsAera,inputTask,setCounterAllCards, setCounterCompletedCards} from './components.js'
import {setLocalData} from './userData.js';




export let deleteCard = function () {
    let result = confirm("Delete Card?");
    if (result){
        let parent = this.closest(".card")

            let newMain = main.filter(item => item.id != parent.getAttribute('data-id'));

            main = [...newMain];

            let newCompleted = completed.filter(item => item.id != parent.getAttribute('data-id'));
            completed = [...newCompleted].sort((a,b) => b.id - a.id);

        parent.remove();
        setLocalData();
        if(main.length == 0){
            localStorage.removeItem("todo");
        }
        setCounterAllCards();
        setCounterCompletedCards();
    }
}

export let addCard = function(){
    let obj = {};
    let date = new Date();

    if (!(inputTask.value === "") && !(inputTask.value === " ")){

        if(main.length > 0){
            let maxId = main.map((item) => item.id);
            maxId.sort((a,b) => a - b);
            obj.id = maxId.at(-1) + 1;
        } else{
            obj.id = 1;
        }

        obj.task = inputTask.value;
        obj.status = false;
        obj.date = `${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()} `;
    
        main.push(obj);
        createCard(obj);
        inputTask.value = "";
        setLocalData();
        setCounterAllCards();
    } 
}

export let createCard = function (item) {
    let card = document.createElement("div");
        card.classList.add("card");
        card.style.cssText = cssCard;
        card.setAttribute("data-id", item.id);

    let cardStatusWraper = document.createElement("label");
        cardStatusWraper.style.cssText = cssCardStatusWraper;

    let cardStatusSpan = document.createElement("span");
        cardStatusSpan.style.cssText = cssStatusSpan;

    let cardStatus = document.createElement("input");
        cardStatus.setAttribute("type", "checkbox");
        cardStatus.checked = item.status;
        cardStatus.classList.add("card--status");
        cardStatus.style.cssText = cssCardStatus;
        if (item.status){
            card.style.backgroundColor= "gray";
            cardStatusSpan.style.backgroundImage = cssImage;

            let key =  completed.some( elem => elem.id === item.id);
            if (key == false){
                completed.push(item);
            }
        }
        cardStatus.addEventListener("focus", function(){
            cardStatusSpan.style.boxShadow = "0 0 0 0.15em DodgerBlue";
        })
        cardStatus.addEventListener("focusout", function(){
            cardStatusSpan.style.boxShadow = "none"
        })
        cardStatus.addEventListener("focus", function(){
            card.style.boxShadow = "0 0 0 0.04em black";
        })
        cardStatus.addEventListener("focusout", function(){
            card.style.boxShadow = "none"
        })



    let cardDate = document.createElement("div");
        cardDate.classList.add("card--date");
        cardDate.textContent = item.date
        cardDate.style.cssText = cssCardDate

    let cardText = document.createElement("div");
        cardText.classList.add("card--text");
        cardText.textContent = item.task
        cardText.style.cssText = cssCardText
        if (item.status){
            cardText.style.textDecoration = "line-through";
        }

    let cardCloseButton = document.createElement("div");
        cardCloseButton.classList.add("card--date");
        cardCloseButton.textContent = "X"
        cardCloseButton.style.cssText = cssCardCloseButton;
        cardCloseButton.addEventListener("click", deleteCard);
        setHover("Red", "0.4", cardCloseButton);
        

        cardStatus.addEventListener("click",setCardStyle);
        cardStatus.addEventListener("click", function(){
             item.status = cardStatus.checked;
             if(item.status){
                completed.push(item);
             }else{
                let parent = this.closest(".card")
                let newCompleted = completed.filter(item => item.id != parent.getAttribute('data-id'));
                completed.length = 0;
                completed = [...newCompleted].sort((a,b) => b.id - a.id);
             }
     
            setCounterCompletedCards();
            setLocalData();
        });
        setFocus(cardStatus)

        cardsAera.prepend(card);
        card.append(cardStatusWraper, cardText, cardCloseButton, cardDate); 
        cardStatusWraper.append(cardStatusSpan, cardStatus);
}