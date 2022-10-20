// ex1

let x = 20,
  y = 58,
  z = 42;
let sum1 = x + y + z;

console.log("Сумма " + sum1);

let str = "Привет",
  sum = 123,
  num = 15.8,
  flag = true,
  txt = "true";

// ex2

console.log(str, typeof str);
console.log(sum, typeof sum);
console.log(num, typeof num);
console.log(flag, typeof flag);
console.log(txt, typeof txt);

// ex3

const sec = 60,
  min = 60,
  hours = 12,
  day = 24,
  age = 23;

console.log("Мне " + age + " В секундах это " + age * min * hours * day);

// ex4

let count = 42;
let userName = '42';

countNumber = String(count);
console.log(countNumber, typeof countNumber);

userNameText = Number(count);
console.log(userNameText, typeof userNameText);

// ex5

let a1 = 1
let b1 = 2
let c1 = "белых медведей"

console.log("" + a1 + b1 + " " + c1);
console.log(`${a1}${b1} ${c1}`);

// ex6

let txt1 = "доступ",
  txt2 = "морпех",
  txt3 = "наледь",
  txt4 = "попрек",
  txt5 = "рубило";
let allTxt = txt1 + txt2 + txt3 + txt4 + txt5;
// показывае кол-во букв в слове
let lengthWords = allTxt.length;
console.log(lengthWords)


// ex7 

let text = "Hello",
  num1 = 15,
  bool = false;

console.log(`Переменная ` + text + `имеет тип` + typeof (text));
console.log(`Переменная ` + num1 + `имеет тип` + typeof (num1));
console.log(`Переменная ` + bool + `имеет тип` + typeof (bool));

// ex8

let userName1 = prompt("ВВедите ваще имя");
userAge = prompt("ВВедите ваш возраст");
years = 2022 - Number(userAge)
console.log("Имя " + userName1 + " Возраст " + userAge + " Год рождения " + years);

// ADVANCED LAVEL

// ex1

let a = 4;
let b = 3;

a = a + b;
b = a - b;
a = a - b;

console.log(a, b);

// ex2

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher);


