//////////1//////////
function isEven(x) {
    return (x % 2 === 0)
}
console.log(isEven(1));
console.log(isEven(6));
//////////2//////////
function checkLength(y) {
    return String(y).length;
}
console.log(checkLength("Hi,hello world!!!"));
console.log(checkLength(123456789));

//////////3//////////
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
image.png
console.log(sumTo(10));
console.log(sumTo(738733));

//////////4//////////
let percent = 17;
let year = 5;

function credit(loanAmount) {
    return ((loanAmount * (percent / 100)) * year);
}
console.log(credit(5000));
console.log(credit(18000));

//////////5//////////
function trimString(nameString, first, last) {
    return nameString.slice(first - 1, last);
}

console.log(trimString("VelesevichVlad", 11, 14));
console.log(trimString("GoodMorning", 5, 14));

//////////6//////////
function getSumNumbers(y) {
    let sum = 0, x = String(y);

    for (let i = 0; i < x.length; i++) {
        sum = Number(x[i]) + sum;
    }
    return (sum)
}
console.log(getSumNumbers(738733));
console.log(getSumNumbers(2022));
console.log(getSumNumbers(322))
console.log(getSumNumbers(1998));

//////////7//////////
function getSum(a, b) {
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
console.log(getSum(1, 0));
console.log(getSum(1, 0));
console.log(getSum(1, 2));
console.log(getSum(3, 1));
console.log(getSum(0, 1));
console.log(getSum(1, 1));
console.log(getSum(-1, 0));
console.log(getSum(-1, 2));

//////////8//////////
function foo() {
    console.log('foo');
}
function boo() {
    console.log('boo');
}
function fooBoo(isBoolean, foo, boo) {
    if (isBoolean) {
        foo();
    } else {
        boo();
    }
}
fooBoo(true, foo, boo);

//////////9//////////
function greetUser(name) {
    return `Hello, ${name}, how are you doing today?`;
}

console.log(greetUser(`Vlad`));

