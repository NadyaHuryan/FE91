//1 Task 
const obj1 = {
    color: 'white',
    secondColor: 'red',
}
delete obj1.secondColor;
delete obj1.color;
console.log(obj1)

//2 Task

const obj2 = {
    color: 'white',
    secondColor: 'red',
}
console.log('color' in obj2);
console.log('cOlor' in obj2);

//3 Task

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
for (let key in student){
    console.log(key);
}
for (key in student){
    console.log(student[key]);
}

//4 Task 

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
console.log(colors['ru pum pu ru rum'].red + ' ' + colors['ru pum pu ru rum'].blue);

//5 Task

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey1: 664,
    alexandra: 199,
}
let sum = 0,
    count = 0,
    avSum = 0;
for (key in salaries){
    sum += salaries[key];
    count++;
}
avSum = sum / count;
console.log(avSum);

//6 Task

const user = {};
user.userName = prompt('Введите логин');
user.password = prompt('Введите пароль');
let a = prompt('Повтроите логин');
let b = prompt('Повторите пароль');
if ((user.userName === a) && (user.password === b)){
    document.write('Добро пожаловать!')
}

//Advance level
//1 Task

let x = prompt('Введите счёт в формате x:x');
let football = [];
function strToArr(str){
    str = str.split(':');
    return str;
}
function getScore(ar){
    ar = strToArr(ar);
    for (let value of ar){
        switch (value){
            case '1': 
                football.push('один');
                break;
            case '2': 
                football.push('два');
                break;
            case '3': 
                football.push('три');
                break;
            case '4': 
                football.push('четыре');
                break;
            case '5': 
                football.push('пять');
                break;
            case '6': 
                football.push('шесть');
                break;
            case '7': 
                football.push('семь');
                break;
            case '8': 
                football.push('восемь');
                break;
            case '9': 
                football.push('девять');
                break;
            default:
                return false;
        }
    }
    return football.join(':')
}
console.log(getScore(x));

//2 Task

let student1 = {
    name: 'Polina',
    age: 27,
};
let student2 = {
    name: 'Polina',
    age: 27,
};
let student3 = {
    namee: 'Polina',
    age: 27,
};
const arrKey1 = [];
const arrKey2 = [];
const arrValue1 = [];
const arrValue2 = []
let bool = Boolean;
function arrKey(obje, arrK){
    for (key in obje){
        arrK.push(key)
    } return arrK
}
function arrValue(obje, arrV){
    for (key in obje){
        arrV.push(obje[key])
    } return arrV
}
function compare(obj1, obj2){
    arrKey(obj1, arrKey1);
    arrValue(obj1, arrValue1);
    arrKey(obj2, arrKey2);
    arrValue(obj2, arrValue2);
    for(let i = 0; i < arrKey1.length; i++){
        if (arrKey1[i] === arrKey2[i]){
            bool = true;
        } else {
           return bool = false;
        }
        if (arrValue1[i] === arrValue2[i]){
            bool = true;
        } else {
            return bool = false;
        }
    } return bool
}
console.log(compare(student1, student2));
console.log(compare(student1, student3));// ОНО РАБОТАЕТ!!!!

//3 Task

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
function findBird(obj){
    if (animals.bird){
        return animals.bird.name
    } else return false
 }
console.log(findBird(animals))

//

console.log(animals?.bird?.name)