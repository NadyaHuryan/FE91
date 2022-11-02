//TASK 1

let height = 15;
let width = 15;

if (height > width) {
    console.log("наибольшая сторона высота и ее размер " + height);
} else if (height < width) {
console.log("наибольшая сторона ширина и ее размер " + width);
} else {
    console.log("они равны " + width);
}

//TASK 2

let sum = 0;

for (i = 1; i < 6; i++) {
   sum = sum + i;
   console.log(sum)
}

//TASK 3

for (i = 1; i < 21; i++) {
    if (i % 3 == 0){
        console.log(i);
    }
 }

 //TASK 4

 let key = true
 let documents = true
 let pen = true
 let apple = false
 let orange = true
 let shouldGoToWork = key && documents && pen && (apple || orange);

if (shouldGoToWork) {
    console.log("Можно идти");
} else {
    console.log("Что-то забыл");
} 

//TASK 5

let number = prompt("Введите число");

if ((number % 3 ==0) && (number % 5 ==0)) {
    console.log("FizBuz")
} else if (number % 3 ==0){
    console.log("Buz")
} else if (number % 5 ==0){
    console.log("Fiz") 
} else {
    console.log("Неверное число")
}

//TASK 6

let age = prompt("Введите ваш возраст");

if (age > 17) {
    console.log("Доступ разрешен");
}  else {
    if ((age == 16) || (age == 17)) {
        console.log("Уже почти");
    }
    console.log("Доступ запрещен");
}

//TASK 7

let arg = prompt("Введите сторону света");
switch (arg) {
  case 'юг':
    console.log( "на юг пойдешь счастье найдешь" );
    break;

  case 'север':
    console.log( "на север пойдешь много денег найдешь" );
    break;

  case 'запад':
    console.log( "на запад пойдешь верного друга найдешь" );
    break;

  case 'восток':
    console.log( "на восток пойдешь разработчиком станешь" );
    break;

  default:
    console.log( "Неизвестное значение, попробуйте ещё раз" );
    break;
}

//ADVANCED TASK 1

let summ = 0;
let count = 0;
let num;

while (( num = prompt("Введите число"), 0), num !== "0" && num !== "" && !isNaN(num)) {
    count++;
    summ = summ + +num;
}
console.log("Сумма чисел: " + summ + " Среднее арифметическое: " + (summ / count));

//ADVANCED TASK 2

let num1 = prompt("Введите 1-ое число");
let num2 = prompt("Сколько отнять?");
let num3 = prompt("Сколько прибавить?");
let num4 = prompt("Сколько умножить?");
let num5 = prompt("Сколько разделить?");

let total = (((((num1 - num2) + +num3) * num4) / num5));

console.log("((((" + num1 + " - " + num2 + ")" + " + " + num3 + ")" + " * " + num4 + ")" + " / " + num5 + " = " + total);

//ADVANCED TASK 3

let str = "#";
let len = prompt("Введите длину");

while (str.length <= len) {
    console.log(str);
    str = str + "#";
}