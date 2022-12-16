import {getLocalData, setLocalData, removeLocalData, valideLocalData} from './userData.js'
import {cssWrapper, cssPanel, cssPanelButton, cssPanelInput, cssRoot} from './style.js'
import {setHover, setFocus} from './events.js';
import {renderCard} from './card.js';

export let main = function (){

    let date = new Date(Date.now());
    let main;
    if (valideLocalData()){
        main = [];
        setLocalData(main);
    } else{
        main = getLocalData();
    }

    let completed = main.filter(item => item.status);
    let searched = [];


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
};

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
};



const setCounterAllCards = function(){
    counterAllCards.innerHTML = `All: <span>${main.length}</span>`;
}
const setCounterCompletedCards = function(){
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
        renderCard(obj, main, completed, cardsAera, deleteCard, setCounterCompletedCards,setLocalData);
        inputTask.value = "";
        setLocalData(main);
        setCounterAllCards();
    } 
}

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


const createCardsAera = function (arr){ 
    arr.forEach((item) => {
        renderCard(item, main, completed, cardsAera, deleteCard, setCounterCompletedCards,setLocalData);
    })
    setCounterAllCards();
    setCounterCompletedCards(); 
}

function renderApp(){
    
}
let root = document.getElementById("root")
    root.style.cssText = cssRoot;
 
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
 };
