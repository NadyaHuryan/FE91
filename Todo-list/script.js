'use strict'

//
//date
let date = new Date();

let main = [
    {
        id: 1,
        task: "Побрить ноги",
        status: false,
        date: `${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()} `,
    },
    {
        id: 2,
        task: "Купить шорты",
        status: true,
        date: `${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()} `,
    },
    {
        id: 3,
        task: "Открыть шпроты",
        status: false,
        date: `${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()} `
    },
]

let completed = [];

//functions

let deleteCard = function(){
   let parent = this.closest(".card")

    let newMain = main.filter(item => item.id != parent.getAttribute('data-id'));
    main = [...newMain];

   parent.remove();
   setPanelCardInfoCounterAll();
}

let deleteAllCards = function(){
    panelCardsAera.innerHTML = "";
    main.length = 0;
    setPanelCardInfoCounterAll();
}

let deleteLastCard = function(){
    let last = document.querySelectorAll(".card");
    last[last.length - 1].remove();
    main.pop();
    setPanelCardInfoCounterAll();
}

let setCardBG = function(){
    let card = this.closest(".card");    
    (this.checked) ? card.style.backgroundColor= "gray" : card.style.backgroundColor= "lightgray";

    let text = card.querySelector(".card--text");
    (this.checked) ? text.style.textDecoration = "line-through" : text.style.textDecoration = "none"

}
let setPanelCardInfoCounterAll = function(){
    panelCardInfoCounterAll.innerHTML = `All: <span>${main.length}</span>`;
}



let addCard = function(){
    let obj = {};
    let date = new Date();

    if (!(panelCardActionsInputToDo.value === "") && !(panelCardActionsInputToDo.value === " ")){

        let maxId = main.map((item) => item.id);
        maxId.sort((a,b) => a - b);

        obj.id = maxId.at(-1) + 1;
        obj.task = panelCardActionsInputToDo.value;
        obj.status = false;
        obj.date = `${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()} `;
    
        main.push(obj);
        createCard(obj);
        panelCardActionsInputToDo.value = "";

        panelCardInfoCounterAll.innerHTML = `All: <span>${main.length}</span>`;
    } 
    ///да и незнаю что лучше этот код или пустой if и полный else
}

function createCard (item){
    let card = document.createElement("div");
        card.classList.add("card");
        card.style.cssText = cssCard;
        card.setAttribute("data-id", item.id);

    let cardStatus = document.createElement("input");
        cardStatus.setAttribute("type", "checkbox");
        cardStatus.checked = item.status;
        cardStatus.classList.add("card--status");
        cardStatus.style.cssText = cssCardStatus;
        if (item.status){
            card.style.backgroundColor= "gray";
            completed.push(item);
        }



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


        cardStatus.addEventListener("click", setCardBG);


        panelCardsAera.appendChild(card);
        card.append(cardStatus, cardText, cardCloseButton, cardDate); 
}

//css 

let cssWrapper = `
    width: 800px;
    min-height: 200px;
    border: 3px solid black;
    margin: 40px auto;
    background-color: lightgray;
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
    color: black;
    padding: 10px;
    text-align: center;
    border: 3px solid black;
    border-radius: 20px;
    padding: 10px;
    text-align: center;
`;

let cssCard =  `
    width: 70%;
    min-height: 100px;
    border: 3px solid black;
    margin: 20px auto;
    background-color: lightgray;
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

let cssCardStatus = `
    grid-area: c-status;
    justify-items: left;
    align-self: center;
    height: 60px;
    width: 60px;
`;

let cssCardDate = `
    grid-area: c-date;
    justify-self: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    text-align: center;
    min-width: 80px;
    height: 30px;
    padding: 10px 5px ;
    color: gray;
    font-size: 10px;
`;

let cssCardText = `
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

let cssCardCloseButton = `
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
    panelCardActionsButtonDeleteAll.addEventListener("click", deleteAllCards);

let panelCardActionsButtonDeleteLast = document.createElement("button");
    panelCardActionsButtonDeleteLast.textContent = "Delete last";
    panelCardActionsButtonDeleteLast.style.cssText = cssPanelButton;
    panelCardActionsButtonDeleteLast.addEventListener("click", deleteLastCard);

let panelCardActionsInputToDo = document.createElement("input");
    panelCardActionsInputToDo.setAttribute("type", "text");
    panelCardActionsInputToDo.setAttribute("placeholder", "Enter todo...");
    panelCardActionsInputToDo.style.cssText = cssPanelInput;
    panelCardActionsInputToDo.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addCard();
        }
    })

let panelCardActionsButtonAdd = document.createElement("button");
    panelCardActionsButtonAdd.textContent = "Add";
    panelCardActionsButtonAdd.style.cssText = cssPanelButton;
    panelCardActionsButtonAdd.addEventListener("click", addCard);






/// panel  card INFO
let panelCardInfo = document.createElement("div");
    panelCardInfo.classList.add("panel-card-actions");
    panelCardInfo.style.cssText=cssPanel;

let panelCardInfoCounterAll= document.createElement("div");
    panelCardInfoCounterAll.innerHTML = `All: <span>${main.length}</span>`;    

let panelCardInfoCounterCompleted = document.createElement("div");
    panelCardInfoCounterCompleted.innerHTML = `Completed: <span>${completed.length}</span>`; 

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


// cards    
main.forEach(function(item){
    createCard(item);
})


// append

root.append(wrapper);
wrapper.append(panelCardActions, panelCardInfo, panelCardsAera);
panelCardActions.append(panelCardActionsButtonDeleteAll, panelCardActionsButtonDeleteLast, panelCardActionsInputToDo, panelCardActionsButtonAdd);
panelCardInfo.append(panelCardInfoCounterAll, panelCardInfoCounterCompleted, panelCardInfoButtonShowAll,panelCardInfoButtonShowCompleted, panelCardInfoInputSearch);