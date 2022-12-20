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

// Advansed 

// Task 1

function User(salary, rate, name) {
    let credit = 0;
    this.salary = salary;
    this.rate = rate;
    this.name = name;
    this.getCredit = function() {
        if (this.rate == 'A') {
            return credit = this.salary * 12;
        } else if (this.rate == 'B') {
            return credit = this.salary * 9;
        } else if (this.rate == "C") {
            return credit = this.salary * 6;
        } else {
            return credit = 0;
        }
    }
}

let studentOne = new User(500, 'C', 'Hanna');
let studentTwo = new User(700, 'A', 'Vadim');
let studentThree = new User(600, 'D', 'Diana');
let studentFour = new User(300, 'B', 'Vladimir');
let studentFive = new User(800, 'A', 'Kate');

const students = [studentOne, studentTwo, studentThree, studentFour, studentFive];

function creditSum (arr) {
    const newArr = arr.map((item) => item.getCredit());
    const sum = newArr.reduce((itemLeft, itemRight) => itemLeft + itemRight);
    return sum;
}

console.log(creditSum(students));

// Task 2

function noVowels(str) {
    const mass = str.split('');
    const finalMass = mass.map( function (item) {
        if (item == 'a' || item == 'e' || item == 'i' || item == 'o' ||item == 'u' ||
            item == 'A' || item == 'E' || item == 'I' || item == 'O' ||item == 'U') {
            return item = '';
            }
        else return item;
    })
    return finalMass.join('');
}

console.log(noVowels('This website is for losers LOL!')) 

// Task 3

function accum(str) {
    let itemMiddle = '';
    newStr = str.toUpperCase();
    const arr = newStr.split('');
    const newArr = arr.map(function (item, index) {  
        itemMiddle = item.toLowerCase(); 
        for (let i = 1; i <= index; i++) { 
            item += itemMiddle; 
        }
        return item;
    });
    return newArr.join('-');
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));

// Task 4

function minMax (str) {
    const arr = str.split(' ');
    const newArr = arr.map(function (item) {
        return Number(item)
    });
    const maxMinArr = [Math.max(...newArr), Math.min(...newArr)];
    return maxMinArr;
}

console.log(minMax("1 2 3 4 5"));
console.log(minMax("1 2 -3 4 5"));
console.log(minMax("1 9 3 4 -5"));  

// Task 5

// Нашла интереcный способ решения

// function isIsogram(str) {
//     return !/(\w).*\1/i.test(str)
// }

function isIsogram(str) {
    const letters = []
    for (let i = 0; i < str.length; i++) {
        
        if (i > 0 && str[i] == str[i].toUpperCase()) return false;

        if (str[i] in letters) return false;
        else letters[str[i]] = 1;
    }
    return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));

// Task 6

let str = 'ABC',
    total1 = '',
    total2 = '',
    result2 = 0;

for (let i = 0; i < str.length; i++) {
    total1 += str.charCodeAt(i);
}

const str2 = total1.split('');
let index = 0;
for (let item of str2) {
    if (item == '7') {
        index = str2.indexOf(item);
        str2.splice(index, 1, '1');
    } else continue;
}

total2 = str2.join('');

console.log(result2 =  +total1 + +total2);

// Task 7

function duplicate (str) {
    const arr = str.toLowerCase().split(''),
        result = [];
    const newArr = arr.filter(function(item, index)  {
            if (arr.indexOf(item) !== index || arr.lastIndexOf(item) !== index) {
                result.push(')');
            } else {
                result.push('(');
            }
    })
    return result.join('');
}


console.log(duplicate('din'));
console.log(duplicate('recede'));
console.log(duplicate('Success'));
console.log(duplicate('(( @'));