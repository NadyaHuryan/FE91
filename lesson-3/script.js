//TASK 1
function isEven(x) {
    return (x % 2 === 0);
}

console.log(isEven(1));
console.log(isEven(2));

//TASK 2

function checkLenght(k) {
    return String(k).length;
}

console.log(checkLenght(12334345));
console.log(checkLenght("aksjdhladsbfhasbdfhb"));

//TASK 3

function getSum(a) {
    let sum = 0;
    for (let i = 0; i <= a; i++) {
        sum = sum + i;     
    } console.log(sum);
}   

getSum(100);
getSum(30);

//TASK 4

function getCredit(a) {
    return (a * 0.17 * 5)
}

console.log(getCredit(1000));

//TASK 5

function trimString(str, a, b) {
    return (str.slice(a, b));
} 

console.log(trimString("Раз два три четыре пять шесть семь", 4, 15));
console.log(trimString("ASdasjdaksdbkasbdkahsbdhabsdhbasdasdasdasd", 5, 28));

//TASK 6

function getSumNumbers(a) {
    let n = checkLenght(a);
    let str = String(a);
    let numSum = 0;
    for (let i = 0; i < n; i++) {
        numSum = numSum + +str[i];
    } console.log(numSum)
} 

getSumNumbers(2021);
getSumNumbers(134128678);

//TASK 7

function getSumRange(a, b) {
    let  max = b;
    let  min = a;
    if (a > b) {
        min = b;
        max = a;
    }
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum = sum + i;
    } console.log(sum);
}

getSumRange(1, 100);
getSumRange(3, 3);
getSumRange(20, 1);
getSumRange(-7, 3);

//TASK 8

function foo() {
    return console.log("foo");
}

function boo() {
    return console.log("boo");
}

function fooboo(bool, foo, boo) {
    if (bool == true) {
        foo();
    } else {
        boo();
    }
}

fooboo(true, foo, boo);
fooboo(false, foo, boo);

//TASK 9

function greet(name) {
    return console.log(`Hello, ${name} how are you doing today?`)
}

greet("Valera");
greet("Sanya");

//ADVANCED TASK 1

function isTriangle(a, b, c) {
    if (((a + b) > c) && ((a + c) > b) && ((b + c) > a)) {
        return true;
    } else {
        return false;
    }
}

console.log(isTriangle(4, 5, 6));
console.log(isTriangle(3, 7, 3));

//ADVANCED TASK 2

