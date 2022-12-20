export let deleteAllTabs = function () {
    container.innerHTML = "";
    todos = [];
    localStorage.removeItem("todos");
}

export let deleteTab = function () {
    let parent = this.closest(".container__item"); 
    let tabId = +parent.getAttribute("data-key");
    let tabFilter = todos.filter( item => item.id!==tabId);

    let tabText = parent.querySelector(".container__text").textContent;
    if (confirm(`Вы точно хотите удалить заметку ${tabText}`)) {
        parent.remove();
        todos = [...tabFilter];
        updateStorage();
    }
}