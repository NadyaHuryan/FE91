'use strict'

window.addEventListener("load", () => {


    let productData = []


    let loadPage = function() {
        let localProductData = localStorage.getItem("productData");
        if (localProductData) {
            productData = JSON.parse(localProductData);
        } 
        console.log(productData);
    }

    loadPage();


    let updateStorage = function() {
        localStorage.setItem("productData",JSON.stringify(productData));
    }


let checkProductValue = function(value) {
    if (value === "" || value === " ") {
        return false
    } else {
        return true
    }
}

let checkProductStatus = function() {
    let parent = this.closest(".list-panel__item");    
    let productName = parent.querySelector(".product-name");
    (this.checked) ? productName.style.textDecoration = "line-through" : productName.style.textDecoration = "none"
}

let deleteProduct = function() {
    let parent = this.closest(".list-panel__item");
    let productId = +parent.getAttribute("data-key");
    let productFilter = productData.filter( item => item.id!==productId);

    let productName = parent.querySelector(".product-name").textContent;
    if (confirm(`Вы точно хотите удалить продукт ${productName}`)) {
        parent.remove();
        productData = [...productFilter];
        updateStorage();
    }
}

let createNewProduct = function(obj) {
    let listPanelItem = document.createElement("div");
    listPanelItem.classList.add("list-panel__item");
    listPanelItem.setAttribute("data-key", obj.id)
    listPanelItem.style.cssText = `
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    `

    let listPanelProduct = document.createElement("div");
    listPanelProduct.classList.add("list-panel__product");
    listPanelProduct.style.cssText = ``;
    if (obj.status) {
        listPanelProduct.innerHTML = `<b class="product-name" style="text-decoration: line-through">${obj.name}</b>`
    } else {
        listPanelProduct.innerHTML = `<b class="product-name">${obj.name}</b>`
    }
    

    let listPanelStatus = document.createElement("input");
    listPanelStatus.setAttribute("type", "checkbox");
    listPanelStatus.checked = obj.status;
    listPanelStatus.addEventListener("click", checkProductStatus);

    let listPanelDelete = document.createElement("button");
    listPanelDelete.innerHTML = "X";
    listPanelDelete.addEventListener("click",deleteProduct)
    
    listPanel.appendChild(listPanelItem)
    listPanelItem.append(listPanelProduct, listPanelStatus, listPanelDelete);

    

}

// добавление продукта
let addNewProduct = function() {
    let productValue = addPanelInput.value;

    
    let allId = productData.map((item) => item.id);
    allId.sort((a,b) => a - b);
    let maxId;
    (productData.length === 0) ? maxId = 1 : maxId = allId.at(-1) + 1;

    let product = {
        id: maxId,
        name: productValue,
        status: false
    }
    if (checkProductValue(productValue)) {
        createNewProduct(product);
        productData.push(product);
        updateStorage();
    }
    addPanelInput.value = "";
}

// Очистить все эл-ты
let deleteAllProducts = function() {
    listPanel.innerHTML = "";
    productData = [];
    localStorage.removeItem("productData");
}

let checkProductAll = function() {
    let item = document.querySelectorAll(".list-panel__item");
    item.forEach(function(item) {
        let product = item.querySelector(".product-name") ,
            status = item.querySelector("input[type='checkbox']");
        product.style.textDecoration = "line-through";
        status.checked = true;
    })
}


let root = document.getElementById("root")
root.style.cssText = `
    width: 800px;
    border: 1px solid black;
    margin: 50px auto;
    font-size: 18px;

`;


//header
let header = document.createElement("header");
header.classList.add("header");
header.innerHTML = "Приложение по добавлению товара";
header.style.cssText = `
    background-color: grey;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: white;
    margin-bottom: 20px;
`;

// .container
let container = document.createElement("div");
container.classList.add("container");

// .infoPanel
let infoPanel = document.createElement("div");
infoPanel.classList.add("info-panel");
infoPanel.style.cssText = `
    display: flex;
    margin-bottom: 20px;
    column-gap: 20px;
`

let infoPanelCount = document.createElement("div");
infoPanelCount.classList.add("info-panel__count");
infoPanelCount.innerHTML = `Количество: <span>3</span>`;

let infoPanelBought= document.createElement("div");
infoPanelBought.classList.add("info-panel__bought");
infoPanelBought.innerHTML = `Куплено: <span>3</span>`;

// .addPanel
let addPanel = document.createElement("div");
addPanel.classList.add("add-panel");
addPanel.style.cssText = `
    margin-bottom: 20px;
`

let addPanelInput = document.createElement("input");
addPanelInput.classList.add("add-panel__textfield");
addPanelInput.setAttribute("type", "text");
addPanelInput.setAttribute("placeholder", "Добавить новый продукт");
addPanelInput.setAttribute("name", "product-new");
addPanelInput.setAttribute("id", "product-new");
addPanelInput.style.cssText = `
    width: 80%;
`;

addPanelInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addNewProduct();
    }
})

let addPanelButton = document.createElement("button");
addPanelButton.classList.add("add-panel__button");
addPanelButton.textContent = "+";
addPanelButton.addEventListener("click", addNewProduct);

let listPanel = document.createElement("div");
listPanel.classList.add("list-panel");

// элементы корзины

for (let i = 0; i < productData.length; i++) {
    createNewProduct(productData[i])
}

let deletePanel = document.createElement("div");
deletePanel.classList.add("delete-panel");
deletePanel.style.cssText = `
    display: flex;
    justify-content: space-between;
`;

let deletePanelSelect = document.createElement("button");
deletePanelSelect.innerHTML = "Отметить все";
deletePanelSelect.addEventListener("click", checkProductAll)
let deletePanelDelete = document.createElement("button");
deletePanelDelete.innerHTML = "Удалить все";
deletePanelDelete.addEventListener("click", function() {
    if (confirm("Вы точно хотите удалить все продукты?")) {
        deleteAllProducts();
    } else {
        alert("Ничего удалено");
    }
})


// append elements

root.append(header, container);
container.append(infoPanel, addPanel, listPanel, deletePanel);
infoPanel.append(infoPanelCount, infoPanelBought)
addPanel.append(addPanelInput, addPanelButton)
deletePanel.append(deletePanelSelect, deletePanelDelete)

});