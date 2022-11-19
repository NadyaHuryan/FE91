const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];


fibonacci.forEach(function(item) {
    console.log(item);
    });

console.log('---------');

fibonacci.forEach(item  => console.log(item));
console.log('##########');
//task 1 NORMAL level




const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];


let remapUsers1 = users.map(function(item, index) {
    return "member " + (index + 1) + ": "+ item;
  })

let remapUsers2 = users.map((item, index) => "member " + (index + 1) + ": "+ item);

console.log(remapUsers1);
console.log('---------');
console.log(remapUsers2);
console.log('##########');
//task 2 NORMAL level





const numbers = [7, -4, 32, -90, 54, 32, -21];


let positiveNumbers1 = numbers.filter(function(item){
        return item >= 0;
})

let positiveNumbers2 = numbers.filter(item => (item >= 0));
console.log(positiveNumbers1);
console.log('---------');
console.log(positiveNumbers2);
console.log('##########');
//task 3 NORMAL level

let sumFibonacci1 = fibonacci.reduce(function(item, sum){
    return sum + item;
});
let sumFibonacci2 = fibonacci.reduce((item, sum) => sum + item);
console.log(sumFibonacci1);
console.log('---------');
console.log(sumFibonacci2);
console.log('##########');
//task 4 NORMAL level



const numbers5 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

let findNumb1 = numbers5.find(function(item){
    return item % 2 === 0;
})
let findNumb2 = numbers5.find(item => item % 2 === 0);

console.log(findNumb1);
console.log('---------');
console.log(findNumb2);
console.log('##########');
//task 5 NORMAL level