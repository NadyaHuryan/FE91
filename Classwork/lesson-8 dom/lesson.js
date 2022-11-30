// **********BOM - browser object model**********
// модель представления браузера, позволяет получить доступ к информации о приложении, так же о действиях (переход на страницы, нажатие кнопок, версия браузера / ос и т.д)
// обращение происходит через window
// window.screen 
// window.location


// **********DOM - document object model  **********
// обращение происходит через document
// Представляет все элементы документа в виде узлов
// Узлы - html и текстовые (даже просто перенос)

// document.body - обращение к body
console.log(document.body)
let body = document.body;
let doc = document;
console.log(body.childNodes)
console.log(body.childNodes[1])
console.dir(body.childNodes[2])


// **********Поиск элементов**********
// document.getElementById("")
let list = document.getElementById("list4");
console.log(list)
// если ничего не найдено - выведет null
// document.getElementsByTagName("")


let p = document.getElementsByTagName("p");
console.log(p)
// Возвращает коллекцию документов
// если ничего не найдено - вернет пустой массив
// document.getElementsByClassName("")
let link = document.getElementsByClassName("link");
console.log(link)
// document.querySelector("table > tr ~ a * ")
// document.querySelectorAll("")
console.log(list.querySelectorAll("li"));
// пишем селекторы как в CSS

console.log(body.getElementsByTagName("li"));
console.log(body.querySelectorAll("li"));

let test = document.createElement("li");
body.appendChild(test);

console.log(body.getElementsByTagName("li"));
console.log(body.querySelectorAll("li"));

// .previousSibling - узел-сосед слева
// .previousElementSibling - html-узел-сосед слева

// .nextSibling - узел-сосед справа
// .nextElementSibling - html-узел-сосед справа

// .childNodes - все дочерние узлы
// .children - все дочерние html-узлы

/// .firstChild - первый дочерний узел
// .firstElementChild - первый дочерний html-узел

// .lastChild - последний дочерний узел
// .lastElementChild - последний дочерний html-узел

// .parentNode - содержит родительский элемент
// .parentElement - содержит родительский элемент. Отличия: для тега html свойство parentNode возвращает document, а parentElement возвращает null

// **********Методы для работы с элементами **********
// Работа с css

let links = document.querySelectorAll("a");
let color = "blue"
for (let i =0; i < links.length; i++) {
  links[i].style.color = "red";
  links[i].style.fontSize = '18px';
  links[i].style.fontWeight = 'bold';
  // links[i].style.cssText = `
  //   color: ${color}; 
  //   font-size: 30px;
  //   text-decoration: none`;
  console.log(links[i].style.fontFamily) // выводит только если установлено свойство в атрибуте style
  console.log(window.getComputedStyle(links[i]));

}
for (let i =0; i < links.length; i++) {
  // .closest() - ближайший селектор, который соответствует селектору
  // .matches() - соответствие селектору (вернет true или false)
  if (links[i].closest("ul") && links[i].matches("a[href='#1']")) {
    console.log(links[i])
  }
}
for (let i =0; i < links.length; i++) { 
  //.innerHTML - содержимое элемента с тегами
  //.outerHTML - сам тег и его содержимое
  //.textContent - только текст без тегов
  console.log(links[i].innerHTML);
  console.log(links[i].outerHTML);
  console.log(links[i].textContent);

  links[i].innerHTML = "Ссылка № <b>" + (i+1) + "</b>"
  links[i].innerHTML += ` Hello`

  // links[i].innerHTML += ` Ссылка № <b>${i+1}</b>`
  links[i].outerHTML = `<b>Ссылка № <b>${i+1}</b></b>`
  // links[i].textContent = `Ссылка № <b>${i+1}</b>`

}
document.getElementById("button").hidden = true;
/*
  .hidden
  .id
  .value
  .href
  ....
  какие-то свойства можно изменить, какие-то только для чтения
*/
let age = document.getElementById("age");
console.log(age.hasAttribute("value"));
console.log(age.getAttribute("value"));
age.setAttribute("size", 20);
age.removeAttribute("size")
console.log(age.attributes); // вывод списка атрибутов у элемента

age.setAttribute('style', 'color:red; border: 1px solid blue;') //еще вариант работы с css

console.log(age.className);
console.log(age.classList.contains("text-form"));
if (age.classList.contains("active")) {
    age.classList.remove("active");
} else {
  age.classList.add("active");
}

// сокращенная запись  
age.classList.toggle("active");