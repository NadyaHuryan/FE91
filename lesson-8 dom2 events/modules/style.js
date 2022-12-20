
export let elementBody = document.body
elementBody.style.cssText = `
background: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);
font-weight: 700;
font-size: 18px;
width: 100%;`

export let root = document.getElementById("root");
root.style.cssText = ` margin-top: 50px;
    width: 45%;
    padding: 30px 0;
    margin: 50px auto 0;
    border-radius: 13px;
    background-color: rgba(255, 255, 255, 0.7);
    `;

    //CONTAINER-ADD

export let containerAdd = document.createElement("div");
containerAdd.classList.add("container-add");
containerAdd.style.cssText = `
display: flex;
    justify-content: space-around;
    height: 80px;
    align-items: center;`;

//delete all
export let deleteAll = document.createElement("button");
deleteAll.classList.add("container-add__button-delete");
deleteAll.innerHTML = "Delete All";


//delete last
export let deleteLast = document.createElement("button");
deleteLast.classList.add("container-add__button-delete");
deleteLast.innerHTML = "Delete Last";


//enter 
export let panelEnter = document.createElement("input");
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
export let addElement = document.createElement("button");
addElement.classList.add("container-add__button-add");
addElement.innerHTML = "Add";
addElement.style.cssText = `height: 50px;
width: 15%;`


//Container show

export let containerShow = document.createElement("div");
containerShow.classList.add("container-show");
containerShow.style.cssText = `margin-bottom: 30px;
display: flex;
    justify-content: space-around;
    height: 80px;
    align-items: center;`;
//Span All

export let spanAll = document.createElement("div");
spanAll.classList.add("container-show__count-all");
// spanAll.innerHTML = `All: <span>3</span>`;


//Span Checked
export let spanChecked = document.createElement("div");
spanChecked.classList.add("container-show__count-completed");
spanChecked.innerHTML = `Completed: <span></span>`;
export let spanCheckedChild = spanChecked.firstElementChild; 


// console.log(showCheckedSpan())

//Show All
export let showAll = document.createElement("button");
showAll.classList.add("container-show__button-show");
showAll.innerHTML = "Show All";

//Show Checked
export let showChecked = document.createElement("button");
showChecked.classList.add("container-show__button-show");
showChecked.innerHTML = "Show Completed";


//Search

export let searchElement = document.createElement("input");
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

export let listContainer = document.createElement("div");
listContainer.classList.add("list-container");
listContainer.style.cssText = `
display: flex;
flex-direction: column-reverse;`

export let deleteElem = [ deleteAll, deleteLast, addElement, showAll, showChecked];
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

