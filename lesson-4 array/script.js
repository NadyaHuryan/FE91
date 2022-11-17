"use strict"

// ex 1

const colors = ['red', 'green', 'blue'];

console.log(colors.length);


// ex z2

const animals = ['monkey', 'dog', 'cat'];

console.log(animals[animals.length - 1]);


// ex 3

// variant 1
const numbers = [5, 43, 63, 23, 90];

numbers.length = 0;
console.log(numbers);

// variant 2

const numbers = [5, 43, 63, 23, 90];

numbers.splice(0);
console.log(numbers);

// variant 3

const numbers = [5, 43, 63, 23, 90];
let numbLength = numbers.length;

for (let i = 0; i < numbLength; i++) {
  numbers.pop();
}
console.log(numbers);


// ex 4

const students = ['Polina', 'Dasha', 'Masha'];

students.pop('Masha');
students.push('Borya');
students.shift('Polina');
students.unshift('Andrey');

document.write(students);


// ex 5

// variant 1

const cats = ['Gachito', 'Tom', 'Batman'];

for (let i = 0; i < cats.length; i++) {
  document.write(`${cats[i]} <br>`);
}

// variant 2

// const cats = ['Gachito', 'Tom', 'Batman'];

// for (const cat of cats) {
//   document.write(`${cat} <br>`);
// }


// ex 6

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

let numbers = evenNumbers.concat(oddNumbers);

console.log(numbers);
console.log(numbers.indexOf(8));


// ex 7

const binary = [0, 0, 0, 0];

let str = binary.join("1");

console.log(str);


// ex 8

// includes используется, если необходимо проверить просто наличие элемента в массиве, и нет необходимости знать его точный индекс.
// arr.includes(item, from) – ищет item, начиная с индекса from, и возвращает true, если поиск успешен.
// Например:

let fruits = ['cherry', 'banana', 'apple', 'grape'];

console.log(fruits.includes('cherry')); // true
console.log(fruits.includes('Cherry')); // false

// Регистр имеет значение.


// ex 9

// SLICE. Синтаксис str.slice(start [, end])
// Возвращает часть строки от start до end (не включая).

let fruits1 = 'pineapple';

// Если аргумент end отсутствует, slice возвращает символы до конца строки.
console.log(fruits1.slice(4));

// Если start/end отрицательные значения, это означает, что позиция определена как заданное количество символов с конца строки
console.log(fruits1.slice(-4, -1));

// SPLICE не работает со строками, он используется исключительно для массивов.


// ADVANCED level \\

// ex 1

function checkPalindrom(word) {
  let palindrom = word.split("").reverse().join("")
  if (word == palindrom) {
    return `палиндром`;
  } else {
    return `не палиндром`;
  }
}

console.log(checkPalindrom(`pilip`));
console.log(checkPalindrom(`snow`));


// ex 2

const matrix = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
];

// с помощью первого цикла мы проходимся по элементам matrix,
// а с поммощью вторго цикл мы уже проходимся по каждому элементу массива matrix
// (оп каждой цифре).
// count подсчитывает кол-во эл-тов массивов матрицы.

function getAverage() {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum = sum + matrix[i][j];
      count = count + 1;
    }
  }
  return sum / count;
}

console.log(getAverage());


// ex 3

// Метод filter возвращает массив из всех подходящих элементов.

const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];

// проверяет положительное ли число
function getPositiveNumb(a) {
  return a >= 0;
}

// проверяет отрицательное ли число
function getNegativeNumb(a) {
  return a < 0;
}

const positiveNumb = mixedNumbers.filter(getPositiveNumb);
const negativeNumb = mixedNumbers.filter(getNegativeNumb);

console.log(positiveNumb);
console.log(negativeNumb);
