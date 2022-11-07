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
    console.log(sumForGetSum);
}
getSum(100);
getSum(-100);

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
    console.log( sumOverpayment);
}
showOverpaymentCredit(500);
showOverpaymentCredit(100);
showOverpaymentCredit(333);

//5

function trimString(stringTrim, before, after) {

   console.log(stringTrim.substring(before, after));
}

trimString("Кошелек", 0, 3);
trimString("Сарафан", 2, 6);

//6

function getSumNumber(numb) {
    if(!isNaN(numb)){
        let numbString = ""+numb;
        let sum = 0;
        for (let i=0; i < numbString.length; i++){
            sum += +numbString[i];
        }
        console.log(sum);
    } else{
        console.log("Not a number");
    }
}
getSumNumber(2021);
getSumNumber("2022");
getSumNumber("text");

//7

function getSumTwo(a, b) {
    let min = (a < b)? a :b;
    let max = (a > b)? a :b;
    let sumForGetSum = 0;
    for (let i = min; i <= max; i++) {
        sumForGetSum +=i 
    } 
    console.log(sumForGetSum);
}
getSumTwo(1,1);
getSumTwo(-1,2);
getSumTwo(1,2);

//8

function foo(){
   return "foo"
}

function boo() {
    return "boo"
}

function fooboo (bool, foo, boo) {
    if (bool) {
        console.log(foo)
    } else {
        console.log(boo)
    }
}
fooboo (true, foo(), boo())
fooboo (1, foo(), boo())
fooboo (0, foo(), boo())
fooboo (NaN, foo(), boo())

//9

function showUserName (name){
    document.write(`Hello, ${name} how are you doing today?`);
}
showUserName (prompt('Введите ваше имя'));

// ADVANCED level

//1

function checkTriangle(a, b, c){
    if (a||b||c !==0){
       if ((a + b > c) && (a + c > b) && (b + c > a)) {
        console.log("true");
        } else {
        console.log("false");
        } 
    } else {
        console.log("false");
    }
   
}
checkTriangle(1, 1, 1);
checkTriangle(3, 1, 1);
checkTriangle(1, 2, 3);
checkTriangle(0, 0, 0);

//2

function getManipulationNumber(x){
    if (!isNaN(x) & x!=""){
        let xStr = String(x)
        let quantaty = 0;
        let sum = 0;
        let reverse = "";
        document.write(`<br> Разбиваем число ${x} на цифры: <br>`);
        for (let i = 0; i  < xStr.length; i++){
            let сhar = xStr[i];
            quantaty += i;
            sum += +xStr[i];
            document.write(`${сhar} <br>`);
            
        }
        for (let i = 1; i  < xStr.length + 1; i++){
            reverse += xStr[xStr.length - i];
        }
        document.write(`Подсчитывакм количество цифр в числе ${x}: <br>`);
        document.write(`${quantaty} <br>`);
        document.write(`Находим сумму цифр числа ${x}: <br>`);
        document.write(`${sum} <br>`);
        document.write(`Ввыводим число ${x} в обратном порядке: <br>`);
        document.write(`${reverse} <br>`);
    } else{
        alert("Ошибка, надо ввести число")
    }
}
getManipulationNumber(prompt("Введите число"));

//3

function getPerimeter(a, b){
    let p = 0;
    return  p = 2 * (a + b);
}
function showPerimeter(x, y){
    let resultPerimetr = getPerimeter(x, y)
    console.log(resultPerimetr)
}
showPerimeter(2, 4);

//4

function dutyFree(normPrice, discount, hol){
    let sum = hol / (normPrice * (discount / 100));
    console.log(Math.floor(sum));
}
// dutyFree(10, 10, 500);
dutyFree(prompt("Введите стоимость товара"), prompt("Введите сумму скидки"), prompt("Введите стоимость отпуска"));