//////////1//////////
const game = {
    name: "dota2",
    genre: "moba",
}

const game2 = {
    name: "warzone2",
    genre: "shooter",
}

console.log(game);
console.log(game2);

delete game.name;
delete game.genre;

delete game2.name;
delete game2.genre;

console.log(game);
console.log(game2);
//////////2//////////
const menu = {
    soup: "lagman",
    pasta: "Farfalle",
    drink: "beer",
}

console.log("pasta" in menu)
console.log("drink" in menu)
console.log("name" in menu)

//////////3//////////
const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for (key in student) {
    console.log(key);
    console.log(student[key]);
}
//////////4//////////
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};

console.log(colors["ru pum pu ru rum"].red);
console.log(colors["ru pum pu ru rum"].blue);
//////////5//////////
//1//
// let salaries = {
//     andreyy: 500,
//     sveta: 413,
//     anton: 987,
//     andrey: 664,
//     alexandra: 199
// }

// let i = 0;
// for (key in salaries) {
//     i += salaries[key] / 5;

// }
// console.log(i)
//2//
let salaries = {
    andreyy: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
}
let sum = 0;
let count = 0;
let i = 1;

for (key in salaries) {
    count += i;
    sum += salaries[key]
}

console.log(sum / count)

//////////6//////////let salaries = {
let userCheck = function () {
    let userLoginCheck = prompt('Подтвердите логин'),
        userPassCheck = prompt('Подтвердите пароль');
    if (userLoginCheck === this.login && userPassCheck === this.pass) {
        alert('Добро пожаловать');
    } else {
        alert('Неверно');
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