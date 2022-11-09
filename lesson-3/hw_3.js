"use strict";

let i;

// Task 1

let isEven = function(x) {
    return (x % 2 === 0);
}

console.log(isEven(6));
console.log(isEven(5));

// Task 2

let checkNum = function(a) {
    return isNaN(a);
}

let isInt = function(a) {
    return Number.isInteger(a);
}

let getNumLength = function(a) {
    checkNum(a);
    isInt(a);
    if (checkNum(a)) {
        return 'Not a number'
    } else {
        return String(a).length;
    }
}

console.log(getNumLength(13425235252));
console.log(getNumLength(1342));
console.log(getNumLength(13425235255353454353452));
console.log(getNumLength(1));
console.log(getNumLength('fadfsd'));

// Task 3

let getSumNum = function(a) {
    let sum = 0;
    for (i = 0; i <= a; i++) {
        sum += i;
    }
    return sum;
}

console.log(getSumNum(100));
console.log(getSumNum(5));

// Task 4

let creditSumOverpay = function(sum) {
    let year = 60,
    rate = 0.17,
    monthlyPay,
    monthlyPercent,
    overpay;
    monthlyPercent = rate / 12;
    monthlyPay = sum / year;
    return overpay = sum * monthlyPercent * ((1 + monthlyPercent) ** year) / ((1 + monthlyPercent) ** year - 1)*60 - sum;
} 

console.log(creditSumOverpay(120000));

// Task 5

let trimString = function(str, stop1, stop2) {
    return str.slice(stop1 - 1, stop2);
}

console.log(trimString('Какая-то строка для проверки', 5, 20));

// Task 6

let strLength = function(str) {
    return String(str).length
    
}

let getSumNumbers = function(a) {
    checkNum(a);
    let stringLength = strLength(a);
    let sum = 0;
    if (checkNum(a) == false) {
        for (i = 0; i <= stringLength - 1; i++) {
            sum += +String(a)[i];
        }
        return sum;
    } else {
        return 'Not a number';
    } 
}

console.log(getSumNumbers(2736549));
console.log(getSumNumbers(1));
console.log(getSumNumbers('dnskvj'));

// Task 7

let getSum = function(a,b) {
    let min = (a < b) ? a : b,
        max = (a > b) ? a : b,
        sum = 0,
        i = min;
    for (i >= min; i <= max; i++) {
        if (a != b) {
           sum += i;
        } else {
            return 'Equal';
        }
    }
    return sum;
}

console.log(getSum(100, -10));

// Task 8 

let foo = function() {
    console.log(foo.name)
}

let boo = function() {
    console.log(boo.name)
}

function fooboo(choise, fooN, booN) {
    if (choise == true) {
        fooN();
    } else {
        booN();
    }
}

fooboo(false, foo, boo);

// Task 9 

let greet = function(name){
    return `Hello, ${name} how are you doing today?`
}

console.log(greet('Cat'));

// ADVANCED

// Task 1

let triangle = function(a, b, c) {
    if (a < b + c && b < a + c && c < a + b) {
        return true;
    } else {
        return false;
    }
}

console.log(triangle(11, 10, 3));

// Task 2

let getSumNumbers2 = function(a) {
    let stringLength = strLength(a);
    let sum = 0;
    for (i = 0; i <= stringLength - 1; i++) {
        sum += +String(a)[i];
    }
    return sum;
}

let numbInt = function(a) {
    a = prompt('Введите число');
    let i = 0,
    strRev = "";
    for (i = 0; i < a.length; i++) {
        console.log(`Цифра ${i+1}: ${a[i]}`);
    }
    console.log(`Длина числа ${a.length}`);
    console.log(`Сумма цифр ${getSumNumbers2(a)}`);
    for (i = a.length-1; i >= 0; i--) {
        strRev += a[i];
    }
    console.log(`Строка наоборот ${strRev}`)
}

numbInt();

// Task 3

const areaOrPerimeter = function(l , w) {
    if(l == w) {
      return l*w;
    } else {
      return 2*l+2*w;
    }
  };

console.log(areaOrPerimeter(12,11));

// Task 4

function dutyFree(normPrice, discount, hol){
    let n = hol / ((normPrice * (discount * 0.01)));
    return Math.floor(n);
}

console.log(dutyFree(12, 50, 1000));