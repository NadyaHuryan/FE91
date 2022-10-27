// {/* <p align='right'>< TeachMeSkills /></p>
// <h1 align='center'>Javascript Basic</h1>

// ## Complete exercise

// ### NORMAL level

// #### Task 1 💻

console.log('Task 1');

let x = 20;
let y = 58;
let z = 42;
let sum = x + y + z;
console.log('сумма: ' + sum);

// #### Task 2 💻
console.log('Task 2');

let str = 'Привет';
let sum2 = 123;
let num = 15.8;
let flag = true;
let txt = 'true';

console.log(str, typeof str);
console.log(sum2, typeof sum2);
console.log(num, typeof num);
console.log(flag, typeof flag);
console.log(txt, typeof txt);

// #### Task 3 💻
console.log('Task 3')

const secondsPerMinute = 60;
const minutesPerHour = 60;
const hourInDay = 24;
const daysYear = 365.3;
let myAge = 42;
let myAgeInSeconds = myAge * daysYear * hourInDay * minutesPerHour;

console.log(myAgeInSeconds)


// #### Task 4 💻
console.log('Task 4')

let count = 42;
let userName = '42';
let text;
console.log(text = String(count), typeof(text));
console.log(text = count + '', typeof(text));

let number;
console.log(number = Number(userName), typeof(number));
console.log(number = + userName, typeof(number));

// #### Task 5 💻
console.log ('Task 5')

let a = 1;
let b = 2;
let c = 'белых медведей';
console.log('' + a + b + ' ' + c);
console.log(`${a}${b} ${c}`);

// #### Task 6 💻
console.log('Task 6')
let txt1 = 'доступ';
let txt2 = 'морпех';
let txt3 = 'наледь';
let txt4 = 'попрек';
let txt5 = 'рубило';
let allTxt = txt1 + txt2 + txt3 + txt4 + txt5;
let lengthWords = allTxt.length;
console.log(lengthWords);

// #### Task 7 💻
console.log('Task 7') 

let text2 = 'Hello';
let num3 = 15;
let bool = false;

console.log('Переменная :' + text2 + ' тип:' + typeof text2);
console.log('Переменная :' + num + ' тип:' + typeof num);
console.log('Переменная :' + bool + ' тип:' + typeof bool);

// #### Task 8 💻
console.log('Task 8')

let age = prompt('Введите ваше имя');
let userName1 = prompt("введите ваш возрост");

console.log(`имя пользователя ${userName1} возраст пользователя ${userName1}`);

//  #### Task 9
console.log('Task 9')

let a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18;
console.log(a1 = 3 % 5, typeof a1);
console.log(a2 = 5 + '3', typeof a2);
console.log(a3 = '5' - 3, typeof a3);
console.log(a4 = 75 + 'кг', typeof a4);
console.log(a5 = 785 * 653, typeof a5);
console.log(a6 = 100 / 25, typeof a6);
console.log(a7 = 0 * 0, typeof a7);
console.log(a8 = 0 / 2, typeof a8);
console.log(a9 = 89 / 0, typeof a9);
console.log(a10 = 98 + 2, typeof a10);
console.log(a11 = 5 - 98, typeof a11);
console.log(a12 = (8 + 56 * 4) / 5, typeof a12);
console.log(a13 = (9 - 12) * 7 / (5 + 2), typeof a13);
console.log(a14 = +"123", typeof a14);
console.log(a15 = 1 || 0, typeof a15);
console.log(a16 = false || true, typeof a16);
console.log(a17 = true > 0, typeof a17);
console.log(a18 = 5 % 3, typeof a18);

// ### ADVANCED level

// #### Task 1 👨‍🏫 

let a19 = 4
let b19 = 3

console.log(a19 = a19 * b19)
console.log(b19 = a19 / b19)
console.log(a19 = a19 / b19)


// #### Task 2 👨‍🏫 

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher;
console.log(cipher = codeWord1.slice(1, 2) + codeWord2.slice(1, 2) + codeWord3.slice(1, 2) + codeWord4.slice(1, 2) + codeWord5.slice(1, 2));