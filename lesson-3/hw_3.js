// ## Complete exercise
//    <p align='right'>< TeachMeSkills /></p>
// <h1 align='center'>Functions</h1>
// ### NORMAL level

// #### Использовать строгий режим
// #### Если в задаче необходимо использовать новые методы - необходимо оставить комментарий и расписать их детально (зачем используются и как работают)

// #### Task 1 💻
// Сделайте функцию **isEven()** (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть
// функция возвращает true, если нечетное — false.
console.log("Task 1");

function isEven(x) {
  return x % 2 === 0;
}

console.log(isEven(14));
console.log(isEven(3));

// #### Task 2 💻
// Создайте функцию, которая принимает в качестве параметра целое число и возвращает количество цифр в этом числе
console.log("Task 2");

function checkLength(k) {
  return String(k).length;
}
console.log(checkLength(123456789));
console.log(checkLength("Hello, world!"));

// #### Task 3 💻
// Написать функцию **getSum**, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.
// > Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050)
console.log("Task 3");

function getSumNew(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(getSumNew(100));

// #### Task 4 💻

// Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и верните результат переплаты по кредиту:

// + процентная ставка в год — 17%,
// + количество лет — 5.

// > Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.
console.log("Task 4");

function getOverpaymentCredit(credit) {
  let rate = 17;
  let period = 5;
  return (result = ((credit * rate) / 100) * period);
}

console.log(getOverpaymentCredit(100));

// #### Task 5 💻  (использовать методы обрезки строк)

// Написать функцию **trimString** которая в качестве аргумента принимает три параметра:
// + строку
// + значение от
// + значение по

// После вызова функция должна вернуть переданную строку обрезанную по значениям от и по
console.log("Task 5");

function trimString(str, startLimiterStr, endLimiterStr) {
  return str.slice(startLimiterStr, endLimiterStr);
}

console.log(trimString("каждый охотник желает знать", 7, 14));

// #### Task 6 💻(Дополнительно добавить проверку на число)

// Написать функцию **getSumNumbers**, которая будет принимать число и вычислять сумму цифр из которых состоит число.

// > Для 2021 это будет 5.

console.log("Task 6");

function getSumNumbers(num) {
  let res = String(num);
  let sum = 0;
  for (let i = 0; i < res.length; i++) {
    sum += Number(res[i]);
  }
  return sum;
}

console.log(getSumNumbers(2021));

// #### Task 7 💻

// Написать функцию **`getSum`** которая принимает два целых числа a и b, которые могут быть положительными или отрицательными, найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните a или b. Возможна ситуация, когда a будет больше b, сделать проверку и на это

//  getSum(1, 0) == 1   // 1 + 0 = 1
//  getSum(1, 2) == 3   // 1 + 2 = 3
//  getSum(3, 1) == 4   // 1 + 2 + 3 = 4
//  getSum(0, 1) == 1   // 0 + 1 = 1
//  getSum(1, 1) == 1   // 1 Since both are same
//  getSum(-1, 0) == -1 // -1 + 0 = -1
//  getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

console.log("Task 7");

function getSum(a, b) {
  if (a === b) return a;
  let min = a;
  let max = b;
  let sum_i = 0;
  if (a > b) {
    min = b;
    max = a;
  }
  for (let i = min; i <= max; i++) {
    sum_i += i;
  }
  return sum_i;
}

console.log(getSum(1, 0));
console.log(getSum(1, 2));
console.log(getSum(3, 1));
console.log(getSum(1, 1));
console.log(getSum(0, 1));
console.log(getSum(-1, 0));
console.log(getSum(-1, 2));

// #### Task 8 💻(Изучить как передавать функцию в качестве параметра)

// Напишите функцию **fooboo** которая принимает в качестве аргумента три параметра:

// + булевое значение
// + функцию **foo** которая выводит в консоль свое имя
// + функцию **boo** которая выводит в консоль свое имя

// > Если переданное булевое значение **true** запускаем функцию **foo** иначе **boo**
console.log("Task 8");

function foo() {
  return "foo";
}
function boo() {
  return "boo";
}

function fooboo(a, func1, func2) {
  if (a === true) {
    return func1();
  } else {
    return func2();
  }
}
console.log(fooboo(false, foo, boo));

// #### Task 9 💻
// Сделайте функцию, которая будет возвращать приветствие, использующее аргумент функции;

//     Программа должна вернуть "Hello, (name) how are you doing today?"

//     https://www.codewars.com/kata/55a70521798b14d4750000a4/train/javascript
console.log("Task 9");

function greet(name) {
  return (greet = "Hello, " + name + " how are you doing today?");
}
console.log(greet("Helen"));
// ### ADVANCED level

// #### Task 1 👨‍🏫i

// + Реализуйте функцию, который принимает 3 целочисленных значения a, b, c. Функция должна возвращать **true**, если треугольник можно построить со сторонами заданной длины, и **false** в любом другом случае. Найти формулу расчета в интернете
console.log("Task 1 Advanced");

function checkTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
}

