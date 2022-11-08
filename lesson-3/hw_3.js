// Task 1
function isEven(i) {
    return (i % 2 === 0);
}
console.log(isEven(7));
console.log(isEven(8));

//Task 2

function checkNumberLength(g) {
    return String(g).length;
}
console.log(checkNumberLength(123456789));


//Task 3

function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(getSum(100));
console.log(getSum(11));
console.log(getSum(5));

//Task 4

let percent = 17;
let year = 5;

function loanOverpayment(amountLoan) {
    return ((amountLoan * (percent / 100)) * year);
}
console.log(loanOverpayment(10000));
console.log(loanOverpayment(25000));


//Task 5

function trimString(nameString, first, last) {
    return nameString.slice(first - 1, last);
}
console.log(trimString("VelesevichDima", 11, 14));

//Task 6 

function getSumNumbers(y) {
    let sum = 0
    str = String(y);

    for (let i = 0; i < str.length; i++) {
        sum = Number(str[i]) + sum;
    }
    return (sum)
}
console.log(getSumNumbers(2022));
console.log(getSumNumbers("sum"));

//Task 7 

function getSum(a, b) {

    let min = a;
    let max = b;
    if (a > b) {
        min = b;
        max = a;
    }

    let sum = 0;

    for (let i = min; i <= max; i++) {
        sum = i + sum;
    }
    return sum;
}
console.log(getSum(1, 0));
console.log(getSum(1, 0));
console.log(getSum(1, 2));
console.log(getSum(3, 1));
console.log(getSum(0, 1));
console.log(getSum(1, 1));
console.log(getSum(-1, 0));
console.log(getSum(-1, 2));

//Task 8

function foo() {
    console.log('foo');
}

function boo() {
    console.log('boo');
}

function fooboo(Boolean, f = foo, b = boo) {

    if (Boolean) {
        f();
    } else if (!Boolean) {
        b();
    }
}
fooboo(true);
fooboo(false);

//Task 9

function greetUser(name) {
    return `Hello, ${name}, how are you doing today?`;
}
console.log(greetUser(`Dima`));

// ADVANCED №1*********

function triangle(a, b, c) {
    return console.log((a + b > c) && (a + c > b) && (b + c > a));
}
triangle(10, 2, 9);
triangle(5, 7, 1);
triangle(4, 4, 4);

// AVANCED №3**********

const perimetrOrArea = function (l, w) {
    if (l != w) {
        return console.log(l * 2 + w * 2);
    } else {
        return console.log(l ** 2);
    }
}
perimetrOrArea(3, 3);
perimetrOrArea(4, 7);
perimetrOrArea(9, 6);
perimetrOrArea(6, 6);













