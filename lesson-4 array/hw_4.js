// Массивы 

// Task 1

// Дан массив:
// const colors = ['red', 'green', 'blue']
// Выведите в консоль его длину.

const colors = ['red', 'green', 'blue']

console.log (colors.length)

// Task 2

// Дан массив:
// const animals = ['monkey', 'dog', 'cat']
// Выведите в консоль его последний элемент вне зависимости от его длинны.

const animals = ['monkey', 'dog', 'cat']

console.log(animals[animals.length-1])

// Task 3

// Дан массив:
// const numbers = [5, 43, 63, 23, 90]
// Удалите все элементы в массиве и выведите в консоль полученный результат.
// > Реализуйте решение двумя способами.

const numbers = [5, 43, 63, 23, 90]

// 1 способ
numbers.pop()
numbers.pop()
numbers.pop()
numbers.pop()
numbers.pop()

console.log(numbers)

// 2 способ
numbers.splice (0, 4)

console.log(numbers)

// Task 4

// Дан массив:
// const students = ['Polina', 'Dasha', 'Masha']
// + Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
// + Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
// + Полученный результат не забудьте вывести в консоль.

const students = ['Polina', 'Dasha', 'Masha']

students.pop()
console.log(students)
students.push('Borya')
console.log(students)
students.shift()
console.log(students)
students.unshift('Andrey')
console.log(students)

// Task 5

// Дан массив:
// const cats = ['Gachito', 'Tom', 'Batman']
// Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**.

const cats = ['Gachito', 'Tom', 'Batman']

for (let i = 0; i < cats.length; i++ ) {
   console.log(cats[i])
}

for (let allArrayElements of cats) { 
   console.log(allArrayElements)
}

// Task 6

//  const evenNumbers = [2, 4, 6, 8, 10]
//  const oddNumbers = [1, 3, 5, 7, 9]
// + Соедините два массива чисел в один.
// + В полученном массиве попробуйте найти индекс числа **`8`**

const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]

const newArr = evenNumbers.concat(oddNumbers)

console.log(newArr)

console.log(newArr.indexOf(8))

// Task 7

// Дан массив:
// const binary = [0, 0, 0, 0]
// + Наш бинарный массив неполный, в нем явно не хватает единиц.
// + Превратите данный массив в строку.
// > [0, 0, 0, 0] -> '0101010'

const binary = [0, 0, 0, 0]
console.log(binary.join(1))

// Task 8

// Как работает метод includes? Привести 2 примера с комментариями


// includes() ищет указанный в ('') элемент и возращает true или false

const pets = ['cat', 'dog', 'bat']

console.log(pets.includes('cat')) // возвратит true
console.log(pets.includes('at')) // возвратит false при неполном совпадении

// Task 9 
// Как работает метод splice и slice для строк? Привести 2 примера с комментариями

// .splice() - удаляет часть массива и/или добавляет новую часть
// .slice() - похож на splice. Копирует элементы от begin до end (не включая end), не меняя текщий массив

const fruitsArr = ['angel', 'clown', 'mandarin', 'sturgeon']
console.log(fruitsArr)

const removedArr = fruitsArr.splice(3, 1, 'drum') // удаляет 3й элемент, добавив новый 'drum'
console.log(fruitsArr)


const animalsArr = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animalsArr)
console.log(animalsArr.slice(2, 4)) // копирование элементов со 2го индекса по 4й, не включая 4й

