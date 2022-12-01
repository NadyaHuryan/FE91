'use strict'

//

let main = [
    {
        id: 1,
        task: "Todo text",
        status: false,
        date: "date1"
    },
    {
        id: 2,
        task: "Todo text",
        status: false,
        date: "date2"
    },
    {
        id: 3,
        task: "Todo text",
        status: false,
        date: "date3"
    },
]



//functions

//css 

let cssWrapper = `
    width: 800px;
    min-height: 200px;
    border: 3px solid black;
    margin: 40px auto;
    background-color: gray;
    border-radius: 20px;
    padding: 10px;
`;

let cssPanel = `
    padding: 10px 10px;
    display: flex;
    gap: 16px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`;

let cssPanelButton = `
    flex-grow: 1 ;
    min-height: 60px;
    background-color: rgb(127, 255, 249);
    border: 3px solid black;
    border-radius: 20px;
    padding: 10px;
    text-align: center;
`;

let cssPanelInput =  `
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

// html generator
let root = document.getElementById("root")
    root.style.cssText = `
            padding: 10px;
`;
// wrapper
let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    wrapper.style.cssText =  cssWrapper;

/// panel card Actions 
let panelCardActions = document.createElement("div");
    panelCardActions.classList.add("panel-card-actions");
    panelCardActions.style.cssText = cssPanel;

let panelCardActionsButtonDeleteAll = document.createElement("button");
    panelCardActionsButtonDeleteAll.textContent = "Delete All";
    panelCardActionsButtonDeleteAll.style.cssText = cssPanelButton;
let panelCardActionsButtonDeleteLast = document.createElement("button");
    panelCardActionsButtonDeleteLast.textContent = "Delete last";
    panelCardActionsButtonDeleteLast.style.cssText = cssPanelButton;

let panelCardActionsInputToDo = document.createElement("input");
    panelCardActionsInputToDo.setAttribute("type", "text");
    panelCardActionsInputToDo.setAttribute("placeholder", "Enter todo...");
    panelCardActionsInputToDo.style.cssText = cssPanelInput;

let panelCardActionsButtonAdd = document.createElement("button");
    panelCardActionsButtonAdd.textContent = "Add";
    panelCardActionsButtonAdd.style.cssText = cssPanelButton;





/// panel  card INFO
let panelCardInfo = document.createElement("div");
    panelCardInfo.classList.add("panel-card-actions");
    panelCardInfo.style.cssText=cssPanel;

let panelCardInfoCounterAll= document.createElement("div");
    panelCardInfoCounterAll.innerHTML = `All: <span>2</span>`;    

let panelCardInfoCounterCompleted = document.createElement("div");
    panelCardInfoCounterCompleted.innerHTML = `Completed: <span>1</span>`; 

let panelCardInfoButtonShowAll = document.createElement("button");
    panelCardInfoButtonShowAll.textContent = "Show All";
    panelCardInfoButtonShowAll.style.cssText = cssPanelButton;

let panelCardInfoButtonShowCompleted = document.createElement("button");
    panelCardInfoButtonShowCompleted.textContent = "Show Completed";
    panelCardInfoButtonShowCompleted.style.cssText = cssPanelButton;    

let panelCardInfoInputSearch = document.createElement("input");
    panelCardInfoInputSearch.setAttribute("type", "text");
    panelCardInfoInputSearch.setAttribute("placeholder", "Search..."); 
    panelCardInfoInputSearch.style.cssText = cssPanelInput; 

let panelCardsAera = document.createElement("div");
    panelCardsAera.classList.add("cards-aera");
    panelCardsAera.style.cssText=`
        background-color: green;
        min-height: 100px;
        min-width: 100px;
    `;

// card    

for (let i = 0; i < main.length; i++) {
    let listPanelItem = document.createElement("div");
    listPanelItem.classList.add("list-panel__item");
    listPanelItem.style.cssText = `
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    `

    let listPanelProduct = document.createElement("div");
    listPanelProduct.classList.add("list-panel__product");
    listPanelProduct.style.cssText = ``;
    listPanelProduct.innerHTML = `<b>${main[i].task}</b>`

    let listPanelStatus = document.createElement("input");
    listPanelStatus.setAttribute("type", "checkbox");

    let listPanelDelete = document.createElement("button");
    listPanelDelete.innerHTML = "X";

    panelCardsAera.appendChild(listPanelItem)
    listPanelItem.append(listPanelProduct, listPanelStatus, listPanelDelete);
}


// function createCard (){
//         card = document.createElement("div");
//         card.classList.add("card");
//         card.style.cssText = `
//             width: 70%;
//             min-height: 100px;
//             border: 3px solid black;
//             margin: 40px auto;
//             background-color: gray;
//             border-radius: 20px;
//             padding: 10px;
//             display: grid;
//             grid-template-columns:  1fr 3fr 1fr;
//             grid-template-rows: repeat(2, 1fr);
//             grid-template-areas: 
//             "c-status c-text c-close-button"
//             "c-status c-text c-date";
//             justify-items: stretch;
//             gap: 10px;
//         `;

//     let cardStatus = document.createElement("input");
//         cardStatus.setAttribute("type", "checkbox");
//         cardStatus.classList.add("card--status");
//         cardStatus.style.cssText = `
//             grid-area: c-status;
//             justify-items: left;
//             align-self: center;
//             height: 60px;
//             width: 60px;
//         `;
//     let cardDate = document.createElement("div");
//         cardDate.classList.add("card--date");
//         cardDate.textContent ="date"
//         cardDate.style.cssText=`
//             grid-area: c-date;
//             justify-self: center;
//             align-items: center;
//             background-color: white;
//             border-radius: 10px;
//             text-align: center;
//             min-width: 80px;
//             height: 30px;
//             padding: 5px;
//             color: gray;
//         `;
//     let cardText = document.createElement("div");
//         cardText.classList.add("card--texts");
//         cardText.textContent = "Todo text";
//         cardText.style.cssText = `
//             grid-area: c-text ;
//             align-self: center;
//             justify-self: center;
//             background-color: white;
//             border-radius: 10px;
//             text-align: center;
//             min-width: 350px;
//             height: 50px;
//             padding: 15px;
//             color: gray;
//         `;

//     let cardCloseButton = document.createElement("div");
//         cardCloseButton.classList.add("card--date");
//         cardCloseButton.textContent = "X"
//         cardCloseButton.style.cssText = `
//             grid-area: c-close-button;
//             justify-self: right;
//             background-color: rgb(127, 255, 249);
//             border: 3px solid black;
//             border-radius: 10px;
//             text-align: center;
//             width: 40px;
//             height: 30px;
//             padding: 5px;
//         `;    

//         card.append(cardStatus, cardText, cardCloseButton, cardDate); 
// }       

// let card;
// createCard();
// let card1 = card.cloneNode(true);
// let card2 = card.cloneNode(true);

// append elements

root.append(wrapper);
wrapper.append(panelCardActions, panelCardInfo, panelCardsAera);
panelCardActions.append(panelCardActionsButtonDeleteAll, panelCardActionsButtonDeleteLast, panelCardActionsInputToDo, panelCardActionsButtonAdd);
panelCardInfo.append(panelCardInfoCounterAll, panelCardInfoCounterCompleted, panelCardInfoButtonShowAll,panelCardInfoButtonShowCompleted, panelCardInfoInputSearch);