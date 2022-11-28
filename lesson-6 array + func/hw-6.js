"use strict";

// <h1 align="center">Functions level 2</h1>

// ## Complete exercise

// ### NORMAL level

// #### Task 1 🖥

// Выведи все элементы массива в консоль с помощью метода **`forEach`**

// ```javascript
//     const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// ```

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`

console.log("Task 1");
{
  const fibonacci = [
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
  ];

  // function declaration
  function showFibonacci(number) {
    console.log(number);
  }
  fibonacci.forEach(showFibonacci);

  // arrow function
  fibonacci.forEach((element) => console.log(element));

  // ! такая запись является function expression?

  fibonacci.forEach(function (element) {
    console.log(element);
  });
}

// #### Task 2 🖥

// Используя метод **`map`** создайте новый массив, на основе массива **`users`**, в котором каждый элемент массива будет содержать строку вида:

// > ['member 1: Darya', 'member 2: Masha', ... etc]

// ```javascript
//     const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
// ```

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

console.log("Task 2");

// function declaration
const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];

function transformUsers(item, index) {
  return "member " + (index + 1) + ": " + item;
}

const newUsers = users.map(transformUsers);

console.log(newUsers);

// arrow function
const newUsers2 = users.map(
  (item, index) => "member " + (index + 1) + ": " + item
);

console.log(newUsers2);

// #### Task 3 🖥

// С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.

// ```javascript
//     const numbers = [7, -4, 32, -90, 54, 32, -21]
// ```

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

console.log("Task 3");
const numbers = [7, -4, 32, -90, 54, 32, -21];

// function declaration
function removesNegativeNumbers(num) {
  if (num >= 0) return true;
}

const result = numbers.filter(removesNegativeNumbers);

console.log(result);

// arrow function
const result1 = numbers.filter((item) => item >= 0);

console.log(result1);

// #### Task 4 🖥

// Используя метод **`reduce`** получите сумму всех чисел массива.

// ```javascript
//     const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// ```

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

console.log("Task 4");
const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];
// function declaration
function getSumFibonacci(acc, item) {
  return acc + item;
}

const sumFibonacci = fibonacci.reduce(getSumFibonacci);
console.log(sumFibonacci);

// arrow function
const sumFibonacci1 = fibonacci.reduce(
  (leftElement, rightElement) => leftElement + rightElement
);

console.log(sumFibonacci1);

// #### Task 5 🖥

// Используя метод **`find`** найдите в массиве первое четное число.

// ```javascript
//     const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
// ```

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.
console.log("Task 5");
// function declaration
{
  const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

  function getPositiveNumber(num) {
    if (num % 2 === 0) return true;
  }

  const firstPositiveNumder = numbers.find(getPositiveNumber);

  console.log(firstPositiveNumder);

  // arrow function

  const firstPositiveNumder1 = numbers.find((item) => item % 2 === 0);

  console.log(firstPositiveNumder1);
}

// ### ADVANCED level

// #### Task 1 👨‍🏫

// + Написать функцию конструктор **Student**
// + В каждом объекте студента должны быть поля **salary** , **rate** , **name**
// + Внутри объекта также должен быть метод который на основе рейтинга возвращает сумму возможного кредита.
// + На основе функции создать минимум 5 студентов и имя каждого студента должно соответствовать имени студента из вашей группы.

// + Создать массив **students** и поместить в него студентов.
// + Написать функцию которая принимает массив студентов. И вычисляет общую сумму кредитов которую можно выдать группе.

// rate имеет 4 категории A B C D
// + **A** - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
// + **B** - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
// + **C** - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
// + **D** - плохой рейтинг и мы не можем дать кредит

console.log("Task 1. ADVANCED");

function Student(student) {
  this.name = student.name;
  this.rate = student.rate;
  this.salary = student.salary;
  this.credit = function () {
    if (this.rate == "A") return this.salary * 12;
    if (this.rate == "B") return this.salary * 9;
    if (this.rate == "C") return this.salary * 6;
    if (this.rate == "D") return this.salary * 0;
  };
}

// const student_1 = new Student("Allena", "A", 200);
// console.log(student_1);

// const student_2 = new Student("Aliona", "B", 100);
// console.log(student_2);

// const student_3 = new Student("Andrey", "C", 100);
// console.log(student_3);

