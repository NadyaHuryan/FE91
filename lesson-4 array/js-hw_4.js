"use strict";
//1

const colors = ['red', 'green', 'blue'];

console.log(colors.length);

//2

const animals = ['monkey', 'dog', 'cat'];

console.log(animals[animals.length - 1]);

//3

const numbers = [5, 43, 63, 23, 90];

console.log(numbers.length);

numbers.splice(0); // first method

console.log(numbers.length);

numbers.length = 0; //second method

console.log(numbers.length);

//4

const students = ['Polina', 'Dasha', 'Masha'];

students.pop();

students.push("Borya");

students.shift();

students.unshift("Andrey");

console.log(students);

//5

const cats = ['Gachito', 'Tom', 'Batman'];

for(let i = 0; i < cats.length; i++){
    console.log(cats[i]);
}

for(let value of cats){
    console.log(value);
}

//6

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const allNumbers = evenNumbers.concat(oddNumbers);

console.log(allNumbers);

for(let value of allNumbers){
    if(allNumbers[value] == "8"){
        console.log(value);
    }
}

//7

const binary = [0, 0, 0, 0];

let strBinarfy = binary.join("1");

console.log(strBinarfy);

//8
/*includes() определяет, содержит ли массив определенный элемент, и в результате проверки выводит true/false */

console.log(colors.includes("red"));

console.log(animals.includes("cat"));

//9

//Метод slice() извлекает часть строки и возвращает новую строку без изменения оригинальной строки.

const str1 = "one two free four five"

console.log(str1.slice(4));

const str2 = "Monday"

console.log(str2.slice(3));

// а splice насколько я поняла не используется для строк, только если сплитом в массив преобразовать сначала

//ADVANCED level

//1

function checkPalindrome(str) 
{
    let palin = str.split("").reverse().join("");

    if (palin === str){
        return true;
    } else {
        return false;
    }
}   

console.log(checkPalindrome("eye"));
console.log(checkPalindrome("red"));
console.log(checkPalindrome("потоп"));

//2

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]

function getSum(numb) {
    let sum =0;
    let quant =0;
    for (let i = 0; i < numb.length; i++){
        for (let j = 0; j < [i].length; j++){
            sum += numb[i][j];
            quant +=1;
        }
    }
    return sum/quant
}
console.log(getSum(matrix));

//3

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
let minNumbers = [];
let plusNumbers = [];
    for(let i = 0; i < mixedNumbers.length; i++){
        if(mixedNumbers[i] > 0){
            plusNumbers.push(mixedNumbers[i]);
        }else{
            minNumbers.push(mixedNumbers[i]);
    }
}

console.log(minNumbers);
console.log(plusNumbers);
console.log(mixedNumbers);

//4

let matrixCub = [];
matrixCub.length = prompt("Введите длинну массива (она должна быть не менее 5)");
let newMatrixCub = [];

if(matrixCub.length < 5){
    alert("Ошибка, длинна массива меньше 5")
} else{
    for(let i = 0; i < matrixCub.length; i++){
        matrixCub[i] = Math.floor(Math.random() * 100);// выводим рандомное знаение от 0 до 1(не включая саму единицу), умножаем до нужного максимального диапазона и все это округляем в меньшую сторону (макс возможное число будет 99)
    }
    console.log(matrixCub); 

    newMatrixCub = [...matrixCub];

    for(let i = 0; i < newMatrixCub.length; i++){
        newMatrixCub[i] = newMatrixCub[i] ** 3;
    } 

    console.log(newMatrixCub);
}    

    
    