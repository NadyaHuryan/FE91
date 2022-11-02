// Задание 1

let height = 15;
let width = 20;


if (height < width) {
    console.log("Наибольшая сторона ширина и ее размер " + width)
} else if (height > width) {
    console.log("Наибольшая сторона  и ее размер " + height)
} else {
    console.log("Ширина и высота равны и их размер " + height)
}



// Задание 2

let a = 5;


while (a > 0 & a < 6) {
    let sum = 0;

    for (let i = 0; i <= a; i++) {
        sum += i;
    }

    console.log('Сумма чисел в числе ' + a + ' равна ' + sum);
    --a; // для возвращения а, иначе цикл не останавливается
}



// Задание 3

for (b = 1; b <= 20; b++) {

    if (b % 3 == 0) {
        console.log(b)
    };
}

// Задание 4

let key = true,
    documents = true,
    pen = true,
    apple = false,
    orange = true;
let shouldGoToWork = key && documents && pen && (apple || orange);


if (shouldGoToWork) {
    console.log('Все вещи на месте');
} else {
    console.log('Чего-то не хватает');
}

// Задание 5

let userNumb, fiz, buz, fizBuz;
userNumb = prompt('Введите число');


if (userNumb % 5 == 0) {
    alert( 'fiz' );
}
else if (userNumb % 3 == 0) {
    alert( 'buz' );
}
else if ((userNumb % 5 == 0) && (userNumb % 3 == 0)) {
    alert( 'fizBuz' );
}
else {
    alert( 'Заданное число не делится на 3 или 5' );
}

// Задание 6

let userAge = prompt('Введите Ваш возраст');


if (userAge > 18) {
    alert( 'Доступ разрешен' );
} else if (userAge < 16) {
    alert( 'Доступ запрещен' );
} else {
    alert( 'Уже почти' );
}

// Задание 7

let side = prompt('В какую сторону света хотите отправиться');


switch (side) {
    case 'юг':
        alert( "на юг пойдешь счастье найдешь" );
        console.log( "на юг пойдешь счастье найдешь" );
        break;
    case 'север':
        alert( "на север пойдешь много денег найдешь" );
        console.log( "на север пойдешь много денег найдешь" );
        break;
    case 'запад':
        alert( "на запад пойдешь верного друга найдешь" );
        console.log( "на запад пойдешь верного друга найдешь" );
        break;
    case 'восток':
        alert( "на восток пойдешь разработчиком станешь" );
        console.log( "на восток пойдешь разработчиком станешь" );
        break;
    default:
        alert( "неверные данные, попробуйте снова" );
        console.log( "неверные данные, попробуйте снова" );
        break;
}

// ADVANCED 1


// ADVANCED 2

let userNum = prompt("Введите число");
let subtraction = prompt("Сколько отнять");
let addition = prompt("Сколько прибавить");
let multiplication = prompt("На сколько умножить");
let division = prompt("На сколько разделить");
// let result = (((userNum - subtraction) + addition) * multiplication) / division;
// let operation = '((((' + userNum + ' - ' + subtraction + ') + ' + addition + ') * ' + multiplication + ') / ' + division + ' = ' + result;


alert(`((((${userNum} - ${subtraction}) + ${addition}) * ${multiplication}) / ${division} = ${(((userNum - subtraction) + addition) * multiplication) / division}`); //неправильно считает 

// ADVANCED 3

let ledder = "#";
let length = prompt("Введите число");

for (i = 0; i < length; i++) {
    ledder = ledder + "#";
    console.log(ledder);
}