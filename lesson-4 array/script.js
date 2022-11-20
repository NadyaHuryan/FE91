// 1 Task

const colors = ['red', 'green', 'blue'];
console.log(colors.length);

//2 Task

const animals = ['monkey', 'dog', 'cat'];
console.log(animals.slice(-1));

//3 Task

const numbers = [5, 43, 63, 23, 90];
console.log(numbers.splice(0, -1));
let x = numbers.length + 1;
for (let i = 0; i < x; i++){
   numbers.shift();
}
console.log(numbers);

//4 Task

const students = ['Polina', 'Dasha', 'Masha'];
students.pop();
students.push('Borya');
students.shift();
students.unshift('Andrey');
console.log(students);

//5 Task

const cats = ['Gachito', 'Tom', 'Batman'];
for (i = 0; i < cats.length; i++){
    console.log(cats[i]);
}
for (let value of cats){
    console.log(value);
}

//6 Task

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const arr = evenNumbers.concat(oddNumbers);
console.log(arr)
console.log(arr.indexOf(8));

//7 Task

const binary = [0, 0, 0, 0];
x = binary.length + 2;
for (i = 1; i < x; i = i + 2 ){
    binary.splice(i, 0, 1)
}
const str = binary.join(' ');
console.log(str);

//8 Task
// arr.includes(searchElement[fromIndex = 0]) Ищет 'searchElemnt' в массиве 'arr' начиная с индекса 0, возвращает Boolean
const arrInclude = [1, 2, 3, 4]
console.log(arrInclude.includes(3, 0)) // true
console.log(arrInclude.includes(3, 6)) // false, 

//9 Task 
//str.slice(beginIndex[, endIndex]) извлекает часть строки 'str' от 'beginIndex' до 'endIndex' не изменяя саму строку
//splice не работает для строк?

//Advance 
//1 Task

let str1 = '';
let bool = Boolean;
function palindrom(str1){
    str1 = str1.toUpperCase();
    str1 = str1.split('');
    for (i = 0; i < str1.length; i++){
        if (str1[i] === str1.reverse()[i]){
            bool = true;
        } else {
            bool = false;
            break;
        }
    }
    return bool
}
console.log(palindrom('аса'));
console.log(palindrom('шалАш'));
console.log(palindrom('rAZ'));

//2 Task

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
];
let sum = 0,
    count  = 0,
    avSum = 0;
for (i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
        sum += matrix[i][j];
        count++;
    }
}
avSum = sum / count;
console.log(avSum);

//3 Task

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
const positiveNumbers = [];
const negativeNumbers = [];
for (value of mixedNumbers){
    if (value >= 0){
        positiveNumbers.push(value);
    } else {
        negativeNumbers.push(value);
    }
}
console.log(positiveNumbers + '\n' + negativeNumbers);

//4 Task

const newArr = [];
let max = 0;
function getRandomInit(max){
    return Math.floor(Math.random() * max);
}
newArr.length = 11;
function getFullArray(arrName){
    for (i = 0; i < arrName.length; i++){
        arrName[i] = getRandomInit(50);
    }
    return arrName
}
getFullArray(newArr);
function getCube(arrSource){
    const arrCubed = [];
    for (value of arrSource){
        arrCubed.push((value) ** 3);
    }
    return (arrSource + '\n' + arrCubed)// \n добавил для читаемости 
}
console.log(getCube(newArr));