// ************Операции с DOM *********
// document.head.innerHTML = "";
let body = document.body;
// body.innerHTML = "";
let root = document.getElementById("root");
let div = document.createElement("div");
div.innerHTML = "Hello world";
div.classList.add("header");

root.appendChild(div);

let p = document.createElement("p");
p.innerHTML = "Lorem1";
div.appendChild(p);

p = document.createElement("p");
p.innerHTML = "Lorem2";
div.appendChild(p);
let ul = document.createElement("ul");
ul.innerHTML = `
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
`
div.appendChild(ul);
let arr = ["banana", "orange", "apple"];
ul.innerHTML = "";
for (let i=0; i<arr.length;i++) {
    ul.innerHTML += `<li>${arr[i]}</li>`
}

div.insertBefore(ul, p);
let ol = ul.cloneNode(true);
div.insertBefore(ol, p);
// ul.innerHTML= ""
// console.log(document.getElementsByTagName("p"))

// // .cloneNode() - копирует элемент
// // .cloneNode(true) - копирует эл-т с дочерними эл-тами

// // .remove() - удаление элемента
// // .removeChild(elementChild) - удаление дочернего элемента
// ul.remove()
ul.removeChild(ul.querySelector("li:nth-child(2)"))