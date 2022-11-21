
"use strict"

// **************Объекты**************

// Объект — это набор свойств, и каждое свойство состоит из имени и значения, ассоциированного с этим именем
// const с object можно изменять

const obj = new Object(); // считается устаревшим
const obj2 = {};

// object = {
  // ключ: значение;
// }

// const object = {
//   user: 'Nadya',
//   age: 18,
//   city: 'Minsk',
//   isAdmin: true,
//   pets: {
//     cat: true,
//     dog: true,
//   },
//   'has car': true // но лучше сокращать до hasCar
// }
//Свойства объекта можно читать, редактировать, удалять и добавлять

// чтение
//как можно обратиться к свойству объекта
console.log(object.user)
console.log(object)
console.log(object.pets.cat)

console.log(object['user']); // такой способ подойдет только для свойств по типу "has car"
console.log(object['has car']);


// добавление/редактирование нового свойства
object.country = 'Belarus';
console.log(object)
object.country = 'Japan';
console.log(object)

// удаление свойства
delete object.country;
console.log(object);

// продвинутая возможность по созданию объекта
// let fruit = prompt("Какой фрукт купить", "orange");
// let countFruit = +prompt("Сколько кг", "2");

// const bag = {
//   [fruit]: countFruit
// }
// console.log(bag);
// console.log(bag[fruit]);


// Проверка существования свойста освществляеться с помощью оператора in

// 1 способ
const object = {
  user: 'Nadya',
  age: 18,
  city: 'Minsk',
  isAdmin: true,
  pets: {
    cat: true,
    dog: true,
  },
  'has car': true // но лучше сокращать до hasCar
}
console.log(object.user === undefined); // true
console.log(object.color === undefined); // false



// 2 способ 
console.log('user' in object); // именно с кавычками название свойства или передача через переменную
let color = 'color'
console.log(color in object);

// как проверить вложенное свойство есть ли внутри объекта - ДЗ






// Перебор свойств в объекте
const person = {
  name: "jared",
  age: 52,
  gender: "male",
  profession: "artist"
}

for (let key in person) {
  console.log(key); //
  console.log(person[key]) //
}

// как работает этот цикл в массиве?

// задача
// создать объект для авто с вложенным свойством 
// вывести это свойство
// удалить свойство
// переопределить свойство
// Вывести в консоль свойство и ее значение



// Важно 
// Свойства упорядочены особым образом: свойства с целочисленными ключами (строка, которая может быть преобразована в целое число и обратно без изменений.) сортируются по возрастанию, остальные располагаются в порядке создания. Пример

let codes = {
  "49": "Германия",
  "41": "Швейцария",
  "44": "Великобритания",
  // ..,
  "1": "США"
};

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}


// **************копирование объекта**************

let manager = {
  salary: 500,
}

let admin = manager;
admin.salary = 800;
console.log(manager.salary); //
console.log(admin.salary); //

console.log(manager === admin) // ?

let apple = {
  price: 200,
  bag : {
    items: 3
  }
}
let pineapple = {
  price: 200,
}
console.log(apple === pineapple) // ?

// Как клонировать объект

// способ 1 - цикл

let berry = {}
for (let key in apple) {
  berry[key] = apple[key] 
}

berry.price = 300;
console.log(berry);
console.log(apple);

// способ 2
let cherry = {}
Object.assign(cherry, apple);
cherry.price = 500
console.log(cherry, apple)

// методы объектов

function showVoice() {
  // alert('Meeaaw meeaaw! '+ this.name);
}

const nameFunc = function() {

}
const arrowFunc = (a, b) => a + b;
const arrowFunc2 = (a, b) => {
  let c = a + b;
  return c;
};

const cat = {
  name: 'Fluffy',
  printVoice: showVoice,
}
const tiger = {
  name: 'Шерхан',
  printVoice: showVoice,
}
const lion = {
  name: 'Муфаса',
  printVoice: showVoice,
}

cat.printVoice();
lion.printVoice();
tiger.printVoice()


// this - это ссылка на контекст. По умолчанию на window
// создать 2 объекта с общим методом-функцией





// Стрелочные функции + что такое arguments
// Стрелочные функции предназначены для небольшого кода
// Не имеют this
// Не имеют arguments

// let func = (arg1, arg2, ...argN) => expression
let sum = (a, b) => a + b;
let sum2 = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
  let result = a + b;
  return result; // при фигурных скобках для возврата значения нужно явно вызвать return
};
console.log( sum(1, 2) ); // 3




function triangle(arr) {
  console.log(arguments)
}

triangle(5, 6, 7);



const square = (...arr) => {
  console.log(arr)
}

square(3, 4 ,5)



// const cat = {
//   name: 'Fluffy',
//   printVoice: function(){
//     alert("My name is" + this.name +' Meeaaw meeaaw!');
//   },
//   printVoice2: () => {
//     alert("My name is" + this.name +' Meeaaw meeaaw!');
//   }
// }