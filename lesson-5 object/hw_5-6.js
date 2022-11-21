"use strict"


/////////////////////////     Hw 5     /////////////////////////

// ### NORMAL level

// #### Task 1 💻

// Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. 

const obj = {
    userName: "Liza",
    userAge: '20',
}


delete obj.userName;
delete obj.userAge;


console.log(obj);

// #### Task 2 🖥

// Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true**

const obj2 = {
    userName: "Liza",
    userAge: '20',
}


console.log("userAge" in obj2);


// #### Task 3 🖥

// Дан обьект:
// C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта.

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}


for (let key in student) {
    console.log(key);
} // Сначала выводит все ключи


for (let key in student) {
    console.log(student[key]);
} // выводит значения ключей

// #### Task 4 🖥

// Дан обьект:
// Вывести в консоль слово красный и синий

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};


console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);

// #### Task 5 🖥

// Дан обьект:
// Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey1: 664,
    alexandra: 199
}

let sum = 0,
    count = 0;

for (const key in salaries) {
    sum += salaries[key];
    count++;
}

let averageSalary = sum / count;

console.log(averageSalary);

// #### Task 6 🖥

// Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект.
// Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение **Добро пожалоВать**.

// let userData = function() {
//     let login = prompt('Введите логин');
//     let password = prompt('Введите пароль');
//     let userObject = {
//         login: login,
//         password: password,
//         register: userRegisterCheck(),
//     };
//     return userObject;
// }

// let userRegisterCheck = function() {
//     let userLogin = prompt('Подтвердите логин');
//     let userPassword = prompt('Подтвердите пароль');
    
//     if (userLogin == this.login && userPassword == this.password) {
//         console.log('Wrong data');
//     } else {
//         console.log('Welcome');
//     }
// }

// let user = userData();
// user.userObject.register;

// ### ADVANCED level

// #### Task 1 👨‍🏫

// Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами. Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль.

// #### Task 2 🖥

// Даны два одинаковых обьекта. Сравните их так чтобы они были равны

let student1 = {
    name: 'Polina',
    age: 27,
}

let student2 = {
    name: 'Polina',
    age: 27,
}

console.log(JSON.stringify(student1) === JSON.stringify(student2)); // но не работает если св-ва будут идти не в одном порядке
// console.log(_.isEqual(student1, student2)); //работает с библиотекой lodash

//либо написание функции
function isEqual(student1, student2) {
    const props1 = Object.getOwnPropertyNames(student1); // The Object.getOwnPropertyNames() method returns an array of all properties found directly in a given object.
    const props2 = Object.getOwnPropertyNames(student2);

    if (props1.length !== props2.length) {
        return false;
    }

    for (let i = 0; i < props1.length; i += 1) {
        const prop = props1[i];

        if (student1[prop] != student2[prop]) {
            return false;
        }
    }

    return true;
}

console.log(isEqual(student1, student2));


// #### Task 3 🖥

// У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим **ОШИБКУ**.
// Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.

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

// при помощи знака вопроса перед точкой

console.log(animals?.birdName);







///////////////////////   Hw 6   /////////////////////////

// ### NORMAL level

//function declaration : var(let) sum = function(a, b) { return a + b;}

//arrow function : let func = (arg1, arg2, ...argN) => expression;

// #### Task 1 🖥

// Выведи все элементы массива в консоль с помощью метода **`forEach`**

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

//function declaration
fibonacci.forEach(function (key) {
    console.log(key);
});

//arrow function
fibonacci.forEach((key) => {
    console.log(key);
});


// #### Task 2 🖥

// Используя метод **`map`** создайте новый массив, на основе массива **`users`**, в котором каждый элемент массива будет содержать строку вида:

// > ['member 1: Darya', 'member 2: Masha', ... etc]

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

//function declaration
let members = users.map(function (key, i) {
    return `member ${i + 1}: ${key}`;
});

console.log(members);


//arrow function
let members1 = users.map((key, i) => "member " + `${i + 1}` + ": " + key);

console.log(members1);

// #### Task 3 🖥

// С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.

const numbers = [7, -4, 32, -90, 54, 32, -21]

//function declaration

let positiveNumbers = numbers.filter(function (key) {
    return key > 0;
});

console.log(positiveNumbers);

//arrow function

let positiveNumbers1 = numbers.filter((key) => key > 0);

console.log(positiveNumbers1);


// #### Task 4 🖥

// Используя метод **`reduce`** получите сумму всех чисел массива.

const fibonacci1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

//function declaration

let fibonacci1Sum = fibonacci1.reduce(function (numb, key) {
    return numb + key;
}, 0);

console.log(fibonacci1Sum);

//arrow function

let fibonacci1Sum1 = fibonacci1.reduce((numb, key) => numb + key);

console.log(fibonacci1Sum1);

// #### Task 5 🖥

// Используя метод **`find`** найдите в массиве первое четное число.

const numbers1 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

//function declaration

let even = numbers1.find(function (key) {
    return key % 2 == 0;
});

console.log(even);

//arrow function

let even1 = numbers1.find((key) => key % 2 == 0);

console.log(even1);