//Code runner pluggin
let x, y, c, i, j, a;
console.log("hi");

    //Унарные и Бинарные операнды

x = 1;
x = -x; //-1  //унарный минус
y = 2;
console.log(x - y); // бинарный минус


    //инкремент  - увеличение на 1
    //декремент - уменьшение на 1
x = 2;
x = x +1;
x++; // x = x + 1
x--; // x = x - 1;

x++;
++x;

    // постфиксная и префиксная форма
c = 0;
i = 4;

c = ++i; 
// i+1
// c = i
console.log(c, i); // c = 5, i = 5

c = 0;
i = 4;
c = i++;
// c = i
// i+1
console.log(c, i); //c = 4, i = 5
c = 0;
i = 4;
i = i +1; //5
c = i // 5


c = 2;

console.log(c++); //2
console.log(++c); //4

console.log("Hello")

        // Операторы сравнения - возвращают true или false
// false значение - 0, "", undefined, null, NaN, false
    // >, <, >=, <=, ==, ===

 console.log(2 > 1); // true
console.log("a" > "b"); //false
 console.log(true > false); //true
 console.log(1 > 0); //true
 console.log("2" == 2) //true
 console.log("2" === 2) //false

// При сравнении значений разных типов, 
//используется числовое преобразование
console.log(false == 0) //true
console.log(true == 1) //true

// Особенности null и undefined
// При применении оператора == к null или undefined 
// преобразования в число не производится. 
// Значение null равно только null или undefined и не 
// равно ничему больше.
// При преобразовании в число значения null и undefined 
// обрабатываются иначе: null преобразуется в 0, 
// в то время как undefined превращается в NaN

// console.log("NULL")
console.log(null == 0)     // false, null не преобразуется в 0
console.log(null == undefined)   
console.log(0 == undefined)      // 
// console.log(Number(null));   // 0
console.log(Number(undefined)); //NaN
console.log(null >= 0); // Number(null)>=0 // true


// || - или (возвращает первый true или последний false (спотыкается на true))
// && - и (возвращает последний true или первый false (спотыкается на false))
    // ! - не
console.log(1 || 0); // 1
console.log(0 || 2); //2
console.log(2 > 5 || 5 > 2); // true
console.log(2 > 5 || 1 > 2); //false
console.log(true || true); //  true
console.log(true || false); // true
console.log(false || false); // false
console.log("string" || 1 ); //
console.log(1 || "string"); // 1
console.log(1 && "string"); // "string"
console.log(true && true); // true
console.log((5>2) && (15>10)); // true
console.log((5<2) && (15>10)); //false
console.log(true && false); // false
console.log(false && false); // false
console.log(1 && "string" && null && 0 && 1); //null
console.log(0 || null || "" || 5); //5
console.log(2 && 1 && 5 && null && 0 && ""); //0
console.log(+"string" || null || "" || 5); //5
console.log( null || 2 && 3 && 4 || 5);

// console.log("НЕ")
b = 1;
c = false;
console.log( b == !c); // 1 == true
c = 1;
console.log(b == !c); // 1 == false



// if (condition) {
//     //
// } else {

// }
// if (condition1) {
//     //
//     //
//     //
// }   else if (condition2){
//     if (condition3) { 

//     }

// }
//     else {

// }


// (condition) ? true: false;

if (a % 2 == 0) {
    console.log("Chet")
} else {
    console.log("Ne Chet")
}
(a % 2 == 0) ?  console.log("Chet") :  console.log("Ne Chet");

(a % 2 == 0) ?  console.log("Chet") : "";
a = 5;
if (a > 1) {
    console.log("Chet")
} 
if (a == 0) {
    console.log("Ne Chet")
}
if (+"string" || null || "" || 5 ) {
    console.log("yes")
} else {
    console.log("false")
}
a = 18
if ((a%2 == 0) && (a>0) && (a!=0) ) {

}



