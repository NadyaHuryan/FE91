'use strict'

//Selectors

let root = document.getElementById('root');
root.style.cssText = `
    width: 80%;
    height: 500px;
    background-color: rgb(193, 193, 193);
    border: 4px solid black;
    border-radius: 30px;
`;

//wrapper

let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
wrapper.style.cssText = `
    width: 80%;
    height: 100px;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

let deleteAll = document.createElement('button');
deleteAll.classList.add('deleteAll');
deleteAll.textContent = 'Delete All';
deleteAll.style.cssText = `
    width: 20%;
    height: 45px;
    justify-content: center;
    display: flex;
    align-items: center;
    border: 3px solid black;
    border-radius: 10px;
    background-color: rgb(34, 195, 195);
    font-size: 20px;
`;

let enterTodo = document.createElement('input');
enterTodo.classList.add('enter-todo');
enterTodo.setAttribute('type', 'text');
enterTodo.setAttribute('placeholder', 'Enter todo ...');
enterTodo.setAttribute('name', 'enter-todo');
enterTodo.setAttribute('id', 'enter-todo');
enterTodo.style.cssText = `
    width: 50%;
    height: 45px;
    text-align: center;
    border: 3px solid black;
    border-radius: 10px;
	background-color: azure;
	color: gray;
	font-size: 20px;
`;

let addBtn = document.createElement('button');
addBtn.classList.add('addBtn');
addBtn.textContent = 'Add';
addBtn.style.cssText = `
    width: 20%;
    height: 45px;
    justify-content: center;
    display: flex;
    align-items: center;
    border: 3px solid black;
    border-radius: 10px;
    background-color: rgb(34, 195, 195);
    font-size: 20px;
`;

// container

let container = document.createElement('div');
container.classList.add('container');
container.style.cssText = `
    margin: 0 auto;
    width: 80%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    border: 3px solid black;
    border-radius: 10px;
`;

let selectCard = document.createElement('checkbox');
selectCard.classList.add('selectCard');
selectCard.innerHTML = '✓';
// selectCard.id = 'selectCard';
selectCard.style.cssText = `
    margin-top: 22px;
    margin-left: 5px;
    width: 10%;
    height: 30px;
    justify-content: center;
    display: flex;
    align-items: center;
    border: 2px solid;
    border-radius: 7px;
    background-color: rgb(34, 195, 195);
`;

let textCard = document.createElement('div');
textCard.classList.add('textCard');
textCard.innerHTML = 'Todo text';
// textCard.id = 'textCard';
textCard.style.cssText = `
    margin-top: 22px;
    margin-left: 5px;
    width: 60%;
    height: 35px;
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 5px;
    background-color: rgb(238, 237, 237);
    font-size: 20px;
`;

let card = document.createElement('div');
card.classList.add('card');
card.style.cssText = `
    width: 16%;
`;

let deleteCardBtn = document.createElement('button');
deleteCardBtn.classList.add('deleteCardBtn');
deleteCardBtn.innerHTML = '╳';
// deleteCardBtn.id = 'deleteCardBtn';
deleteCardBtn.style.cssText = `
    margin-top: 10px;
    margin-left: 45px;
    width: 40px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid;
    border-radius: 7px;
    background-color: rgb(34, 195, 195);
`;

let dateCard = document.createElement('div');
dateCard.classList.add('dateCard');
dateCard.innerHTML = 'Date';
// dateCard.id = 'date';
dateCard.style.cssText = `
    margin-top: 10px;
    width: 85px;
    height: 25px;
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 3px;
    background-color: rgb(232, 231, 231);
    font-size: 20px;
`;

//Event Listener

//Function

//Append Elements

root.append(wrapper, container);
wrapper.append(deleteAll, enterTodo, addBtn);
container.append(selectCard, textCard, card);
card.append(deleteCardBtn, dateCard);

