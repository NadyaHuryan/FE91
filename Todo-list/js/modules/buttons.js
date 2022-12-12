
export let searchForMain = function(){
    cardsAera.innerHTML = "";
    searched = main.filter(item => item.task.includes(this.value.trim()));
    createCardsAera(searched);
};
export let searchForCompleted = function(){
    cardsAera.innerHTML = "";
    searched = completed.filter(item => item.task.includes(this.value.trim()));
    createCardsAera(searched);
};
export let deleteAllCards = function(){
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



export let deleteLastCard = function(){
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
