

const getTodos = function() {
    return new Promise(function(resolve, reject) {
        fetch("https://jsonplaceholder.typicode.com/users").then(response => {
            if (response.status == 200) {
                resolve(response.json())  // return response.json()
            } else {
                reject("Server error")
            }
        })
    })
}
let dataAll = []

if (localStorage.getItem("trello")) {
    dataAll = JSON.parse(localStorage.getItem("trello"))
    startProject()
} else {
    getTodos()
    .then((data)=>{
        localStorage.setItem("trello", JSON.stringify(data))
        dataAll = [...data];
        startProject();
        // printTodos(data)
    })


}



const printTodos = function(todoArr) {
    todoArr.forEach(element => {
        document.write(element.name+"<br>")
    });
}


// getTodos()
//     .then((data)=>{
//         printTodos(data)
//     })
//     .catch((err)=> {
//         console.log("Ошибка "+err)
//     })