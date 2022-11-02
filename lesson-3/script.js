'use strict';

function isEven(number) {
    if (+number % 2 == 0) {
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


function getNumberLength(number) {
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



function getSum(number) {
    let sum = 0;
    for(let i = 0; i <= number; i++) {
        sum = sum + i;
    }
    return sum;
};


console.log ("сумма чисел числа 100 = " + getSum(100));
console.log ("сумма чисел числа 50 = " + getSum(50));
console.log ("сумма чисел числа 3 = " + getSum(3));
//task 3 NORMAL level


function getOverpayment(creditAmount, years, investRate) {
    // let time = years * 12;
    // let sum = 0;
    // let percent = 0;

    // for (let i = 0; i <= time; i++) {


    // }
};
// скорей вcего формула неверная

console.log(getOverpayment(10000));
console.log(getOverpayment(50000));
//task 4 NORMAL level


function  trimString(userString, start, finish) {
    return userString.slice(start - 1, finish);
}


console.log("функция trimString('паравоз', 5, 7 ) выдала результат  " + trimString('паравоз', 5, 7 ));
console.log("функция trimString('frendship', 1, 5 ) выдала результат  " + trimString('frendship', 1, 5 ));
//task 5 NORMAL level

function getSumNumbers(number) {
    number = String(number);
    let sumNumbers = 0;

    for(let i = 0; i < number.length; i++){
        sumNumbers = sumNumbers + +number[i];
    }

    if (isNaN(sumNumbers)) {
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

function getSum2(a, b) {
    if ( a == b){
        return `${a} Since both are same`;
    } else {

        let start, finish;
        if( a < b){
            start = a;
            finish = b;
        } else {
            start = b;
            finish = a;
        }
            /// код из функции getSum ; тупняк
            let sum = start;
            for(let i = 0; i <= finish - start; i++) {
                sum = sum + i;
            }
            return sum;


     }

}

console.log(getSum2(1, 0));  
console.log(getSum2(1, 2)); 
console.log(getSum2(3, 1)); 
console.log(getSum2(0, 1));
console.log(getSum2(1, 1));
console.log(getSum2(-1, 0));
console.log(getSum2(-1, 2));
//task 7 NORMAL level


function foo(){
    console.log(`foo`);
}


function boo(){
    console.log(`boo`);
}

function fooboo(boleanValue, yes, no){
    if (boleanValue == true)  yes() 
    else no();
}

console.log ("результат работы fooboo(true, foo, boo)");
fooboo(true, foo, boo);
console.log ("результат работы fooboo(false, foo, boo)");
fooboo(false, foo, boo);
//task 8 NORMAL level
  let greet = (name) => {return `Hello, ${name} how are you doing today?`;}

  
  console.log(greet('Vova'));
  console.log(greet('Galina'))
//task 9 NORMAL level

function checkTriangle(a, b, c){
    if((a < b+c) && (b < a+c) && (c < a+b)){
        return true;
    }else{
        return false;
    }
}

console.log('возможен ли треугольник со сторонами: 5 7 3 - ' + checkTriangle(5, 7, 3));
console.log('возможен ли треугольник со сторонами: 10 5 3 - ' + checkTriangle(10, 5, 3));
console.log('возможен ли треугольник со сторонами: 7 7 7 - ' + checkTriangle(7, 7, 7));
//task 1 ADVANCED level 


function getReversString(string){
    string = String(string);
    let reversString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversString += string[i];
      }
    return  reversString
}
// функции под условие d, под условия a, b и с функции выше по коду


let n = +prompt('введи число', 123);


alert(`
введено число ${n}
цифр в числе = ${getNumberLength(n)}
сумма = ${getSumNumbers(n)}
обратный порядок ${getReversString(n)}
`)
//task 2 ADVANCED level


// в kata другие условия задачи №3 !! 
let getRectanglePerimeter = (w,l) => {return (w + l) * 2};


// альтернаитивная версия 
// function getRectanglePerimeter(w,l){
//     return (w + l) * 2;
// }

console.log("периметр прямоугольника со сторанами 4 и 3 = " + getRectanglePerimeter(4,3));
console.log("периметр прямоугольника со сторанами 10 и 6 = " + getRectanglePerimeter(10,6));
console.log("периметр прямоугольника со сторанами 5 и 5 = " + getRectanglePerimeter(5,5));
//task 3 ADVANCED level 

function dutyFree(normPrice, discount, hol){
    return Math.floor(hol / (normPrice  * (discount / 100)));
   }


   console.log("отпускные 500$, бухлишко за 10$ со скидой 10%, бутылок в отпуске - " + dutyFree(10, 10, 500));
   console.log("отпускные 1000$, бухлишко за 12$ со скидой 50%, бутылок в отпуске - " + dutyFree(12, 50, 1000));
   console.log("отпускные 500$, бухлишко за 17$ со скидой 10%, бутылок в отпуске - " + dutyFree(17, 10, 500));
   console.log("отпускные 3000$, бухлишко за 35$ со скидой 35%, бутылок в отпуске - " + dutyFree(24, 35, 3000));    
//task 4 ADVANCED level 