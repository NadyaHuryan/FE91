/////////////Задание 1/////////////
const colors = ['red', 'green', 'blue'];
console.log(colors.length);

/////////////Задание 2/////////////
const animals = ['monkey', 'dog', 'cat'];
console.log(animals[animals.length - 1]);

/////////////Задание 3/////////////
const numbers = [5, 43, 63, 23, 90];
numbers.length = 0;
console.log(numbers);
/////////////Задание 4/////////////
const students = ['Polina', 'Dasha', 'Masha'];
students.pop();
students.push("Borya");
console.log(students);

/////////////Задание 5/////////////
//1//
const cats = ['Gachito', 'Tom', 'Batman'];
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i])
}
//2//
const catsOne = ['Gachito', 'Tom', 'Batman'];
for (let lol of catsOne) {
    console.log(lol);
}
/////////////Задание 6/////////////
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
let arr = evenNumbers.concat(oddNumbers);
console.log(arr);
console.log(arr.indexOf(8));
/////////////Задание 7/////////////
const binary = [0, 0, 0, 0];
str = binary.join('1');
alert(str);
console.log(str)
/////////////Задание 8/////////////
const array1 = [1, 2, 3];
console.log(array1.includes(4));
console.log(array1.includes(2));
//Если есть в масиве то выдает true, если нету то folse//
/////////////Задание 9/////////////
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