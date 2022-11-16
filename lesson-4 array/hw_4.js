// Task 1

const colors = ['red', 'green', 'blue'];

console.log(colors.length);

// Task 2

const animals = ['monkey', 'dog', 'cat'];

console.log(animals[animals.length-1]);
console.log(animals.at(-1));

// Task 3

const numbers = [5, 43, 63, 23, 90];
numbers.length = 0;
console.log(numbers);

const numbers = [5, 43, 63, 23, 90];
numbers.splice(0);
console.log(numbers);

// Task 4

const students = ['Polina', 'Dasha', 'Masha'];

students.pop();
students.push('Borya');
students.shift();
students.unshift('Andrey');

console.log(students);

// Task 5

const cats = ['Gachito', 'Tom', 'Batman'];

for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

for (let value of cats) {
    console.log(value);
}

// task 6

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

// const together = [...evenNumbers, ...oddNumbers];
const together = evenNumbers.concat(oddNumbers);

console.log(together);

console.log(together.indexOf(8));

// Task 7

const binary = [0, 0, 0, 0];
let str;

binary.splice(1, 0, 1);
binary.splice(3, 0, 1);
binary.splice(5, 0, 1);

str = binary.join("");


// Task 8

// Метод includes() определяет, содержит ли массив определённый элемент, 
// возвращая в зависимости от этого true или false

const arr1 = [1, 2, 3];
console.log(arr1.includes(2)); // true

students = ['Polina', 'Dasha', 'Masha'];
console.log(students.includes(undefined)); // false

// Task 9

// slice() извлекает часть строки и возвращает ее как новую строку 
// без изменения исходной строки.

let strText = 'Съешь ещё этих мягких французских булок, да выпей чаю';
console.log(strText.slice(44)); // выпей чаю
console.log(strText.slice(-31)); // французских булок, да выпей чаю

// splice() со строками не работает, насколько гугл сказал
// но можно использовать следующий метод, который в парамертры функции передаёт
// саму строку, индекс (позицию), счетчик и что добавить

function spliceSplit(str, index, count, add) {
    let ar = str.split('');
    ar.splice(index, count, add);
    return ar.join('');
}

// Advanced 

// Task 1

let checkPalindrom = function (str) {
    return str == str.split('').reverse().join('');
}

console.log(checkPalindrom('не'));

// Task 2

let sum = 0,
    counter = 0;

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        sum += matrix[i][j];
        counter++;
    }
}

console.log(sum, sum/counter);

// Task 3

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];

const plusNumbers = [],
      minusNumbers = [];

for (let value of mixedNumbers) {
    if (value <= 0) {
        minusNumbers.push(value);
    } else {
        plusNumbers.push(value);
    }
}

console.log(minusNumbers);
console.log(plusNumbers);

// Task 4

const randomNumb = [1, 31, 6, 29, 52, 7, 17, 23],
      cube = [];

for (let value of randomNumb) {
    cube.push(value ** 3);
}

console.log(randomNumb);
console.log(cube);