//TASK1


//вариант 1

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

fibonacci.forEach((item) => {
    console.log(item);
});


//вариант 2

fibonacci.forEach(function (item) {
    console.log(item);
});


//TASK 2
//Используя метод **`map`** создайте новый массив, на основе массива **`users`**, в котором каждый элемент массива будет содержать строку вида:

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];


//вариант 1

const members = users.map((item, index) => "members " + (index + 1) + ": " + item);
console.log(members);


//вариант 2

let newMembers = users.map(function (item, index) {
    return "member " + (index + 1) + ": " + item;
});
console.log(newMembers);


//TASK 3
//С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.

const numbers = [7, -4, 32, -90, 54, 32, -21]


//вариант 1

const result = numbers.filter(numbers => numbers > 0);
console.log(result);

//вариант 2

const newResult = numbers.filter(function (numbers) {
    return numbers > 0
});
console.log(newResult)


//TASK 4
//Используя метод **`reduce`** получите сумму всех чисел массива.

const fibonacci1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

//вариант 1

const initialValue = 0;
const sumWithInitial = fibonacci1.reduce(
    (leftValue, rightValue) => leftValue + rightValue,
    initialValue
);
console.log(sumWithInitial);

//вариант 2 

const newSumWithInitial = fibonacci1.reduce(function (leftValue, rightValue) {
    return leftValue + rightValue
}, 0)
console.log(newSumWithInitial)


//TASK 5
//Используя метод **`find`** найдите в массиве первое четное число.

const numbers1 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

//вариант 1

const even = numbers1.find(numbers1 => numbers1 % 2 == 0);
console.log(even);

//вариант 2 

const newEven = numbers1.find(function (numbers1) {
    return numbers1 % 2 == 0
});
console.log(newEven);

//***ADVANCED LEVEL 



//TASK 2
//+ Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
//+ Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
//+ Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".

function checktroll(str) {

    let vowels = "aeiouAEIOU";
    let x = [];

    for (i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) === -1) {
            x.push(str[i]);
        }
    }
    return x.join("")
}

console.log(checktroll("This website is for losers LOL!"));
console.log(checktroll("I LOVE JS"));
console.log(checktroll("Your soul is mine"));





//TASK 3

function accum(str) {
    str = str.toLowerCase();
    return str.split("").map((item, index) => item.toUpperCase() + item.repeat(index)).join("-");//repeat повторяет значение столько раз, сколько мы задали в скобках, в данном случае с каждым следующем индексом(условно с каждой новой созданной ячейкой) мы добавлям +один
}
console.log(accum("cwAt"))
console.log(accum("abcd"))
console.log(accum("RqaEzty"))



//TASK 4
// В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны возвращать наибольшее и наименьшее число.

function highAndLow(str) {
    let min = Math.min(...str.split(" "))
    let max = Math.max(...str.split(" "))
    return (`Максимальное значение ${max}, минимальное значение ${min}`)
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));



