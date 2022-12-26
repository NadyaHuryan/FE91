export let loadPage = function() {
    return JSON.parse(localStorage.getItem("todos"));      
}

export let updateStorage = function(todos) {
    localStorage.setItem("todos",JSON.stringify(todos));
}