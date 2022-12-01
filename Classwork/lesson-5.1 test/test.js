

// Циклы
// 1) С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.
// let str = "";
// for (let i = 1; i < 10; i++) {
//   str += i;
// }
// console.log(str);

// 2) С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str.
// let str = "";
// for (let i = 9; i >= 1; i--) {
//   str += i;
// }
// console.log(str);

// 3) С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.
let str2 = "";
for (let i = 1; i <= 9; i++) {
    if (i == 9) {
        str2 = str2 + "-" + i + "-";
    } else {
        str2 = str2 + "-" + i;
    }
}
console.log(str2);


// 4) Дана строка, например, '123456'. Напишите функцию, которая перевернет эту строку (сделайте из нее '654321') используя цикл
function reverseString(str) {
  let newString = ''
  for (let i = str.length - 1; i >= 0; i--) {
      newString = newString + str[i] 
  }
  return newString 
} 
console.log(reverseString('123456'))


// 5) Написать функцию, которая будет выводить календарь в body с помощью циклов. Последний день месяца передается в функцию в качестве параметра
// 1 2 3 4 5 6 7
// 8 9 10 11 12 13 14
// 15 16 17 18 19 20 21
// 22 23 24 25 26 27 28
// 29 30 31

function showCalendar(end) {
  for (let i = 1; i <= end; i++) {
    (i % 7 === 0) ? document.write(`${i} <br>`) : document.write(`${i} `)
  }
}
showCalendar(29)


// Функции
// 1) Написать функцию, которая принимает число, а возращает кратно ли оно 5
function getMultiplesFive(num) {
  return num % 5 === 0;
}
console.log(getMultiplesFive(10));


// 2) Написать функцию, которая принимает данные, а возращает является ли оно строкой
function isString(str) {
  return (typeof str == 'string');
}
console.log(isString('10'));

// 3) Написать функцию, которая принимает число, а возвращает четное ли оно
function isEven(x) {
  return (x % 2 === 0);
}
console.log(isEven(10));
// 4) Написать функцию, которая принимает число, а возвращает нечетное ли оно
function isOdd(x) {
  return (x % 2 !== 0);
}
console.log(isOdd(11));

// 5) Написать функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. 
function isMinus(x) {
  return (x < 0);
}
console.log(isMinus(-11));

// 6) Напишите функцию, которая принимает число в качестве параметра и проверяет, является ли число простым или нет. Примечание. Простое число - это натуральное число больше 1, не имеющее положительных делителей, кроме 1 и самого себя.

function isPrime(num) {
  if(num < 4) return "Простое";
  if(num % 2 == 0 || num % 3 == 0) return "Не простое";
  for(let i = 5; i < num; i++)
      if(num % i == 0) {
      return "Не простое"; // выходит из функции при первом нахождении числа
    }
  return "Простое";
}

console.log(isPrime(557));

// 7) Написать функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false
function sum(a, b){
  return ((a + b) > 10)
}
console.log(sum(9, 33));

// 8) Написать функцию, которая принимает параметром число и возвращает месяц. Решить через 2 условных оператора
function getMonth(month) {
  if (month == 1) return 'январь'
  if (month == 2) return 'февраль'
  if (month == 3) return 'март'
  if (month == 4) return 'апрель'
  if (month == 5) return 'май'
  if (month == 6) return 'июнь'
  if (month == 7) return 'июль'
  if (month == 8) return 'август'
  if (month == 9) return 'сентябрь'
  if (month == 10) return 'октябрь'
  if (month == 11) return 'ноябрь'
  if (month == 12) return 'декабрь'
  else return 'error'

}
console.log(getMonth(2))

// 9) Написать функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке. Решить через 2 условных оператора. 
function getDay(day) {
  switch(day) {
    case 1: return 'понедельник'
    case 2: return 'вторник'
    case 3: return 'среда'
    case 4: return 'четверг'
    case 5: return 'пятница'
    case 6: return 'суббота'
    case 7: return 'воскресенье'
    default: return 'error'
  }

}
console.log(getDay(2))

// 10) Напишите функцию, которая суммирует числа кратные 3 и 5 до 100
function sumNumbers() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      sum += i;
    }
    
  }
  return sum;
}
console.log(sumNumbers())

// 11) Написать функцию, которая принимает имя пользователя в любом регистре, например "сВеТа", а возвращает в правильном формате "Света"


function firstLetterUpper(txt){
  txt = txt.toLowerCase();// Все буквы в нижний регистр
  txt = txt.split('');// строка = массив
  txt[0] = txt[0].toUpperCase();// Первая буква в верхний регистр
  txt = txt.join('');// массив = строка
  return txt;
}
console.log(firstLetterUpper("сВеТа"));

// 12) Написать функцию, которая принимает массив имен пользователей в любом регистре, например ['aNn', 'boB', 'joHN'], а возвращает в правильном формате ['Ann', 'Bob', 'John']
function arrayLetterUpper(array){
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toLowerCase();// Все буквы в нижний регистр
    array[i] = array[i].split('');// строка = массив
    array[i][0] = array[i][0].toUpperCase();// Первая буква в верхний регистр
    array[i] = array[i].join('');// массив = строка
  }
  
  return array;
}
console.log(arrayLetterUpper(['aNn', 'boB', 'joHN']));

// 13) Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 - зрелый
// Написать две функции - одна выводить состояние возраста в document.write, вторая - делает проверку и возвращает это состояние 

function showStateAge(age) {
  if (age <= 17) return 'ребенок';  
  if (age > 17 && age <= 30) return 'молодой';
  if (age > 30 && age <= 55) return 'зрелый';
  if (age > 55) return 'старый';
}

