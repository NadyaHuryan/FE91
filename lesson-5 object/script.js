const something = {
    name: 'the bug',
    status: 42,
} 

delete something.name;
delete something.status;
// task 1 NORMAL level



const men = {
    name : "Valera",
    age: 19,
}

console.log ("name" in men);
// task 2 NORMAL level



const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for (key in student){
    console.log(key);
}

for (key in student){
    console.log(student[key]);
}
// task 3 NORMAL level




const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};

console.log(colors["ru pum pu ru rum"].red);
console.log(colors["ru pum pu ru rum"].blue);
// task 4 NORMAL level



let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrew: 664,
    alexandra: 199
}

let avrSalary = 0;
let sumSalary = 0;
let employees = 0;

for (key in salaries){
    sumSalary += salaries[key];
    employees++;
}

avrSalary = sumSalary / employees;
console.log(avrSalary);
// task 5 NORMAL level




// let userInfo = function() {
//     let userLogin = prompt('Введите логин');
//     let userPass = prompt('Введите пароль');
//     const userInfoObj = {
//         login: userLogin,
//         pass: userPass,
//         check: userCheck
//     };
//     return userInfoObj;
// }


// let userCheck = function() {
//     let userLoginCheck = prompt('Подтвердите логин');
//     let userPassCheck = prompt('Подтвердите пароль');
//      (userLoginCheck === this.login && userPassCheck === this.pass) ?  alert('Добро пожаловать') : alert('Неверно');
// }



// let user1 = userInfo();
// user1.check();
// task 6 NORMAL level

function getTextMatсhResult(resultAsNumbers){
    const text ={
        0 : "ноль",
        1 : "один",
        2 : "два",
        3 : "три",
        4 : "четыре",
        5 : "пять",
        6 : "шесть",
        7 : "семь",
        8 : "восемь",
        9 : "девять",
    }


    resultAsNumbers = resultAsNumbers.split(":");
    if (+resultAsNumbers[0] + +resultAsNumbers[1] > 9) {
        return "неверные данные";
    } else {
        let msg = `${text[resultAsNumbers[0]]} : ${text[resultAsNumbers[1]]}`;
        return msg;
    }

}
console.log(getTextMatсhResult("2:5"));
console.log(getTextMatсhResult("5:6"));
console.log(getTextMatсhResult("5:4"));
// task 1 ADVANCED level