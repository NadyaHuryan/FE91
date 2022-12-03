"use strict";

//#### Task 1 🖥 ####

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// Через function declaration:

    function arrToConsole(arr){
        arr.forEach(function(currentValue){
            return console.log(currentValue);
        });   
    };

    arrToConsole(fibonacci);

// Через arrow function:

    fibonacci.forEach((item) => console.log(`${item}`));


//#### Task 2 🖥 ####

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

// Через function declaration:

function addNumber(arr){
    let usersNumber = arr.map(function(item){ 
    return item = (`member ${arr.indexOf(item) +1}: ${item}`);
    });
    console.log(usersNumber);
}
addNumber(users);

// Через arrow function:

let userNumbers = users.map(item => (`member ${users.indexOf(item) +1}: ${item}`));
console.log(userNumbers);


//#### Task 3 🖥 ####

const numbers = [7, -4, 32, -90, 54, 32, -21];

// Через function declaration:

function isPositive(arr){
    let arrPositive = arr.filter(function(item){
        return item >= 0;
    });
    console.log(arrPositive);
}

isPositive(numbers);

// Через arrow function:

let arrPositive = numbers.filter(item => item >= 0);
console.log(arrPositive);


//#### Task 4 🖥 ####

const fibonacci1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// Через function declaration:

function getSumm(arr){
    let accum = 0;
    let summOfArr = arr.reduce(function(accum, item){
        return accum + item;
    });
    console.log(summOfArr);
}
getSumm(fibonacci1);

// Через arrow function:

let summ = fibonacci1.reduce((accum, item) => accum + item, 0);
console.log(summ);


//#### Task 5 🖥 ####

const numbers1 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

// Через function declaration:

function isFirstEven(arr){
    let even = arr.find(function(item){
        return item % 2 === 0;
    });
    console.log(even);
}

isFirstEven(numbers1);

// Через arrow function:

let even = numbers1.find(item => item % 2 === 0);
console.log(even);


// ### ADVANCED level ###

// #### Task 1 👨‍🏫 ####

function getRateForStudent(arr){
    return arr[Math.floor(Math.random()*arr.length)]
 };

function Student(name, salary){
    this.name = name;
    this.salary = salary;
    this.rate = getRateForStudent(['A', 'B', 'C', 'D']);
    this.maxCredit = function(){
        let creditSumm = 0;
        switch(this.rate){
            case 'A': 
                return creditSumm = this.salary * 12;
            case 'B':
                return creditSumm = this.salary * 9;
            case 'C':
                return creditSumm = this.salary * 9;
            case 'D':
                return creditSumm;
            default:
                console.log('Нет такого значения рейтинга');
        }
    }
}

let student1 = new Student('Aliona', 1200);
let student2 = new Student('Ivan', 1300);
let student3 = new Student('Dima', 1000);
let student4 = new Student('Kate', 1500);
let student5 = new Student('Vlad', 1000);

let students = [student1, student2, student3, student4, student5];

let summOfCredit = students.reduce((accum, item) => accum + item.maxCredit(), 0)
        
console.log(summOfCredit);

    

// #### Task 2 👨‍🏫 ####

let originalStr = 'This website is for losers LOL!';
const pattern = /[AaEeIiOoUu]/
let strToArr = originalStr.split('');

let result = strToArr.filter(function(item){
    return !pattern.exec(item)
})

let modifiedSrting = result.join("");

console.log(modifiedSrting);



// #### Task 3 👨‍🏫 ####

let accum = 'RqaEzty';
let strToArray = accum.split('');
let newArray = strToArray.map((item, index) => item.repeat(index + 1));

let arr = newArray.map((item) => item.charAt(0).toUpperCase() + item.slice(1));

let modifyString = arr.join("-");
console.log(modifyString);



// #### Task 4 👨‍🏫 ####

let highAndLow = "1 4 3 2 5";
let arrHighAndLow = highAndLow.split(' ');

arrHighAndLow.sort((a, b) => a - b);

console.log(`${arrHighAndLow[arrHighAndLow.length - 1]} ${arrHighAndLow[0]}`);



// #### Task 5 👨‍🏫 ####

let word = 'moOse';
let wordToArr = word.split('');
function isIsogram(wordToArr){
  for (let i = 0; i < wordToArr.length; i++){
    let temporary = wordToArr[i]
        for (j = 0; j < wordToArr.length; j++){
            if (temporary === wordToArr[j]){
                return console.log(temporary);
            } return false;
        }
  }
}


console.log(isIsogram(wordToArr));
console.log(wordToArr);