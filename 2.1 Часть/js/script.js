// Задание 1
let x = 20,
    y = 58,
    z = 42;
let sum1 = x + y + z;

console.log("Сумма" + sum1);


// Задание 2
let str = "Привет",
    sum = 123,
    num = 15.8,
    flag = true,
    txt = "true";
console.log(str, typeof str);
console.log(sum, typeof sum);
console.log(num, typeof num);
console.log(flag, typeof flag);
console.log(txt, typeof txt);


// Задание 3

const secInMin = 60;
const minInHoure = 60;
const houreInDay = 24;
const dayInYear = 365;
let MyAge = 24;
let ageMe = MyAge * dayInYear * houreInDay * minInHoure * secInMin;
console.log("Мне " + ageMe + " лет" + " в секундах")



// Задание 4

let count = 42;
let userName = '42';
count = String(count);
userName = Number(userName);
userName = +userName;

// Задание 5


let a = 1,
    b = 2,
    c = "белых медведя";
console.log("" + a + b + " " + c);
console.log(`${a}${b} ${c}`);


// Задание 6


let txt1 = "доступ",
    txt2 = "морпех",
    txt3 = "наледь",
    txt4 = "попрек",
    txt5 = "рубило";
let allTxt = txt1 + txt2 + txt3 + txt4 + txt5;
let lengthWords = allTxt.length;
console.log(lengthWords)


// Задание 7


let text = "Hello",
    num1 = 15,
    bool = false;

console.log("Переменная " + text + " имеет тип " + typeof (text))
console.log("Переменная " + num1 + " имеет тип " + typeof (num1))
console.log("Переменная " + bool + " имеет тип " + typeof (bool))


// Задание 8


// let UserNname8 = prompt("Введите ваше имя");
// let userAge8 = prompt("Введите ваш возраст")
// let born = 2022 - Namber(userAge8)

// console.log(`Имя ${UserNname8} возраст ${userAge8}`);

// Задание 9


let a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18;
a1 = 3 % 5,
    a2 = 5 + '3',
    a3 = '5' - 3,
    a4 = 75 + 'кг',
    a5 = 785 * 653,
    a6 = 100 / 25,
    a7 = 0 * 0,
    a8 = 0 / 2,
    a9 = 89 / 0,
    a10 = 98 + 2,
    a11 = 5 - 98,
    a12 = (8 + 56 * 4) / 5,
    a13 = (9 - 12) * 7 / (5 + 2),
    a14 = +"123",
    a15 = 1 || 0,
    a16 = false || true,
    a17 = true > 0;

console.log(`a1 = ${a1} : ${typeof a1}`);
console.log(`a2 = ${a2} : ${typeof a2}`);
console.log(`a3 = ${a3} : ${typeof a3}`);
console.log(`a4 = ${a4} : ${typeof a4}`);
console.log(`a5 = ${a5} : ${typeof a5}`);
console.log(`a6 = ${a6} : ${typeof a6}`);
console.log(`a7 = ${a7} : ${typeof a7}`);
console.log(`a8 = ${a8} : ${typeof a8}`);
console.log(`a9 = ${a9} : ${typeof a9}`);
console.log(`a10 = ${a10} : ${typeof a10}`);
console.log(`a11 = ${a11} : ${typeof a11}`);
console.log(`a12 = ${a12} : ${typeof a12}`);
console.log(`a13 = ${a13} : ${typeof a13}`);
console.log(`a14 = ${a14} : ${typeof a14}`);
console.log(`a15 = ${a15} : ${typeof a15}`);
console.log(`a16 = ${a16} : ${typeof a16}`);
console.log(`a17 = ${a17} : ${typeof a17}`);
console.log(`a18 = ${a18} : ${typeof a18}`);





// Задание 01

let a01 = 4;
let b02 = 3;
a01 = a01 * b02;
b02 = a01 / b02;
a01 = a01 / b02;
console.log("a01 = " + a01);
console.log("b02 = " + b02);
// второй вариант через сложение по аналогии


// Задание 02
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(`Шифр - ${cipher}`);


