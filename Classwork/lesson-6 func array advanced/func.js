"use strict"


// scope
// методы массивов
// callback
// стрелочные функции и arguments
// анонимные функции
// замыкания
// рекурсия
// iife


// с функциями локальные переменные let и var ведут себя похоже
// function test() {
//     var i = 0;
// }
// test();
// console.log(i)
// function test2() {
//     let j = 0;
// }
// test2();
// console.log(j)




// любая переменная, объявленная при помощи оператора var ВНЕ БЛОКА ФУНКЦИИ, будет доступна во всем коде

// РАЗНИЦА МЕЖДУ LET и VAR

let hello = "Hi";
if (true) {
    let hello = "Hi new";
    console.log(hello) //"Hi new"
}
console.log(hello) //

var helloVar = "Hi";
if (true) {
    var helloVar = "Hi new";
    console.log(helloVar) //
}
console.log(helloVar)//

console.log(a15);
var a15 = 200;

var userAge2 = 19; 
function showAge2() {
    console.log(userAge2) //
    userAge2 = 26; 
}
showAge2();
console.log(userAge2) //

var message = "Hello"

function showMessage() {
    var message = "Hello world";
    console.log(message);
}
showMessage();
console.log(message) // что выведет?


// ***********Arrow function ***********

// function fn() {
//     return 'text'
// }
// let a = !2 && 3
// console.log(!!!!2)
// if (2 && 3) {

// }

const fn = () => 'something'
console.log(fn())

// стрелочные функции нельзя вызывать до объявления

// function multiplyByTwo(a) {
//     return a*2
// }
const multiplyByTwo = (a) => a*2;
console.log(multiplyByTwo(8));


// если аргумент 1, то скобки можно не указывать, но если их больше - то обязательно. Лучше всегда скобки прописывать

// Блочная форма (более длинная)
const multiplyByTwo2 = (a) => {
    // еще какой-то код
    console.log("Arrow")
    return a*2; // return обязательно надо указывать
}


// что если надо вернуть очень длинное выражение?
// ставим круглые скобки
const multiplyByTwo3 = (a) => (
    a * 2 / 4 - 15 / a * a**3 + 20
);
console.log(multiplyByTwo3(5))


// *********** Callback function ******

// Функция обратного вызова - это функция, переданная в другую функцию в качестве аргумента, которая затем вызывается по завершению какого-либо действия.
function foo(barNew) {
    let name = 'Lizzy';
    barNew(name);
}
    
foo(bar);

function bar(name) {
    console.log('Hello ' + name);
}

/// Анонимная функция - функция без имени
// анонимная функция в callback (привести пример)
{
    // function foo() {console.log("foo")}
    // function boo() {console.log("boo")}

    // function fooboo(flag, fooNew, booNew) {
    //     if (flag) {
    //         fooNew()
    //     } else {
    //         booNew()
    //     }
    // }
    // fooboo(true, foo, boo)

    function fooboo(flag, foo, boo) {
        let name = "test"
        if (flag) {
            foo(name)
        }
    }
    fooboo(true, function() {
        console.log("foo")
    }, function() {
        console.log("boo")
    });
}

// IIFE (Immediately Invoked Function Expression)
// это JavaScript функция, которая выполняется сразу же после того, как она была определена
// на данный момент этот синтаксис редко используется, единственное применение - ради начальной конфигурации. ну и старый код =) (Показать нюанс с var)

(function() {
    console.log(window.document.inputEncoding);
})()


// *********** Создание объектов с помощи функции конструктора ******

// Обычный синтаксис {...} позволяет создать только один объект 
// Но зачастую нам нужно создать множество однотипных объектов, таких как пользователи, элементы меню и т.д

// синтаксис 
// Имя функции-конструктора должно начинаться с большой буквы
// Основная цель конструктора - удобное повтореное создание однотипных объектов

function User(name, salary, month) {
    const nds = 2;
    this.name = name;
    this.isAdmin = false;
    this.salary = salary;
    this.month = month; 
    this.checkSalary = function() {
        return this.salary * this.month * nds;
    }
}
let obj = {
    salary: 500,
    checkSalary: function() {
        
    }
}
console.log(obj.checkSalary())
// вызов функции конструктора - new
let user = new User('Rick', 500, 20);
let user1 = new User('Rick', 500, 20);
let user2= new User('Rick', 500, 20);
let user3 = new User('Rick', 500, 20);
console.log(user);
console.log(user.salary)
console.log(user.checkSalary())

// Слайд - что под копотом функции-конструктора

// является ли экземпляром User
console.log(user instanceof User)

// Задачи 
// создать калькулятор

// Задачи
// Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает
//  * внутреннюю функцию, которая принимает введенную строку и возвращает булево значение true,
//  * если введенная строка совпадает с паролем и false – если не совпадает.
//  * Пример выполнения функции:
//  * let checkPassword = makePassword('somePassword'); //задаем пороль
//  *
//  * checkPassword('password') // возвращает false
//  * checkPassword('somePassword')
//  */




function makePassword(password) {
    let realPassword = 'LowlyYl';
    function checkPassword() {
        return password === realPassword ? true : false;
    }
    return checkPassword();
 }
 console.log(makePassword('password'));