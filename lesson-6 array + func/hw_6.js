// task 1

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// Arrow

fibonacci.forEach( item => console.log(item) );

// Declaration

fibonacci.forEach( function(item) {
    console.log(item);
})

// Task 2

// Arrow

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

let i = 0,
    member = 'member ',
    result = '';
    const users2 = users.map ( (elem) => {
        i += 1;
    result = member + i;
    return result + ': ' + elem;
    } )
console.log(users2)

// Declaration

let i1 = 0,
    member1 = 'member ',
    result1 = '';
const users2_1 = users.map (function (elem) {
    i1 += 1;
    result1 = member1 + i1;
    return result1 + ': ' + elem;
})

console.log(users2_1)

// Task 3

const numbers = [7, -4, 32, -90, 54, 32, -21];

// Arrow

const newNumbers = numbers.filter(number => number > 0);

console.log(newNumbers);

// Declaration

const newNumbers2 = numbers.filter(function (number) {
    return number > 0
} );

console.log(newNumbers2);

// Task 4

const fibonacci_1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// Arrow

let sum = 0;
const sumArr = fibonacci_1.reduce(
  (returnedValue, currentItem) => returnedValue + currentItem
);


console.log(sumArr);

// Declaration 

let sum1 = 0;
const sumArr1 = fibonacci_1.reduce( function(returnedValue, currentItem) {
    sum1 = returnedValue + currentItem;
   return sum1;
  }
);


console.log(sumArr1);

// Task 5

const numbers1 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

// Arrow

let res = numbers1.find(even => even % 2 == 0);
console.log(res);

// Declaration

let res_1 = numbers1.find(function (even) {
    return even % 2 == 0;
});

console.log(res_1);