console.log(checkTriangle(10, 25, 20));

// #### Task 2 👨‍🏫
// Дано произвольное целое число n. Написать программу, которая:

// + a. разбивает число n на цифры и выводит их на экран;
// + b. подсчитывает сколько цифр в числе n;
// + c. находит сумму цифр числа n;
// + d. меняет порядок цифр числа n на обратный.

// Пример: вводится число 123: цифр в числе = 3; сумма = 6; обратный порядок 321.
// Для ввода значений можете использовать ф-цию prompt(), либо задавать значения при
// инициализации переменных в коде.

// Для вывода результатов скриптов вы можете использовать функции: alert() для вывода
// всплывающего окна; console.log() для вывода в консоль браузера; document.write() для вывода в «тело» HTML-документа.
console.log("Task 2 Advanced");

function showBreakNumbers(num) {
  let res = String(num);
  for (let i = 0; i < res.length; i++) {
    console.log(res[i]); // цифры вывожу  в консоль, для удобства
  }
}

function checkLength(k) {
  return String(k).length;
}

function getSumNumbers(num) {
  let res = String(num);
  let sum = 0;
  for (let i = 0; i < res.length; i++) {
    sum += Number(res[i]);
  }
  return sum;
}

function getReverseOrderNum(b) {
  let res = String(b);
  let rev = "";
  for (let i = res.length - 1; i >= 0; --i) {
    rev += res[i];
  }
  return rev;
}

function showNumberInfo(a) {
  showBreakNumbers(a);
  console.log(checkLength(a));
  console.log(getSumNumbers(a));
  console.log(getReverseOrderNum(a));
}
showNumberInfo(12345);

// #### Task 3 👨‍🏫
// Сделайте функцию, которая возвращает периметр прямоугольника
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript

console.log("Task 3 Advanced");

function areaOrPerimeter(l, w) {
  return (perimeter = (l + w) * 2);
}

console.log(areaOrPerimeter(3, 3));

// #### Task 4 👨‍🏫
// Цель этого ката - выяснить, сколько бутылок беспошлинного виски вам придется купить так, чтобы экономия по сравнению с обычной уличной ценой эффективно покрыла бы расходы на ваш отпуск.

//     Вам будет предоставлена высокая уличная цена (normPrice), беспошлинная скидка (tax free discount) и стоимость отпуска.

//     Например, если бутылка стоит 10 фунтов стерлингов, как правило, а беспошлинная скидка составляет 10%, вы сэкономите 1 фунт стерлингов за бутылку. Если ваш отпуск обошелся в 500 фунтов стерлингов, то ответ, который вы должны вернуть, будет 500.

//     Все входные данные будут целыми числами. Округлите возвращаемое значение при помощи Math.floor()

// https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript
console.log("Task 4 Advanced");

function dutyFree(normPrice, discount, hol) {
  return Math.floor(hol / ((normPrice * discount) / 100));
}

console.log(dutyFree(10, 10, 500));
