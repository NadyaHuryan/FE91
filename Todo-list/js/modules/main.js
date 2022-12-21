import {getLocalData, setLocalData, removeLocalData, valideLocalData} from './userData.js'
import {cssCard, cssCardStatusWraper, cssStatusSpan, cssCardStatus, cssCardDate, cssCardText, cssCardCloseButton, cssImage} from './style.js'
import {setHover, setFocus,setCardStyle} from './events.js';
import {
    root, wrapper,
    panelActions, buttonDeleteAllCards,buttonDeleteLastCard, inputTask, buttonAddCard,
    panelCardInfo, counterAllCards, counterCompletedCards, buttonShowAll, buttonShowCompleted, inputSearch,
    cardsAera
}from './render.js'

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

const renderCard = function (item) {
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
        setFocus(cardStatus, cardStatusSpan, "0 0 0 0.15em DodgerBlue")
        setFocus(cardStatus, card, "0 0 0 0.04em black")

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
        renderCard(obj);
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
        renderCard(item);
    })
    setCounterAllCards();
    setCounterCompletedCards(); 
}

    buttonDeleteAllCards.addEventListener("click", deleteAllCards);
    buttonDeleteLastCard.addEventListener("click", deleteLastCard);
    inputTask.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addCard();
        }
    })
    buttonAddCard.addEventListener("click", addCard);

    setCounterAllCards();
    setCounterCompletedCards();

    buttonShowAll.addEventListener("click",function(){
        cardsAera.innerHTML = "";
        createCardsAera(main);
        inputSearch.value = "";
        inputSearch.removeEventListener("keyup",searchForCompleted);
        inputSearch.addEventListener("keyup", searchForMain);
    })

    buttonShowCompleted.addEventListener("click", function(){
        cardsAera.innerHTML = "";
        createCardsAera(completed);
        inputSearch.value = "";
        inputSearch.removeEventListener("keyup",searchForMain);
        inputSearch.addEventListener("keyup", searchForCompleted);       
    }); 


 createCardsAera(main);
 inputSearch.addEventListener("keyup", searchForMain);

root.append(wrapper);
wrapper.append(panelActions, panelCardInfo, cardsAera);
panelActions.append(buttonDeleteAllCards, buttonDeleteLastCard, inputTask, buttonAddCard);
panelCardInfo.append(counterAllCards, counterCompletedCards, buttonShowAll,buttonShowCompleted, inputSearch);
 };
