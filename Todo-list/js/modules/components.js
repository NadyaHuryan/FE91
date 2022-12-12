import {addCard, createCard} from './card.js';
import {cssWrapper, cssPanel, cssPanelButton, setHover, setFocus, cssPanelInput} from './style.js';
import {searchForMain, searchForCompleted, deleteAllCards, deleteLastCard} from './buttons.js'


export let setCounterAllCards = function(){
    counterAllCards.innerHTML = `All: <span>${main.length}</span>`;
}
export let setCounterCompletedCards = function(){
    counterCompletedCards.innerHTML = `Completed: <span>${completed.length}</span>`; 

}  


export const createCardsAera = function (arr){ 
arr.forEach((item) => {
    createCard(item);
})
setCounterAllCards();
setCounterCompletedCards(); 
}




export let root = document.getElementById("root");
    root.style.cssText = `
            padding: 10px;
`;
export let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    wrapper.style.cssText =  cssWrapper;


export let panelActions = document.createElement("div");
    panelActions.classList.add("panel-card-actions");
    panelActions.style.cssText = cssPanel;

export let buttonDeleteAllCards = document.createElement("button");
    buttonDeleteAllCards.textContent = "Delete All";
    buttonDeleteAllCards.style.cssText = cssPanelButton;
    buttonDeleteAllCards.addEventListener("click", deleteAllCards);
    setHover("Red","0.4", buttonDeleteAllCards);
    setFocus(buttonDeleteAllCards);

export let buttonDeleteLastCard = document.createElement("button");
    buttonDeleteLastCard.textContent = "Delete last";
    buttonDeleteLastCard.style.cssText = cssPanelButton;
    buttonDeleteLastCard.addEventListener("click", deleteLastCard);
    setHover("Red","0.4", buttonDeleteLastCard);
    setFocus(buttonDeleteLastCard);


export let inputTask = document.createElement("input");
    inputTask.setAttribute("type", "text");
    inputTask.setAttribute("placeholder", "Enter todo...");
    inputTask.style.cssText = cssPanelInput;
    inputTask.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addCard();
        }
    })
    setFocus(inputTask);

export let buttonAddCard = document.createElement("button");
    buttonAddCard.textContent = "Add";
    buttonAddCard.style.cssText = cssPanelButton;
    buttonAddCard.addEventListener("click", addCard);
    setHover("yellowgreen","0.4", buttonAddCard);
    setFocus(buttonAddCard);

export let panelCardInfo = document.createElement("div");
    panelCardInfo.classList.add("panel-card-actions");
    panelCardInfo.style.cssText=cssPanel;


export let counterAllCards= document.createElement("div");
    setCounterAllCards();

export let counterCompletedCards = document.createElement("div");
    setCounterCompletedCards();

export let buttonShowAll = document.createElement("button");
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

export let buttonShowCompleted = document.createElement("button");
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

export let inputSearch = document.createElement("input");
    inputSearch.setAttribute("type", "text");
    inputSearch.setAttribute("placeholder", "Search..."); 
    inputSearch.style.cssText = cssPanelInput;
    setFocus(inputSearch);

export let cardsAera = document.createElement("div");
    cardsAera.classList.add("cards-aera");

