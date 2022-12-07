//////////////////////Задание 1///////////////////////
let height = 35
let width = 30
if (height > width){
alert(height);
}
else {
alert(width);
};
//Работает//
//////////////////////Задание 2///////////////////////
let x = prompt('Введите число'),
sum = 0;

for (let i = 0; i <= x; i++) {
sum += i;
}
console.log(sum);
//Работает//
//////////////////////Задание 3///////////////////////
for (i = 1; i <= 20; i++) {
if (i % 3 == 0) {
console.log(i)
}
}
//Работает//
// //////////////////////Задание 4///////////////////////
//1//
// let key = true
// let documents = true
// let pen = true
// let apple = false
// let orange = true;

// if (key == true && documents == true && pen == true && (pen || orange) == true) {
// console.log("Готов");
// }
// else{console.log("Не Готов");}
//2//
let key = true
let documents = true
let pen = true
let apple = false
let orange = true;

if (key && documents && pen && (pen || orange)) {
console.log("Готов");
}
else{console.log("Не Готов");}
//Работает//
//////////////////////Задание 5///////////////////////
let namber = prompt('Введите число');
if (namber % 3 == 0) {
alert("Fiz");
} else if (namber % 5 == 0) {
alert("Buz");
} else if (namber % 5 == 0 && namber % 3 == 0){
alert("FizBuz");
} else {
alert("Введите другое число");
}
//Не показывает FizBuz//
//////////////////////Задание 6///////////////////////
let age = prompt("Ваш возраст");
if (age >= 18) {
alert("Доступ разрешен");
} else if (age > 15 && age < 18){
alert("Уже почти");
} else {
alert("Доступ запрещен")
}
//Работает//
// //////////////////////Задание 7///////////////////////
let side = prompt("В какую сторону света хотите отправиться?");
switch (side) {
case "юг":
alert("на юг пойдешь счастье найдешь");
break;

case "север":
alert("на север пойдешь много денег найдешь");
break;

case "запад":
alert("на запад пойдешь верного друга найдешь");
break;

case "восток":
alert("на восток пойдешь разработчиком станешь");
break;
}
//Работает//
//////////////////////Задание 01///////////////////////
let ssum = 0;
let count = 0;
let namberr;

while ((namberr = prompt("Введите число")), namberr !== "0" && namberr !== "") {
    count++;
    ssum = sum + +namberr;
    console.log("Сумма: " + ssum + " Среднее арифметическое: " + (ssum / count));
}
//////////////////////Задание 02///////////////////////
let namber1 = prompt("Введите 1-ое число");
let namber2 = prompt("Сколько отнять?");
let namber3 = prompt("Сколько прибавить?");
let namber4 = prompt("Сколько умножить?");
let namber5 = prompt("Сколько разделить?");

console.log("((((" + namber1 + " - " + namber2 + ")" + " + " + namber3 + ")" + " * " + namber4 + ")" + " / " + namber5 + " = " + (((((namber1 - namber2) + +namber3) * namber4) / namber5)));

//Работает//
//////////////////////Задание 03///////////////////////
let grid = "#"
sum = "";
for (i = 0; i < 10; i++) {
    console.log(sum += grid)
}
//Работает//