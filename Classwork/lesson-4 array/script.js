
"use strict"

// **************Массивы**************

//Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, Array
//Массив - это лаконичный способ хранения списка элементов под одним именем.

// **************Создание массива****************
let arrOld = new Array(); //старый способ
let arr = []; // новый способ, обязательно указывать иначе будет ошибка
console.log(arrOld)
console.log(arr)

// разница
// let arrOldSample = new Array(3);
// let arrSample = [3];
// console.log(arrOldSample)
// console.log(arrSample)

//Отсчет элементов массива начинается с 0
arr[0] = 1; //добавление в нулевой индекс значения 1
arr[5] = 5;
arr[32] = 40;
arr["fruit"] = "Apple"; // нечисловые индексы, но лучше так не делать
console.log(arr); // пустые индексы ()
console.log(arr[2]); //undefined
console.log(arr["fruit"]);
console.log(arr[0]); // 1

//length - длина массива. Всегда на 1 больше чем последний индекс
console.log(arr.length); // 33

console.log(arr[arr.length - 1]); // как получить последний элемент в массиве?
console.log(arr)
arr.length = 2; // что произойдет и почему лучше не делать
console.log(arr)
let arr2 = [1, 20, "Hello", true] // разные типы данных в массиве
let a = 1, b = 2, c = 3;
let arr3 = [a, b, c]; // передаем переменные в массив

console.log(arr3)

let arr4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 8]
]
// многомерный массив, матрица
// как получить значение 5 из этого массива?
console.log(arr4[1][1])



// **************Методы массивов****************

// Перебор элементов в массиве. Циклы
// for
// for ... of ...
// for ... in ...
let fruits = ["Яблоко", "Апельсин", "Груша"]
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let value of fruits) {
  console.log(value);
}
for (let value in fruits) { //используется только для объектов, для массивов нет!
  console.log("for in " + value);
}


// pop/push, shift/unshift
// pop - удаление из конца
// push - добавление в конец

// shift - удаление из начала
// unshift - добавление в начало
fruits = ["Яблоко", "Апельсин", "Груша"]
// fruits[fruits.length] = "Вишня"
fruits.push("Вишня"); //["Яблоко", "Апельсин", "Груша", "Вишня"];
fruits.unshift("Ананас"); //["Ананас", "Яблоко", "Апельсин", "Груша", "Вишня"];
console.log(fruits)
let cherry = fruits.pop(); //["Ананас", "Яблоко", "Апельсин", "Груша"];
console.log(cherry);
console.log(fruits);
fruits.shift(); // ["Яблоко", "Апельсин", "Груша"]

// можно сохранять удаленные элементы в переменные
let lastFruit = fruits.pop();
console.log(lastFruit); // "Груша"
console.log(fruits); //["Яблоко", "Апельсин"]

//Добавлять можно сразу несколько 
fruits.push("Вишня", "Слива");


// Удаление из массива
// Метод delete
arr = ["Я", "Учу", "JS"];
delete arr[1]; // удаляем значение с индексом 1
console.log(arr) // образовалась дырка
console.log(arr[1]);


arr = [1, undefined, 3]
console.log(arr)


// .join() , .split()
// Какая особенность есть при работе со строками?

arr = ["Я", "Учу", "JS"];
let str = arr.join(" "); // "Я Учу JS"

let str2 = "1234";
console.log(str2);
arr = str2.split(""); //[1, 2, 3, 4]

let strText = "надежда гурьян";
let arrText = strText.split("");
for (let i = 0; i < arrText.length; i++) {
  arrText[i] = arrText[i].toUpperCase();
}
console.log(arrText);
strText = arrText.join(" ");
console.log(strText);




// .indexOf()
//Метод .indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет
arr = [1, 2, 3, 4, 5, 1];
console.log(arr.indexOf(1));
console.log(arr.indexOf(6));

// .lastIndexOf()  ищет индекс элемента с конца
arr = [1, 2, 3, 4, 5, 1];
console.log(arr.lastIndexOf(1));
console.log(arr.lastIndexOf(6));

// .reverse() - переворот. меняет сам массив

arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr)


// .splice() - удаление части массива и/или добавление новой части
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// start - индекс, по которому начинает изменять массив. 
// Если больше длины массива, реальный индекс будет установлен на длину массива. Если отрицателен, указывает индекс элемента с конца.

// deleteCount 
// Целое число, показывающее количество удаляемых из массива элементов. Если deleteCount равен 0, элементы не удаляются.


arr = ["Я", "Учу", "JS"];
arr.splice(1, 2); //начинаем с 1 индекса и удаляем 1 элемент
console.log(arr) //["Я"]


arr = ["Я", "Учу", "JS"];
arr2 = arr.splice(1, 1); //в переменную записали вырезанное слово
console.log("*********")
console.log(arr); // ["Я", "JS"]
console.log(arr2) // ["Учу"]

