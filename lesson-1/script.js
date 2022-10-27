//TASK 1

let x = 20;
let y = 58;
let z = 42;
let summa = x + y + z;
console.log("Сумма " + summa);

//TASK 2

let str = "Привет";
let sum = 123;
let num = 15.8;
let flag = true;
let txt = "true";

console.log(str, typeof(str));
console.log(sum, typeof(sum));
console.log(num, typeof(num));
console.log(flag, typeof(flag));
console.log(txt, typeof(txt));

//TASK 3

let secondsInMinutes = 60;
let minutesInHours = 60;
let hoursInDays = 24;
let daysInYears = 365;
let myAge = 23;

let myAgeInSeconds = myAge * daysInYears * hoursInDays * minutesInHours * secondsInMinutes;

console.log("Мне " + myAge + " года, в секундах это " + myAgeInSeconds);

//TASK 4

let count = 42;
let userName = '42';

console.log("" + count);
console.log(String(count));

console.log(+userName);
console.log(Number(userName));

//TASK 5

let a = 1;
let b = 2;
let c = "белых медведей";

console.log("" + a + b + " " + c);
console.log(String(a) + String(b) + " " + c);
console.log(`${a}${b} ${c}`);

//TASK 6

let txt1 = "доступ";
let txt2 = "морпех";
let txt3 = "наледь";
let txt4 = "попрек";
let txt5 = "рубило";

let allTxt = txt1 + txt2 + txt3 + txt4 + txt5;
let lengthWords = allTxt.length;

console.log(lengthWords);

//TASK 7

let text = "Text";
let numm = 55;
let bool = false;

console.log("Переменная " + text + " имеет тип " + typeof(text));
console.log("Переменная " + numm + " имеет тип " + typeof(numm));
console.log("Переменная " + bool + " имеет тип " + typeof(bool));

//TASK 8

let userNamee = prompt("Имя пользователя");
let userAge = prompt("Возраст пользователя");
let thisYear = 2022;
console.log("Имя пользователя " + userNamee + " возраст " + userAge + "и родился он в " + (thisYear - +userAge));

//TASK 9

let a1 = 5 % 3;
let a2 = 3 % 5;
let a3 = 5 + '3';
let a4 = '5' - 3;
let a5 = 75 + 'кг';
let a6 = 785 * 653;
let a7 = 100 / 25;
let a8 = 0 * 0;
let a9 = 0 / 2;
let a10 = 89 / 0;
let a11 = 98 + 2;
let a12 = 5 - 98;
let a13 = (8 + 56 * 4) / 5;
let a14 = (9 - 12) * 7 / (5 + 2);
let a15 = +"123";
let a16 = 1 || 0;
let a17 = false || true;
let a18 = true > 0;

console.log(a1,typeof(a1));
console.log(a2,typeof(a2));
console.log(a3,typeof(a3));
console.log(a4,typeof(a4));
console.log(a5,typeof(a5));
console.log(a6,typeof(a6));
console.log(a7,typeof(a7));
console.log(a8,typeof(a8));
console.log(a9,typeof(a9));
console.log(a10,typeof(a10));
console.log(a11,typeof(a11));
console.log(a12,typeof(a12));
console.log(a13,typeof(a13));
console.log(a14,typeof(a14));
console.log(a15,typeof(a15));
console.log(a16,typeof(a16));
console.log(a17,typeof(a17));
console.log(a18,typeof(a18));

//ADVANCED level

//TASK 1

let a0 = 4;
let b0 = 3;

a0 = a0 + b0;
b0 = a0 - b0;
a0 = a0 - b0;

console.log(a0, b0);

//TASK 2

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];

console.log(cipher);