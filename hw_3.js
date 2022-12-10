// Task 1
// Сделайте функцию **isEven()** (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть
// функция возвращает true, если нечетное — false.

function isEven(x){
   return ((x % 2) === 0);
}
console.log(isEven(8))
console.log(isEven(5))

// Task 2 
// Создайте функцию, которая принимает в качестве параметра целое число и возвращает количество цифр в этом числе

function numberOfSymbols(x){
   x = '' + x
   return x.length
}
console.log(`Количество символов ${numberOfSymbols(5896341780)}`)

// Task 3
// Написать функцию **getSum**, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем. 
//  Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050)

let chislo = 100

function getSum(summaNumbers) {
   let sum = 0
   for (let i = 1; i <= summaNumbers; i++) {
      sum += i
   }
   return sum
}

console.log(getSum(chislo))

// Task 4
// Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент 
// и верните результат переплаты по кредиту:

// процентная ставка в год — 17%,
// количество лет — 5.
// Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.

let sumCredit = 5000

function creditClient(overpaymentsOnLoan){
   let interestRatePerYear = 17
   let numberOfYears = 5
   return ((overpaymentsOnLoan * interestRatePerYear) / 100 ) * numberOfYears
}

console.log(creditClient(sumCredit))

// Task 5
// Написать функцию trimString которая в качестве аргумента принимает три параметра:

// строку
// значение от
// значение по
// После вызова функция должна вернуть переданную строку обрезанную по значениям от и по

let str = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit'

function trimString(newString, before, after) {
   return newString.slice(before, after)
}

console.log(trimString(str, 3, 10))


// Task 6
// Написать функцию getSumNumbers, которая будет принимать число и вычислять сумму цифр из которых состоит число.
// Для 2021 это будет 5.

let calculateSum = prompt ('Введите число: ')
let number = parseInt(calculateSum)

function getSumNumber(num) {

      var sum = 0, calculateSum
      while (num) {
         calculateSum = num % 10; /*Взятие остатка от деления %*/
         num = (num - calculateSum) / 10;
         sum += calculateSum
      }

      return sum
   }

console.log(getSumNumber(calculateSum))

// Task 7 
// Написать функцию getSum которая принимает два целых числа a и b, которые могут быть положительными или отрицательными, 
// найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните a или b.
   
   //  getSum(1, 0) == 1   c
   //  getSum(1, 2) == 3   // 1 + 2 = 3
   //  getSum(0, 1) == 1   // 0 + 1 = 1
   //  getSum(1, 1) == 1   // 1 Since both are same
   //  getSum(-1, 0) == -1 // -1 + 0 = -1
   //  getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

   function getSum2(a, b) {
      let sum = 0
      if (a > b) {
         for (let i = a; i >= b; i--) {
            sum += i
         }
      return sum
      } 
      else if (a < b) {
         for (let i = a; i <= b; i++) {
            sum += i
         }
      return sum
      } 
      else if (a == b) {
         return a
      }
   }
   
   console.log(getSum2(1, 0)) // 1 + 0 = 1
   console.log(getSum2(1, 2)) // 1 + 2 = 3
   console.log(getSum2(0, 1)) // 0 + 1 = 1
   console.log(getSum2(1, 1)) // 1 Since both are same
   console.log(getSum2(-1, 0)) // -1 + 0 = -1
   console.log(getSum2(-1, 2)) // -1 + 0 + 1 + 2 = 2

// Task 8
// Напишите функцию fooboo которая принимает в качестве аргумента три параметра:
// булевое значение
// функцию foo которая выводит в консоль свое имя
// функцию boo которая выводит в консоль свое имя
// Если переданное булевое значение true запускаем функцию foo иначе boo

function foo() {
   console.log(foo.name)
}

function boo() {
   console.log(boo.name)
}

function fooboo(booleanValue,functionFoo,functionBoo) {
   if (booleanValue) {
      functionFoo()
   } else {
      functionBoo()
   }
}

fooboo(true,foo,boo)
