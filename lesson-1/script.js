// Задание 1
let x = 20,
    y = 58,
    z = 42;
let sum1 = x + y + z;

console.log("Сумма " + sum1);

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
const sec = 60,
    min = 60,
    day = 60,
    year = 365,
    age = 20;

let sec1 = age * year * day * min * sec;

console.log("Мне " + age + " в секундах это " + sec1);

// Задание 4
let count = 42;
let userName = '42';

countNumber = String(count);
console.log(countNumber, typeof countNumber);

// Задание 5
let a = 1,
    b = 2,
    c = "белых медведей";

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
console.log(lengthWords);

// Задание 7
let txtWord = "Hi",
    numb = 10,
    tf = false;
console.log('Переменная ' + txtWord + " имеет тип " + typeof (txtWord));
console.log('Переменная ' + numb + " имеет тип " + typeof (numb));
console.log('Переменная ' + tf + " имеет тип " + typeof (tf));

//Задание 8 
const yearNow = 2022;
let userName8 = prompt("Введите имя"),
    age8 = prompt('Введите год рождения');

alert('Тебе ' + (yearNow - age8) + ' лет');

console.log('Тебе ' + (yearNow - age8) + ' лет');

console.log(userName8 + age8);

console.log('Тебе ' + (yearNow - age8) + ' лет');

// Advanced level
// Задание 1
let A = 4,
    B = 3;
A = A + B; 
// 4=43
B = A - B;
// 3=4'3'
A = A - B;
// 43 = 3
// console.log(`Изначально было так: 4 3 , а стало так: ` + (A, B));
console.log(A, B);