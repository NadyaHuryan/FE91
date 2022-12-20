"use strict"
//1. Сделать добавление с помощью Enter(4-5 max)
// 2. Разбить на модули
import {elementBody, root, containerAdd, deleteAll, deleteLast, panelEnter, addElement, containerShow, spanAll, showChecked,spanChecked, spanCheckedChild,showAll, searchElement, listContainer, deleteElem} from './modules/style.js'
import {currentDate, productData, loadPage, updateStorage, showCheckedSpan, searchWord, deleteAllProducts, checkProductValue, showPanelChecked, showPanelAll, checkProductStatus, deleteLastProduct, deleteProduct, createNewProduct, addNewProduct} from './modules/funck.js'

window.addEventListener("load", () =>{
   
    loadPage();


deleteAll.addEventListener("click", function() {
    if (confirm("Вы точно хотите удалить все продукты?")) {
        deleteAllProducts();
    } else {
        alert("Ничего удалено");
    }
})

deleteLast.addEventListener("click", deleteLastProduct);

panelEnter.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addNewProduct();
    }
})

addElement.addEventListener("click", addNewProduct);

spanAll.innerHTML = `All: <span>${productData.length}</span>`

showCheckedSpan();
showAll.addEventListener("click", showPanelAll);

showChecked.addEventListener("click", showPanelChecked);

searchElement.addEventListener("keyup", searchWord);


for (let i = 0; i < productData.length; i++){
    createNewProduct(productData[i])
}

root.append(containerAdd, containerShow, listContainer);
containerAdd.append(deleteAll, deleteLast, panelEnter, addElement);
containerShow.append(spanAll, spanChecked, showAll, showChecked, searchElement)

})


