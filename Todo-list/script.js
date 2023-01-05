'use strict'

// storage 

window.addEventListener("load", () => {


//date
let date = new Date(Date.now());


// arrays
    let main = []
    let completed = [];
    let searched = [];

// sorage 
const getLocalData = function(){
    main = JSON.parse(localStorage.getItem("todo"));

}
const setLocalData = function(){
    localStorage.setItem("todo",JSON.stringify(main));
};

if (!localStorage.getItem("todo")){
    setLocalData();
} else{
    getLocalData();
}
// css
 let cssWrapper = `
    width: 800px;
    min-height: 200px;
    border: 3px solid black;
    margin: 40px auto;
    background-color: lightgray;
    border-radius: 20px;
    padding: 10px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 16px;
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
    background-color: MediumAquamarine			;
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

 let cssCardStatusWraper = `
    display: block;
    grid-area: c-status;
    justify-items: left;
    align-self: center;
    height: 60px;
    width: 60px;
`;

 let cssStatusSpan = `
    position: absolute;
    width: 60px;
    height: 60px;
    overflow: hidden;
    border-radius: 10px;
    border: 3px solid black;
    background-color: MediumAquamarine			;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    font-size: 20px;
    padding: 20px
`;

 let cssCardStatus = `
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
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
    background-color: MediumAquamarine			;
    border: 3px solid black;
    border-radius: 10px;
    text-align: center;
    width: 40px;
    height: 30px;
    padding: 5px;
`; 

 let cssImage = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAArCAYAAAA65tviAAAACXBIWXMAAC4jAAAuIwF4pT92AAABYklEQVRogdWZbQ2DMBCGXwmTMAlIQQISJmEOkIAEJEwCEiYBCVtIICH9oleud9c3uezPVvps7bOjwHgeAKb9tenMAH4AvgC6VkHGHeKoFUDvvct4BgfiXK9WILrA5N2avE8Zy3NfQqHJu7VYlcA2qSUw4VSZlMBhKGqZkoBrKGot3ogKSRkqp9Z9b6kmx1BXpb5HKIaK1eCNmkhfgbrEUG6N3qiJHOt3ZYYpNdRRszdiIu4m5ILhMFT2H2HMJHdhYuNWMdTVxdbC1kDUULnfGLXPETUU9WfPhRE1VOnazYERM1RNi4ga6hMYgOOC4j0Uxxp2YdR6KE6YTrqHqgVzt0g9VCzaMKQeyipMSBjNwVS9y5OEqX6XJwFzy1BWYFgMpQ3DaigtGPXjTg4YE+dQYGhBTJ3VlsKIGYoSKoy4oWrAqBmKkisYsw9kQonBmDEUJSGYZh8pn2FMGoqSDeYtekUAf4SQBuU1udF6AAAAAElFTkSuQmCC')"

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
        setLocalData();
        if(main.length == 0){
            localStorage.removeItem("todo");
        }
        setCounterAllCards();
        setCounterCompletedCards();
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
        localStorage.removeItem("todo");
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

        setLocalData();
        if(main.length == 0){
            localStorage.removeItem("todo");
        }
        setCounterAllCards();
        setCounterCompletedCards();
    }
}

const setCardStyle = function(){
    let card = this.closest(".card");    
    (this.checked) ? card.style.backgroundColor= "gray" : card.style.backgroundColor= "lightgray";
    let text = card.querySelector(".card--text");
    (this.checked) ? text.style.textDecoration = "line-through" : text.style.textDecoration = "none"
    let content = card.querySelector("span");
    (this.checked) ? content.style.backgroundImage = cssImage : content.style.backgroundImage = "none";

}

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


const setHover = function (color, transition, obj){
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

const setFocus = function (obj){
    obj.addEventListener("focus", function(){
        obj.style.boxShadow = "0 0 0 0.2em DodgerBlue";
    })
    obj.addEventListener("focusout", function(){
        obj.style.boxShadow = "none";
    })
}


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
        obj.date = `${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()} `;
    
        main.push(obj);
        createCard(obj);
        inputTask.value = "";
        setLocalData();
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
            setLocalData();
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

//css 

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



/// panel  card INFO
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


// cards 
 createCardsAera(main);
 inputSearch.addEventListener("keyup", searchForMain);
// append

root.append(wrapper);
wrapper.append(panelActions, panelCardInfo, cardsAera);
panelActions.append(buttonDeleteAllCards, buttonDeleteLastCard, inputTask, buttonAddCard);
panelCardInfo.append(counterAllCards, counterCompletedCards, buttonShowAll,buttonShowCompleted, inputSearch);

})