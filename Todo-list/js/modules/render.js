import {cssWrapper, cssPanel, cssPanelButton, cssPanelInput, cssRoot} from './style.js'
import {setHover, setFocus} from './events.js';

export const root = document.getElementById("root")
        root.style.cssText = cssRoot;
 
export const wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        wrapper.style.cssText =  cssWrapper;

export const panelActions = document.createElement("div");
        panelActions.classList.add("panel-card-actions");
        panelActions.style.cssText = cssPanel;

export const buttonDeleteAllCards = document.createElement("button");
        buttonDeleteAllCards.textContent = "Delete All";
        buttonDeleteAllCards.style.cssText = cssPanelButton;
        setHover("Red","0.4", buttonDeleteAllCards);
        setFocus(buttonDeleteAllCards);  

export const buttonDeleteLastCard = document.createElement("button");
        buttonDeleteLastCard.textContent = "Delete last";
        buttonDeleteLastCard.style.cssText = cssPanelButton;
        setHover("Red","0.4", buttonDeleteLastCard);
        setFocus(buttonDeleteLastCard);  

export const inputTask = document.createElement("input");
        inputTask.setAttribute("type", "text");
        inputTask.setAttribute("placeholder", "Enter todo...");
        inputTask.style.cssText = cssPanelInput;
        setFocus(inputTask);
export const buttonAddCard = document.createElement("button");
        buttonAddCard.textContent = "Add";
        buttonAddCard.style.cssText = cssPanelButton;
        setHover("yellowgreen","0.4", buttonAddCard);
        setFocus(buttonAddCard); 
export const panelCardInfo = document.createElement("div");
        panelCardInfo.classList.add("panel-card-actions");
        panelCardInfo.style.cssText=cssPanel;    

export const counterAllCards= document.createElement("div");

export const counterCompletedCards = document.createElement("div");

export const buttonShowAll = document.createElement("button");
        buttonShowAll.textContent = "Show All";
        buttonShowAll.style.cssText = cssPanelButton;
        setHover("yellowgreen","0.4", buttonShowAll);
        setFocus(buttonShowAll);

export const buttonShowCompleted = document.createElement("button");
        buttonShowCompleted.textContent = "Show Completed";
        buttonShowCompleted.style.cssText = cssPanelButton; 
        setHover("yellowgreen","0.4", buttonShowCompleted);
        setFocus(buttonShowCompleted); 

export const inputSearch = document.createElement("input");
        inputSearch.setAttribute("type", "text");
        inputSearch.setAttribute("placeholder", "Search..."); 
        inputSearch.style.cssText = cssPanelInput;
        setFocus(inputSearch);
    
export const cardsAera = document.createElement("div");
        cardsAera.classList.add("cards-aera");              