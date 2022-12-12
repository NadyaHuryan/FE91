
  

export let container = document.createElement("div");
container.classList.add("container");
container.style.cssText = `
    height: 600px;
    width: 800px;
    padding-top: 20px;
    margin: 100px auto;
    border: 4px solid black;
    border-radius: 30px;
    background-color: #c7c6c6;
`;

export let buttonPannel = document.createElement("div");
buttonPannel.classList.add("button__pannel");
buttonPannel.style.cssText = `
    display: flex;
    justify-content: space-around;
    padding-bottom: 40px;
`;

 export let delButton = document.createElement("button");
delButton.classList.add("del-all__button");
delButton.textContent = "Delete All";
delButton.style.cssText = `
    width: 150px;
    height: 70px;
    font-size: 23px;
    font-weight: bolder;
    color: blueviolet;
    border: 4px solid black;
    border-radius: 10px;
    background-color: aquamarine;
`;
delButton.addEventListener('click', function(){
    if(confirm('Выточно хотите удалить все заметки?')){
        deleteAllTodo()
    } else {
        alert('Ничего не удалено!')
    }
});

export let addInput = document.createElement("input");
addInput.classList.add("entering__todo");
addInput.setAttribute("type", "text");
addInput.setAttribute("placeholder", "Enter todo ...");
addInput.setAttribute("name", "item-new");
addInput.setAttribute("id", "item-new");
addInput.style.cssText = `
    height: 70px;
    width: 400px;
    padding-left: 50px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 23px;
    font-weight: bolder;
    color: #c8c8ca;
    border: 4px solid black;
    border-radius: 10px;
`;
addInput.addEventListener('keyup', function(event){
    if (event.key === "Enter"){
        addNewTodo();
    }
})

export let addButton = document.createElement("button");
addButton.classList.add("add__button");
addButton.textContent = "Add";
addButton.style.cssText = `
    width: 140px;
    height: 70px;
    font-size: 23px;
    font-weight: bolder;
    color: blueviolet;
    border: 4px solid black;
    border-radius: 10px;
    background-color: aquamarine;
`;
addButton.addEventListener('click', addNewTodo);

export let todoPannel = document.createElement("div");
todoPannel.classList.add("todo__pannel");
todoPannel.style.cssText = `
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: space-around;
    height: 400px;
    width: 760px;
    overflow-y: scroll;
`;