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
}
console.log(sum);

// Task 3

let num3 = 20;

for (i = 1; i <= 20; i++) {
    if(i % 3 == 0) {
        console.log(i);
    } else {
        continue;
    }
};

// Task 4 

let key = true,
documents = true,
pen = true,
apple = false,
orange = true;

if(key = true && documents == true && pen == true && apple == true && orange == true) {
    console.log("Готов")
} else (
    console.log("Не готов")
);

// Task 5

let num = prompt('Введите число');
if(num % 5 == 0 && num % 3 == 0){
    alert('FizBuz');
} else if(num % 3 == 0) {
    alert('Buz');
} else if(num % 5 == 0){
    alert('Fiz');
} else {
    alert('Nope');
};

// Task 6

let age = prompt('Введите свой возраст');

if(age > 18){
    alert('Доступ разрешен');
} else if( age >= 16 && age <= 18) {
    alert('Уже почти');
} else {
    alert('Доступ запрещен');
};

// Task 7

let worldSide = prompt('Введите сторону света');

switch(worldSide) {
    case 'Юг': 
        console.log('На юг пойдешь - счастье найдешь');
        break;
    case 'Север': 
        console.log('На север пойдешь - много денег найдешь');
        break;
    case 'Запад': 
        console.log('На запад пойдешь - верного друга найдешь');
        break;
    case 'Восток': 
        console.log('На восток пойдешь - разработчиком станешь');
        break;
    default:
        console.log ('Введите заново');
}

// ADVANCED LVL

// Task 1

let numb,
sumnum = 0,
average = 0;


for(; ; i++) {
    numb = prompt('Введите число');
    if(numb !== "0" && numb !== "") {
        sumnum += +numb;
        average = sumnum/2;
    } else if(numb == "0" || numb == "") {
        console.log(sumnum, average);
        break;
    }
}

//Task 2

let numb1 = prompt('Введите число');

for( ; ; i++) {
    if(numb1 == undefined || numb1 == "" || isNaN(numb1) == NaN) {
        alert('Eщё раз!!');
        numb1 = prompt('Введите число');
    }
    else {
        break;
    }
}

let numbMinus = prompt('Сколько отнять?');

for( ; ; i++) {
    if(numbMinus == undefined || numbMinus == "" || +numbMinus == NaN) {
        alert('Eщё раз!!');
        numbMinus = prompt('Введите число');
    }
    else {
        break;
    }
}

let numbPlus = prompt('Сколько прибавить?');

for( ; ; i++) {
    if(numbPlus == undefined || numbPlus == "" || +numbPlus == NaN) {
        alert('Eщё раз!!');
        numbPlus = prompt('Введите число');
    }
    else {
        break;
    }
}

let numbMulti = prompt('На сколько умножить?');

for( ; ; i++) {
    if(numbMulti == undefined || numbMulti == "" || isNaN(numbMulti) == NaN) {
        alert('Eщё раз!!');
        numbMulti = prompt('Введите число');
    }
    else {
        break;
    }
}

let numbDivide = prompt('На сколько разделить?');

for( ; ; i++) {
    if(numbDivide == undefined || numbDivide == "" || +numbDivide == NaN) {
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