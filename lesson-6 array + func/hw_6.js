// Task 1
// Выведи все элементы массива в консоль с помощью метода forEach

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// Реализуйте решение двумя способами, используя function declaration & arrow function

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

fibonacci.forEach(function declaration(elem) {
   console.log(elem)
})

fibonacci.forEach(function arrow(elem, index, fibonacci) {
   console.log(index + '. ' + elem)
})

fibonacci.forEach(element => console.log(element))

// Task 2
// Используя метод map создайте новый массив, на основе массива users, в котором каждый элемент массива будет содержать строку вида:

// ['member 1: Darya', 'member 2: Masha', ... etc]

//     const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
// Реализуйте решение двумя способами, используя function declaration & arrow function.

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

const newArray = users.map(function (name, index) {
   return `member ${index + 1}: ${name}`
})

console.log(newArray)

const name = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
const map = Array.prototype.map

const newName = map.call(name, eachLetter => {
   return `member ${eachLetter}`
})

console.log(newName)

// Task 3
// С помощью метода filter создайте новый массив в котором не будет отрицательных чисел.

//     const numbers = [7, -4, 32, -90, 54, 32, -21]
// Реализуйте решение двумя способами, используя function declaration & arrow function.


const numbers = [7, -4, 32, -90, 54, 32, -21]
const positiveNumbers = numbers.filter(function (number) {
   if (number > 0) {
      return true
   }
})
console.log(positiveNumbers)

const newPositiveNumbers = numbers.filter(number => number > 0)
console.log(newPositiveNumbers)

// Task 4
// Используя метод reduce получите сумму всех чисел массива.

//     const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

// Реализуйте решение двумя способами, используя function declaration & arrow function.

const fibonacci2 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

const summ2 = fibonacci2.reduce((total, num) => total + num, 0)

console.log(summ2)


const summ = fibonacci2.reduce(function (total, num) {
   return total + num
}, 0)

console.log(summ)

// Task 4
// Используя метод find найдите в массиве первое четное число.

//     const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
// Реализуйте решение двумя способами, используя function declaration & arrow function.


const number = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
const positiveNumber2 = number.find(function (num) {
   if (num % 2 == 0) {
      return num
   }
})
console.log(positiveNumber2)
const positiveNumber3 = number.find(num => num % 2 == 0)
console.log(positiveNumber3)