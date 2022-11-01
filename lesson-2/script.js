// ##### Task 1 #####

    let height = 25;
    let width = 27;
    if (height > width){
        console.log('Наибольшая сторона высота и её размер равен ' + height);
    } else if (height === width){
        console.log('Стороны равны');
    } else{
        console.log('Наибольшая сторона ширина и её размер равен ' + width);
    }

// ##### Task 2 #####

//Вариант 1:
    let num = '12345';
    let sum = prompt('Введите позицию числа');
    switch(sum) {
            case 1 :
                console.log(+num[0]);
                break;  
            case 2 :
                console.log(+num[0] + +num[1]);
                break;
            case 3 :
                console.log(+num[0] + +num[1] + +num[2]);
                break;
            case 4 :
                console.log(+num[0] + +num[1] + +num[2] + +num[3]);
                break;
            case 5 :
                console.log(+num[0] + +num[1] + +num[2] + +num[3] + +num[4]);
                break;
            default:
                console.log("Вне диапазона числа");
                break;   
        }

// Вариант 2:
    let num_ = "12345";
    let summ;
    for (i = 1; i <= num_.length; i++) {
        summ = (i * (i + 1)) / 2;
        console.log(summ)
    }


// ##### Task 3 #####

    for (a = 1; a <= 20; a++){
        if (a % 3 == 0){
            console.log(a);
        }
    }

// ##### Task 4 #####

    let key = true;
    let documents = true;
    let pen = true;
    let apple = false;
    let orange = true;
    let shouldGoToWork = (key && documents && pen && (apple || orange));
    shouldGoToWork ? console.log('Go work!') : console.log('Stay home!');

// ##### Task 5 #####

    let userNumm = prompt('Write your number');
    if ((userNumm % 3 === 0) && (userNumm % 5 === 0)){
        alert('FizBuz');
    } else if(userNumm % 5 === 0){
        alert('Fiz');
    } else if(userNumm % 3 === 0){
        alert('Buz');
    }  else if(typeof(userNumm) != Number){
        alert('Try one more time with number!');
    } else {
        alert('Try with another number!');
    }

// ##### Task 6 #####

    let userAge = prompt('Какой ваш возраст?');
    if (userAge > 18){
        alert('Доступ разрешён');
    } else if((userAge >= 16) && (userAge <=18)){
        alert('Уже почти');
    } else if((userAge < 16) && (userAge > 0)){
        alert('Доступ запрещён');
    } else if((typeof(userAge) != Number) || (userAge == 0)){
        alert('Введите корректное значение!');
    }

// ##### Task 7 #####

    let direction = prompt('В какую сторону поедем?')
    switch(direction) {
        case 'юг' :
            console.log('на юг пойдешь счастье найдешь');
            break;  
        case 'север' :
            console.log('на север пойдешь много денег найдешь');
            break;
        case 'запад' :
            console.log('на запад пойдешь верного друга найдешь');
            break;
        case `восток` :
            console.log('на восток пойдешь разработчиком станешь');
            break;
        default :
            alert('Попробуй ещё раз');
            break;
        }

//### ADVANCED level

// ##### Task 2 #####

let usrNumber = prompt('Введите число');
let usrNumberMinus = prompt('Сколько отнять от вашего числа?');
let usrNumberPlus = prompt('Скотлько прибавить прибавить к результату?');
let usrNumberMulti = prompt('На сколько умножить результат?');
let usrNumberDel = prompt('На сколько разделить результат?');
let result = (((+usrNumber - +usrNumberMinus + +usrNumberPlus) * +usrNumberMulti) / +usrNumberDel);
alert(`((((${usrNumber} - ${usrNumberMinus}) + ${usrNumberPlus}) * ${usrNumberMulti}) / ${usrNumberDel}) = ${result}`);

// ##### Task 3 #####

let stairHeight = 7;
for(i = 1; i <= stairHeight; i++){
console.log('#'.repeat(i));
}