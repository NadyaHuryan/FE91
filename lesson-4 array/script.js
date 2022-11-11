'use strict';

const colors = ['red', 'green', 'blue'];
console.log(colors.length);
//task 1  NORMAL level 



const animals = ['monkey', 'dog', 'cat'];
console.log(colors[colors.length-1]);   //old version
console.log(colors.at(-1));             // new version
//task 2  NORMAL level 



const numb1 = [5, 43, 63, 23, 90];
numb1.length = 0;
console.log(numb1);
//version 1


const numb2 = [5, 43, 63, 23, 90];
numb2.splice(0, numb2.length);
console.log(numb2);
//version 2

const numb3 = [5, 43, 63, 23, 90];
for (let i = numb3.length ; i > 0; i--) {
  numb3.pop();
};
console.log(numb3);
//version 3
//task 3  NORMAL level 



const students1 = ['Polina', 'Dasha', 'Masha'];

students1.pop();
students1.push('Borya');
students1.shift();
students1.unshift('Andrey');

console.log(students1);
//version 1

const students2 = ['Polina', 'Dasha', 'Masha'];
students2.splice(students2.length-1 , 1, 'Borya');
students2.splice(0, 1, 'Andrey');
console.log(students2);
//version 2 
//task 4  NORMAL level 



const cats = ['Gachito', 'Tom', 'Batman']

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}


for (let cat of cats) {
  console.log(cat);
}
//task 5 NORMAL level 


const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

let arrNumbers = evenNumbers.concat(oddNumbers);
console.log("индекс числа 8 = " + arrNumbers.indexOf(8));

arrNumbers = oddNumbers.concat(evenNumbers);
console.log("индекс числа 8 = " + arrNumbers.indexOf(8));


arrNumbers.sort((a, b) => a - b );     // функцияя сортировки с лернджаваскрипт ру, хочу её разобрать на адванс уровне по функциям 
console.log("индекс числа 8 = " + arrNumbers.indexOf(8));
// так и проситься сортировка, надо 8ку поставить на место =))
//task 6 NORMAL level 


const binary = [0, 0, 0, 0];
let binaryAsStr = binary.join(1);
console.log(binaryAsStr);
//task 7 NORMAL level 



const arr8 = ["вера", "надежа", "любовь"];
console.log (arr8.includes("вера"));
//метод includes ищет совпадение с каким-то значеним  по элементам масива и возвращает true/false


const numbers8 = [3, 5, 8, 11, 23, 7, NaN];
console.log (numbers8.includes(NaN));
console.log (numbers8.indexOf(NaN));
//ищет NaN !!! ура!!!
//task 8 NORMAL level 




let str9 = "Lorem ipsum";

console.log(str9.slice(2, 6));    //работает со строками
console.log(str9.slice(-2, -6));  // так тоже работает, отсчёт с конца строки
//console.log(str9.splice()); - не работает со строками, только с масивами.
// метод slice - не деструктивный, а splice - деструктивный -  меняет масив, но строки "неизменны"!!
//task 9 NORMAL level 



function isPolindrom (str){
  let polindrom = str.split("").reverse().join("");
  return str === polindrom;
}

console.log(isPolindrom("tenet"));
console.log(isPolindrom("mama"));

function isPolindrom2(str){
  let arrStr =  str.split("");
  let halfLenght = Math.ceil(((arrStr.length) / 2));
  let result = true;
  for (let i = 0; i < halfLenght; i++){
    (arrStr[i] === arrStr[arrStr.length-[i+1]]) ? result = result : result = false;
    /*
     попарное сровнение с двух концов, 
     если пары не совподают -> result перезаписываеться, 
     если совподают не меняеться =))
     */
  }
  return result;
} 

console.log(isPolindrom2("tenet"));
console.log(isPolindrom2("mama"));
console.log(isPolindrom2("redder")); // в русском  языке есть чётный полиндром?
console.log(isPolindrom2("шалаш"));
// task 1 ADVANCED level



const matrix = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
]

let sum = 0;
let count = 0 
for (let i = 0; i < matrix.length; i++ ){

   for ( let j = 0; j < matrix[i].length; j++){       
    sum += matrix[i][j];  
    count++;                            
   }

   
};
console.log(sum / count);
// task 2 ADVANCED level

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];

let posetiveNumbs = [];
let negativeNumbs = [];

for (let i = 0; i < mixedNumbers.length; i++){
  (mixedNumbers[i] >= 0) ? posetiveNumbs.push(mixedNumbers[i]) : negativeNumbs.push(mixedNumbers[i]);
}

console.log(posetiveNumbs);
console.log(negativeNumbs);
 
// task 3 ADVANCED level
