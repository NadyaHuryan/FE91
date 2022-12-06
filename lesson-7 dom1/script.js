'use strict'
let root = document.getElementById('root');

//wrapper

let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
wrapper.style.cssText = `
    width: 80%;
    margin: 0 auto;
    background-color: bisque;
    border: 3px solid black;
    border-radius: 15px;
`;

//header__panel

let headerPanel = document.createElement('div');
headerPanel.classList.add('header__panel');
headerPanel.style.cssText = `
    display: grid;
    grid-template-columns: 1fr 1fr 3fr 1fr;
    grid-template-rows: 50px;
    gap: 20px;
`;
let buttonDeleteAll = document.createElement('button');
buttonDeleteAll.innerHTML = `Delete All`;
buttonDeleteAll.classList.add(`button__delete__all`);

let buttonDeleteLast = document.createElement('button');
buttonDeleteLast.innerHTML = `Delete last`;
buttonDeleteLast.classList.add(`button__delete__last`);

let inputToDo = document.createElement('input');
inputToDo.setAttribute('type', 'text');
inputToDo.setAttribute('name', 'todo');
inputToDo.setAttribute('placeholder', 'Enter todo...');
inputToDo.classList.add('button__todo');

let buttonAdd = document.createElement('button');
buttonAdd.innerHTML = `Add`;
buttonAdd.classList.add(`button__add`);

//info panel

let infoPanel = document.createElement('div');
infoPanel.classList.add('info__panel');
infoPanel.style.cssText = `
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 50px;
    gap: 20px;
`;

let infoCount = document.createElement('div');
infoCount.classList.add('info__count');
infoCount.innerHTML = `All: `;

let infoCountCompleted = document.createElement('div');
infoCountCompleted.classList.add('info__count-completed');
infoCountCompleted.innerHTML = `Completed: `

let infoShow = document.createElement('button');
infoShow.innerHTML = `Show all`;
infoShow.classList.add(`info__show`);

let infoShowCompleted = document.createElement('button');
infoShowCompleted.innerHTML = `Show Completed`;
infoShowCompleted.classList.add(`info__show__completed`);

let infoSearch = document.createElement('input');
infoSearch.setAttribute('type', 'text');
infoSearch.setAttribute('name', 'search');
infoSearch.setAttribute('placeholder', 'Search...');
infoSearch.classList.add('info__search');

//to-do list

let toDoList = document.createElement('div');
toDoList.classList.add('todo__list');
toDoList.style.cssText = `
    width: 80%;
    margin: 0 auto;
`;

//to-do list item

let listItem = document.createElement('div');
listItem.classList.add('list__item');
listItem.style.cssText = `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 150px;
`;

let itemCheck = document.createElement('input');
itemCheck.setAttribute('type', 'checkbox');
itemCheck.setAttribute('name', 'check');
itemCheck.classList.add('check__check');
itemCheck.style.cssText = `
    width: 35px;
    height: 35px;
`

let itemName = document.createElement('div');
itemName.innerHTML = `To do text`
itemName.classList.add('item__name');
itemName.style.cssText = `
    width: 450px;
    height: 55px;
    background-color: white;
    border: 1px solid black;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

let itemSettings = document.createElement('div');
itemSettings.classList.add('item__settings');
itemSettings.style.cssText = `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

let settingsDelete = document.createElement('button');
settingsDelete.innerHTML = `X`;
settingsDelete.classList.add(`settings__delete`);
settingsDelete.style.cssText = `
    padding: 8px;

`;

let settingsDate = document.createElement('div');
settingsDate.classList.add('settings__date');
settingsDate.style.cssText = `
    padding: 8px;
    width: 90px;
    height: 35px;
    background-color: white;
    border: 1px solid black;
    border-radius: 20px;
`;
let date = new Date()
settingsDate.innerHTML = `${date.toLocaleDateString()}`;

//item 2

let listItem1 = document.createElement('div');
listItem1.classList.add('list__item');
listItem1.style.cssText = `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 150px;
`;

let itemCheck1 = document.createElement('input');
itemCheck1.setAttribute('type', 'checkbox');
itemCheck1.setAttribute('name', 'check');
itemCheck1.classList.add('check__check');
itemCheck1.style.cssText = `
    width: 35px;
    height: 35px;
`

let itemName1 = document.createElement('div');
itemName1.innerHTML = `To do text`
itemName1.classList.add('item__name');
itemName1.style.cssText = `
    width: 450px;
    height: 55px;
    background-color: white;
    border: 1px solid black;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

let itemSettings1 = document.createElement('div');
itemSettings1.classList.add('item__settings');
itemSettings1.style.cssText = `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

let settingsDelete1 = document.createElement('button');
settingsDelete1.innerHTML = `X`;
settingsDelete1.classList.add(`settings__delete`);
settingsDelete1.style.cssText = `
    padding: 8px;

`;

let settingsDate1 = document.createElement('div');
settingsDate1.classList.add('settings__date');
settingsDate1.style.cssText = `
    padding: 8px;
    width: 90px;
    height: 35px;
    background-color: white;
    border: 1px solid black;
    border-radius: 20px;
`;

settingsDate1.innerHTML = `${date.toLocaleDateString()}`;
infoCount.innerHTML =`All: ${toDoList.children.length}`


//append elements

root.append(wrapper);
wrapper.append(headerPanel, infoPanel, toDoList);
headerPanel.append(buttonDeleteAll, buttonDeleteLast, inputToDo, buttonAdd);
infoPanel.append(infoCount, infoCountCompleted, infoShow, infoShowCompleted, infoSearch);
toDoList.append(listItem, listItem1);
listItem.append(itemCheck, itemName, itemSettings);
listItem1.append(itemCheck1, itemName1, itemSettings1);
itemSettings.append(settingsDelete, settingsDate);
itemSettings1.append(settingsDelete1, settingsDate1);