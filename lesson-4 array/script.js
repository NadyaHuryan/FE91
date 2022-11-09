"use strict";

//##### Task 1 🖥 #####

const colors = ['red', 'green', 'blue'];
console.log(colors.length);

//##### Task 2 🖥 #####

const animals = ['monkey', 'dog', 'cat'];
console.log(animals[animals.length - 1]);
console.log(animals.at(-1));

//##### Task 3 🖥 #####

// Способ 1
const numbers = [5, 43, 63, 23, 90];
numbers.length = 0;
console.log(numbers);

// Способ 2
const numbers = [5, 43, 63, 23, 90];
numbers.splice(0);
console.log(numbers);

//##### Task 4 🖥 #####

const students = ['Polina', 'Dasha', 'Masha'];
// быстрый вариант:
// students[2] = `Borya`;
// students[0] = `Andrey`; 

// а так согласно заданию:
students.pop();
students.push(`Borya`);

students.shift();
students.unshift(`Andrey`);
console.log(students);

//##### Task 5 🖥 #####

const cats = ['Gachito', 'Tom', 'Batman'];
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

const cats_ = ['Gachito', 'Tom', 'Batman'];
for (let value of cats_) {
    console.log(value);
}

//##### Task 6 🖥 #####

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const allNumbers = evenNumbers.concat(oddNumbers);
console.log(allNumbers);
console.log("Индекс числа 8 равен " + allNumbers.indexOf(8));

//##### Task 7 🖥 #####

const binary = [0, 0, 0, 0];
let strBinary = binary.join("1");
console.log(strBinary);

//##### Task 8 🖥 #####

//метод includes ищет элемент в массиве (всём массиве или начиная с 
// определённого индекса), схож c методом indexOf(), но в результате поиска 
// элемента возвращает true или false. Как пример можно искать слова (символы) в строках:

let string = "Я люблю кодить по ночам";
let search = string.includes("кодить"); // true

// или икать элементы в массивах:

const students_ = ['Polina', 'Dasha', 'Masha'];
let searchName = students_.includes('Polina'); // true
let searchName_ = students_.includes('Polina', 1); // false, ищет с индекса 1


//##### Task 9 🖥 #####

// метод splice() для сток не используется. Метод slice() возвращает
// часть исходной строки (не меняя её).

let str1 = 'Не забыть посадить картошку!';
let str2 = str1.slice(0); // вернёт стороку без изменений

let str3 = str1.slice(3, 9); // вернёт кусок строки - символы с 3 по 9 ('забыть')


// ##### ADVANCED level #####

//##### Task 1 👨‍🏫 #####

function isPalindrom(someWord) {
    let arrSomeWord = someWord.split("");
    
}

//##### Task 2 👨‍🏫 #####

//##### Task 3 👨‍🏫 #####

//##### Task 4 👨‍🏫 #####