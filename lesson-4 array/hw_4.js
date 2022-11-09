"use strict"
//TASK 1

const colors = ['red', 'green', 'blue'];
console.log(colors.length);

//TASK 2

const animals = ['monkey', 'dog', 'cat'];
console.log(animals[animals.length - 1]);
console.log(animals.at(-1));

//TASK 3
let numbers = [5, 43, 63, 23, 90];
numbers.length = 0;
console.log(numbers);

numbers = [5, 43, 63, 23, 90];
numbers.splice(0);
console.log(numbers);

//TASK 4

const students = ['Polina', 'Dasha', 'Masha'];
students.splice(2, 1);
students.push('Borya');
students.splice(0, 1);
students.unshift('Andrey');
console.log(students)

//TASK 5

const cats = ['Gachito', 'Tom', 'Batman'];
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}
for (let value of cats) {
    console.log(value);
}

//TASK 6

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

let cocat = evenNumbers.concat(oddNumbers);
console.log(cocat);
console.log(cocat.indexOf(8));

//TASK 7

const binary = [0, 0, 0, 0];

let str = binary.join('1');
console.log(str);
console.log(typeof (str));

//TASK 8

//includes(item, from) – ищет item, начиная с индекса from, и возвращает true, если поиск успешен.

let arr = [4, 5, 8, 1, false];

console.log(arr.indexOf(1)); // 3
console.log(arr.indexOf(false)); // 4
console.log(arr.indexOf(null)); // -1
console.log(arr.indexOf(4)); // 0

//TASK 9

//Метод slice() извлекает часть строки и возвращает новую строку без изменения оригинальной строки.

str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Начинает с 31 индекса: "the lazy dog."

console.log(str.slice(4, 19));
// Начинате с 4 индекса и заканчивает 19: "quick brown fox"

console.log(str.slice(-4));
// Начинает с конца 4: "dog."

console.log(str.slice(-9, -5));
// Начинает с конца 9 и заканчиавет 5 : "lazy"


//ADVANCED LEVEL***************

//TASK 3
let plusArr;
let minusArr;
const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4]
for (let i = 0; i < mixedNumbers.length; i++) {
    if (mixedNumbers[i] <= -1 && mixedNumbers[i] > -100) {
        minusArr = mixedNumbers[i].toString().split(',');
        console.log(minusArr) // НЕ ВЫВОДИТ В ОДИН МАССИВ НЕ ЗНАЮ ЧЕГО 
    }
}
for (let i = 0; i < mixedNumbers.length; i++) {
    if (mixedNumbers[i] >= 0 && mixedNumbers[i] < 500) {
        plusArr = mixedNumbers[i].toString().split(',');
        console.log(plusArr) //НЕ ВЫВОДИТ В ОДИН МАССИВ НЕ ЗНАЮ ЧЕГО(КАК И СВЕРХУ)
    }
}







