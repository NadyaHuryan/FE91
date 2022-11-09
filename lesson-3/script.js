"use strict";

//#### Task 1 💻 #####

function isEven(f) {
    return (f % 2 === 0);
}
console.log(isEven(5));
console.log(isEven(8));

//#### Task 2 💻 #####

function checkNumberLength(g) {
    return String(g).length;
}
console.log(checkNumberLength(1234567));

//#### Task 3 💻 #####

function getSum(h) {
    return (h * (h + 1)) / 2; //формула из курса школьной математики. работает.
}
console.log(getSum(100));


//#### Task 4 💻 #####

function getOverpay(e) {
    const taxPerYear = 17;
    const taxPerMonth = (taxPerYear / 12) / 100;
    const yearPeriod = 5;
    const monthPeriod = yearPeriod * 12;
    //расчитаем платёж в месяц (аннуитетный тип кредита, когда платежи разбиты на равные части):
    const payPerMonth = (e * (taxPerMonth * ((1 + taxPerMonth) ** monthPeriod)) / (((1 + taxPerMonth) ** monthPeriod) - 1));
    console.log (`Переплата за кредит на сумму ${e} на ${yearPeriod} лет составит ${Math.round(((payPerMonth * monthPeriod) - e))}`);
    // применил округление для красивости
}
getOverpay(100000);

//#### Task 5 💻 #####

function trimString(someString, from, to) {
   console.log(someString.substr(from, to));
}
// честно говоря не пошла эта задача совсем... подсмотрел, что есть такой метод substr() - работает
// substr() возвращает указанное количество символов из строки, начиная с указанной позиции
trimString('Hello world', 0, 5);

//#### Task 6 💻 #####

function getSumNumbers(num) {
    if (num != null && num != undefined){
        let numToString = String(num);
        sum = 0;
        for(i = 0; i <numToString.length; i++){
            sum += Number(numToString[i]);
            console.log(sum);
        }
        } else {
            console.log('Error');
        }
    }
    getSumNumbers(2021);

//#### Task 7 💻 #####

function getSum(a,b) {
    let min = (a < b) ? a : b;
    let max = (a > b) ? a : b;
    let sum = 0;
    if (a === b) {
        console.log(a + ' Since both are same');
    } else {
    for (i = min; i <= max; i++) {
        sum += i;
    }
    console.log(sum);
    }
}
getSum(3, 2);

//#### Task 8 💻 #####

function foo() {
    return console.log('foo');
}

function boo() {
    return console.log('boo');
}

function fooboo(bool, param1, param2) {
    return bool ? foo() : boo();
}
fooboo(0, 2, 3);

//#### Task 9 💻 #####

function greet(name) {
    return console.log(`"Hello, ${name} how are you doing today?"`);
}
greet('Siarhei');


// ### ADVANCED level ####

// #### Task 1 👨‍🏫 ####

function isTriangle(a, b, c) {
    // формула из теоремы о существовании треугольника
    return console.log((a + b > c) && (a + c > b) && (b + c > a));
}
isTriangle(10, 2, 9);

// #### Task 2 👨‍🏫 #### не получается, оставил на подумать 

function separateNumber(anyNum) {
    let numToString = String(anyNum);
    console.log(`Цифры числа ${anyNum}:`);
    for (i = 0; i < numToString.length; i++) {
        anyNum = numToString[i] + ' ';
        return console.log(anyNum);
    }
}
separateNumber(456789);
function countNumber(anyNum){
    let count = String(anyNum).length;
    return console.log (`В числе ${anyNum} ${count} цифр`);
}

function summNumber(anyNum){
    let numToString = String(anyNum);
    sum = 0;
    for(i = 0; i < numToString.length; i++){
        sum += Number(numToString[i]);
        return console.log(`Сумма чисел числа ${anyNum} равна ${sum}`);
    }
}

function reverseNumber(anyNum){

}

// #### Task 3 👨‍🏫 ####

const areaOrPerimeter = function(l , w) {
    if (l != w){
      return console.log(l * 2 + w * 2);
    } else {
      return console.log(l ** 2);
    }
  }
  areaOrPerimeter(3, 3);

