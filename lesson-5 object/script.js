// TASK 1

const person = {
    name: "Frank",
    age: 32,
}

delete person.name;
delete person.age;
console.log(person);

// TASK 2

const house = {
    rooms: 3,
    floor: 1,
}

console.log("rooms" in house);
console.log("apples" in house);

// TASK 3

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for (let key in student) {
    console.log(key);
  }

  for (let key in student) {
    console.log(student[key]);
  }
  
// TASK 4

  const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};

console.log(colors["ru pum pu ru rum"].red);
console.log(colors["ru pum pu ru rum"].blue);

// TASK 5

let salaries = {
    alex: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
}

let sum = 0;
let avgSalary = 0;
let count = 0;

for (let key in salaries) {
    sum += salaries[key];
    ++count;
  }

  avgSalary = sum / count;

  console.log(avgSalary);

// TASK 6

let userCheck = function() {
    let userLoginCheck = prompt('Подтвердите логин');
    let userPassCheck = prompt('Подтвердите пароль');
    if (userLoginCheck === this.login && userPassCheck === this.pass) {
        alert('Добро пожаловать');
    } else {
        alert('Неверно');
    }
}

let userInfo = function() {
    let userLogin = prompt('Введите логин');
    let userPass = prompt('Введите пароль');
    userInfoObj = {
        login: userLogin,
        pass: userPass,
        check: userCheck
    };
    return userInfoObj;
}

let user1 = userInfo();
 
user1.check();

// ADVANCED TASK 1

const score = {
    1: "один",
    2: "два",
    3: "три",
    4: "четыре",
    5: "пять",
    6: "шесть",
    7: "семь",
    8: "восемь",
    9: "девять",
}

function getScore(a, b) {
    if (a + b < 10) {
        return score[a] + ":" + score[b];
    } else {
        return "Счёт больше 9!";
    }
}

console.log(getScore(2, 4));
console.log(getScore(6, 4));

// ADVANCED TASK 2

let student1 = {
    name: 'Polina',
    age: 27,
}

let student2 = {
    name: 'Polina',
    age: 27,
}

function isEqual(student1, student2) {
    return JSON.stringify(student1) === JSON.stringify(student2) 
}

console.log(isEqual(student1, student2));

// ADVANCED TASK 3

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

 console.log(animals?.bird);
 console.log(animals?.dog);