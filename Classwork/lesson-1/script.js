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
    txt ="true";

console.log(str, typeof str);
console.log(sum, typeof sum);
console.log(num, typeof num);
console.log(flag, typeof flag);
console.log(txt, typeof txt);


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

// alert("Введите почту");
// let con = confirm("Вам есть 18 лет?");
// console.log(con);

// let prom = prompt("Введите ваше имя");
// console.log(prom, typeof prom);

//  Спросите у пользователя число. 
// Выведите с помощью alert квадрат этого числа.

let k = prompt("Введите число");
console.log(k , typeof k)
alert("Квадрат числа " + k + " = " + (k**2));

// Задание 7
num = 15
let text = "Hello",
    
    bool = false;

console.log('Переменная ' + text + " имеет тип " + typeof(text));
console.log('Переменная ' + num + " имеет тип " + typeof(num));
console.log('Переменная ' + bool + " имеет тип " + typeof(bool));

//Задание 8
let userAge = prompt("введите ваш возраст");
let userName = prompt("введите ваш возраст");
console.log(`имя пользователя ${userName} 
возраст пользователя ${userAge}`);

// Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь 
// к отдельным символам этой строки выведите на экран символ 'a', 
// символ 'c', символ 'e'.

str = "abcde";
console.log(str[0])

//  Создайте переменную num и присвойте ей значение '12345'. 
// Найдите произведение (умножение) цифр этого числа.

num = '12345';
console.log(num[0] * num[1] * num[2] * num[3] * num[4]);