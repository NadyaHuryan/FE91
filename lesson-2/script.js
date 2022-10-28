
let height = 14;
let width = 14;

if(height == width){
    console.log('Upsss...  height = width');
}else if(height && width){
    value = "height";
    console.log(`${height} = height`) ;
    }else{
        value = "width";
        console.log(`${width} = width}`) ;
    }



// task 1 done 

for(let curentNumber = 1; curentNumber <=5; curentNumber++){
    let curentNumberSum = 0;
    for(let counter = 0; counter <= curentNumber;counter++){
        curentNumberSum +=counter;
    }
    console.log(`Сумма чисел числа ${curentNumber} = ${curentNumberSum}`);
        
    } 
// task 2 done     

for(let anyNymber = 1; anyNymber <=20; anyNymber++){
    if(anyNymber % 3 == 0 && anyNymber != 0){
        console.log(`Число ${anyNymber} кратно трём`);
    }
}
// task 3 done 

let key = true;
let documents = true;
let pen = true;
let apple = true;
let orange = true;

let shouldGoToWork = key && documents && pen && (apple || orange);
console.log('shouldGoToWork = ' + shouldGoToWork);
// task 4 done 

let userNumber = prompt("Введи число", 14);

 if((userNumber % 5 == 0 ) && (userNumber % 3 == 0 )){
    alert('FizBuz');
    } else if (userNumber % 5 == 0) {
        alert('Fiz');
    }else if (userNumber % 3 == 0){
        alert('Buz');
    }
// task 5 done 

let userAge = prompt('Возраст?');

let userMassage = (userAge < 16) ? 'Доступ запрещен!' :
  (userAge < 18) ? 'Уже почти!' :
  'Доступ разрешен';

alert( userMassage );
// task 6 done 

let userQuestion = prompt("В какую сторону света хотел бы отправиться?");

switch(userQuestion){
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
    default:
        console.log( "Нет таких значений" );                
}
// task 7 done 

//##############  ADVANCED level  ############### //


do{
    a = Number( prompt ('введи число, для выхода из цикла введи 0 или оставь пустую строку'));
    aSum = aSum + a;
    aCounter++;
  }
  while (a != 0);
alert(`сумма введённых чисел = ${aSum},
среднее арифметическое введённых чисел = ${aSum / aCounter}`);


let aCounter = 0 ; 
let aSum = 0;


let aCounter = 0 ; 
let aSum = 0;
while(true){
    a = Number( prompt ('введи число, для выхода из цикла введи 0 или оставь пустую строку'));
    if (isNaN(a) == true ){
        alert ('это не число');
    }else if(a == 0 ){
        break
    }else{
        aCounter++ ; 
        aSum = aSum + a;
    }
}

alert(`сумма введённых чисел = ${aSum},
среднее арифметическое введённых чисел = ${aSum / aCounter}`);

//task 1 done 

let startNumber = prompt("введи число");
let value1  = Number (prompt("1. cколько отнять от числа?"));
let value2  = Number (prompt("2. cколько прибавить к предыдущему результату  ?"));
let value3  = Number (prompt("3. на cколько умножить предыдущий результат?"));
let value4  = Number (prompt("4. на cколько разделить предыдущий результат?"));

alert(`((((${startNumber} - ${value1}) + ${value2}) * ${value4}) / ${value4} = ${(((startNumber - value1) + value2) * value3) / value4}`);
//task 2 done

let stage ="#"

for(let stairs = 1; stairs <=6; stairs++ ){
    console.log(stage);
    stage = stage + "#";
}
//task 3 done

