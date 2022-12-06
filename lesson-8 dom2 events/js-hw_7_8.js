"use strict"

let productsAll = [
    {
        id: 1,
        name: "Яблоко",
        status: false,

    },
    {
        id: 2,
        name: "Мандарин",
        status: true,
    },
    {
        id: 3,
        name: "Груша",
        status: false,

    },

]
/////ФУНКЦИИ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//дата 
let currentDate = function(){
    let date = new Date();
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${dayOfMonth}.${month}.${year}`
}
//Удалить все объекты
let deleteAllProducts = function() {
    listContainer.innerHTML = "";
}
//Проверить, есть ли значение в инпуте
let checkProductValue = function(value) {
    if (value === "" || value === " ") {
        return false
    } else {
        return true
    }
}
//Статус объекта
let checkProductStatus = function() {
    let parent = this.closest(".list-pannel");    
    let productName = parent.querySelector(".product-name");
    (this.checked) ? productName.style.textDecoration = "line-through" : productName.style.textDecoration = "none"
}
//удалить объект
let deleteProduct = function() {
    let parent = this.closest(".list-pannel");
    let productId = +parent.getAttribute("data-key");
    let productFilter = productsAll.filter( item => item.id!==productId);

    let productName = parent.querySelector(".product-name").textContent;
    if (confirm(`Вы точно хотите удалить продукт ${productName}`)) {
        parent.remove();
        productsAll = [...productFilter];
    }
}
//добавить новый объект
let createNewProduct = function(obj) {
    let listPanel = document.createElement("div");
    listPanel.classList.add("list-pannel");
    listPanel.setAttribute("data-key", obj.id);
    listPanel.style.cssText = `
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* width: 400px; */
    height: 66px;
    margin: 0 auto;
    background-color: #fbd786;
    margin-bottom: 20px;
    width: 97%;
    border-radius: 10px;`;

    //label
    let labelCheckbox = document.createElement("label")
    labelCheckbox.innerHTML = `<span></span>`
    labelCheckbox.style.cssText = `
    position: relative;
    padding-left:30px; /* free space for custom checkbox */
    cursor: pointer;`
    let spanLabel = labelCheckbox.firstElementChild
    spanLabel.style.cssText = `
    position: absolute;
    top: calc(50% - 15px);
    left:0;
    width:30px; 
    height:30px;
    // background: url(img/checkbox.png) no-repeat center center;
    // background-size: contain;
    background-color: white;
    display: block;
    border-radius: 5px;
    `
    
    //checkbox
    let checkboxElem = document.createElement("input");
    checkboxElem.setAttribute("type", "checkbox");
    checkboxElem.checked = obj.status;
    checkboxElem.addEventListener("click", checkProductStatus);
    checkboxElem.style.cssText = `display: none`

    if(checkboxElem.checked){
        spanLabel.classList.add("active")
    }

    checkboxElem.addEventListener("click", function(){
        spanLabel.classList.toggle("active");
    })

    //product

    let listPanelProduct = document.createElement("div")
    listPanelProduct.classList.add("list-pannel__product")
    listPanelProduct.innerHTML = `${obj}`
    listPanelProduct.style.cssText = 'width: 70%;'
    if (obj.status) {
        listPanelProduct.innerHTML = `<p class="product-name" style="text-decoration: line-through">${obj.name}</p>`
    } else {
        listPanelProduct.innerHTML = `<p class="product-name">${obj.name}</p>`
    }

    //panel del

    let listPanelDel = document.createElement("div")
    listPanelDel.classList.add("list-pannel__del")
    listPanelDel.style.cssText = `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    align-items: center;`

    //panel del button

    let listPanelDelButton = document.createElement("button"); 
    listPanelDelButton.classList.add("list-pannel__del_button");
    listPanelDelButton.innerHTML = `&#10006;`;
    listPanelDelButton.addEventListener("click",deleteProduct);
    listPanelDelButton.style.cssText = `
    width:30px; 
    height:30px;
    border-radius: 5px;
    border: none;
    background-color: rgb(232, 86, 86);
    position: relative;
    cursor: pointer;`;

    //data

    let listPanelData = document.createElement("div");
    listPanelData.innerHTML = `${currentDate()}`
    listPanelData.classList.add("liat-pannel__del_date")

    listContainer.appendChild(listPanel);
    listPanel.append(labelCheckbox, listPanelProduct,listPanelDel);
    labelCheckbox.append(checkboxElem)
    listPanelDel.append(listPanelDelButton, listPanelData)
}
    
