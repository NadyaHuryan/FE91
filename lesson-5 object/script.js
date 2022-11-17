'use strict'

// ex 1

let vegetables = {
  cucumber: 5,
  tomato: 11,
}

delete vegetables.cucumber;
delete vegetables.tomato;

console.log(vegetables);


// ex 2

let fruits = {
  apple: 5,
  cherry: 11,
  banana: 2,
}

console.log("banana" in fruits);
console.log("apple" in fruits);
console.log("coconut" in fruits);


// ex 3

const student = {
  name: 'John',
  age: 19,
  isHappy: true
}

for (let item in student) {
  console.log(item);
  console.log(student[item]);
}


// ex 4

const colors = {
  'ru pum pu ru rum': {
    red: 'красный',
    green: 'зеленый',
    blue: 'синий'
  },
};

console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].green);


// ex 5

let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  andrey1: 664,
  alexandra: 199,
}

let sum = 0;
let count = 0;

for (const item in salaries) {
  sum += salaries[item];
  count++;
}

let average = sum / count;
console.log(average);


// ex 6

let userCheck = function () { //создаем function expression
  let userLoginCheck = prompt('Подтвердите логин'), //создаем 2 переменные, которые запашивают ввести данные
    userPassCheck = prompt('Подтвердите пароль');
  if (userLoginCheck === this.login && userPassCheck === this.pass) { //делаем универсальную проверку с исп-ем this, если userLoginCheck равен login И userPassCheck равен pass
    alert('Добро пожаловать'); // то выводим это сообщене на экран
  } else { // если хотябы одно из этих условий не выполняются
    alert('Неверно'); // то выводим это сообщене на экран
  }
}

let userInfo = function () { //создаем function expression
  let userLogin = prompt('Введите логин'),
    userPass = prompt('Введите пароль'),//создаем 2 переменные, которые запашивают ввести данные и которые они будут хранить
    userInfoObj = { // создаем объект
      login: userLogin,// записываем полученные данные в объект
      pass: userPass,// записываем полученные данные в объект
      check: userCheck // записываем метод
    };
  return userInfoObj; // ф-ция возвращает объект
}

let user1 = userInfo(); //создаем переменную в которой будет храниться объект

user1.check(); //вызываем метод check: userCheck


// ADVANCED level \\

// ex 1

let numb = {
  0: 'ноль',
  1: 'один',
  2: 'два',
  3: 'три',
  4: 'четыре',
  5: 'пять',
  6: 'шесть',
  7: 'семь',
  8: 'восемь',
  9: 'девять',
}

let teamCount = '4:9';

function getNumbers() {
  let team1 = numb[teamCount[0]];
  let team2 = numb[teamCount[2]];
  let obj = {
    team1: team1,
    team2: team2
  };
  return obj;
}

function showResult() {
  let result = getNumbers();
  console.log(result['team1'] + ' : ' + result['team2']);
}

showResult();


// ex 3

const animals = {
  cat: {
    name: 'Енчик',
    age: 3,
  },
  dog: {
    name: 'Орео',
    age: 2,
  }
}

console.log(animals?.bird?.name); // undefined
// console.log(animals.bird.name); // ошибка
