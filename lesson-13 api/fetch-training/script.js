function printTodos (arr){

    let list = document.createElement('ul');
    list.style.cssText = `list-style-type: none;`
    
        arr.forEach(elem => {
            let listItem = document.createElement('li');
            list.appendChild(listItem);
            listItem.textContent =`${elem.id} ${elem.title}`;
        });

    let body = document.querySelector("body");
    body.appendChild(list);
}


function getTodos (){
    return new Promise((resolve, reject) => {

        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(arr => resolve(arr))
    })
 }


getTodos().then(arr => printTodos(arr))


