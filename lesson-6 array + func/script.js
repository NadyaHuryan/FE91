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
