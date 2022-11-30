//TASK 1
//Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. 

let obj = {
    name: "Dima",
    age: 21,
}
delete obj.name;
delete obj.age;
console.log(obj);

//TASK 2
//Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true**

obj = {
    name: "Dima",
    age: 21,
}
console.log("name" in obj);
console.log("city" in obj);
console.log("age" in obj);

//TASK 3 
//Дан обьект: C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта.


const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
for (let key in student) {
    console.log(key);
    console.log(student[key]);
}


//TASK 4 
//Дан обьект: Вывести в консоль слово красный и синий


const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
for (let key1 in colors) {
    console.log(colors["ru pum pu ru rum"].red)
    console.log(colors["ru pum pu ru rum"].blue)
}

//TASK 5
//Дан обьект: Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную


let sumCount = 0;

let count = 0;

let salaries = {
    andreyK: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
}
for (let item in salaries) {
    console.log(salaries[item]);
    sumCount += salaries[item];
    count++;
}
console.log(sumCount)
let avg = sumCount / count;
console.log(avg)


//TASK 6
//Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект. 
//Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение **Добро пожалоВать**.


let userCheck = function () {
    let userLoginCheck = prompt('Подтвердите логин'),
        userPassCheck = prompt('Подтвердите пароль');
    if (userLoginCheck === this.login && userPassCheck === this.pass) {
        console.log('Добро пожаловать');
    } else {
        console.log('Неверно');
    }
}

let userInfo = function () {
    let userLogin = prompt('Введите логин'),
        userPass = prompt('Введите пароль'),
        userInfoObj = {
            login: userLogin,
            pass: userPass,
            check: userCheck
        };
    return userInfoObj;
}

let user1 = userInfo();

user1.check();

//ADVENCED LEVEL*********
//TASK 1


let transcript = {
    1: 'Один',
    2: 'Два',
    3: 'Три',
    4: 'Четыре',
    5: 'Пять',
    6: 'Шесть',
    7: 'Семь',
    8: 'Восемь',
    9: 'Девять',
}

function toWords(goals) {
    let arrGoals = goals.split("");
    let command1 = +(arrGoals[0]);
    let command2 = +(arrGoals[2]);

    console.log(transcript[command1] + ' : ' + transcript[command2]);
    return
}
toWords('4:5')

//TASK 3

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
console.log(animals?.bird?.name)






