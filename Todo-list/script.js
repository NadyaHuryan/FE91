'use strict'

let root = document.getElementById("root")
    root.style.cssText = `
            padding: 10px;
`;
// wrapper
let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    wrapper.style.cssText = `
        width: 800px;
        min-height: 400px;
        border: 3px solid black;
        margin: 40px auto;
        background-color: gray;
        border-radius: 20px;
        padding: 10px;
    `;

/// panel card Actions 
let panelCardActions = document.createElement("div");
    panelCardActions.classList.add("panel-card-actions");
    panelCardActions.style.cssText=`
        padding: 10px 10px;
        display: flex;
        gap: 16px;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
`;

let panelCardActionsButtonDeleteAll = document.createElement("button");
    panelCardActionsButtonDeleteAll.textContent = "Delete All";
    panelCardActionsButtonDeleteAll.style.cssText = `
        flex-grow: 1 ;
        min-height: 60px;
        background-color: rgb(127, 255, 249);
        border: 3px solid black;
        border-radius: 20px;
        padding: 10px;
        text-align: center;
`
let panelCardActionsButtonDeleteLast = document.createElement("button");
    panelCardActionsButtonDeleteLast.textContent = "Delete last";
    panelCardActionsButtonDeleteLast.style.cssText = panelCardActionsButtonDeleteAll.style.cssText;

let panelCardActionsInputToDo = document.createElement("input");
    panelCardActionsInputToDo.setAttribute("type", "text");
    panelCardActionsInputToDo.setAttribute("placeholder", "Enter todo...");
    panelCardActionsInputToDo.style.cssText = `
        flex-grow: 2 ;
        min-height: 60px;
        background-color: white;
        color: gray;
        padding: 10px;
        text-align: center;
        border: 3px solid black;
        border-radius: 20px;
        padding: 10px;
        text-align: center;
`;

let panelCardActionsButtonAdd = document.createElement("button");
    panelCardActionsButtonAdd.textContent = "Add";
    panelCardActionsButtonAdd.style.cssText = panelCardActionsButtonDeleteAll.style.cssText;





/// panel  card INFO
let panelCardInfo = document.createElement("div");
    panelCardInfo.classList.add("panel-card-actions");
    panelCardInfo.style.cssText=panelCardActions.style.cssText;

let panelCardInfoCounterAll= document.createElement("div");
    panelCardInfoCounterAll.innerHTML = `All: <span>2</span>`;    

let panelCardInfoCounterCompleted = document.createElement("div");
    panelCardInfoCounterCompleted.innerHTML = `Completed: <span>1</span>`; 

let panelCardInfoButtonShowAll = document.createElement("button");
    panelCardInfoButtonShowAll.textContent = "Show All";
    panelCardInfoButtonShowAll.style.cssText = panelCardActionsButtonDeleteAll.style.cssText;

let panelCardInfoButtonShowCompleted = document.createElement("button");
    panelCardInfoButtonShowCompleted.textContent = "Show Completed";
    panelCardInfoButtonShowCompleted.style.cssText = panelCardActionsButtonDeleteAll.style.cssText;    

let panelCardInfoInputSearch = document.createElement("input");
    panelCardInfoInputSearch.setAttribute("type", "text");
    panelCardInfoInputSearch.setAttribute("placeholder", "Search..."); 
    panelCardInfoInputSearch.style.cssText = panelCardActionsInputToDo.style.cssText; 



// card    

function createCard (){
        card = document.createElement("div");
        card.classList.add("card");
        card.style.cssText = `
            width: 70%;
            min-height: 100px;
            border: 3px solid black;
            margin: 40px auto;
            background-color: gray;
            border-radius: 20px;
            padding: 10px;
            display: grid;
            grid-template-columns:  1fr 3fr 1fr;
            grid-template-rows: repeat(2, 1fr);
            grid-template-areas: 
            "c-status c-text c-close-button"
            "c-status c-text c-date";
            justify-items: stretch;
            gap: 10px;
        `;

    let cardStatus = document.createElement("input");
        cardStatus.setAttribute("type", "checkbox");
        cardStatus.classList.add("card--status");
        cardStatus.style.cssText = `
            grid-area: c-status;
            justify-items: left;
            align-self: center;
            height: 60px;
            width: 60px;
        `;
    let cardDate = document.createElement("div");
        cardDate.classList.add("card--date");
        cardDate.textContent ="date"
        cardDate.style.cssText=`
            grid-area: c-date;
            justify-self: center;
            align-items: center;
            background-color: white;
            border-radius: 10px;
            text-align: center;
            min-width: 80px;
            height: 30px;
            padding: 5px;
            color: gray;
        `;
    let cardText = document.createElement("div");
        cardText.classList.add("card--texts");
        cardText.textContent = "Todo text";
        cardText.style.cssText = `
            grid-area: c-text ;
            align-self: center;
            justify-self: center;
            background-color: white;
            border-radius: 10px;
            text-align: center;
            min-width: 350px;
            height: 50px;
            padding: 15px;
            color: gray;
        `;

    let cardCloseButton = document.createElement("div");
        cardCloseButton.classList.add("card--date");
        cardCloseButton.textContent = "X"
        cardCloseButton.style.cssText = `
            grid-area: c-close-button;
            justify-self: right;
            background-color: rgb(127, 255, 249);
            border: 3px solid black;
            border-radius: 10px;
            text-align: center;
            width: 40px;
            height: 30px;
            padding: 5px;
        `;    

        card.append(cardStatus, cardText, cardCloseButton, cardDate); 
}       

let card;
createCard();
let card1 = card.cloneNode(true);
let card2 = card.cloneNode(true);

// append elements

root.append(wrapper);
wrapper.append(panelCardActions, panelCardInfo, card1, card2);
panelCardActions.append(panelCardActionsButtonDeleteAll, panelCardActionsButtonDeleteLast, panelCardActionsInputToDo, panelCardActionsButtonAdd);
panelCardInfo.append(panelCardInfoCounterAll, panelCardInfoCounterCompleted, panelCardInfoButtonShowAll,panelCardInfoButtonShowCompleted, panelCardInfoInputSearch);