import {elementBody, root, containerAdd, deleteAll, deleteLast, panelEnter, addElement, containerShow, spanAll, showChecked,spanChecked, spanCheckedChild,showAll, searchElement, listContainer, deleteElem} from './style.js'

export let productData = [];

export let loadPage = function() {
    let localProductData = localStorage.getItem("productData");
    if (localProductData){
        productData = JSON.parse(localProductData);
    }
}
loadPage();

export let updateStorage = function() {
    localStorage.setItem("productData",JSON.stringify(productData))
}

//дата 

export let currentDate = function(){
    let date = new Date();
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${dayOfMonth}.${month}.${year}`
}

//отображать сделанные объекты
export let showCheckedSpan = function(){
    let count = 0;
    // let parent = document.querySelectorAll(".list-pannel");
    let item = document.querySelectorAll(".list-pannel"); 
    productData.forEach(function(item){
        if(item.status === true){
            count +=1
        }
   })

   return spanCheckedChild.innerHTML = count
 }
 
//Поиск
 export let searchWord = function(){
    let item = document.querySelectorAll(".list-pannel"); 
    let search = searchElement.value
    let ser = search.trim()
    item.forEach(function(item){
    if(ser !== "" && ser !== " "){
        let text = item.querySelector(".product-name").textContent;
        if(text.search(ser)==-1){
        item.style.display = "none";
        }else{
            item.style.display = "flex";  
        }
    }else{ 
        item.style.display = "flex"; 
    }
   })
}  

//Удалить все объекты
export let deleteAllProducts = function() {
    listContainer.innerHTML = "";
    productData = [];
    localStorage.removeItem("productData");
    spanAll.innerHTML = `All: <span>${productData.length}</span>`;
    showCheckedSpan()
}

//Проверить, есть ли значение в инпуте
export let checkProductValue = function(value) {
    if (value === "" || value === " ") {
        return false
    } else {
        return true
    }
}

//показать отмеченные
export let showPanelChecked = function(){
    let item = document.querySelectorAll(".list-pannel"); 
    item.forEach(function(item) {   
        let id = +item.getAttribute("data-key")
        let productId = productData.find((item) => item.id === id);
        if(productId.status === false){
            item.style.display = "none";
        }
        
    })

}

//показать все 
export let showPanelAll = function(){
    let item = document.querySelectorAll(".list-pannel"); 
    item.forEach(function(item){
     if (item.style.display = "none"){
         item.style.display = "flex"
     }
    })
 }

 //Статус объекта
 export let checkProductStatus = function() {
    let parent = this.closest(".list-pannel");    
    let productName = parent.querySelector(".product-name");
   if (this.checked){
    productName.style.textDecoration = "line-through"
    parent.style.backgroundColor = "#a58e57";
} else{
    productName.style.textDecoration = "none"
    parent.style.backgroundColor = "#fbd786";
   } 
    let id = +parent.getAttribute("data-key")
    let product = productData.find((item) => item.id === id);
    product.status = !product.status
    showCheckedSpan()
    updateStorage();
}

//удалить последний элемент
export let deleteLastProduct = function(){ 
    let child = listContainer.firstChild
    let childName = child.querySelector(".product-name").textContent;
    if(confirm(`Вы точно хотите удалить последний продукт ${childName} ?`)){
       productData.pop();
        child.remove();
        updateStorage(); 
        spanAll.innerHTML = `All: <span>${productData.length}</span>`    
    }
}

//удалить объект
export let deleteProduct = function() {
    let parent = this.closest(".list-pannel");
    let productId = +parent.getAttribute("data-key");
    let productFilter = productData.filter( item => item.id!==productId);

    let productName = parent.querySelector(".product-name").textContent;
    if (confirm(`Вы точно хотите удалить продукт ${productName} ?`)) {
        parent.remove();
        productData = [...productFilter];
        updateStorage();
        spanAll.innerHTML = `All: <span>${productData.length}</span>`
        showCheckedSpan()
    }
}

export let createNewProduct = function(obj) {
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
        listPanel.style.backgroundColor = "#a58e57";
        listPanelProduct.innerHTML = `<p class="product-name" style="text-decoration: line-through">${obj.name}</p>`
    } else {
        listPanelProduct.innerHTML = `<p class="product-name">${obj.name}</p>`
    }listPanelProduct

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
    listPanelData.innerHTML = `${obj.date}`
    listPanelData.classList.add("liat-pannel__del_date")

    listContainer.appendChild(listPanel);
    listPanel.append(labelCheckbox, listPanelProduct,listPanelDel);
    labelCheckbox.append(checkboxElem)
    listPanelDel.append(listPanelDelButton, listPanelData)
}
 //добавить новый объект   
export let addNewProduct = function() {
    let productValue = panelEnter.value;
    let allId = productData.map((item) => item.id);
    allId.sort((a,b) => a - b);
    let maxId;
    (productData.length === 0) ? maxId = 1 : maxId = allId.at(-1) + 1;

    let product = {
        id: maxId,
        name: productValue,
        status: false,
        date: currentDate() 
    }
   if (checkProductValue(productValue)) {
        createNewProduct(product);
       productData.push(product);
       updateStorage();
   }
    panelEnter.value = "";
    spanAll.innerHTML = `All: <span>${productData.length}</span>`
}

