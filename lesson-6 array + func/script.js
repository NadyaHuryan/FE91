//HW-6//

//1
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
////1.1////
fibonacci.forEach((item) => {
    console.log(item);
});
////1.2////
fibonacci.forEach(function (item) {
    console.log(item);
});


//2
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
////2.1////
let members = users.map((item, index) => "member " + (index + 1) + ": " + item);

console.log(members);
////2.1////
let newMembers = users.map(function (item, index) {
    return "member " + (index + 1) + ": " + item;
});

console.log(newMembers);

//3
const numbers = [7, -4, 32, -90, 54, 32, -21]
const positiveNumbers = numbers.filter(function (number) {
    if (number > 0) {
        return true
    }
})
console.log(positiveNumbers)

const newPositiveNumbers = numbers.filter(number => number > 0)
console.log(newPositiveNumbers)

//4
const fibonaccii = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
////4.1////
const fibonacciOne = fibonaccii.reduce(function (leftValue, rightValue) {
    return leftValue + rightValue
})

console.log(fibonacciOne);
////4.2////
const fiboncciTwo = fibonaccii.reduce((leftValue, rightValue) => leftValue + rightValue)

console.log(fiboncciTwo);

//5
////5.1////
const numberss = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

let even = numberss.find(item => item % 2 == 0);

console.log(even);
////5.2////
let evenOne = numberss.find(function (item) {
    return item % 2 == 0;
});

console.log(evenOne);
/////////////////ADVANCED/////////////////

//1//
const fibonacciThree = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

fibonacciThree.forEach(function declaration(elem) {
    console.log(elem)
})

fibonacciThree.forEach(function arrow(elem, index, fibonacciThree) {
    console.log(index + '. ' + elem)
})

fibonacciThree.forEach(element => console.log(element))

//2//
function noVowels(str) {
    const mass = str.split('');
    const finalMass = mass.map(function (item) {
        if (item == 'a' || item == 'e' || item == 'i' || item == 'o' || item == 'u' ||
            item == 'A' || item == 'E' || item == 'I' || item == 'O' || item == 'U') {
            return item = '';
        }
        else return item;
    })
    return finalMass.join('');
}

console.log(noVowels('This website is for losers LOL!'))

//3//
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


//4//
function minMax(str) {
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

//5//
function isIsogram(str) {
    let str1 = str.toUpperCase();
    let strArray = str1.split("");
    let strArrayNew = strArray.reduce(function (leftValue, rightValue) {
        if (!leftValue.includes(rightValue)) {
        }
        return leftValue
    })
    return strArray.length == strArrayNew.length
}
console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("cat"))
console.log(isIsogram("aba"))
console.log(isIsogram("moOse"))

//6//
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

console.log(result2 = +total1 + +total2);
//7//
function stringInNewString(str) {
    let str1 = str.toUpperCase();
    let strArray = str1.split("");
    let newrarray = "";
    for (value of strArray) {
        if (strArray.indexOf(value) === strArray.lastIndexOf(value)) {
            newrarray += "("
        } else {
            newrarray += ")"
        }
    }
    return newrarray
}
console.log(stringInNewString("(( @"))
console.log(stringInNewString("recede"))
console.log(stringInNewString("din"))
console.log(stringInNewString("Success"))