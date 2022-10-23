//### Task 1 ###

let x = 20;
let y = 58;
let z = 42;
let summ = x + y +z;
console.log("Сумма " + summ);

//### Task 2 ###

let str = "Привет";
let sum = 123;
let num = 15.8;
let flag = true;
let txt = "true";
console.log(str, typeof str);
console.log(sum, typeof sum);
console.log(num, typeof num);
console.log(flag, typeof flag);
console.log(txt, typeof txt);

//### task 3 ###

const secondsPerMinute = 60;
const minutesPerHour = 60;
const hoursPerDay = 24;
const daysPerYear = 365;
let myAge = 39
let myAgeInSeconds = myAge * daysPerYear * hoursPerDay * minutesPerHour * secondsPerMinute;
console.log("Мне " + myAge + " лет, в секундах это: " + myAgeInSeconds);

//### Task 4 ###

let count = 42;
let userName = '42';
//Способ 1:
count = "" + count;
userName = + userName
console.log(typeof(count));
console.log(typeof(userName));
//Способ 2:
count = String(count);
userName = Number(userName);
console.log(typeof(count));
console.log(typeof(userName));

//### Task5 ###

let a = 1;
let b = 2;
let c = "белых медведей";
//Способ 1:
console.log("" + a + b +" " + c);
//Способ 2:
console.log(`${a}${b} ${c}`);


//### Task 6 ###

let txt1 = "доступ";
let txt2 = "морпех";
let txt3 = "наледь";
let txt4 = "попрек";
let txt5 = "рубило";
let allTxt = txt1 + txt2 + txt3 + txt4 + txt5;
let lengthWords = allTxt.length;
console.log(`Длина всех слов из списка равна ${lengthWords} символов.`);

//### Task7 ###

let text = "Hello",
    numeral = 15,
    bool = false;
console.log("Variable: " + text + " have type: " + typeof(text));
console.log("Variable: " + numeral + " have type: " + typeof(numeral));
console.log("Variable: " + bool + " have type: " + typeof(bool));

//### Task 8 ###

let userName1 = prompt("Введите ваше имя");
let userAge = prompt("Введите ваш возраст");
console.log(`Ваше имя ${userName1} и Ваш возраст ${userAge} лет.`);

//### Task 9 ###

let a1 = 5 % 3,
    a2 = 3 % 5,
    a3 = 5 + '3',
    a4 = '5' - 3,
    a5 = 75 + 'кг',
    a6 = 785 * 653,
    a7 = 100 / 25,
    a8 = 0 * 0,
    a9 = 0 / 2,
    a10 = 89 / 0,
    a11 = 98 + 2,
    a12 = 5 - 98,
    a13 = (8 + 56 * 4) / 5,
    a14 = (9 - 12) * 7 / (5 + 2),
    a15 = +"123",
    a16 = 1 || 0,
    a17 = false || true,
    a18 = true > 0;
    console.log('Result is: ' + a1 + ' and it`s type: '+ typeof(a1));
    console.log('Result is: ' + a2 + ' and it`s type: '+ typeof(a2));
    console.log('Result is: ' + a3 + ' and it`s type: '+ typeof(a3));
    console.log('Result is: ' + a4 + ' and it`s type: '+ typeof(a4));
    console.log('Result is: ' + a5 + ' and it`s type: '+ typeof(a5));
    console.log('Result is: ' + a6 + ' and it`s type: '+ typeof(a6));
    console.log('Result is: ' + a7 + ' and it`s type: '+ typeof(a7));
    console.log('Result is: ' + a8 + ' and it`s type: '+ typeof(a8));
    console.log('Result is: ' + a9 + ' and it`s type: '+ typeof(a9));
    console.log('Result is: ' + a10 + ' and it`s type: '+ typeof(a10));
    console.log('Result is: ' + a11 + ' and it`s type: '+ typeof(a11));
    console.log('Result is: ' + a12 + ' and it`s type: '+ typeof(a12));
    console.log('Result is: ' + a13 + ' and it`s type: '+ typeof(a13));
    console.log('Result is: ' + a14 + ' and it`s type: '+ typeof(a14));
    console.log('Result is: ' + a15 + ' and it`s type: '+ typeof(a15));
    console.log('Result is: ' + a16 + ' and it`s type: '+ typeof(a16));
    console.log('Result is: ' + a17 + ' and it`s type: '+ typeof(a17));
    console.log('Result is: ' + a18 + ' and it`s type: '+ typeof(a18));

//### ADVANCED level ###
//### Task 1 ###

    let a_ = 4;
    let b_ = 3;
    a_ = a_ + b_;
    b_ = a_ - b_;
    a_ = a_ - b_;
    console.log('a_= ' + a_);
    console.log('b_= ' + b_);

//### Task 2 ###

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log('Кодовое слово: ' + cipher)
