"use strict";
//1

function isEven(x) {
    return x % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(3));

//2

function checkLengs(k) {
    return String(k).length;
}

console.log(checkLengs(123456789));
console.log(checkLengs("Hellow world"));

//3



function getSum(b) {
    let a = 0; 
    let min = (a < b)? a :b;
    let max = (a > b)? a :b;
    let sumForGetSum = 0;
    for (let i = min; i <= max; i++) {
        sumForGetSum +=i 
    } 
    return sumForGetSum;
}
console.log(getSum(100));
console.log(getSum(-100));

//4

/*Рассчитывала с помощью формулы ДИФФЕРЕНЦИРОВАННОГО платежа.
Суть его состоит в том, что с каждым месяцем сумма фактической задолженности  уменьшается соразмерно ежемесячным выплатам
Результаты рассчетов можно сверить здесь: https://calcus.ru/kreditnyj-kalkulyator
!За количество дней в месяце взяла среднее арифметическое 30,4 
Весокосный год не брала в рассчет.
Из-за этого результат может на долю десятых отличаться от реалного*/ 

function showOverpaymentCredit(b) {
    let rate = 17;
    let years = 5;
    let mounth = years * 12;
    let everyMountPay = b / mounth;
    let overpayment = 0;
    let sumOverpayment = 0;
    for (let i = 0; i <= mounth; i++){
        overpayment = (((b - (everyMountPay * i))* (rate/100))/365)*30.4;
        sumOverpayment += overpayment;
    }
    return sumOverpayment;
}
console.log(showOverpaymentCredit(500));
console.log(showOverpaymentCredit(100));
console.log(showOverpaymentCredit(333));

//5

function trimString(stringTrim, before, after) {

   return stringTrim.substring(before, after);
}

console.log(trimString("Кошелек", 1, 3));
console.log(trimString("Сарафан", 2, 6));

//6

function getSumNumber(numb) {
    if(!isNaN(numb)){
        let numbString = ""+numb;
        let sum = 0;
        for (let i=0; i < numbString.length; i++){
            sum += +numbString[i];
        }
        return sum;
    } else{
        return "Not a number";
    }
}
console.log(getSumNumber(2021));
console.log(getSumNumber("2022"));
console.log(getSumNumber("text"));

//7

function getSumTwo(a, b) {
    let min = (a < b)? a :b;
    let max = (a > b)? a :b;
    let sumForGetSum = 0;
    for (let i = min; i <= max; i++) {
        sumForGetSum +=i 
    } 
    return sumForGetSum;
}
console.log(getSumTwo(1,1));
console.log(getSumTwo(-1,2));
console.log(getSumTwo(1,2));

//8

function foo() {
    return "foo"
}

function boo() {
    return "boo"
}

function fooboo (bool, fooNew, booNew) {
    if (bool) {
        return fooNew()
    } else {
        return booNew()
    }
}
console.log(fooboo (true, foo, boo))
console.log(fooboo (1, foo, boo))
console.log(fooboo (0, foo, boo))
console.log(fooboo (NaN, foo, boo))

//9

function showUserName (name) {
    return (`Hello, ${name} how are you doing today?`);
}
document.write(showUserName (prompt('Введите ваше имя')));

// ADVANCED level

//1

function checkTriangle(a, b, c) {
    if (a||b||c !==0){
       if ((a + b > c) && (a + c > b) && (b + c > a)) {
        return "true";
        } else {
        return "false";
        } 
    } else {
        return "false";
    }
   
}
console.log(checkTriangle(1, 1, 1));
console.log(checkTriangle(3, 1, 1));
console.log(checkTriangle(1, 2, 3));
console.log(checkTriangle(0, 0, 0));

//2

function getManipulationNumber(x) {
    if (!isNaN(x) && x!=""){
        let xStr = String(x)
        let quantaty = 0;
        let sum = 0;
        let reverse = "";
        let сhar = "";
        for (let i = 0; i  < xStr.length; i++){
            сhar += xStr[i];
            quantaty += i;
            sum += +xStr[i];
            
            
        }
        for (let i = 1; i  < xStr.length + 1; i++){
            reverse += xStr[xStr.length - i];
        }
        return (`<br> Разбиваем число ${x} на цифры: <br>
        ${сhar} <br>
        Подсчитывакм количество цифр в числе ${x}: <br>
        ${quantaty} <br>
        Находим сумму цифр числа ${x}: <br>
        ${sum} <br>
        Ввыводим число ${x} в обратном порядке: <br>
        ${reverse} <br>`);
    } else{
        return `<br> Ошибка, надо ввести число`;
    }
}
document.write(getManipulationNumber(prompt("Введите число")));

//3

function getPerimeter(a, b) {
    let p = 0;
    return  p = 2 * (a + b);
}

console.log(getPerimeter(2, 4));

//4

function dutyFree(normPrice, discount, hol) {
    let sum = hol / (normPrice * (discount / 100));
    return Math.floor(sum);
}
// dutyFree(10, 10, 500);
console.log(dutyFree(prompt("Введите стоимость товара"), prompt("Введите сумму скидки"), prompt("Введите стоимость отпуска")));