'use strict';

function isEven(number){
    if(+number % 2 == 0){
        return true;
    } else{
        return false;
    }
};


console.log ("это правда что чиcло 40 чётное? - " + isEven(40));
console.log ("это правда что чиcло 3 чётное? - " + isEven(3));
console.log ("это правда что чиcло 4 чётное? - " + isEven(4));
console.log ("это правда что чиcло 0 чётное? - " + isEven(0));
console.log ("это правда что чиcло -3 чётное? - " + isEven(-3));
console.log ("это правда что чиcло -4 чётное? - " + isEven(-4));
console.log ("это правда что чиcло -10 чётное? - " + isEven(-10));
//task 1 NORMAL level


function getNumberLength(number){
    if (number >= 0){
        number = String(number);
        return number.length;
    }else{
        number = String(number);
        return number.length - 1;
    }


};


console.log ("длинна числа 5 равна " + getNumberLength (5));
console.log ("длинна числа 55 равна " + getNumberLength (55));
console.log ("длинна числа 555 равна " + getNumberLength (555));
console.log ("длинна числа -55 равна " + getNumberLength (-55));
console.log ("длинна числа -5 равна " + getNumberLength (-5));
console.log ("длинна числа 0 равна " + getNumberLength (0));
//task 2 NORMAL level



function getSum(number){
    let sum = 0;
    for(let i = 0; i <= number; i++){
        sum = sum + i;
    }
    return sum;
};


console.log ("сумма чисел числа 100 = " + getSum(100));
console.log ("сумма чисел числа 50 = " + getSum(50));
console.log ("сумма чисел числа 3 = " + getSum(3));
//task 3 NORMAL level


let investRate = 17;
let years = 5;

function getOverpayment(creditAmount){
    return (((creditAmount/100) * investRate) * years);
};
// скорей вcего формула неверная

console.log(getOverpayment(10000));
console.log(getOverpayment(50000));
//task 4 NORMAL level


function  trimString(userString, start, finish){
    return userString.slice(start - 1, finish);
}


console.log("функция trimString('паравоз', 5, 7 ) выдала результат  " + trimString('паравоз', 5, 7 ));
console.log("функция trimString('frendship', 1, 5 ) выдала результат  " + trimString('frendship', 1, 5 ));
//task 5 NORMAL level

function getSumNumbers(number){
    number = String(number);
    let sumNumbers = 0;


    for(let i = 0; i < number.length; i++){
        sumNumbers = sumNumbers + +number[i];
    }

    if (isNaN(sumNumbers)){
        sumNumbers ="ошибка. функция getSumNumbers работает только для целых положительных чисел";
    }

    return sumNumbers;
    }


console.log("сумма цифр числа 2021 = " + getSumNumbers(2021));
console.log("сумма цифр числа 1992 = " + getSumNumbers(1992));
console.log("сумма цифр числа 1886 = " + getSumNumbers(1886));
console.log("сумма цифр числа 100500 = " + getSumNumbers(100500));
console.log("сумма цифр числа -50 = " + getSumNumbers(-50));
console.log("сумма цифр числа 'число' = " + getSumNumbers('число'));
//task 6 NORMAL level


  let greet = (name) => {return `Hello, ${name} how are you doing today?`;}

  
  console.log(greet('Vova'));
  console.log(greet('Galina'))
//task 9 NORMAL level