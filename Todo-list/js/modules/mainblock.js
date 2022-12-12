import {createCardsAera, inputSearch, root, wrapper, panelActions,panelCardInfo, cardsAera, buttonDeleteAllCards, buttonDeleteLastCard, inputTask, buttonAddCard,counterAllCards, counterCompletedCards, buttonShowAll,buttonShowCompleted} from "./components.js";
import {searchForMain, searchForCompleted, deleteAllCards, deleteLastCard} from './buttons.js'

export let mainblock = function(){
    createCardsAera(main);
    inputSearch.addEventListener("keyup", searchForMain);
    root.append(wrapper);
    wrapper.append(panelActions, panelCardInfo, cardsAera);
    panelActions.append(buttonDeleteAllCards, buttonDeleteLastCard, inputTask, buttonAddCard);
    panelCardInfo.append(counterAllCards, counterCompletedCards, buttonShowAll,buttonShowCompleted, inputSearch);
}
