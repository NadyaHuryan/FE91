//Normal Task 1


function isEven(x) {
    return (x % 2 === 0)
}


console.log(isEven(4));
console.log(isEven(3));

//Normal Task 2

function checkLength(y) {
    return String(y).length;
}
console.log(checkLength("Liza"));
console.log(checkLength("Malchikova"));
console.log(checkLength(15102002));
console.log(checkLength("October"));


//Normal Task 3


function getSum(z) {
    let sum = 0;
    for (let i = 0; i <= z; i++) {
        sum += i;
    }
    return sum;
}

console.log(getSum(100));
console.log(getSum(6));
console.log(getSum(-20));
console.log(getSum(5, 6));

//Normal Task 4

let percentage = 17;
let year = 5;


function loanOverpayment(loanAmount) {
    return ((loanAmount * (percentage / 100)) * year); //формула под вопросом
}

console.log(loanOverpayment(10000));
console.log(loanOverpayment(2000));
console.log(loanOverpayment(3000));

//Normal Task 5

function trimString(nameString, first, last) {
    return nameString.slice(first - 1, last);
}


console.log(trimString("LizaMalchikova", 5, 14));
console.log(trimString("Unfriendly", 3, 10));

//Normal Task 6

function getSumNumbers(numb) {
    let str = String(numb);
    let sumNum = 0;
    
    
    for (let i = 0; i < str.length; i++) {
        sumNum += +str[i];
    }

    return sumNum;
}

console.log(getSumNumbers(2021));
console.log(getSumNumbers("liza"));
console.log(getSumNumbers("2022"));
console.log(getSumNumbers("010020003"));



//Normal Task 7

function getSumDiapason(a, b) {
    // let min = (a > b) ? a : b;
    // let max = (a < b) ? a : b;
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
console.log(getSumDiapason(1, 0)); //== 1   // 1 + 0 = 1
console.log(getSumDiapason(1, 2)); //== 3   // 1 + 2 = 3
console.log(getSumDiapason(3, 1)); //== 6   // 1 + 2 + 3 = 6
console.log(getSumDiapason(0, 1)); //== 1   // 0 + 1 = 1
console.log(getSumDiapason(1, 1)); //== 1   // 1 Since both are same
console.log(getSumDiapason(-1, 0)); //== -1 // -1 + 0 = -1
console.log(getSumDiapason(-1, 2)); //== 2 // -1 + 0 + 1 + 2 = 2

//Normal Task 8


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
// Boolean ? f() : b();
// Второй вариант записи


fooboo(true);
fooboo(false);


//Normal Task 9

function greetUser(name) {
    return `Hello, ${name}, how are you doing today?`;
}

console.log(greetUser("Liza"));

//Advanced Task 1

function checkTriangle(a, b, c) {
    if (a||b||c !== 0) {
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


//Advanced Task 2


//Advanced Task 3

function getPerimeterOfTriangle(a, b) {
    let p = 2 * (a + b);
    return `Периметр треугольника равен ` + p;
}

console.log(getPerimeterOfTriangle(1, 2));
console.log(getPerimeterOfTriangle(15, 25));

//Advanced Task 4

function dutyFree(normPrice, discount, hol){
    let total = hol / (normPrice * (discount / 100));
    return (Math.floor)(total);
}

console.log(dutyFree(10, 10, 500));
console.log(dutyFree(70, 10, 500));
console.log(dutyFree(70, 15, 500));