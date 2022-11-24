"use strict"

// ex 1

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

fibonacci.forEach(function (item) {
  console.log(item);
});

fibonacci.forEach((item) => {
  console.log(item);
});

// ex 2

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

let usersNew1 = users.map((item, i) => `member ${i + 1}: ${item}`);

console.log(usersNew1);

let usersNew2 = users.map(function (item, i) {
  return `member ${i + 1}: ${item}`;
})

console.log(usersNew2);

// ex 3

const numbers = [7, -4, 32, -90, 54, 32, -21];

let positive1 = numbers.filter(function (item) {
  return item > 0;
});

console.log(positive1);

let positive2 = numbers.filter((item) => item > 0);

console.log(positive2);

// ex 4

let fibonacciSumm = fibonacci.reduce(function (previousValue, item) {
  return item + previousValue;
}, 0);

console.log(fibonacciSumm);

let fibonacciSumm2 = fibonacci.reduce((previousValue, item) => item + previousValue);

console.log(fibonacciSumm2);

// при отсутствии первоначального значения (initialValue)
// в качестве первого значения берётся первый элемент массива, а перебор стартует со второго.

// ex 5

const numbers2 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

let evenNumbers = numbers2.find(function (item) {
  return item % 2 == 0;
});

console.log(evenNumbers);

let evenNumbers2 = numbers2.find((item) => item % 2 == 0);

console.log(evenNumbers2);


// ADVANCED level \\

// ex 1

function Student(name, salary, rate) {
  this.name = name;
  this.salary = salary;
  this.rate = rate;
  this.checkRate = function () {
    if (rate == 'A') {
      return salary * 12;
    } else if (rate == 'B') {
      return salary * 9;
    } else if (rate == 'C') {
      return salary * 6;
    } else if (rate == 'D') {
      return 0;
    }
  }
  this.loan = this.checkRate();
}

let stRoman = new Student('Роман', 900, 'A');
let stIvan = new Student('Иван', 500, 'D');
let stAlena = new Student('Елена', 800, 'B');
let stKseniya = new Student('Ксения', 1000, 'A');
let stLiza = new Student('Елизавета', 700, 'C');

let students = [stRoman, stIvan, stAlena, stKseniya, stLiza]
console.log(students);

let allLoans = students.map((item) => item.loan);
console.log(allLoans);

let sumLoans = allLoans.reduce((itemLeft, itemRight) => itemLeft + itemRight);

console.log(`Общая сумма кредита, которую можно выдать группе: ${sumLoans}`);


// ex 2

function getStrWithoutVowels(str) {
  let checkVowels = ['A', 'a', 'E', 'e', 'U', 'u', 'I', 'i', 'O', 'o'];
  let arrFilter = str.split("").filter((item) => !checkVowels.includes(item));
  let result = arrFilter.join("");
  return result;
}

console.log(getStrWithoutVowels('This website is for losers LOL!'));

// ex 3

function accum(str) {
  let arr = str.split("");
  let result = [];
  arr.forEach(function (item, index) {
    let strRepeat = item.repeat(index + 1);
    let strUpper = strRepeat.charAt(0).toUpperCase() + strRepeat.slice(1);
    // charAt(0) возвращает самый первый символ и toUpperCase() делает его заглавным
    // затем соединяем этот заглавный символ с остальной частью строки
    result.push(strUpper);
  });
  return result.join("-");
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));

// ex 4

function highAndLow(str) {
  let arr = str.split(" ").sort((a, b) => a - b);
  let arrNum = arr.map((item) => Number(item))
  let minNum = arrNum.at(0);
  let maxNum = arrNum.at(-1);
  return `${maxNum} ${minNum}`;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));

// ex 5

function isIsogram(str) {
  let initialArray = str.toLowerCase().split("");
  let uniqueArray = initialArray.filter((item, index) => initialArray.indexOf(item) == index);
  // удаляем дубликаты, т.е. записываем только те эл-ты, у которых индекс первого вхождения элемента (indexOf)= индексу самого элемента (index)
  return initialArray.length == uniqueArray.length;
}

console.log(isIsogram('sds'));
console.log(isIsogram('Aliona'));
console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('moOse'));

// ex 6

function getCode(str) {
  let arr = str.split("");
  let total1 = arr.map((item) => item.charCodeAt()).join("");
  let total2 = total1.replaceAll(7, 1); //заменяет все 7 на 1 в строке
  return `Разница между ${total1} и ${total2} равна ${+total1 - +total2}`;
}

console.log(getCode('A233CCCC'));
console.log(getCode('MMM'));

// ex 7

function getNewString(str) {
  let initialArray = str.toLowerCase().split("");
  let mappedArray = initialArray.map(function (item, i, arr) {
    let filteredArray = arr.filter((letter) => letter == item);
    let count = filteredArray.length;
    if (count == 1) {
      return "(";
    } else {
      return ")";
    }
  });
  return mappedArray.join("");
}

console.log(getNewString('din'));
console.log(getNewString('recede'));
console.log(getNewString('Success'));
console.log(getNewString('(( @'));

