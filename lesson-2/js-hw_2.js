//1
let height = 15, width = 20;
if (height < width) {
    console.log("Наибольшая сторона ширина и ее размер " + width)
} else if (height > width) {
    console.log("Наибольшая сторона высота и ее размер " + height)
} else {
    console.log("Обе стороны равны и их размер " + height)
}
//2
let x = 3, sum = 0;
for (let i = 1; i <= x; ++i){
    sum += i   
}
 console.log("Сумма чисел от "+ x + " равна " + sum)
 //3
 for (let i = 1; i <= 20; i++){
    if (i % 3 == 0){
        console.log(i);
    }
 }
 //4
let key = true, documents = true, pen = true, apple = false, orange = true, shouldGoToWork = 0;
if (key && documents && pen && (apple || orange)){
    shouldGoToWork = console.log("Все вещи собранны")
} else {
    shouldGoToWork = console.log("Еще не все собрали")
}
//5
let numb = prompt("Введите число");
if (numb % 5 == 0 & numb % 3 == 0){
    alert("FizBuz")
} else if (numb % 3 == 0){
    alert("Buz")
} else if (numb % 5 == 0){
    alert("Fiz")
}

//6
let age = prompt("Сколько вам лет?");
if (age <= 18){
    alert("Доступ запрещен")
    if (age >= 16 && age <= 18){
        alert("Уже почти") 
    }
} else {
    alert("Доступ разрешен")
}
//7
let side = prompt("В какую сторону света хотите отправиться?");
switch (side){
    case "юг"     :
        alert("на юг пойдешь счастье найдешь");
        break;

    case "север"  :
        alert("на север пойдешь много денег найдешь");
        break; 

    case "запад"  :    
        alert("на запад пойдешь верного друга найдешь");
        break; 

    case "восток" :
        alert("на восток пойдешь разработчиком станешь");
        break;         
}
//ADVANCED level
//1
let NumberSum = 0, number = prompt("Введите число", 0), quantity = 0;
while (number != 0 && number != ""){
     
      if (number == +number){
        if (number !=0 && number != ""){
        NumberSum += +number;
        quantity += 1}   
     }
     else {
         alert("Oшибка ввода, введите цифру")
     };
    
    number = prompt("Введите число", 0);
}
let mid = NumberSum / quantity;
console.log("Общая сумма чисел равна " + NumberSum + ". " + "Среднее арифметическое чисел равно " + mid);
//2 
let OperationNumber = 0, SumNumbers = prompt("Введите число", 0), SumText = 0; 
for (;SumNumbers;){
    
        OperationNumber = prompt("Cколько отнять?", 0)
        SumText  = "(" + SumNumbers + "-" + OperationNumber + ")";
         SumNumbers = SumNumbers - OperationNumber;

        OperationNumber = prompt("Cколько прибавить?", 0)
        SumText= "(" + SumText + "+" +  OperationNumber + ")";
        SumNumbers = SumNumbers + +OperationNumber;

        OperationNumber = prompt("Cколько умножить?", 0)
        SumText= "(" + SumText + "*" +  OperationNumber + ")";
        SumNumbers = SumNumbers * OperationNumber;

        OperationNumber = prompt("Cколько разделить?", 0)
        SumText= "(" + SumText + "/" +  OperationNumber + ")";
        SumNumbers = SumNumbers / OperationNumber;
        
        break
  
}
console.log( SumText + "=" + SumNumbers)
//3

for (let i = 0; i < 7; i++){
  let  step = "";
    for (let j = 0; j < i; j++){
        step += "#";
        
    }
    console.log(step);
}