let addNewProduct = function() {
     let productValue = panelEnter.value;
     let allId = productsAll.map((item) => item.id);
     allId.sort((a,b) => a - b);
     let maxId = allId.at(-1) + 1;
 
     let product = {
         id: maxId,
         name: productValue,
         status: false
     }
    if (checkProductValue(productValue)) {
         createNewProduct(product);
        productsAll.push(product);
    }
     panelEnter.value = "";
}
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  


let elementBody = document.body
elementBody.style.cssText = `
background: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);
font-weight: 700;
font-size: 18px;
width: 100%;`

let root = document.getElementById("root");
root.style.cssText = ` margin-top: 50px;
    width: 45%;
    padding: 30px 0;
    margin: 50px auto 0;
    border-radius: 13px;
    background-color: rgba(255, 255, 255, 0.7);
    `;

//CONTAINER-ADD

let containerAdd = document.createElement("div");
containerAdd.classList.add("container-add");
containerAdd.style.cssText = `
display: flex;
    justify-content: space-around;
    height: 80px;
    align-items: center;`;
//delete all
let deleteAll = document.createElement("button");
deleteAll.classList.add("container-add__button-delete");
deleteAll.innerHTML = "Delete All";
deleteAll.addEventListener("click", function() {
    if (confirm("Вы точно хотите удалить все продукты?")) {
        deleteAllProducts();
    } else {
        alert("Ничего удалено");
    }
})

//delete last
let deleteLast = document.createElement("button");
deleteLast.classList.add("container-add__button-delete");
deleteLast.innerHTML = "Delete Last";


//enter 
let panelEnter = document.createElement("input");
panelEnter.classList.add("container-add__enter");
panelEnter.setAttribute("type","text");
panelEnter.setAttribute("placeholder","Enter todo ...");
panelEnter.setAttribute("name", "product-new");
panelEnter.setAttribute("id", "product-new");
panelEnter.style.cssText =` height: 50px;
width: 38%;
padding: 0;
box-shadow: none;
border: 0;
text-align: center;;
font-size: 16px;
font-weight: 700;
border-radius: 10px;`;

//Add
let addElement = document.createElement("button");
addElement.classList.add("container-add__button-add");
addElement.innerHTML = "Add";
addElement.style.cssText = `height: 50px;
width: 15%;`
addElement.addEventListener("click", addNewProduct);


//Container show

let containerShow = document.createElement("div");
containerShow.classList.add("container-show");
containerShow.style.cssText = `margin-bottom: 30px;
display: flex;
    justify-content: space-around;
    height: 80px;
    align-items: center;`;
//Span All

let spanAll = document.createElement("div");
spanAll.classList.add("container-show__count-all");
spanAll.innerHTML = `All: <span>3</span>`;
// spanAll.style.cssText = `font-size: 16px`;

//Span Checked
let spanChecked = document.createElement("div");
spanChecked.classList.add("container-show__count-completed");
spanChecked.innerHTML = `Completed: <span>1</span>`;

//Show All
let showAll = document.createElement("button");
showAll.classList.add("container-show__button-show");
showAll.innerHTML = "Show All";

//Show Checked
let showChecked = document.createElement("button");
showChecked.classList.add("container-show__button-show");
showChecked.innerHTML = "Show Completed";

//Search

let searchElement = document.createElement("input");
searchElement.classList.add("container-show__search")
searchElement.setAttribute("type", "text");
searchElement.setAttribute("placeholder","Search");
searchElement.style.cssText = `
width: 29%;
padding: 0;
height: 50px;
text-align: center;
font-family: 'Open Sans', sans-serif;
font-size: 16px;
font-weight: 700;
border-radius: 10px;
box-shadow: none;
border: 0;`;

//List Container

let listContainer = document.createElement("div");
listContainer.classList.add("list-container");


// let arr = ["Яблоко", "Мандарин", "Груша"]

for (let i = 0; i < productsAll.length; i++){
    //List Panel
    createNewProduct(productsAll[i])
}

let deleteElem = [ deleteAll, deleteLast, addElement, showAll, showChecked];
for(let value of deleteElem){
    value.style.cssText =`
    width: 18%;
    height: 50px;
    color: white;
    font-weight: 700;
    font-size: 16px;
    background-color: #f7797d;
    border: 0;
    border-radius: 10px;
    cursor: pointer;`;

}

root.append(containerAdd, containerShow, listContainer);
containerAdd.append(deleteAll, deleteLast, panelEnter, addElement);
containerShow.append(spanAll, spanChecked, showAll, showChecked, searchElement)