// const student_4 = new Student("Kseniya", "D", 100);
// console.log(student_4);

// const student_5 = new Student("Liza", "A", 100);
// console.log(student_5);

// const students = [student_1, student_2, student_3, student_4, student_5];

const studentsInfo = [
  { name: "Allena", rate: "A", salary: 100 },
  { name: "Aliona", rate: "B", salary: 100 },
  { name: "Andrey", rate: "C", salary: 100 },
  { name: "Kseniya", rate: "D", salary: 100 },
  { name: "Liza", rate: "A", salary: 100 },
];

const students = studentsInfo.map((student) => new Student(student));
console.log(students);

function getSumCredits(arr) {
  let sumCredits = 0;

  for (let value of arr) {
    sumCredits += value.credit();
  }
  return sumCredits;
}

console.log(getSumCredits(students));

// #### Task 2 👨‍🏫 Тролли атакуют наш раздел с комментариями!!!

// + Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
// + Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
// + Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".

// > Примечание: для этой задачи **`y`** не считается гласной.

console.log("Task 2. ADVANCED");

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function deleteVowels(str) {
  return str
    .split("")
    .filter((item) => !vowels.includes(item))
    .join("");
}

console.log(deleteVowels("This website is for losers LOL!"));

// #### Task 3 👨‍🏫 Нет истории, нет теории

// + В приведенных ниже примерах показано, как написать функцию:

// ```javascript
//     accum("abcd") -> "A-Bb-Ccc-Dddd"
//     accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//     accum("cwAt") -> "C-Ww-Aaa-Tttt"
// ```

// > Параметр - это строка, которая включает только буквы от a..z и A..Z.

console.log("Task 3. ADVANCED");

let splitString = [];

function accum(str) {
  return (splitString = str
    .toLocaleLowerCase()
    .split("")
    // .map((item, index) => item.repeat(index + 1))
    // .map((item) => item[0].toUpperCase() + item.slice(1))
    // !   способ ниже позволяет выполнить необходимые действия за один перебор массива 
    .map((item, index) => {
      let newItem = item.repeat(index + 1);
       newItem = newItem[0].toUpperCase() + newItem.slice(1);
       return newItem;
    })
    .join("-"));
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));

// #### Task 4 👨‍🏫 Самый высокий и самый низкий

// + В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны возвращать наибольшее и наименьшее число.

// ```javascript
//     highAndLow("1 2 3 4 5"); // return "5 1"
//     highAndLow("1 2 -3 4 5"); // return "5 -3"
//     highAndLow("1 9 3 4 -5"); // return "9 -5"
// ```
console.log("Task 4. ADVANCED");

function highAndLow(str) {
  let maxMin = str.split(" ");
  return `${Math.max(...maxMin)} ${Math.min(...maxMin)}`;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));

// > Строка вывода должна состоять из двух чисел, разделенных одним пробелом, при этом наибольшее число должно быть первым.

// #### Task 5 👨‍🏫 Изограммы

// + Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой. Регистр букв мы игнорируем.

// ```javascript
//     isIsogram("Dermatoglyphics") == true
//     isIsogram("aba") == false
//     isIsogram("moOse") == false // -- ignore letter case
// ```
console.log("Task 5. ADVANCED");

function isIsogram(str) {
  let arrIsIsogram = str.toLocaleLowerCase().split("");

  return !arrIsIsogram.some(
    (item, index) => arrIsIsogram.indexOf(item) !== index
  );
}
//!  1) метод ".toLocaleLowerCase" преобразует все символы строки в строчные и позволяет игнорировать использование заглавных букв
// !  2) метод ".split("")" позволяет разбить строку на массив строчных элементов,при этом использование в качестве разделителя пустой строки "("")" позволяет получить массив состоящий из символов исходной строки
//!  3) метод ".some" проверяет соответствует ли по крайней мере один элемент в массиве условию, заданному в передаваемой функции.
//! 3.1) В теле функции, переданной методом ".some".сравнивается индекс элемента массива возвращенный методом indexOf(item) (возвращает индекс только первого найденного элемента массива => не происходит полный перебор массива!) и индекса элемента переданного в качестве параметра функцией метода ".some.
//! т.к. при выполнении условия "indexOf(item) !== index" метод .some(item, index)  возвращает "true", для выполнения условий задачи преобразуем полученное значение на противоположное с помощью оператора "!"
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));

