// //  #### Task 1 💻
// console.log("Task 1");

// let height = 15;
// let width = 20;

// if (height > width) {
//   console.log("наибольшая сторона - высота и ее размер: " + height);
// } else {
//   console.log("наибольшая сторона - ширина и ее размер: " + width);
// }

// // #### Task 2 💻

// console.log("Task 2");

// let sum_i = 0;
// for (let i = 0; i <= 5; i++) {
//   sum_i += i;
//   console.log("сумму чисел в числе " + i + " ровна: ", sum_i);
// }

// // #### Task 3 💻

// console.log("Task 3");

// for (let i = 1; i < 20; i++) {
//   if (i % 3 == 0) {
//     console.log("число, кратное трем:", i);
//   }
// }

// // #### Task 4 💻

// console.log("Task 4");

// let key = true;
// let documents = true;
// let pen = true;
// let apple = true;
// let orange = false;
// let shouldGoToWork = key && documents && pen && (apple || orange);

// if (shouldGoToWork) {
//   console.log("взяли все");
// } else {
//   console.log("что-то забыли");
// }

// // // #### Task 5 💻
// console.log("Task 5");

// let userNumber;
// let fiz;
// let buz;
// let fizBuz;

// userNumber = prompt("введите произвольное число");
// if (userNumber % 5 == 0 && userNumber % 3 == 0) {
//   fizBuz = true;
//   console.log("FizBuz");
// } else if (userNumber % 5 == 0) {
//   fiz = true;
//   console.log("Fiz");
// } else if (userNumber % 3 == 0) {
//   buz = true;
//   console.log("Buz");
// } else {
//   console.log("введенное число не является кратным числу 3 или числу 5");
// }

// // // #### Task 6 💻
// console.log("Task 6");

// let userAge = prompt("укажите свой возраст");
// if (userAge >= 18) {
//   console.log("Доступ разрешен");
// } else {
//   console.log("Доступ запрещен");
//   if (16 <= userAge && userAge < 18) console.log("Уже почти");
// }

// // #### Task 7 💻

// console.log("Task 7");

// let direct;
//   direct = prompt(
//     "Укажите в какую сторону света вы бы хотели отправиться: 1 - юг; 2 - север; 3 - запад; 4 -восток"
//   );
//   switch (direct) {
//     case "1":
//       console.log("на юг пойдешь счастье найдешь");
//       break;
//     case "2":
//       console.log("на север пойдешь много денег найдешь");
//       break;
//     case "3":
//       console.log("на запад пойдешь верного друга найдешь");
//       break;
//     case "4":
//       console.log("на восток пойдешь разработчиком станешь");
//       break;
//     default:
//       direct = false;
//       console.log("неверные данные, попробуйте еще раз");
//   }

// ### ADVANCED level

// #### Task 1 👨‍🏫
// console.log("Task 1 Advanced");

// let num = 0;
// let sum = 0;
// let average = 0;
// let serialNum = 0;
// do {
//   num = prompt("введите с клавиатуры любое число");
//   if (num === null) continue;
//   if (num % num != 0) {
//     alert("введено неверное значение");
//   }
//   if (num % num != 0) continue;
//   sum = sum + +num;
//   serialNum = serialNum + 1;
//   // serialNum = serialNum + +(num != 0 && num);
// } while ((num = num != 0 && num));
// console.log("общую сумму введённых чисел: ", sum);
// console.log("количество циклов: ", (serialNum = serialNum - 1));
// console.log(
//   "среднее арифметическое введённых чисел: ",
//   (average = sum / serialNum)
// );
let num = 0;
let sum = 0;
let average = 0;
let serialNum = 0;
do {
  num = +prompt("введите с клавиатуры любое число");
  if (num === null || num === 0) break;
  if (isNaN(num)) {
    console.log("введено неверное значение");
  }
  else {sum = sum + num;
  serialNum = serialNum + 1;}
} while (num);
console.log(`общая сумма введённых чисел: ${sum}`);
console.log(`среднее арифметическое введённых чисел: ${average = sum / serialNum}`);

// // #### Task 2 👨‍🏫

// console.log("Task 2 Advanced");

// let startNum = 0;
// let subtractNum = 0;
// let addNum = 0;
// let multiplyNum = 0;
// let divideNum = 0;
// let result = 0;

// startNum = prompt("введите с клавиатуры любое число");
// subtractNum = prompt("сколько отнять  от предыдущего результата ?");
// addNum = prompt("сколько прибавить предыдущего результата ?");
// multiplyNum = prompt("на сколько умножить от предыдущего результата ?");
// divideNum = prompt("на сколько разделить от предыдущего результата ?");
// alert(
//   "((((" +
//     startNum +
//     " - " +
//     subtractNum +
//     " ) +" +
//     addNum +
//     ") * " +
//     multiplyNum +
//     ") / " +
//     divideNum +
//     " = " +
//     (result = ((startNum - startNum + addNum) * multiplyNum) / divideNum)
// );

// #### Task 3 👨‍🏫
// console.log("Task 3 Advanced");

// let ladder = ' '
// for (let i = 0; i < 5; i++) {
//   ladder += '#'
//   console.log(ladder)
// }
