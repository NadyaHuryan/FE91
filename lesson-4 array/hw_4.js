"use strict";

/* <h1 align="center">Arrays</h1> */

// ## Complete exercise

// ### Не забывайте использовать строгий режим
// ### NORMAL level

// #### Task 1 🖥

// Дан массив:

// ```javascript
//     const colors = ['red', 'green', 'blue']
// ```
// Выведите в консоль его длину.
console.log("Task 1");

const colors = ["red", "green", "blue"];
console.log(colors.length);

// #### Task 2 🖥

// Дан массив:

// ```javascript
//     const animals = ['monkey', 'dog', 'cat']
// ```

// Выведите в консоль его последний элемент вне зависимости от его длинны.
console.log("Task 2");

const animals = ["monkey", "dog", "cat"];
console.log(animals[animals.length - 1]);

// #### Task 3 🖥

// Дан массив:

// ```javascript
//     const numbers = [5, 43, 63, 23, 90]
// ```

// Удалите все элементы в массиве и выведите в консоль полученный результат.

// > Реализуйте решение двумя способами.
console.log("Task 3");

const numbers = [5, 43, 63, 23, 90];
console.log(numbers);

numbers.length = 0; // 1-й вариант
numbers.splice(0); // 2-й вариант
console.log(numbers);

// #### Task 4 🖥

// Дан массив:

// ```javascript
//     const students = ['Polina', 'Dasha', 'Masha']
// ```

// + Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
// + Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
// + Полученный результат не забудьте вывести в консоль.
console.log("Task 4");
const students = ["Polina", "Dasha", "Masha"];
console.log(students);

//  1-й вариант

//  students.pop()
//  console.log(students)
//  students.push('Borya')
//  console.log(students)
//  students.shift()
//  console.log(students)
//  students.unshift('Andrey')
//  console.log(students)

//  2-й вариант

students.splice(0, 1, "Borya");
console.log(students);
students.splice(-1, 1, "Andrey");
console.log(students);

// #### Task 5 🖥

// Дан массив:

// ```javascript
//     const cats = ['Gachito', 'Tom', 'Batman']
// ```

// Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**.
console.log("Task 5");
const cats = ["Gachito", "Tom", "Batman"];
for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}
for (let value of cats) {
  console.log(value);
}

// #### Task 6 🖥

// ```javascript
//     const evenNumbers = [2, 4, 6, 8, 10]
//     const oddNumbers = [1, 3, 5, 7, 9]
// ```

// + Соедините два массива чисел в один.
// + В полученном массиве попробуйте найти индекс числа **`8`**

console.log("Task 6");

const evenNumbers = [2, 4, 6, 8, 10];
console.log(evenNumbers);
const oddNumbers = [1, 3, 5, 7, 9];
console.log(oddNumbers);

const allNumbers = evenNumbers.concat(oddNumbers);
console.log(allNumbers);
console.log(allNumbers.indexOf(8));

// #### Task 7 🖥

// Дан массив:

// ```javascript
//     const binary = [0, 0, 0, 0]
// ```

// + Наш бинарный массив неполный, в нем явно не хватает единиц.
// + Превратите данный массив в строку.

// > [0, 0, 0, 0] -> '0101010'
console.log("Task 7");

const binary = [0, 0, 0, 0];
console.log(binary.join("1"));

// #### Task 8 🖥

// Как работает метод includes? Привести 2 примера с комментариями
console.log("Task 8");
const arr = ["Вася", "Петя", "Маша"];
// метод includes ищет заданный элемент массива начиная с указанного индекса и возвращает true, если поиск успешный, иначе возвращает false

arr.includes("Петя"); //1-й вариант: возвращает true
arr.includes("Коля"); //2-й вариант: возвращает false

// #### Task 9 🖥
// Как работает метод splice и slice для строк? Привести 2 примера с комментариями
console.log("Task 9");

let string = "каждый охотник желает знать";
//при работе со строками, метод slice позволяет создать новую строку, в которую копируется  вся существующая строка либо ее часть от первого указанного индекса элемента строки до второго (второй индекс не включается)
string.slice(7, 14);
console.log(string.slice(7, 14));

// информации по применению метода splice для работы со строками найти не удалось. В консоль выводится информация об ошибке. Полагаю, что этот метод используется при работе с массивами и не используется при работе со строками
//   console.log(string.splice(7, 14));

// ### ADVANCED level

// > Для решения задач используйте циклы **`for`** или **`for of`**

// #### Task 1 👨‍🏫

// Реализуйте функцию которая будет проверять, является ли слово палиндромом.
console.log("Task 1 ADVANCED");

let strSplit = "";
let strReverse = "";
let strJoin = "";
function isPalindrome(str) {
  strSplit = str.split("");
  strReverse = strSplit.reverse();
  strJoin = strReverse.join("");
  if (strJoin === str) {
    return `слово "${str}" является палиндромом`;
  } else {
    return `слово "${str}" не является палиндромом`;
  }
}
console.log(isPalindrome("шалаш"));

// #### Task 2 👨‍🏫

// > Выведите в консоль среднее значение чисел в многомерном массиве.
// ```javascript
// const matrix = [
//     [12, 98, 78, 65, 23],
//     [54, 76, 98, 43, 65],
//     [13, 324, 65, 312],
//     [9092, 22, 45, 90000],
// ]

console.log("Task 2 ADVANCED");
const matrix = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
];

let avg = 0;
let sum_j = 0;

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    sum_j = sum_j + +matrix[i][j];
    avg++;
  }
}

console.log(sum_j / avg);

// #### Task 3 👨‍🏫

// Дан массив:

// ```javascript
//    const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
// ```

// Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль.

console.log("Task 3 ADVANCED");
const negativeNumbers = [];
const positiveNumbers = [];
const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];
for (let i = 0; i < mixedNumbers.length; i++) {
  if (mixedNumbers[i] >= 0) {
    positiveNumbers.push(mixedNumbers[i]);
  } else {
    negativeNumbers.push(mixedNumbers[i]);
  }
}
console.log(positiveNumbers);
console.log(negativeNumbers);

// #### Task 4 👨‍🏫
// Создать массив длинной не менее 5, из динамически созданных случайных чисел. Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив. В конце вывести оба массива в консоль.

console.log("Task 4 ADVANCED");

let min = -25;
let max = 25;
const randomNumbers = [];
const cubeRandomNumbers = [];
for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * (max - min) + min));
}

for (let i = 0; i < randomNumbers.length; i++) {
  cubeRandomNumbers.push(randomNumbers[i] ** 3);
}

console.log(randomNumbers);
console.log(cubeRandomNumbers);
