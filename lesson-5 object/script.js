"use script";

// #### Task 1 💻 ####

let anyObject = {
    prop: 'something',
    isValid: true,
}

console.log (anyObject);

delete anyObject.prop;
delete anyObject.isValid;

console.log (anyObject);

// #### Task 2 🖥 #### 

let testObject = {
    prop: 'something',
    isValid: true,
}

function checkKey(obj, key){
    console.log (key in obj);
    return;
}

checkKey(testObject, 'prop');

// #### Task 3 🖥 ####

    const student = {
        name: 'John',
        age: 19,
        isHappy: true
    }

    for (let property in student){
        console.log(property);
        console.log(student[property]);
    }

// #### Task 4 🖥 ####

    const colors = {
        'ru pum pu ru rum': {
            red: 'красный',
            green: 'зеленый',
            blue: 'синий'
        },
    };

    console.log(colors["ru pum pu ru rum"].red);
    console.log(colors["ru pum pu ru rum"].blue);

// #### Task 5 🖥 ####

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey1: 664,
    alexandra: 199
};
let sumCount = 0;
let count = 0;
for (const item in salaries) {
    sumCount += salaries[item];
    count++;
}

console.log(sumCount, count);

let avg = sumCount/count;

console.log(avg);
console.log(salaries);

// #### Task 6 🖥 ####

let login = prompt('Enter your login');
let password = prompt('Enter your password');
let userCreds = {
    login,
    password,
}

let checkLogin = prompt('Verify your login');
let checkPassword = prompt('Verify your password');

if(userCreds.login == checkLogin && userCreds.password == checkPassword){
    alert('**Добро пожалоВать**')
} else alert('**Попробуйте ещё раз**')

//### ADVANCED level ###

// #### Task 1 👨‍🏫 ####

let transcript ={
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

function toWords(goals){
    let arrGoals = goals.split("");
    let command1 = Number(arrGoals[0]);
    let command2 = Number(arrGoals[2]);

    console.log(transcript[command1] + ' : '+ transcript[command2]);
    return
}
toWords('2:5')

// #### Task 2 👨‍🏫 ####

let student1 = {
    name: 'Polina',
    age: 27,
}

let student2 = {
    name: 'Polina',
    age: 27,
}

student1 = student2;

console.log(student1 == student2);