function showAge() {
  for (let i = 1; i <= 100; i++) {
    document.write(`${i} - ${showStateAge(i)} <br>`);
  }
}
showAge()


// 14) Написать функцию, которой передаем имя, и она возращает приветствие в зависимости от реального времени суток (надо найти текущее время) (Доброе утро\день\вечер\ночи Иван)
function wellcome(name){
  let date = new Date();
  let hours = date.getHours();
  let msg ;
  if ( hours >= 5 && hours <= 10) {
      msg = "доброе утро";
  } else if ( hours >= 11 && hours <= 16) {
      msg = "добрый день";
  } else if  ( hours >= 17 && hours <= 23){
      msg = "добрый вечер";
  }else {
      msg = "доброй ночи";
  }
  return msg + " " +  name;
}

console.log(wellcome("Вася"));


// 15) Напишите функцию, которая принимает строку в качестве параметра и находит самое длинное слово в строке.
function getLongestWord(str) {
  let longestWord = 0;
  let word = "";
  let arrStr = str.split(' ');
  for (let i =0; i < arrStr.length; i++) {
      if (arrStr[i].length > longestWord) {
          longestWord = arrStr[i].length;
          word = arrStr[i];
      }
  }
  return word;
}

console.log(getLongestWord('Дан массив с произвольными словами Создать функцию которая принимает два значения'));

// Массивы
// 1) Дан массив с произвольными словами. Создать функцию, которая принимает два значения: число (0 или 1) и букву. И выводит либо количество букв в каждом слове, 
// // либо оставляет слова, которые начинаются на соответствующую букву 
function checkLetter(bool, a) {
  const names = ['Ann', 'Bob', 'John'];
  if (bool) {
      for (let i = 0; i < names.length; i++) {
          console.log(names[i].length);
      }
  } else {
      for (let i = 0; i < names.length; i++) {
          if (names[i].startsWith(a)) {
              console.log(names[i]);
          }
      }
  }
}

checkLetter(false, 'B');
checkLetter(true, 'B');


// 2) Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает среднее арифметическое, (округлить результат до десятых)!!!!
function sumAv(...arr) {
  let sum = 0,
  counter = 0;
  for (let value of arr) {
      sum += +value;
      counter++;
  }
  let average = sum/counter;
  return average.toFixed(1);
}

console.log(sumAv(1, 2, 3, 4, 7));

// 3) Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень из этих чисел.
const numbers = [12, 9, -13, 45, -3,  11, -2];
let squareRootNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
   numbers.splice(i, 1)
  }
}
console.log(numbers)

for (let i = 0; i < numbers.length; i++) {
  squareRootNumbers.push(Math.sqrt(numbers[i]));
}

console.log(squareRootNumbers);


// 4) Напишите функцию, которая принимает строку в качестве параметра и подсчитывает количество гласных в строке. Гласные хранятся в массиве'
const checkVowels = ['а', 'у', 'о', 'и', 'э', 'ы', 'я', 'ю', 'е', 'ё', 'А', 'У', 'О', 'И', 'Э', 'Ы', 'Я', 'Ю', 'Е', 'Ё', 'A', 'a', 'E', 'e', 'Y', 'y', 'U', 'u', 'I', 'i', 'O', 'o'];
function countVowels(str) {
  let countResult = 0;

  for (let i = 0; i < str.length; i++) {
    if (checkVowels.includes(str[i]) == true) {
      countResult += 1;
    }
  }
  return countResult;
}

console.log(countVowels('ОЧЕНЬ сложный тест'));
console.log(countVowels('VERY difficult test'));



// 5) Напишите функцию, которая возвращает единичную матрицу n строк и n столбцов.

function drawMatrix(a){
  for (let i = 0; i <a; i++){
      let row = [];
      for (let j = 0; j <a; j++ ){
          i ==j ? row.push(1): row.push(0);
      }
      row = row.join(" ") ;
      console.log(row);
  }

}

drawMatrix(4);

// Пример вывода:
// 1 0 0 0
// 0 1 0 0
// 0 0 1 0
// 0 0 0 1

// 6) Напишите функцию, которая возвращает элементы массива, которые больше указанного числа. Передаем массив и число с которым сравниваем

function getArrayElements(arr, num) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) newArr.push(arr[i])
  }
  return newArr;
}

console.log(getArrayElements([15, 20, 10, 8, 4, 6], 10)) 

// 7) На основе массива  создать новый массив => ['nnA','boB','nhoJ']
// const names = ['Ann', 'Bob', 'John']. Решить через функцию
function arrName(...x) {
  let newArr = [];
  for (let value of x) {
      value = value.split('').reverse().join('');
      newArr.push(value);
  }
  return newArr;
}

console.log(arrName('Ann', 'Bob', 'John'))



// Объекты
// 1) Написать функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке. Данные о днях недели хранятся в объекте days
function getDayOfWeekRUS(a){
  const days = {
      1: "понедельник",
      2: "вторник",
      3: "среда",
      4: "четверг",
      5: "пятница",
      6: "суббота",
      7: "воскресенье",
  }
  return days[a];
}

console.log(getDayOfWeekRUS(1));


// 2) Написать функцию, которая принимает параметром число и возвращает месяц. Данные о месяцах хранятся в объекте month

function getMonthObject(a){
  const month = {
      1: "январь",
      2: "февраль",
      3: "март",
      4: "апрель",
      5: "май",
      6: "июнь",
      7: "июль",
      8: "август",
      9: "сентябрь",
      10: "октябрь",
      11: "ноябрь",
      12: "декабрь",
  }
  return month[a];
}

console.log(getMonthObject(1));





