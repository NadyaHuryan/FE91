// 1 TASK 
let height = (Math.floor(Math.random() * 30));
let width = (Math.floor(Math.random() * 30));
if(height > width){
    console.log('Наибольшая сторона высота со значением ' + height);
}else if(width > height){
    console.log(' Наибольшая сторона ширина со значением ' + width);
} else{
    console.log('Стороны равны и их значение ' + height)
}
// 2 TASK 
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
    console.log(' i равно ' + i + ' сумма равна ' + sum);
}
// 3 TASK 
for (i = 1; i <= 20; i++){
    if((i % 3) == 0){
        console.log('число ' + i + ' кратно трём');
    } else{
        continue
    }
}
// 4 TASK 
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
if ((key && documents && pen) && (apple || orange)){
    console.log('Можно идти на работу');
} else{
    console.log('чего-то не хватает');
}
// 5 TASK
let a = prompt('Введите любое число');
if(((a % 5) == 0) && ((a % 3) == 0)){
    alert('FizBuz');
} else if((a % 3) == 0){
    alert('Buz');
}else if((a % 5) == 0){
    alert('Fiz');
}
// 6 TASK
a = prompt('Сколько вам лет');
if (a >= 18){
    alert('Доступ разрешён');
} else if (a < 16){
    alert('Доступ запрещён')
} else if (16 <= a < 18){
    let x = 18 - a;
    alert('Уже почти приходи через ' + x + ' год(а)');
}
// 7 TASK
a = prompt('В какую стороны света вы хотели бы отправиться')
switch (a){
    case 'юг':
        console.log('на юг пойдешь счастье найдешь');
        break;
    case 'север':
        console.log('на север пойдешь много денег найдешь');
        break;
    case 'запад':
        console.log('на запад пойдешь верного друга найдешь');
        break;
    case 'восток':
        console.log('на восток пойдешь разработчиком станешь');
        break;
}
// advanced 1 task
let AvSum = 0;
let ForNumber = 0;
for(;;){
    x = Number(prompt('Введите число'));
    if (x){
        if(x < 0){
            x = x * (-1);
        }
    } else if (Number(x) == 0){
        break;
    } else{
        console.log('Ошибка ввода');
        continue;
    }
    AvSum = AvSum + x;
    ForNumber++;
}
console.log('Сумма равна ' + AvSum + ' Среднее арифмитическое равно ' + (AvSum / ForNumber));
// ADVANCE 2 TASK
sum = 0
x = prompt('Введите число');
y = prompt('Сколько отнять');
sum = x - y;
a = prompt('Сколько прибавить');
sum = sum + a;
i = prompt('На сколько умножить');
sum = sum * i;
k = prompt('На сколько разделить');
sum = sum / i
alert(`((((${x} - ${y}) + ${a}) * ${i}) / ${k}) = ${sum}`)
// ADVANCE 3 TASK
let line = '';
x = prompt('Сколько этажей лестницы');
x = Number(x)
for(i = 0; i < x ; i++){
    line = line + '#';
    console.log(line);
}
