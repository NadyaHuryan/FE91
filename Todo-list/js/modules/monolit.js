import {getLocalData, setLocalData, removeLocalData} from './userData.js'
import {cssWrapper, cssPanel, cssPanelButton, cssPanelInput, cssCard, cssCardStatusWraper, cssStatusSpan, cssCardStatus, cssCardDate, cssCardText, cssCardCloseButton, cssImage, setCardStyle, setHover, setFocus} from './style.js'

export let main = function (){

    let date = new Date(Date.now());
    let main;
    if (localStorage.getItem("todo") === null ||localStorage.getItem("todo") === undefined){
        main = [];
        setLocalData(main);
    } else{
        main = getLocalData();
    }


    let completed = main.filter(item => item.status);
    let searched = [];


//functions
const deleteCard = function(){
    let result = confirm("Delete Card?");
    if (result){
        let parent = this.closest(".card")
            let newMain = main.filter(item => item.id != parent.getAttribute('data-id'));
            main = [...newMain];
            let newCompleted = completed.filter(item => item.id != parent.getAttribute('data-id'));
            completed = [...newCompleted].sort((a,b) => b.id - a.id);

        parent.remove();
        if(main.length == 0){
            removeLocalData();
        }
        setCounterAllCards();
        setCounterCompletedCards();
        setLocalData(main);
    }
}

const deleteAllCards = function(){
    let result = confirm("Delete All Cards?");
    if (result){
        cardsAera.innerHTML = "";
        main.length = 0;
        completed.length = 0;
        setCounterAllCards();
        setCounterCompletedCards()
        removeLocalData();
    }

;}

const deleteLastCard = function(){
    let result = confirm("Delete Last Card?");
    if (result){
        let last = document.querySelectorAll(".card");
        let id = last[0].getAttribute('data-id')

        let newCompleted = completed.filter(item => item.id != id);
        completed.length = 0;
        completed = [...newCompleted].sort((a,b) => b.id - a.id);


        let newMain = main.filter(item => item.id != id);
        main.length = 0;
        main = [...newMain];


        last[0].remove();

        setLocalData(main);
        if(main.length == 0){
            removeLocalData();
        }
        setCounterAllCards();
        setCounterCompletedCards();
    }
}



let setCounterAllCards = function(){
    counterAllCards.innerHTML = `All: <span>${main.length}</span>`;
}
let setCounterCompletedCards = function(){
    counterCompletedCards.innerHTML = `Completed: <span>${completed.length}</span>`; 

}
const searchForMain = function(){
    cardsAera.innerHTML = "";
    searched = main.filter(item => item.task.includes(this.value.trim()));
    createCardsAera(searched);
};
const searchForCompleted = function(){
    cardsAera.innerHTML = "";
    searched = completed.filter(item => item.task.includes(this.value.trim()));
    createCardsAera(searched);
};

const addCard = function(){
    
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
        obj.date = `${date.getDate()} - ${date.getMonth()+1} - ${date.getFullYear()} `;
    
        main.push(obj);
        createCard(obj);
        inputTask.value = "";
        setLocalData(main);
        setCounterAllCards();
    } 
}

const createCard = function (item) {
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
            setLocalData(main);
        });
        setFocus(cardStatus)

        cardsAera.prepend(card);
        card.append(cardStatusWraper, cardText, cardCloseButton, cardDate); 
        cardStatusWraper.append(cardStatusSpan, cardStatus);
}

const createCardsAera = function (arr){ 
    arr.forEach((item) => {
        createCard(item);
    })
    setCounterAllCards();
    setCounterCompletedCards(); 
}


let root = document.getElementById("root")
    root.style.cssText = `
            padding: 10px;
`;

let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    wrapper.style.cssText =  cssWrapper;

let panelActions = document.createElement("div");
    panelActions.classList.add("panel-card-actions");
    panelActions.style.cssText = cssPanel;

let buttonDeleteAllCards = document.createElement("button");
    buttonDeleteAllCards.textContent = "Delete All";
    buttonDeleteAllCards.style.cssText = cssPanelButton;
    buttonDeleteAllCards.addEventListener("click", deleteAllCards);
    setHover("Red","0.4", buttonDeleteAllCards);
    setFocus(buttonDeleteAllCards);

let buttonDeleteLastCard = document.createElement("button");
    buttonDeleteLastCard.textContent = "Delete last";
    buttonDeleteLastCard.style.cssText = cssPanelButton;
    buttonDeleteLastCard.addEventListener("click", deleteLastCard);
    setHover("Red","0.4", buttonDeleteLastCard);
    setFocus(buttonDeleteLastCard);


let inputTask = document.createElement("input");
    inputTask.setAttribute("type", "text");
    inputTask.setAttribute("placeholder", "Enter todo...");
    inputTask.style.cssText = cssPanelInput;
    inputTask.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addCard();
        }
    })
    setFocus(inputTask);

let buttonAddCard = document.createElement("button");
    buttonAddCard.textContent = "Add";
    buttonAddCard.style.cssText = cssPanelButton;
    buttonAddCard.addEventListener("click", addCard);
    setHover("yellowgreen","0.4", buttonAddCard);
    setFocus(buttonAddCard);


let panelCardInfo = document.createElement("div");
    panelCardInfo.classList.add("panel-card-actions");
    panelCardInfo.style.cssText=cssPanel;


let counterAllCards= document.createElement("div");
    setCounterAllCards();

let counterCompletedCards = document.createElement("div");
    setCounterCompletedCards();

let buttonShowAll = document.createElement("button");
    buttonShowAll.textContent = "Show All";
    buttonShowAll.style.cssText = cssPanelButton;
    buttonShowAll.addEventListener("click",function(){
        cardsAera.innerHTML = "";
        createCardsAera(main);
        inputSearch.value = "";
        inputSearch.removeEventListener("keyup",searchForCompleted);
        inputSearch.addEventListener("keyup", searchForMain);
    })
    setHover("yellowgreen","0.4", buttonShowAll);
    setFocus(buttonShowAll);

let buttonShowCompleted = document.createElement("button");
    buttonShowCompleted.textContent = "Show Completed";
    buttonShowCompleted.style.cssText = cssPanelButton;
    buttonShowCompleted.addEventListener("click", function(){
        cardsAera.innerHTML = "";
        createCardsAera(completed);
        inputSearch.value = "";
        inputSearch.removeEventListener("keyup",searchForMain);
        inputSearch.addEventListener("keyup", searchForCompleted);       
    }); 
    setHover("yellowgreen","0.4", buttonShowCompleted);
    setFocus(buttonShowCompleted);

let inputSearch = document.createElement("input");
    inputSearch.setAttribute("type", "text");
    inputSearch.setAttribute("placeholder", "Search..."); 
    inputSearch.style.cssText = cssPanelInput;
    setFocus(inputSearch);

let cardsAera = document.createElement("div");
    cardsAera.classList.add("cards-aera");


 createCardsAera(main);
 inputSearch.addEventListener("keyup", searchForMain);

root.append(wrapper);
wrapper.append(panelActions, panelCardInfo, cardsAera);
panelActions.append(buttonDeleteAllCards, buttonDeleteLastCard, inputTask, buttonAddCard);
panelCardInfo.append(counterAllCards, counterCompletedCards, buttonShowAll,buttonShowCompleted, inputSearch);
}