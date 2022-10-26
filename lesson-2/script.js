let height = 15;
let width = 20;

let value;

if(height && width){
    value = "height";
    }else{
        value = "width";
    }

console.log(`${value} = ${(height && width)}`) ;
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
    if(anyNymber % 3 == 0){
        console.log(`Число ${anyNymber} кратно трём`);
    }
}
// task 3 done 

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = key && documents && pen && (apple || orange);
console.log('shouldGoToWork = ' + shouldGoToWork);
// task 4 done 

let userNumber = prompt("Введи число", 14);

 if(userNumber % 5 == 0  && userNumber % 3 ==0 ){
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

