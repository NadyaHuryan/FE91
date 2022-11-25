
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];


fibonacci.forEach(function(item) {
    console.log(item);
    });

console.log('---------');

fibonacci.forEach(item  => console.log(item));
console.log('##########');
//task 1 NORMAL level




const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];


let remapUsers1 = users.map(function(item, index) {
    return "member " + (index + 1) + ": "+ item;
  })

let remapUsers2 = users.map((item, index) => "member " + (index + 1) + ": "+ item);

console.log(remapUsers1);
console.log('---------');
console.log(remapUsers2);
console.log('##########');
//task 2 NORMAL level





const numbers = [7, -4, 32, -90, 54, 32, -21];


let positiveNumbers1 = numbers.filter(function(item){
        return item >= 0;
})

let positiveNumbers2 = numbers.filter(item => (item >= 0));
console.log(positiveNumbers1);
console.log('---------');
console.log(positiveNumbers2);
console.log('##########');
//task 3 NORMAL level

let sumFibonacci1 = fibonacci.reduce(function(item, sum){
    return sum + item;
});
let sumFibonacci2 = fibonacci.reduce((item, sum) => sum + item);
console.log(sumFibonacci1);
console.log('---------');
console.log(sumFibonacci2);
console.log('##########');
//task 4 NORMAL level



const numbers5 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

let findNumb1 = numbers5.find(function(item){
    return item % 2 === 0;
})
let findNumb2 = numbers5.find(item => item % 2 === 0);

console.log(findNumb1);
console.log('---------');
console.log(findNumb2);
console.log('##########');
//task 5 NORMAL level




function Student(name, salary, rate){
    this.name = name;
    this.salary = salary;
    this.rate = rate;
    this.maxCreditSum = function() { 
        return rates[rate] * this.salary};
}//  конструктор стeдентов

const rates = {
    A: 12,
    B: 9,
    C: 6,
    D: 0,
} // объект с категориями платежеспособности

let std1 = new Student("Ivan", 1000, "A");
let std2 = new Student("Kate", 500, "B");
let std3 = new Student("Sergjio", 700, "C");
let std4 = new Student("Ksenija", 200, "D");
let std5 = new Student("Vlad", 666, "B");

const students =  [std1, std2, std3, std4, std5];
let bigMoney = students.reduce(function(sum, value,){
    return sum +=value.maxCreditSum();
},0)
// редьюсом считать бабки

console.log(bigMoney);
console.log('##########');
//task 1 ADVANCED level



function deleteVowelENG(str){
    const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
    let localArr = str.split("").filter(item => !vowels.includes(item));
    return localArr.join("");
}

/// в названии функции определён язык, поэтому гласные как локальная константа
console.log("This website is for losers LOL!");
console.log(deleteVowelENG("This website is for losers LOL!"));
console.log('##########');
//task 2 ADVANCED level




function accum (str){
    let separator = "-";
    let oldArr = str.split("");
    let newArr = oldArr.map(function(item,index){
        let localArr = [];
        let LocalStr;
        let localItem = String(item).toLowerCase();

        for(let i = 0; i <= index; i++){
            (i == 0 ) ? localItem = localItem.toUpperCase() : localItem = localItem.toLowerCase();
            localArr.push(localItem);
        }
        LocalStr = localArr.join("");
        return LocalStr;
    });
    return newArr.join(separator);
}

/// строка бьёться в масив, создаёться новый масив где индекс элемента в исходном масиве длинна элимента в новом
/// плюс принудительный перевод в нужный регистр


console.log (accum("abcd"));
console.log (accum("RqaEzty"));
console.log (accum("cwAt"));
console.log('##########');
//task 3 ADVANCED level




function highAndLow (str){
    let result = str.split(" ").sort( (a, b) => a - b ); 
    return result[result.length-1] + " " + result[0];    

}

console.log(highAndLow("1 2 3 4 5")); // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5
console.log('##########');
//task 4 ADVANCED level


function isIsogram(str){
    let arrDate = str.split("").map(item => item.toLowerCase());
    let value = true;


    for(let i = 0; i <arrDate.length; i++){
        let rule = arrDate.filter(item => item == arrDate[i]);
        (rule.length > 1) ? value = false : value = value;
    }

    return value;
}
// результатом фильта всегда будет масив с длинной как минимум 1, 
// это результат проверки элимента самого на себя
// если результа больше 1 то в масивее есть такие же элименты


console.log(isIsogram("Dermatoglyphics"));// == true
console.log(isIsogram("aba"));// == false
console.log(isIsogram("moOse"));// == false // -- ignore letter case
console.log('##########');
//task 5 ADVANCED level