// switch(x) {
//     case '1' :
//         alert("1");
//         break;  //!
//     case '2' :
//         alert("2");
//         break; //!
//     default:
//         alert("Something else");
//         break; //    
// }

// //Группировка
// switch(x) {
//     case '1' :
//         alert("Hello");
//         break;  //!
//     case '3' :
//     case '4' :
//         alert("Bye");
//         break; //!
//     default:
//         alert("Something else");
//         break; //    
// }

// Задачи на условие
// 1) Если переменная a больше нуля, то выведите 'Верно', 
// иначе выведите 'Неверно'.

a = 9;
if (a > 0) {
    console.log("Verno")
    if (a % 2 == 0) {
        console.log("Chet")
    } else {
        console.log("Ne Chet")
    }
} else if (a==0) {
    console.log("0")
} else {
    console.log("Ne verno")
}


// Проверьте работу скрипта при a, равном 1, 0, -3.
// 2) Дана строка из 6-ти цифр. 
// Проверьте, что сумма первых трех цифр равняется сумме
// вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
let num = "123321";
let sum = 0;
if ( (+num[0] + +num[1] + +num[2]) == (Number(num[3]) + Number(num[4]) + Number(num[5]))  ) {
    console.log("Yes");
    sum = +num[0] + +num[1] + +num[2]
} else {
    console.log("No");
}

if (sum) {
    console.log("Sum is ok")
}


//3) Вывести период года на основании номера месяца. 
// Через switch 



let month = -10;
if (month == 12 || month == 1 || month == 2) {
    console.log("Winter")
} else if (month>=3 &&  month<=5) {
    console.log("Spring")
} else if (month>=6 && month<=8) {
    console.log("Summer")
} else if (month>=9 && month<=11) {
    console.log("Fall")
} else {
    console.log("Error")
}
switch(month) {
    case 12:
    case 1:
    case 2:
        console.log("Winter")
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring")
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer")
        break;
    default:
        console.log("error");
        break;
}



//Циклы

// while (condition) {
//     //
// }

i = 0; //присваиваем
while (i <= 5) { //условие
    console.log(i);
    i++; //увеличение шага
}

// do {
//     //
// } while (condition)

i=0; //присваиваем
do {
    console.log(i);
    i++; //увеличение шага
} while (i<=5); //условие

// //особенность do while

i = 10; 
while (i<10){
    console.log(i);
    i++;
}



 console.log("WHILE ")
i=10;
do {
    console.log(i); //10
    i++; 
} while (i<10);




// for (start; condition; step) {

// }

for (i = 0; i <= 5; i+=2) {
    console.log(i);
}

//break и continue

//остановить цикл на первом четном
for (i=3; i<=10; i++) {
    if (i%2 == 0) {
        console.log(i);
        break;
    }
  
}


// вывести только четные числа
for (i=0; i<=10; i++) {
    if (i%2 == 1) { //нечетные
        continue;
    }
    console.log(i);
}

a = 10;
while (true) {
    if (a == 12) {break}
    console.log(a);
    a++;
}


// 1. Выведите числа от 1 до 50 и от 35 до 8

for (i = 35; i>=8; i--) {
    console.log(i)
}

i = 35;
while (i >= 8) {
    console.log(i);
    i--;
}


// 2. Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа
// тегом <br /> друг от друга, чтобы получить столбец, а не строку.

// 3. С помощью цикла найдите сумму чисел от 0 до 100.

// 4. Выведите чётные числа от 8 до 56. Решить задание через while и for.


// 5. Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до
// тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите
// общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не
// число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь
// может ввести отрицательное значение


// 6. Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.


//  7. Создайте переменную num и присвойте ей значение '12345'. 
// Найдите произведение (умножение) цифр этого числа.

num = "1234567";
let multi = 1;
for (i = 0; i < num.length; i++) {
    multi = multi * num[i];
}
console.log(multi)