// TASK 1

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

fibonacci.forEach((item) => {
    console.log(item);
});

fibonacci.forEach(function (item) {
    console.log(item);
});

// TASK 2

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

let members = users.map((item, index) => "member " + (index + 1) + ": " + item);

console.log(members);

let newMembers = users.map(function(item, index) { 
    return "member " + (index + 1) + ": " + item;
});

console.log(newMembers);

// TASK 3

const numbers = [7, -4, 32, -90, 54, 32, -21];

let numbersFilter = numbers.filter(item => item > 0);

console.log(numbersFilter);

let newNumbersFilter = numbers.filter(function(item) {
    return item > 3;
});

console.log(newNumbersFilter);

// TASK 4

const fibonacci2 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

result = fibonacci2.reduce((sum, item) => sum + item);

console.log(result);

result2 = fibonacci2.reduce(function(sum, item) {
    return sum + item;
});

console.log(result2);

// TASK 5

const numbers1 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

let even = numbers1.find(item => item % 2 == 0);

console.log(even);

let even1 = numbers1.find(function(item) {
    return item % 2 == 0;
});

console.log(even1);

//ADVANCED TASK 1

function Student(name, salary, rate) {
    this.name = name;
    this.salary = salary;
    this.rate = rate;
    this.getCredit = function(){
        let credit = 0;
        if (this.rate === "A") {
            credit = this.salary * 12;
            return credit;
        } else if (this.rate === "B") {
            credit = this.salary * 9;
            return credit;
        } else if (this.rate === "C") {
            credit = this.salary * 6;
            return credit;
        } else {
            return credit = 0;
        }
    }
  }

  let student1 = new Student("Roma", 500, "C");
  let student2 = new Student("Dima", 600, "A");
  let student3 = new Student("Ivan", 700, "B");
  let student4 = new Student("Aliona", 800, "D");
  let student5 = new Student("Sergei", 900, "A");

  let students = [student1, student2, student3, student4, student5];
  
  function getCreditSum(students) {
    let sum = 0;
    for (let item in students) {
        sum += students[item].getCredit();
    }
    return sum;
  }

  console.log(getCreditSum(students));

  //ADVANCED TASK 2

  function getStrWithoutVowels (str) {
    let vowels = ["a", "A", "e", "E", "u", "U", "i", "I", "o", "O", ];
    let newArr = str.split("").filter(function(item) {
        return !vowels.includes(item);
    });
    return newArr.join("");
  }

  console.log(getStrWithoutVowels("This website is for losers LOL!"));

  //ADVANCED TASK 3



  //ADVANCED TASK 4

  function highAndLow(str) {
    let strArray = str.split(" ");
    strArray.sort(function(a, b) {
        return a - b;
    });
    for (let item in strArray) {
        max = strArray[strArray.length - 1];
        min = strArray[0];
    } 
    console.log(`${max} ${min}`);
  }

  highAndLow("1 2 3 4 5"); 
  highAndLow("1 2 -3 4 5"); 
  highAndLow("1 9 3 4 -5");

  //ADVANCED TASK 5



  //ADVANCED TASK 6

  function getCode(str) {
    let initialValue = 0;
    let strArray = str.split("");
    let total1 = strArray.map((item) => item.charCodeAt());
    total1 = total1.join("");
    let total2 = total1.replaceAll(7, 1);
    let sumTotal1 = total1.split("").reduce((accumulator, currentValue) => +accumulator + +currentValue, initialValue);
    let sumTotal2 = total2.split("").reduce((accumulator, currentValue) => +accumulator + +currentValue, initialValue);
    return sumTotal1 - sumTotal2;
  }

  console.log(getCode("ABC"));
  console.log(getCode("CCC"));

  //ADVANCED TASK 7