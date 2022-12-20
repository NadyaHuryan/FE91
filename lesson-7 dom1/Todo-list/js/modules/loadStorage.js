export let loadPage = function() {
    let localTabData = localStorage.getItem("todos");
    if (localTabData) {
        todos = JSON.parse(localTabData);
    }
}

export let updateStorage = function() {
    localStorage.setItem("todos",JSON.stringify(todos));
}