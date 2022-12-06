'use strict'

//Selectors

let root = document.getElementById('root');
root.style.cssText = `
    margin: 0 auto;
    width: 80%;
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

let deleteAllBtn = document.createElement('button');
deleteAllBtn.classList.add('deleteAll');
deleteAllBtn.textContent = 'Delete All';
deleteAllBtn.style.cssText = `
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

let inputTodo = document.createElement('input');
inputTodo.classList.add('input-todo');
inputTodo.setAttribute('type', 'text');
inputTodo.setAttribute('placeholder', 'Enter todo ...');
inputTodo.setAttribute('name', 'input-todo');
inputTodo.setAttribute('id', 'input-todo');
inputTodo.style.cssText = `
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

//Function конструктор

let todos = []

//container
function RenderForm(event, toDo) {
	if (!toDo) {
		toDo = {
			id: new Date().getTime(),
			date: new Date().toLocaleDateString(),
			text: inputTodo.value,
			isChecked: false,
		}
		inputTodo.value = null
		todos.push(toDo)
	};

    let container = document.createElement('div');
    container.classList.add('container');
    container.id = toDo.id;
    root.appendChild(container);
    container.style.cssText = `
        margin: 0 auto;
        width: 80%;
        height: 80px;
        display: flex;
        justify-content: space-between;
        border: 3px solid black;
        border-radius: 10px;
    `;

    let checkToDo = document.createElement('input');
    checkToDo.classList.add('checkToDo');
    // selectCard.innerHTML = '✓';
    checkToDo.className = 'checkToDo';
	checkToDo.type = 'checkbox';
	checkToDo.checked = toDo.isChecked;
    // selectCard.id = 'selectCard';
    container.appendChild(checkToDo);
    checkToDo.style.cssText = `
        margin-top: 22px;
        margin-left: 5px;
        width: 10%;
        height: 30px;
        justify-content: center;
        display: flex;
        align-items: center;
        border: 2px solid;
        border-radius: 7px;
        color: rgb(34, 195, 195);
    `;

    let textCard = document.createElement('input');
    textCard.classList.add('textCard');
    // textCard.innerHTML = 'Todo text';
    // textCard.id = 'textCard';
    textCard.type = 'text';
	textCard.className = 'textCard';
	textCard.value = toDo.text;
    container.appendChild(textCard);
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
        text-align: center;
    `;

    let card = document.createElement('div');
    card.classList.add('card');
    container.appendChild(card);
    card.style.cssText = `
        width: 16%;
    `;
    
    let deleteCardBtn = document.createElement('button');
    deleteCardBtn.classList.add('deleteCardBtn');
    deleteCardBtn.innerHTML = '╳';
    card.appendChild(deleteCardBtn);
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
    
    let dateCard = document.createElement('button');
    dateCard.classList.add('dateCard');
    dateCard.innerHTML = toDo.date;
    card.appendChild(dateCard);
    dateCard.style.cssText = `
        margin-top: 10px;
        width: 110px;
        height: 30px;
        justify-content: center;
        display: flex;
        align-items: center;
        border-radius: 3px;
        background-color: rgb(232, 231, 231);
        font-size: 20px;
    `;
};

//Function
// function updateContainer() {
//     if (this.checked) {
//       this.parentNode.style.textDecoration = "line-through";
//     } else {
//       this.parentNode.style.textDecoration = "none";
//     }
//   }

let checktStatus = function() {  
    (isChecked = true) ? textCard.style.textDecoration = "line-through" : textCard.style.textDecoration = "none"
};

//Event Listener

addBtn.addEventListener('click', RenderForm);

deleteAllBtn.addEventListener('click', function () {
	let containers = document.querySelectorAll('.container')
	for (let container of containers) {
		container.remove()
	}
});

root.addEventListener('click', function (event) {
	if (event.target.className == 'deleteCardBtn') {
		let target = event.target
		target = target.parentNode
		target.parentNode.remove()
	}
});

//Append Elements

root.append(wrapper);
wrapper.append(deleteAllBtn, inputTodo, addBtn);
// container.append(selectCard, textCard, card);
// card.append(deleteCardBtn, dateCard);