// #### Task 6 👨‍🏫 Считаем коды символов

// + Учитывая строку, превратите каждый символ в его код символа ASCII и соедините их вместе, чтобы создать число. Поместите результат в переменную **`total1`**

// + Затем замените все числа `7` на число `1` и назовите это число **`total2`**

// + После верните разницу между суммой цифр **`total1`** и **`total2`**

// > 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
console.log("Task 6. ADVANCED");

function getSymbolFromStr(str) {
  let total1 = "";
  for (let i = 0; i <= str.length - 1; i++) {
    total1 += str.charCodeAt(i);
  }
  return total1;
}

// console.log(getSymbolFromStr("ABC"));

function replaceNum(str, a = 7, b = 1) {
  let total1 = getSymbolFromStr(str);
  let total2 = total1
    .split("")
    .map((item) => (+item === a ? b : item))
    .join("");
  return total2;
}
// console.log(replaceNum("ABC"));

function differenceBetweenSum(str, a = 7, b = 1) {
  let total1 = getSymbolFromStr(str);
  let total2 = replaceNum(str, a, b);
  let result =
    total1
      .split("")
      .reduce((leftMember, rightMember) => +leftMember + +rightMember) -
    total2
      .split("")
      .reduce((leftMember, rightMember) => +leftMember + +rightMember);
  return result;
}

console.log(differenceBetweenSum("ABC"));

// #### Task 7 👨‍🏫 Дубликаты

// + Цель этого упражнения - преобразовать строку в новую строку, где каждый символ в новой строке равен
// `(`**, если этот символ появляется только один раз в исходной строке, или **`)`**, если этот символ встречается более одного раза в исходной строке. Игнорируйте использование заглавных букв при определении дубликата символа.

// ```javascript
//     "din" => "((("
//     "recede" => "()()()"
//     "Success" => ")())())"
//     "(( @" => "))(("
// ```
console.log("Task 7. ADVANCED");

function transformStr(str) {
  let arrFromStr = str.toLocaleLowerCase().split("");

  let strFromArr = arrFromStr
    .map(function (item, index) {
      if (
        arrFromStr.lastIndexOf(item) === index &&
        arrFromStr.indexOf(item) === index
      ) {
        return "(";
      } else {
        return ")";
      }
    })
    .join("");
  return strFromArr;
}

//!  1) метод ".toLocaleLowerCase" преобразует все символы строки в строчные и позволяет игнорировать использование заглавных букв
// !  2) метод ".split("")" позволяет разбить строку на массив строчных элементов,при этом использование в качестве разделителя пустой строки "("")" позволяет получить массив состоящий из символов исходной строки
// !  3) метод ".map" вызывает переданную функцию один раз для каждого элемента массива и формирует новый массив из возвращенных значений. В функцию помещена проверка с использованием инструкции "If", методов "lastIndexOf()" и ".indexOf()" и операторов сравнения "===" и "&&".
// !  3.1) метод ".indexOf()" возвращает индекс элемента "item" который был передан в качестве аргумента функцией вызванной методом "map".  Проверка начинается с начала массива и возвращает индекс при первом совпадении. Метод "lastIndexOf()" также возвращает индекс элемента массива при первом совпадении, но проверка начинается с конца массива.
//  !  3.2 С помощью оператора "===" происходит сравнение индекса возвращенного методом ".indexOf()" и индекса, который был передан в качестве параметра функцией вызванной методом "map". Аналогичное сравнение производится для индекса возвращенного методом "lastIndexOf ()". Полученные булевые значения сравниваются между собой оператором логического сравнения "&&". Использование сразу двух методов ".indexOf()" и "lastIndexOf ()" для последовательной проверки элементов массива на соответствие индексу и последующее их сравнение между собой позволяет выявить дубликат (аналогичный результат можно получить используя операторы сравнения "!==" и "||" соответственно). Использование в контексте задачи только одного из методов не дает требуемого значения, т.к. при проверке первого элемента массива,который имеет дубликат, будет возвращаться "true" и только при проверке дубликата будет возвращено "false"
// !  3.3) Инструкция "if" позволяет, в зависимости от полученного результата сравнений значение "(" или ")"

console.log(transformStr("din"));
console.log(transformStr("recede"));
console.log(transformStr("Success"));
console.log(transformStr("(( @"));
