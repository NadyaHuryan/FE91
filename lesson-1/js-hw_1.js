// 1
let x = 20, y = 58, z = 42;
let sum = x + y + z;
console.log("Сумма " + sum);
// 2
let str = "Привет", num = 15.8, flag = true, txt = "true";
sum = 123;
console.log(str, typeof str);
console.log(sum, typeof sum);
console.log(num, typeof num);
console.log(flag, typeof flag);
console.log(txt, typeof txt);
// 3
const sec = 60, min = 60, hour=24, year = 365, old = 21;
myAgeInSeconds = old * year * hour * min * sec;
console.log("Возраст в секундах " + myAgeInSeconds);
// 5
let a = 1, b = 2, c = "белых медведей";
a = String(a)
b = String(b)
num =  a + b;

 console.log(num + " " + c);
console.log("" + a +b + " " + c)
console.log(`${a}${b} ${c}`)
// 6
let txt1 = "доступ", txt2 = "морпех", txt3 = "наледь", txt4 = "попрек", txt5 = "рубило", alltxt = txt1 + txt2 + txt3 + txt4 + txt5;
let lengthWords = alltxt.length;
console.log(lengthWords);
// 7
let text = "Hello", number = 15, bool = fals;

console.log("Переменная" + text + "имеет тип" + typeof(text));
console.log("Переменная" + number + "имеет тип" + typeof(number));
console.log("Переменная" + bool + "имеет тип" + typeof(bool));
// 8
let name1 = prompt("Введите ваше имя"), yearsold = prompt("Введите ваш возраст"); date = 2022 - yearsold;

console.log(`имя пользователя ${name1}`);
console.log(`возраст пользователя ${yearsold}`);
console.log(`год ${date}`);
// 10
let a1 = 4;
let b1 = 3;
a1 = a1 + b1;
b1 = a1 - b1;
a1 = a1 - b1;
console.log("a = " + a1,"b = " + b1);
// 11
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = codeWord1.charAt(1) + codeWord2.charAt(1) + codeWord3.charAt(1) + codeWord4.charAt(1);
console.log(codeWord5);