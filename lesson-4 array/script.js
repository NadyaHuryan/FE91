//TASK 1

const colors = ['red', 'green', 'blue'];

console.log(colors.length);

//TASK 2

const animals = ['monkey', 'dog', 'cat']

console.log(animals[animals.length - 1]);

//TASK 3

const numbers1 = [5, 43, 63, 23, 90];
numbers1.length = 0;
console.log(numbers1);

const numbers2 = [5, 43, 63, 23, 90];
numbers2.splice(0);
console.log(numbers2);

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

//ADVANCED TASK 1

function isPalindrom(str){
    strReverse = str.split('').reverse().join('');
    if (str == strReverse) {
        return console.log("слово палиндром")
    } else console.log("слово не палиндром")
}

isPalindrom("тенет");
isPalindrom("парк");

//ADVANCED TASK 2

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
];

let newArr = matrix.flat(Infinity);
let sum = 0;
for (let i = 0; i < newArr.length; i++) {
         sum = sum + newArr[i];
}
let averageNum = sum / newArr.length;

console.log(averageNum);

//ADVANCED TASK 3

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
let positiveArr = [];
let negativeArr = [];

for (let i = 0; i < mixedNumbers.length; i++) {
    if (mixedNumbers[i] >= 0) {
        positiveArr.push(mixedNumbers[i]);
    } else {
        negativeArr.push(mixedNumbers[i]);
    }
}

console.log(positiveArr);
console.log(negativeArr);