"use strict"


// проверка на четное
function isEven(x) {
  return (x % 2 == 0);
}

// проверка на целое
function isInteger(x) {
  return (x ^ 0) === x;
}

// ф-ция возвращает сумму цифр числа
function getSumNumbers(x) {
  let str = String(x);
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum = sum + +str[i];
  }
  return sum;
}

// ф-ция возвращает длину строки
function getLength(x) {
  return String(x).length;
}

// ф-ция меняет порядок на обратный
function getReversedStr(x) {
  let str = String(x);
  return str.split("").reverse().join("");
}
// сначала делаем из строки массив с помощью .split(""),
// затем делаем обратный порядок .reverse(), и .join("") объединяет все эл-ты массива в строку.


// NORMAL level \\

// ex 1

let a = Number(prompt(`Введите целое число`));

if (isInteger(a)) {
  console.log(isEven(a));
} else {
  console.log(`Число не целое`);
}


// ex 2

console.log(getLength(12345876));
console.log(getLength(`gkfjgldjvkmo;vmmxcl;vm`));


// ex 3

function getSum(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(getSum(100));


// ex 4

const rate = 17;
const term = 5;

function showOverpayment(loan) {
  return (loan * term) * rate / 100;;
}

console.log(showOverpayment(1000));


// ex 5

// метод slice возвращает подстроку из строки.
// первый параметр - номер символа строки, с которого начинается вырезание, 
// второй параметр - номер символа, на котором закончится вырезание (при этом символ с этим номером не включится в вырезанную часть).
// второй параметр не является обязательным. 
// Если его не указать - подстрока вырежется с указанного в первом параметре символа до конца строки.

function trimString(str, start, end) {
  return str.slice(start, end);
}

let string = prompt("Введите строку");

console.log(trimString(string, 2, 7));


// ex 6

console.log(getSumNumbers(20212121));


// ex 7

function getSum1(a, b) {
  if (a == b) {
    return a + ` Since both are same`;
  }

  let sum = 0;
  let min = a;
  let max = b;
  if (a > b) {
    min = b;
    max = a;
  }

  for (let i = min; i <= max; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(getSum1(0, 3));
console.log(getSum1(-3, 5));
console.log(getSum1(10, 3));
console.log(getSum1(3, 3));


// ex 8

function getHello() {
  console.log(`hello`);
}

function getBue() {
  console.log(`bue-bue`);
}

function fooboo(bool, foo, boo) {
  if (bool) {
    foo();
  } else {
    boo();
  }
}

fooboo(0, getHello, getBue);
fooboo(1, getHello, getBue);


// ex 9 

function showGreating(userName) {
  return `Hello, ${userName}, how are you doing today? <br>`;
}

document.write(showGreating(`Vladislav`));
document.write(showGreating(`Aliona`));


// ADVANCED level \\

// ex 1

function isTriangleExist(a, b, c) {
  if (!isInteger(a) || !isInteger(b) || !isInteger(c)) {
    return `Укажите целочисленные значения сторон`;
  }

  if (a + b > c && a + c > b && b + c > a) {
    return `Треугольник можно постоить`;
  }
  return `Треугольник нельзя построить`;
}

console.log(isTriangleExist(1, 2, 10));
console.log(isTriangleExist(4, 8, 7));
console.log(isTriangleExist(2.5, 8.3, 7));


// ex 2 

let n = prompt(`Введите число`);

function showNumberInfo(n) {
  document.write(`Число ${n}. <br> Цифр в числе: ${getLength(n)}. <br> Сумма цифр: ${getSumNumbers(n)}. <br> Обратный порядок: ${getReversedStr(n)} `);
}

showNumberInfo(n);


// ex 3

function getPerimeterOrArea(l, w) {
  let p = 2 * (l + w);
  let area = l ** 2;
  if (l == w) {
    return `Площадь квадрата ` + area;
  }
  return `Периметр прямоугольника ` + p;
}

console.log(getPerimeterOrArea(120, 43));
console.log(getPerimeterOrArea(10, 10));


// ex 4

let holidayExpences = prompt(`Введите сумму расходов вашего отпуска`);
let normPrice = prompt(`Введите стоимость 1 бутылки виски`);
let discount = prompt(`Введите беспошлинную скидку, %`);

function getBottleNumb() {
  let oneBottleDiscount = normPrice * (discount / 100);
  return Math.floor(holidayExpences / oneBottleDiscount);
}

alert(`Вам придется купить ${getBottleNumb()} бутылок виски, чтобы покрыть расходы на Ваш отпуск.`);