// .slice() - тоже что и splice, НО! не меняет текущий массив, а копирует от begin к end, не включая end

// arr.slice([begin[, end]])

// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
arr = [1, 2, 3, 4, 5];
arr2 = arr.splice(0, 3);
console.log(arr)
console.log(arr2)

// Задача
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 'c', 5, 'e'].
arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, "a", "b");
arr.splice(4, 2, "c");
arr.push("e");
console.log(arr)

//  Копирование массива
console.log("New Arrs")
arr = [1, 2, 3, 4, 5];
const arrCopy = arr;
console.log(arr);
console.log(arrCopy);

arrCopy.push(6);
console.log(arr);  //
console.log(arrCopy); //

// как можно решить задачу?
// Способ 1
arr = [1, 2, 3, 4, 5];
let arrCopy1 = [];
for (let i = 0; i < arr.length; i++) {
  arrCopy1.push(arr[i]);
}
arr.push(6);
console.log(arr)
console.log(arrCopy1)

// Способ 2
arr = [1, 2, 3, 4, 5];
arrCopy1 = arr.slice(0);
arr.push(6);
console.log(arr)
console.log(arrCopy1)

// Способ 3
// .concat()
arr = [1, 2, 3, 4, 5];
arr2 = ["Hello", "Pete"];
arr3 = []
arr3 = arr.concat(arr2);
console.log(arr3)

// Способ 4
arr = [1, 2, 3, 4, 5];
arrCopy1 = [...arr];
arr.push(6);
console.log(arr);
console.log(arrCopy1);

// Решить через циклы

////////// Задачи
// 1) Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла выведите все эти элементы на экран

let arr1 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr1.length; i++) {
  document.write(`<p>${arr1[i]}</p>`)
}


// 2) Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут быть положительными и отрицательными. Выведите на экран только отрицательные числа, которые больше -10, но меньше -3.

arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > -10 && arr2[i] < -3) {
    document.write(`<p>${arr2[i]}</p>`)
  }
}

// все отриц сделать положит

arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] < 0) {
    arr2[i] = arr2[i] * (-1);
  }

}
console.log(arr2)

// 3) Дан массив ["Banana", "Orange", "Apple", "Mango", "Apple"]. Заменить все яблоки на груши


// 4) Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].

// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5

// 5) Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].

// 7) Найдите сумму элементов массива между двумя нулями (первым и последним нулями в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или [1,8,0,13,76,8,7,0,22,0,2,3,2]


// Task 1 🖥
// Дан массив:

//     const colors = ['red', 'green', 'blue']
// Выведите в консоль его длину.
const colors = ['red', 'green', 'blue'];
console.log(colors.length);

// Task 2 🖥
// Дан массив:

//     const animals = ['monkey', 'dog', 'cat']
// Выведите в консоль его последний элемент вне зависимости от его длинны.

const animals = ['monkey', 'dog', 'cat'];
console.log(animals[animals.length - 1]);
console.log(animals.at(-1));

// Task 3 🖥
// Дан массив:

//     const numbers = [5, 43, 63, 23, 90]
// Удалите все элементы в массиве и выведите в консоль полученный результат.

// Реализуйте решение двумя способами.

const numbers = [5, 43, 63, 23, 90];
numbers.length = 0;
console.log(numbers);

const numbers = [5, 43, 63, 23, 90];
numbers.splice(0);
console.log(numbers);

// Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

let sumCount = 0;
let count = 0;
let salaries = {
  andreyK: 500,
  sveta: 413,
  anton: 987,
  andrey: 664,
  alexandra: 199
}
for (let item in salaries) {
  console.log(salaries[item]);
  sumCount += salaries[item];
  count++;

}
let avg = sumCount / count;
console.log(avg)

console.log(salaries)

//Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект. 
//Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение Добро пожалоВать

let userCheck = function () {
  let userLoginCheck = prompt('Подтвердите логин'),
    userPassCheck = prompt('Подтвердите пароль');
  if (userLoginCheck === this.login && userPassCheck === this.pass) {
    console.log('Добро пожаловать');
  } else {
    console.log('Неверно');
  }
}

let userInfo = function () {
  let userLogin = prompt('Введите логин'),
    userPass = prompt('Введите пароль'),
    userInfoObj = {
      login: userLogin,
      pass: userPass,
      check: userCheck
    };
  return userInfoObj;
}

let user1 = userInfo();

user1.check();


//ТАблица умножения


let i = 0;
for (i = 1; i <= 10; i++) {
  document.write(i + `<br> `);
  for (let j = 1; j <= 10; j++) {
    document.write(`${i} * ${j} = ${i * j} <br>`)
  }
}

