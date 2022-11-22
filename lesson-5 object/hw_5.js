// Task 1 

const obj1 = {
    user: 'me',
    pass: 1234,
}

delete obj1.user;
delete obj1.pass; 

console.log(obj1);

// Task 2

const obj2 = {
    user: 'Cath',
    pass: 1234,
}

function propCheck(property) {
    if (property in obj2) {
        console.log(property in obj2)
    } else {
        console.log('nope')
    }
}

propCheck('user');
propCheck('car');

// Task 3

const student = {
    name: 'John',
    age: 19,
    isHappy: true,
}

for (let item in student) {
    console.log(item);
}

for (let item in student) {
    console.log(student[item]) 
}

// Task 4

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий',
    },
};

console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);

// Task 5

let salaries = {
    andreyK: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199,
}

function avSalary(arr) {
    let allSalary = 0,
        counter = 0,
        average = 0;
    for (let item in arr) {
        allSalary += arr[item];
        counter++
    }
    return average = allSalary / counter;
}

console.log(avSalary(salaries));

// Task 6

// let userCheck = function() {
//     let userLoginCheck = prompt('Подтвердите логин'),
//     userPassCheck = prompt('Подтвердите пароль');
//     if (userLoginCheck === this.login && userPassCheck === this.pass) {
//         console.log('Добро пожаловать');
//     } else {
//         console.log('Неверно');
//     }
// }

// let userInfo = function() {
//     let userLogin = prompt('Введите логин'),
//     userPass = prompt('Введите пароль'),
//     userInfoObj = {
//         login: userLogin,
//         pass: userPass,
//         check: userCheck
//     };
//     return userInfoObj;
// }

// let user1 = userInfo();
 
// user1.check();

// Advanced 

// Task 1

// 1 способ

function numToStr(str) {
    let arr = str.split(''),
    newArr = [];
    for (let item of arr) {
        newArr.push(checkNumb(item));
    }
    return str = newArr.join('');
}

function checkNumb(num) {
    switch(num) {
        case 1:
        case '1':
            return 'one';
        case 2:
        case '2':
            return 'two'; 
        case 3:
        case '3':
            return 'tree';
        case 4:
        case '4':
            return 'four'; 
        case 5:
        case '5':
            return 'five';
        case 6:
        case '6':
            return 'six'; 
        case 7:
        case '7':
            return 'seven';
        case 8:
        case '8':
            return 'eight'; 
        case 9:
        case '9':
            return 'nine';
        case ':':
            return ':';
        default:
            return NaN;
    }
}

console.log(numToStr('2:5'));

// 2 способ

function numToStr2(str) {
    let arr = str.split(''),
    newArr = [];
    arr.splice(1, 1);
    for (let item of arr) {
        newArr.push(checkNumb2(item));
    }
    return str = newArr.join(':');
}

function checkNumb2(num) {
    let objNumbers = [ 'zero', 'one', 'two', 'three', 
                      'four', 'five', 'six', 
                      'seven', 'eight', 'nine'];
    for (let item in objNumbers) {
        if ( +item == num) return objNumbers[item];
        else continue;
    }
}

console.log(numToStr2('2:5'));
console.log(numToStr2('6:3'));
console.log(numToStr2('0:3'));

// Task 2 

let student1 = {
    name: 'Polina',
    age: 27,
}

let student2 = {
    name: 'Polina',
    age: 27,
}

function isEqual(student1, student2) {
    const props1 = Object.getOwnPropertyNames(student1);
    const props2 = Object.getOwnPropertyNames(student2);
    if (props1.length !== props2.length) {
        return false;
    }
    for (let i = 0; i < props1.length; i++) {
        const prop = props1[i];
        if (student1[prop] !== student2[prop]) {
            return false;
        }
    }
    return true;
  }

  console.log(isEqual(student1, student2));

// Task 3

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

if (animals.bird) {
    console.log(animals.bird);
} else {
    console.log('Такого нет')
}