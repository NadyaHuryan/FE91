import {cssCard, cssCardStatusWraper, cssStatusSpan, cssCardStatus, cssCardDate, cssCardText, cssCardCloseButton, cssImage} from './style.js'
import {setHover, setFocus, setCardStyle} from './events.js';


export  const renderCard = function ({id,status, date, task}, main, completed, cardsAera, deleteCard, setCounterCompletedCards,setLocalData) {
        let card = document.createElement("div");
            card.classList.add("card");
            card.style.cssText = cssCard;
            card.setAttribute("data-id", id);
    
        let cardStatusWraper = document.createElement("label");
            cardStatusWraper.style.cssText = cssCardStatusWraper;
    
        let cardStatusSpan = document.createElement("span");
            cardStatusSpan.style.cssText = cssStatusSpan;
    
        let cardStatus = document.createElement("input");
            cardStatus.setAttribute("type", "checkbox");
            cardStatus.checked = status;
            cardStatus.classList.add("card--status");
            cardStatus.style.cssText = cssCardStatus;
            if (status){
                card.style.backgroundColor= "gray";
                cardStatusSpan.style.backgroundImage = cssImage;
    
                let key =  completed.some( elem => elem.id === id);
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
            cardDate.textContent = date;
            cardDate.style.cssText = cssCardDate
    
        let cardText = document.createElement("div");
            cardText.classList.add("card--text");
            cardText.textContent = task;
            cardText.style.cssText = cssCardText;
            if (status){
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
                 status = cardStatus.checked;
                 if(status){
                    let obj = {
                        id,
                        task,
                        status,
                        date,
                    }
                    completed.push(obj);
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
    

