

// что такое операнд и оператор
// что такое унарный и бинарный оператор


//
console.log(+"100"); // 100
console.log(+"JavaScript"); // NaN
console.log(+"10" + 10); //20
console.log("10" + 10); // "1010"
console.log("15" - 13); // 2
console.log(15 - "13"); // 2
console.log("15" - "13"); // 2
console.log("15" - "13Number"); // NaN
console.log(9 % 5); // 4

// Как в данном случае называется знак = 
// c = a + b

//Как можно сократить запись
// a = a + b
// a += b;

// как называются следующие операторы
// i++
// i--

// в чем разница между ++i и i++. как называются операторы

// что выведет в консоль
i = 1;
console.log(++i) // 2

i = 1;
console.log(i++) // 1

// Сравнение строк
console.log("Я" > "А") // true
console.log('Котик' > 'Кодировать') //true


//Алгоритм сравнения двух строк
// Сначала сравниваются первые символы
// Если первый символ первой строки больше (меньше), чем первый символ второй строки, то первая строка больше (меньше) второй строки. Сравнение завершено
// Если первые символы равын, то таким же образом сравниваются символы дальше
// Сравнение продолжается, пока не закончится одна из строк
// Если обе строки заканчиваются одновременно, то они равны. Иначе большей является более длинная строка
// Не забываем, что регистр в JS очень важен
console.log('а' > 'А'); //true


// Как называются следующие операторы?
// == === , в чем между ними отличия

console.log(2 == "2"); //true
console.log(2 === "2"); //false 
console.log("text" === "text2"); //false

// Назовите все false значения
// 0, null, undefined, NaN, "", false
// ' ' - true 
// -0 - false

// что такое цикл
// какие виды цикла есть, в чем особенность и какие требования к циклу

// как запустить бесконечны цикл через while и for
// в чем разница между break и continue



for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i)
}
// 0, 1, 2

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i)
}
// 0, 1, 2, 4

// console.log(i) ? что будет


// hoisting


// console.log(str); // undefined
// str = 2;
// str = 3;
// console.log(str); // 2

// console.log(str2); // 
// let str2 = 2;


// Функции
// Одна функция - одно действие

// *****Function Declaration и Function Expression*****

// Объявление функции (не вызывает функцию)
// ключевое слово function 
// имя функции = глагол действия + существительное над чем выполняется действие (camelCase)
// параметры функции в ()
// тело функции

//Function Declaration
function showComment() {  
  console.log("Function Declaration"); 
};

// вызов функции
// параметры в ()
showComment();


// Function Expression (Функциональное выражение)
const showComment2 = function() {
    console.log("Function Expression"); 
};
showComment2();

//Основное отличие между ними: функции, объявленные как Function Declaration, создаются интерпретатором до выполнения кода
// hoisting функций



// *****Параметры в функциях *****

// Параметр – это переменная, указанная в круглых скобках в объявлении функции 
// Аргумент – это значение, которое передаётся функции при её вызове

function showText(userName, age) { // параметры name и age
    console.log(`Меня зовут ${userName}, мне ${age} лет`)
}
let userName = "Nadya"
showText(userName, 18);
showText("Ivan", 25);

// console.log(age); //


// параметры по умолчанию
// Параметры в функции могут быть указаны, но не все передаются

function showUserInfo(name, age, email = "email неизвестен") { //вариант 3
    console.log(name);
    console.log(age);
    console.log(email); // undefined
    // вариант1 
    // if (email === undefined) {
    //     email = "Email неизвестно";
    // }
    // //  //вариант 2
    // name = name || "Имя неизвестно";
    // age = age || "Возраст неизвестен";
    // email = email || "Email неизвестен";   
}

showUserInfo("Helen", 18)
showUserInfo("Ivan", 30, "email@text")


// *****Локальные и глобальные переменные*****

// Область видимости переменных

for (let j = 1; j<5;j++) {

}
// console.log(j);



let userAge = 18; // глобальная

function showAge() {
    console.log(userAge)  // 18
    userAge = 25; //
}

