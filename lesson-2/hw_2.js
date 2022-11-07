// Task 1

let height = 15,
width = 20;

if (height > width) {
    console.log(`Большая сторона высота равна ${height}`)
} else if (height < width) {
    console.log(`Большая сторона ширина равна ${width}`)
    
} else {
    console.log(`Высота и ширина равны ${height} = ${width}`)
};

// Task 2

let n = prompt('Введите число'),
sum = 0;

for (let i = 0; i <= n; i++) {
    sum += i;
    console.log(sum);
}

// Task 3

let num3 = 20;

for (i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
};

// Task 4 

let key = true,
documents = true,
pen = true,
apple = false,
orange = true,
shouldGoToWork = key && documents && pen && apple || orange;

if (shouldGoToWork) {
    console.log("Готов")
} else (
    console.log("Не готов")
);

// Task 5

let num = prompt('Введите число');
if (num % 5 == 0 && num % 3 == 0){
    alert('FizBuz');
} else if (num % 3 == 0) {
    alert('Buz');
} else if (num % 5 == 0){
    alert('Fiz');
} else {
    alert('Nope');
};

// Task 6

let age = prompt('Введите свой возраст');

if (age >= 18){
    alert('Доступ разрешен');
} else if ( age >= 16 && age < 18) {
    alert('Доступ запрещен');
    alert('Уже почти');
};

// Task 7

let worldSide = prompt('Введите сторону света');

switch(worldSide) {
    case 'Юг': 
    case 'юг':
        console.log('На юг пойдешь - счастье найдешь');
        break;
    case 'Север': 
    case 'север':
        console.log('На север пойдешь - много денег найдешь');
        break;
    case 'Запад': 
    case 'запад':
        console.log('На запад пойдешь - верного друга найдешь');
        break;
    case 'Восток': 
    case 'восток': 
        console.log('На восток пойдешь - разработчиком станешь');
        break;
    default:
        console.log ('Введите заново');
        break;
}

// ADVANCED LVL

// Task 1

let numb,
sumnum = 0,
average = 0;

while (true) {
    numb = prompt('Введите число');
    if (+numb == 0) {
        break;
    } else if (isNaN(numb)) {
        alert('Введено не число')
    } else {
        sumnum += +numb;
    }
    average++
}

console.log(`Сумма ${sumnum} и среднее арифметическое ${sumnum/average}`)

//Task 2

let numb1 = prompt('Введите число'),
i;

for( ; ; i++) {
    if(isNaN(numb1)) {
        alert('Eщё раз!!');
        numb1 = prompt('Введите число');
    }
    else {
        break;
    }
}

let numbMinus = prompt('Сколько отнять?');

for( ; ; i++) {
    if(isNaN(numbMinus)) {
        alert('Eщё раз!!');
        numbMinus = prompt('Введите число');
    }
    else {
        break;
    }
}

let numbPlus = prompt('Сколько прибавить?');

for( ; ; i++) {
    if(isNaN(numbPlus)) {
        alert('Eщё раз!!');
        numbPlus = prompt('Введите число');
    }
    else {
        break;
    }
}

let numbMulti = prompt('На сколько умножить?');

for( ; ; i++) {
    if(isNaN(numbMulti)) {
        alert('Eщё раз!!');
        numbMulti = prompt('Введите число');
    }
    else {
        break;
    }
}

let numbDivide = prompt('На сколько разделить?');

for( ; ; i++) {
    if(isNaN(numbDivide)) {
        alert('Eщё раз!!');
        numbDivide = prompt('Введите число');
    }
    else {
        break;
    }
}

let result;

result = numb1 - numbMinus + numbPlus * numbMulti / numbDivide;

alert(`(${numb1} - ${numbMinus} + ${numbPlus}) * ${numbMulti} / ${numbDivide} = ${result}`)

// Task 3

let stair = "#",
sumStair = "";

for(i = 1; i < 7; i++) {
    console.log(sumStair+=stair);
}