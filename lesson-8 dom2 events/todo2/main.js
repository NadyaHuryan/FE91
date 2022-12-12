'use strict'

let root = document.getElementById("root")
root.style.cssText = `
    width: 500px;
    border: 2px solid black;
    border-radius: 8px;
    background-color: #006e99;
    margin: 0 auto;
    padding-bottom: 50px;
`;

//wrapper

let wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
wrapper.style.cssText = `
    width: 450px;
    margin: 0 auto;
`;

//header

let header = document.createElement("header");
header.classList.add("header");
header.style.cssText = `
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    padding-top: 30px;
`;
//УДАЛИТЬ ВСЕ
let header__delete = document.createElement("button");
header__delete.classList.add("header__delete");
header__delete.innerHTML = `Удалить всё`;
header__delete.style.cssText = `
    background-color: #f9d59d;
    padding: 10px;
    border: 2px solid black;
    border-radius: 8px;
`;

//ПОЛЯ ДОБАВЛЕНИЯ
let header__input = document.createElement("input");
header__input.classList.add("header__input");
header__input.setAttribute("type", "text");
header__input.setAttribute("placeholder", "Введите текст");
header__input.style.cssText = `
    text-align: center;
    border: 2px solid black;
    border-radius: 8px;
`;

//ДОБАВИТЬ
let header__add = document.createElement("button");
header__add.classList.add("header__add");
header__add.innerHTML = `Добавить`;
header__add.style.cssText = `
    background-color: #f9d59d;
    padding: 10px;
    border: 2px solid black;
    border-radius: 8px;
`;

///////////////////////////
///ДОБОВЛЕНИЕ НОВЫЪХ ЭЛЕМЕНТОВ В КОНТЕЙНЕР И ВЫВОД ИХ.
header__add.onclick = () => {
    let header__input2 = header__input.value;//присваиваю переменной a2 содержимое инпут
    arr.push(header__input2);//пытаюсь содержимое input положить в пустой массив 
    ///
    console.log(arr)
    ///
    const taskHTML = `
        <div class="container" style="background-color: rgb(249, 213, 157); height: 80px; display: flex; justify-content: space-around; align-items: center; border: 2px solid black; border-radius: 8px; margin-bottom: 20px;">

        <input type="checkbox" class="container__status" data-action="done" style="width: 25px; height: 25px;">

        <div class="container_text" style="width: 250px; padding: 10px 0px; background-color: white; text-align: center; border-radius: 6px;">${header__input2}</div>

        <div class="container_column" style="height: 100%; display: flex; flex-direction: column; justify-content: space-around; align-items: flex-end;">
                
        <button data-action="button__delete" style="width: 25px; height: 25px;">X</button></button>

        <div class="container__date" style="background-color: rgb(0, 110, 153); padding: 2px 20px; border-radius: 4px;">Дата</div>
        </div>
        </div>
        `

    ///ДОБОВЛЕНИЕ на страницу
    wrapper.insertAdjacentHTML("beforeend", taskHTML)

    /// Очищаем поле ввода и возвращаем на него фокус
    header__input.value = ""
    header__input.focus()

};
///////////////////////////
//УДАЛЕНИЕ ЗАДАЧИ
wrapper.addEventListener("click", deleteTask)

function deleteTask(event) {

    if (event.target.dataset.action === "button__delete") {

        const parenNode = event.target.closest(".container");

        parenNode.remove()
    }
}
///////////////////////////
///ОТМЕЧЕНАЯ ЗАДАЧА И ДОБОВЛЕНИЯ НОВОГО КЛАССА
wrapper.addEventListener("click", doneTask)

function doneTask(event) {

    if (event.target.dataset.action === "done") {

        const parenNode = event.target.closest(".container");
        const taskTitle = parenNode.querySelector(".container_text")
        taskTitle.classList.toggle("container_text-done")
        console.log(taskTitle)

    }
}
///////////////////////////










//container
let container = document.createElement("div");
container.classList.add("container");
container.style.cssText = `
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 2px solid black;
    border-radius: 8px;
    margin-bottom: 20px;
`;

//ЭЛЕМЕНТЫ СПИСКА
root.appendChild(wrapper);
wrapper.appendChild(header);
header.append(header__delete, header__input, header__add);

let arr = ["Dota 2", "Fortnite", "God of War"];

for (let i = 0; i < arr.length; i++) {

    let container = document.createElement("div");
    container.classList.add("container");
    container.style.cssText = `
        background-color: #f9d59d;
        height: 80px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: 2px solid black;
        border-radius: 8px;
        margin-bottom: 20px;
`;

    //ЧЕК БОКС
    let container__status = document.createElement("input");
    container__status.setAttribute("type", "checkbox");
    container__status.style.cssText = `
    width: 25px;
    height: 25px;
    `;
    
    let container__text = document.createElement("div");
    container__text.classList.add("container__text");
    container__text.innerHTML = `${arr[i]}`;
    container__text.style.cssText = `
        width: 250px;
        padding: 10px 0;
        background-color: white;
        text-align: center;
        border-radius: 6px;
    `;

    let container__column = document.createElement("div");
    container__column.classList.add("container__column");
    container__column.style.cssText = `
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-end;
        
    `;

    let deleteButton = document.createElement("button");
    // deleteButton.classList.add("button__delete");
    deleteButton.innerHTML = "X";
    deleteButton.style.cssText = `
        width: 25px;
        height: 25px;
    `;

    //ДАТА 
    let container__date = document.createElement("div");
    container__date.classList.add("container__date");
    container__date.innerHTML = `Дата`;
    container__date.style.cssText = `
        background-color: #006e99;
        padding: 2px 20px;
        border-radius: 4px;
    `;

    wrapper.appendChild(container);
    container.append(container__status, container__text, container__column);
    container__column.append(deleteButton, container__date);

}