showAge();
console.log(userAge) // 25



let userAge3 = 18; //глобальная

function showAge3() { 
    let userAge3 = 25; //локальная
    console.log(userAge3); //25
}

showAge3();
console.log(userAge3) //18


let userAge2 = 18;
if (userAge3 == 18) {
    let userAge2 = 25;
}
console.log(userAge2)


// return

// Написать функцию, которая параметром будет принимать числа и возвращает квадрат этого числа

function calcSquare(a, b, c, d) { 
    return a+b+c+d; // возращение результата 
    
};
console.log(calcSquare(5, 6, 7, 8));
document.write(calcSquare(9, 10, 11, 12));

let square = calcSquare(13, 14, 15, 16);

(square>20) ? "true": "false"; 




calcSquare(10, 20, 7, 8);
let x = 6, y = 7, z = 8, v = 9;
calcSquare(x, y, z, v ); 

 



// Сделайте функцию, которая параметрами принимает 3 числа и выводит на экран сумму этих чисел






// return по умолчанию возвращает undefined
function showUndef() {
    return;
}
console.log(showUndef()) //undefined

// return - выход из функции
// разница с break и continue
function showRet() {
    for (let i=0; i<=10; i++) {
        if (i==3) return; // а если return?
        console.log(i);  // 0 1 2 
    
    }
    console.log("test")

}
showRet();





// 1. Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17 лет"

function showUserInfo(userName, userSurname, userAge) {
    document.write(`Привет, ${userName} ${userSurname} с возрастом
    ${userAge} <br>`)
}

showUserInfo("Иван", "Иванов", 30);


// 2. Написать универсальную функцию конвертер валют





// 3. Создайте функцию, которая принимает в качестве параметра целое число и возвращает:
// -1 – в случае, если число отрицательное; 0 – в случае, если число равно 0; 1 – в случае, если число положительное.


function checkNumber(a) {
    let result;
    if (a < 0) {
        result = -1;
    } else if (a === 0) {
        result = 0
    } else if (a > 0) {
        result = 1;
    } else {
        result = NaN;
    } 
    return result;
}

function showNumberInfo(b) {
    let resultFunc = checkNumber(b);
    if (resultFunc === -1) {
        console.log("Число отрицательное");
    } else if (resultFunc === 0) {
        console.log("Число равно нулю");
    } else if (resultFunc === 1) {
        console.log("Число положительное");
    } else {
        console.log("Не число")
    }
}
showNumberInfo(12);
showNumberInfo(-12);
showNumberInfo(0);
showNumberInfo("info");




// 4. Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 - зрелый



//5. Создайте функцию, которая принимает в качестве параметров два целых числа (a и b) и выводит на экран все чётные числа из диапазона a...b.


function showRange(a, b) {
    // let min = (a < b) ? a : b;
    // let max = (a > b) ? a : b;
    let min = a;
    let max = b;
    if (a > b) {
        min = b;
        max = a;
    }
    for (let i = min; i <= max; i++) {
        if (isEven(i)) {
            console.log(i);
        }    
    }
}

showRange(5, 15);
showRange(19, 3);





//6. Создайте функцию, которая принимает в качестве параметра целое число и возвращает количество цифр в этом числе.

function setDecimalToNumber() {

}
function checkLength(k) {
    return String(k).length;
}
console.log(checkLength(123456789));
console.log(checkLength("Hello world"));







//7. Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму.
// Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.

function isEven(x) {
    let result = (x%2 === 0);
    return result;
    // return (x%2 === 0); // вариант 2
}


function checkEvenNum(a, b) {
    let checkA = isEven(a);
    let checkB = isEven(b);
    if (checkA && checkB) {
        return a*b
    } else if (!checkA && !checkB) {
        return a+b
    } else {
        return (checkA) ? "нечетное "+b : "нечетное "+a;
    }
}
console.log(checkEvenNum(20, 30));
console.log(checkEvenNum(11, 13));
console.log(checkEvenNum(13, 40));



//8. Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)







