//1

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
//1.1
fibonacci.forEach(function(item){
    console.log(item);
})
//1.2
fibonacci.forEach(item => console.log(item))

//2

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

//2.1
const newUsers = users.map(function(item, index){
    return (`member${index + 1}: ${item}`)
})
console.log(newUsers);

//2.2
const newUsers2 = users.map((item, index) => `member${index + 1}: ${item}`)

console.log(newUsers2);
console.log(users);

//3

const numbers = [7, -4, 32, -90, 54, 32, -21];
//3.1
const newNumbers = numbers.filter(function(item){
    return item >= 0
})
console.log(numbers);
console.log(newNumbers);
//3.2
const newNumbers2 = numbers.filter(item => item >= 0)

console.log(newNumbers2);

//4

const fibonacci1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
//4.1
const newFibonacci1 = fibonacci1.reduce(function(leftValue, rightValue){
    return leftValue + rightValue
})

console.log(newFibonacci1);
//4.2
const newFibonacci2 = fibonacci1.reduce((leftValue, rightValue) => leftValue + rightValue)

console.log(newFibonacci2);

//5

const numbers1 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
//5.1
const newNumbers11 = numbers1.find(function(item){
    return (item % 2 == 0)
})
console.log(newNumbers11);
//5.2
const newNumbers12 = numbers1.find(item => item % 2 == 0)
console.log(newNumbers12);

//ADVANCED level

//6
function Student (salary , rate , name){
    this.salary = salary;
    this.rate = rate;
    this.name = name;
    this.sumCredit = function() {if(this.rate == "A"){
        this.sumCredit = this.salary * 12
    }else if(this.rate == "B"){
        this.sumCredit = this.salary * 9
    }else if(this.rate == "C"){
        this.sumCredit = this.salary * 6
    }else{
        this.sumCredit = "Слишком низкий рейтинг" 
    };
}
}
 let student1 = new Student(10, "A", "Ivan")
 let student2 = new Student(12, "B", "Alena")
 let student3 = new Student(15, "C", "Andrey")
 let student4 = new Student(17, "D", "Dmitry")
 let student5 = new Student(20, "A", "Elena")
student1.sumCredit()
student2.sumCredit()
student3.sumCredit()
student4.sumCredit()
student5.sumCredit()

console.log(student1)
console.log(student2)
console.log(student3)
console.log(student4)
console.log(student5)

let students = [student1, student2, student3, student4, student5];
let sum = 0;
for(value of students){
    if(value.sumCredit !== value.sumCredit +""){
       sum += value.sumCredit  
    }
}
console.log(`Общая сумма кредита равна ${sum}`)
//2

function checktroll(str){
 
    let vowels = "aeiouAEIOU";
    let x = [];
    
    for (i = 0; i < str.length; i++){
      if(vowels.indexOf(str[i]) === -1){
        x.push(str[i]);
      } 
    }
    return x.join("")
   }

console.log(checktroll("This website is for losers LOL!"));

//3

function accum(str) {
    str = str.toLowerCase();
    return str.split("").map((item, index) => item.toUpperCase() + item.repeat(index)).join("-");//repeat повторяет значение столько раз, сколько мы задали в скобках, в данном случае с каждым следующем индексом(условно с каждой новой созданной ячейкой) мы добавлям +один
  }
  console.log(accum("cwAt")) 
  console.log(accum("abcd"))
  console.log(accum("RqaEzty"))

//4

function highAndLow(str){
    let min = Math.min(...str.split(" "))
    let max = Math.max(...str.split(" "))
    return(`Максимальное значение ${max}, минимальное значение ${min}`)
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));

//5
function isIsogram(str){
    let str1 = str.toUpperCase();
    let strArray = str1.split("");
    let strArrayNew = strArray.reduce(function(leftValue, rightValue){
     if(!leftValue.includes(rightValue)){//includes проверяет, есть ли такое же значение среди его записей, в данном случае, если нет, то заносит сверяемое значение в массив, с которым далее сравнивает следующие значения
        return [...leftValue, rightValue]//переносит данные прошлого массива в текущий и добавляет к ним проверенное значение
     } 
     return leftValue //если false, то он пропускает сравнивоемое значение и возвращает результат предыдущего вызова
    })
    return strArray.length == strArrayNew.length
}
console.log(isIsogram("Dermatoglyphics")) 
console.log(isIsogram("cat")) 
console.log(isIsogram("aba")) 
console.log(isIsogram("moOse"))

//6 

function giveASCIIcode(str){
   let  total1 = "";
  for (let i = 0; i < str.length; i++){
    total1 += str.charCodeAt(i);
  }
    let total2 = total1.split("");
    for(value of total2){
        if (total2[value] == "7"){
            total2[value] = "1";  
        }
    }
    total2 = total2.join("")
  return total1 - total2;
}
console.log(giveASCIIcode("ABC"))

//7

function stringInNewString(str){
    let str1 = str.toUpperCase();
    let strArray = str1.split("");
    let newrarray = "";
    for(value of strArray){
        if(strArray.indexOf(value) === strArray.lastIndexOf(value)){
            newrarray += "("
        }else{
            newrarray += ")"
        }
    }
    return newrarray  
}
console.log(stringInNewString("(( @"))
console.log(stringInNewString("recede"))
console.log(stringInNewString("din"))
console.log(stringInNewString("Success"))