//1

const person = {
    name: "Kseniya",
    surname: "Bokaya",
}

const animals1 = {
    cat: "Safary",
    dog: "Aksel",
}
console.log(person);
console.log(animals1);

delete person.name;
delete person.surname;

delete animals1.cat;
delete animals1.dog;

console.log(person);
console.log(animals1);

//2

const country = {
    name: "Belarus",
    capital: "Minsk",
}

console.log("name" in country);
console.log("capital" in country);
console.log("cat" in country);

//3

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for(key in student){
    console.log(key);
    console.log(student[key]);
}

//4

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
console.log(colors["ru pum pu ru rum"].red);
console.log(colors["ru pum pu ru rum"].blue);

//5

let salaries = {
    petr: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
}
let sum = 0, count = 0, i = 1;

for(key in salaries){
    count += i;
    sum +=salaries[key]
}

console.log(sum/count)

//6

let userCheck = function() {
    let userLoginCheck = prompt('Подтвердите логин'),
    userPassCheck = prompt('Подтвердите пароль');
    if (userLoginCheck === this.login && userPassCheck === this.pass) {
        console.log('Добро пожаловать');
    } else {
        console.log('Неверно');
    }
}

let userInfo = function() {
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
//ADVANCED LEVEL
//1
const resultGame = {
    0: "ноль",
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
let showResultGame = function(resultTeams){
    let teamFirst = 0;
    let teamSecond = 0;
    teamFirst = resultTeams[0];  
    teamSecond = resultTeams[2];
    if(+teamFirst + +teamSecond <= 9){
        teamFirst = resultGame[teamFirst];  
        teamSecond = resultGame[teamSecond];
        return (`${teamFirst}:${teamSecond}`)
    } else{
        return(`Ошибка, общий счет не может быть больше 9`) 
    }
    
    
}
console.log(showResultGame("2:3"));
console.log(showResultGame("5:5"));
console.log(showResultGame("4:5"));

//2
let student1 = {
    name: 'Polina',
    age: 27,
}

let student2 = {
    name: 'Polina',
    age: 27,
}


let checkCopare = function(obj1, obj2){
    let object1name = 0;
    let object2name = 0;
    let object1char = 0;
    let object2char = 0;
    for (let key in obj1){
        object1name = key;
        object1char =  obj1[key];;
    }
    for (let key in obj2){
        object2name = key;
        object2char = obj2[key];
    }
    if(obj1.length != obj2.length){
        return false;
    }else if(object1name != object2name){
        return false
    }else if(object1char != object2char){
        return false
    }else{
        return true
    }
}
console.log(checkCopare(student1, student2));

//3
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
 if(animals.bird){
    console.log(animals.bird);
 }