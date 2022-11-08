//Task 1

function isEven(x) {
    return (x % 2 === 0)
}
console.log(isEven(8));
console.log(isEven(3));

//Task 2


function checkLength(y) {
    return String(y).length;
}
console.log(checkLength("HowManyLettersAreThere"));
console.log(checkLength(123456789));

//Task 3

function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sumTo(100));
console.log(sumTo(322));

//Task 4

let percent = 17;
let year = 5;


function loanOverpayment(loanAmount) {
    return ((loanAmount * (percent / 100)) * year);
}
console.log(loanOverpayment(25000));
console.log(loanOverpayment(10000));

//Task 5

function trimString(nameString, first, last) {
    return nameString.slice(first - 1, last);
}


console.log(trimString("VelesevichDima", 11, 14));
console.log(trimString("GoodMorning", 5, 14));

//Task 6

function getSumNumbers(y) {
    let sum = 0, x = String(y);

    for (let i = 0; i < x.length; i++) {
        sum = Number(x[i]) + sum;
    }
    return (sum)
}
console.log(getSumNumbers(1945));
console.log(getSumNumbers(2022));
console.log(getSumNumbers(322));

//Task 7

function getSumDiapason(a, b) {
    let min = a;
    let max = b;

    if (a > b) {
        min = b;
        max = a;
    }

    let sum = 0;

    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}
console.log(getSumDiapason(1, 0));
console.log(getSumDiapason(1, 0));
console.log(getSumDiapason(1, 2));
console.log(getSumDiapason(3, 1));
console.log(getSumDiapason(0, 1));
console.log(getSumDiapason(1, 1));
console.log(getSumDiapason(-1, 0));
console.log(getSumDiapason(-1, 2));

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

//ADVANCED N1********


function checkTriangle(a, b, c) {
    if (a || b || c !== 0) {
        if ((a + b > c) && (a + c > b) && (b + c > a)) {
            return "true";
        } else {
            return "false"
        }
    }
}
console.log(checkTriangle(2, 4, 6));
console.log(checkTriangle(2, 0, 2));
console.log(checkTriangle(1, 1, 1));

//ADVANCED N3*********

const perimeterOrArea = function (l, w) {
    if (l != w) {
        return console.log(l * 2 + w * 2);
    } else {
        return console.log(l ** 2);
    }
}
perimeterOrArea(3, 3);
perimeterOrArea(9, 4);
perimeterOrArea(5, 2);
perimeterOrArea(6, 6);



