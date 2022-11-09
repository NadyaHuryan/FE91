//TASK 1

const colors = ['red', 'green', 'blue'];

console.log(colors.length);

//TASK 2

const animals = ['monkey', 'dog', 'cat']

console.log(animals[animals.length - 1]);

//TASK 3

const numbers = [5, 43, 63, 23, 90];
numbers.length = 0;
console.log(numbers);

const numbers = [5, 43, 63, 23, 90];
numbers.splice(0);
console.log(numbers);

//TASK 4

const students = ['Polina', 'Dasha', 'Masha'];

students.pop();
students.push('Borya');
students.shift();
students.unshift('Andrey');

console.log(students);

//TASK 5

const cats = ['Gachito', 'Tom', 'Batman'];

for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

for (let names of cats) {
    console.log(names);
}

//TASK 6

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const arr3 = evenNumbers.concat(oddNumbers);

console.log(arr3);
console.log(arr3.indexOf(8));

//TASK 7

const binary = [0, 0, 0, 0];

for (let i = 0; i < binary.length; i++) {
    binary[i] = binary[i] + "1";
}

console.log(binary.join(""));

//TASK 8

let arr1 = [1, 2, 3, 4, 5];

console.log(arr1.includes(3)); //проверяет есть ли определённый элемент в массиве возвращает true или false
console.log(arr1.includes(6)); //false

//TASK 9

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arr6 = arr4.splice(3, 4); //удаляет часть массива с обновлением исходного массива
let arr7 = arr5.slice(3, 6); //копирует часть массива не изменяя исходного массива

console.log(arr4);
console.log(arr6);
console.log(arr5);
console.log(arr7);

//ADVANCED TASK 9

