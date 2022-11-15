let x = 0,
    sum = 0,
    b = 0,
    y = 0;
let i;
let begin = 0,
    end = 0;
let str;

// 1 Task

function isEven(x){
    return ((x % 2) === 0);
}
document.write(`${isEven(5)} <hr>`);
// 2 Task

function numberOfSymbols(x){
    x = '' + x;
    return x.length;
}
document.write(`количество символов ${numberOfSymbols(2121515)} <hr>`);


// 3 Task

function getSum(x){
    for(i = 0; i <= x; i++){
        sum = sum + i;
    }
    return sum;
}
document.write(getSum(1525))

// 4 Task

function overpay(x){
    let overpayment = 0;
    for(i = 0; i <= 5; i++){
        sum = sum + (x * 0.17);
    }
    overpayment = Math.floor(sum - x);
    return overpayment;// Я не понимаю как работает кредит!?
}
document.write(`Итого переплата по кредиту ${overpay(10000)} <hr>`);

// 5 Task

function trimString(begin, end, str){
    return str.slice(begin, end)
}
document.write(`${trimString(2, 7, 'Hello World')}} <hr>`)


//6 Task

function isNumber(a){
    return (typeof (a) == 'number');
}
function getSumNumbers(x){
    let sumNumb = 0;
    if (isNumber(x)) {
        x = x + '';
        for(i = 0; i < (x).length; i++){
            sumNumb = sumNumb + Number(x[i]);
        }
        return sumNumb;
    } else {
        document.write(`Указано не число <hr>`);
        return; 
    }
}
document.write(`${getSumNumbers(2021)} <hr>`);
document.write(`${getSumNumbers('ascdsaea')} <hr>`);
document.write(`${getSumNumbers(21)} <hr>`);


// 7 Task


function getSum1(a, b){
    sum = 0;
    if(a > b){
        for(i = b; i <= a; i++){
            sum += i;
        }  
    } else if(a === b){
        document.write(`Числа равны друг другу ${a} `);
        return ;
    }
    else{
        for(i = a; i <= b; i++){
            sum += i;
        }
    }
    return sum;
}
document.write(`Сумма чисел равна ${getSum1(-1, 5)}`);
document.write(`Сумма чисел равна ${getSum1(-1, 1)}`);
document.write(`Сумма чисел равна ${getSum1(2, 1)}`);
document.write(`Сумма чисел равна ${getSum1(2, 2)}`);

// 8 Task


function foo(){
    console.log('foo');
}
function boo(){
    console.log('boo');
}
function fooBoo(isBoolean, foo, boo){
    if (isBoolean){
        foo();
    } else{
        boo();
    }
}
fooBoo(true, foo, boo);


//9 Task


function greet(name){
    document.write(`<hr>Hello, ${name} how are you doing today? <hr>`)
    return;
}
greet('Ivan');


//ADVANCE 1 Task


function isTriangle(a, b, x){
    if(((a + b) > x) && ((b + x) > a) && ((a + x) > b)){
        return true;
    } else{
        return false;
    }
}
isTriangle(5, 5, 5);
isTriangle(5, 5, 15);


// ADVANCE 2 Task


sum = 0;
function a2(x){
    document.write('' + x  + `<br>`);
    return;
}
function b2(x){
    document.write(`Цифр в числе ${x} ${x.length} <br>`);
    return;
}
function c2(x){
    for(i = 0; i < x.length; i++){
        a = Number(x[i])
        sum = sum + a;
    }
    document.write(`Сумма ${sum}<br>`)
    return;
}
function d2(x){
    let xReverse = '';
    for(i = 0; i < x.length; i++){
        xReverse = x[i] + xReverse;
    }
    document.write(`Число наоборот ${xReverse}<hr>`)
    return;
}
function all(){
    let n = prompt(`Введите число`);
    a2(n);
    b2(n);
    c2(n);
    d2(n);
}
all();


//