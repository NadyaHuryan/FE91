export let checkTabValue = function(value) {
    if (value === "" || value === " ") {
            return false
    } else {
    return true
    }
}

export let checkTabStatus = function() {
    let parent = this.closest(".container__item"); 
    let tabText = parent.querySelector(".container__text");
    let tabId = +parent.getAttribute("data-key");
    let tabIndex = todos.findIndex( item => item.id == tabId); 
    if (this.checked) {
        tabText.style.textDecoration = "line-through";
        parent.style.background = "gray";
        todos[tabIndex]["status"] = true;

    } else {
        tabText.style.textDecoration = "none";
        parent.style.background = "gainsboro";
        todos[tabIndex]["status"] = false;
    }
    updateStorage();
}