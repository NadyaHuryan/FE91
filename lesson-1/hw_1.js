// Task 1
let x = 20,
    y = 58,
    z = 42;

let result = x + y + z;

console.log("result "+ result);

// Task 2

let str = "Привет", 
    sum = 123,
    num = 15.8,
    flag = true,
    txt = "true";

typeof(str);
typeof(sum);
typeof(num);
typeof(flag);
typeof(txt);

console.log(str, typeof(str), 
sum, typeof(sum), 
num, typeof(num), 
flag, typeof(flag), 
txt, typeof(txt));

// Task 3

let age = 22,
 secInMin = 60,
 minInHour = 60,
 hourInDay = 24,
 dayInYear = 365,
 dayIn2Year = 366;

let myAgeInSeconds = (dayIn2Year * 6 + dayInYear * 16) * hourInDay * minInHour * secInMin;

console.log('мне ' + age + ' года, ' + ' в секундах это ' + myAgeInSeconds);

// Task 4

let count = 42;
let userName = '42';

userName = Number(userName);
userName = +userName;

count = String(count);
count += '';

console.log(userName, count);

// Task 5

let a = 1;
let b = 2;
let c = "белых медведей";

let result1 = a + '' + b + ' ' + c;

console.log(result1);

// Task 6

a = String(a);
b = String(b);
let result2 = a + b + ' ' + c;

console.log(result2);
console.log(`${a}${b} ${c}`);

let word1 = 'доступ',
    word2 = 'морпех',
    word3 = 'наледь',
    word4 = 'попрек',
    word5 = 'рубило',
    allTxt,
    lengthWords;

allTxt = word1 + word2 + word3 + word4 + word5;
lengthWords = allTxt.length;

console.log(lengthWords);

// Task 7

let txt1 = 'Text',
    numeric = 1,
    logic = true;

console.log(`txt1 ${txt1} have type ${typeof(txt1)}`);
console.log(`txt1 ${numeric} have type ${typeof(numeric)}`);
console.log(`txt1 ${logic} have type ${typeof(logic)}`);

// Task 8

let userNames = prompt('Введите имя');
let userAge = prompt('Введите возраст');
let year = new Date().getFullYear();
let yearOfBirth =  year - userAge;
console.log(userNames);
console.log(userAge);
console.log(yearOfBirth);

// Task 9

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

console.log(`${a1}, ${typeof(a1)} 
${a2}, ${typeof(a2)}
${a3},  ${typeof(a3)}
${a4},  ${typeof(a4)}
${a5},  ${typeof(a5)}
${a6},  ${typeof(a6)}
${a7},  ${typeof(a7)}
${a8},  ${typeof(a8)}
${a9},  ${typeof(a9)}
${a10}, ${typeof(a10)}
${a11}, ${typeof(a11)}
${a12}, ${typeof(a12)}
${a13}, ${typeof(a13)}
${a14}, ${typeof(a14)}
${a15}, ${typeof(a15)}
${a16}, ${typeof(a16)}
${a17}, ${typeof(a17)}
${a18}, ${typeof(a18)}`);

//ADVANCED lvl

// Task 1

// 1
a = 4;
b = 3;

a = a + b;
b = a - b;
a = a - b;

console.log (a, b);

//2 
a = 4;
b = 3;

a = a * b;
b = a / b;
a = a / b;

console.log (a, b);

// Task 2 

let codeWord1 = "обернись",
codeWord2 = "неужели",
codeWord3 = "огурцы",
codeWord4 = "липкие",
codeWord5 = "?!",
cipher;

cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];

console.log(cipher);