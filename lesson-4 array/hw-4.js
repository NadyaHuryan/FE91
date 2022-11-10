// HOMEWORK 4
// #### Task 1 🖥

// Дан массив:

// ```javascript
//     const colors = ['red', 'green', 'blue']
// ```

// Выведите в консоль его длину.

const colors = ['red', 'green', 'blue'];


console.log(colors.length);


// #### Task 2 🖥

// Дан массив:

// ```javascript
//     const animals = ['monkey', 'dog', 'cat']
// ```

// Выведите в консоль его последний элемент вне зависимости от его длины.

const animals = ['monkey', 'dog', 'cat'];


console.log(animals[animals.length - 1]);
//(animals.at(-1))


// #### Task 3 🖥

// Дан массив:

// ```javascript
//     const numbers = [5, 43, 63, 23, 90]
// ```

// Удалите все элементы в массиве и выведите в консоль полученный результат.

// > Реализуйте решение двумя способами.

const numbers = [5, 43, 63, 23, 90];


numbers.length = 0;

console.log(numbers);

const numbers1 = [5, 43, 63, 23, 90];


numbers1.splice(0);

console.log(numbers1);


// #### Task 4 🖥

// Дан массив:

// ```javascript
//     const students = ['Polina', 'Dasha', 'Masha']
// ```

// + Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
// + Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
// + Полученный результат не забудьте вывести в консоль.


const students = ['Polina', 'Dasha', 'Masha'];


students.pop(); //['Polina', 'Dasha']
students.push(`Borya`); //['Polina', 'Dasha', `Borya`]
students.shift(); //['Dasha', `Borya`]
students.unshift(`Andrey`); // [`Andrey`, 'Dasha', `Borya`]

console.log(students);


// #### Task 5 🖥

// Дан массив:

// ```javascript
//     const cats = ['Gachito', 'Tom', 'Batman']
// ```

// Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**.

const cats = ['Gachito', 'Tom', 'Batman'];


for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

for (let cat of cats) {
    console.log(cat);
}

// #### Task 6 🖥

// ```javascript
//     const evenNumbers = [2, 4, 6, 8, 10]
//     const oddNumbers = [1, 3, 5, 7, 9]
// ```

// + Соедините два массива чисел в один.
// + В полученном массиве попробуйте найти индекс числа **`8`**

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const allNumbers = evenNumbers.concat(oddNumbers);


console.log(allNumbers);

console.log(allNumbers.indexOf(8));



// #### Task 7 🖥

// Дан массив:

// ```javascript
//     const binary = [0, 0, 0, 0]
// ```

// + Наш бинарный массив неполный, в нем явно не хватает единиц.
// + Превратите данный массив в строку.

// > [0, 0, 0, 0] -> '0101010'

const binary = [0, 0, 0, 0];
const binaryFull = binary.join('1'); //0101010


console.log(binaryFull);


// #### Task 8 🖥

// Как работает метод includes? Привести 2 примера с комментариями

//позволяет определить содержит ли массив искомый элемент, если содержит, то метод возвращает значение true, иначе - false

let arr = [1, 2, 3, 4, 5];

console.log(arr.includes(2)); //вернет true тк элемент есть в массиве
console.log(arr.includes(6)); //вернет false тк эелемента в массиве нет

let arr2 = ["Dasha", "Masha", "Sasha", "Pasha", "Liza"];

console.log(arr2.includes("Liza")); //true тк элемент есть в массиве
console.log(arr2.includes("Petya")); //false тк эелемента в массиве нет

// #### Task 9 🖥
// Как работает метод splice и slice для строк? Привести 2 примера с комментариями

//splice - изменяет содержимое массива при этом удаляя элементы или добавляя их, а slice не меняет массив, он возвращает новый массив к оторый копирует элементы с индекста start до индекса end включительно

let arrSplice = ["Dasha", "Masha", "Sasha", "Pasha"];


arrSplice.splice(1, 2); //начиная с позиции 1 удалить 2 элемента т.е. останется  ["Dasha", "Pasha"]

console.log(arrSplice);


let arrSlice = [1, 2, 3, 4, 5];

console.log(arrSlice.slice(0, 2)); //копирует с 1 по 2



// ### ADVANCED level

// > Для решения задач используйте циклы **`for`** или **`for of`**

// #### Task 1 👨‍🏫

// Реализуйте функцию которая будет проверять, является ли слово палиндромом.

function checkPalindrom(x) {

    // let palindrom = x.reverse() 
    let palindrom = x.split("").reverse().join(""); //split() разбивает строку на массив букв, join() делает обратное


    if (x == palindrom) {
        return "palindrom";
    } else {
        return "not palendrom";
    }
}


console.log(checkPalindrom("bob"));
console.log(checkPalindrom("civic"));
console.log(checkPalindrom("level"));
console.log(checkPalindrom("word"));


// #### Task 2 👨‍🏫

// ```javascript
//     const matrix = [
//         [12, 98, 78, 65, 23],
//         [54, 76, 98, 43, 65],
//         [13, 324, 65, 312],
//         [9092, 22, 45, 90000],
//     ]
// ```

// > Выведите в консоль среднее значение чисел в многомерном массиве.

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]



// #### Task 3 👨‍🏫

// Дан массив:

// ```javascript
//    const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
// ```

// Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль.

const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];

let positiveNumbers = [],
    negativeNumbers = [];

for (let i = 0; i < mixedNumbers.length; i++) {
    if (mixedNumbers[i] >= 0) {
        positiveNumbers.push(mixedNumbers[i]);
    } else {
        negativeNumbers.push(mixedNumbers[i]);
    }
}

console.log(positiveNumbers);
console.log(negativeNumbers);

// #### Task 4 👨‍🏫

// Создать массив длинной не менее 5, из динамически созданных случайных чисел. Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив. В конце вывести оба массива в консоль.