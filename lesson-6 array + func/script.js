// TASK 1

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

fibonacci.forEach((item) => {
    console.log(item);
});

fibonacci.forEach(function (item) {
    console.log(item);
});

// TASK 2

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

let members = users.map((item, index) => "member " + (index + 1) + ": " + item);

console.log(members);

let newMembers = users.map(function(item, index) { 
    return "member " + (index + 1) + ": " + item;
});

console.log(newMembers);

// TASK 3

const numbers = [7, -4, 32, -90, 54, 32, -21];

let numbersFilter = numbers.filter(item => item > 0);

console.log(numbersFilter);

let newNumbersFilter = numbers.filter(function(item) {
    return item > 3;
});

console.log(newNumbersFilter);

// TASK 4

const fibonacci2 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

result = fibonacci2.reduce((sum, item) => sum + item);

console.log(result);

result2 = fibonacci2.reduce(function(sum, item) {
    return sum + item;
});

console.log(result2);

// TASK 5

const numbers1 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

let even = numbers1.find(item => item % 2 == 0);

console.log(even);

let even1 = numbers1.find(function(item) {
    return item % 2 == 0;
});

console.log(even1);

//ADVANCED TASK 1