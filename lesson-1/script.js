let x = 20;
let y = 58;
let z = 42;
let xyz = x + y + z;
console.log(xyz);
console.log("#### task1 done ####");


let str = "Привет";
let sum = 123;
let num = 15.8;
let flag = true;
let txt = "true";
console.log('str : ' + typeof str);
console.log('sum : ' + typeof sum);
console.log('num : ' + typeof num);
console.log('flag : ' + typeof flag);
console.log('txt : ' + typeof txt);
console.log("#### task2 done ####");


const secondsPerMinute = 60;
const minutesPerHour = 60;
const hoursPerDay = 24;
const daysPerYear = 365;
let myAge = 30;
let myAgeInSeconds = myAge * daysPerYear * hoursPerDay * minutesPerHour * secondsPerMinute;
console.log(`My Age in seconds : ${myAgeInSeconds}`);
console.log("#### task3 done ####");


let count = 42;
let userName = '42';
count = String(count);//            first version
// count = "" + count;              second version
// count = count.toString;          third version
userName = +userName;//             first version
// userName = Number(userName);     second version
console.log("#### task4 done ####");


let a = 1;
let b = 2;
let c = "белых медведей";
console.log(`${a}${b} ${c}`);       //first version
console.log(a+(b+" "+c));
console.log("#### task5 done ####");

 
let word1 = "доступ";
let word2 = "морпех";
let word3 = "наледь";
let word4 = "попрек";
let word5 = "рубило";
let lengthWords = word1.length + word2.length + word3.length + word4.length + word5.length;
console.log('lengthWords = ' + lengthWords);
console.log("#### task6 done ####");

let var1 = 123 ;
let var2 = true;
let var3 = 'false';
console.log(`Variable: var1 have type: ${typeof var1}`);
console.log(`Variable: var2 have type: ${typeof var2}`);
console.log(`Variable: var3 have type: ${typeof var3}`);
console.log("#### task7 done ####");

// let curentUserName = prompt('как тебя зовут?');
// let curentUserAge = prompt('и сколько тебе годиков?');
// console.log(`Юзера зовут ${curentUserName} и ему ${curentUserAge} годиков`);
console.log("#### task8 done ####");
let  a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18;
a1 = 3 % 5;
a2 = 5 + '3';
a3 = '5' - 3;
a4 = 75 + 'кг';
a5 = 785 * 653;
a6 = 100 / 25;
a7 = 0 * 0;
a8 = 0 / 2;
a9 = 89 / 0;
a10 = 98 + 2;
a11 = 5 - 98;
a12 = (8 + 56 * 4) / 5;
a13 = (9 - 12) * 7 / (5 + 2);
a14 = +"123";
a15 = 1 || 0;
a16 = false || true;
a17 = true > 0.

console.log(`a1 = ${a1} :type ${typeof a1}`);
console.log(`a2 = ${a2} :type ${typeof a2}`);
console.log(`a3 = ${a3} :type ${typeof a3}`);
console.log(`a4 = ${a4} :type ${typeof a4}`);
console.log(`a5 = ${a5} :type ${typeof a5}`);
console.log(`a6 = ${a6} :type ${typeof a6}`);
console.log(`a7 = ${a7} :type ${typeof a7}`);
console.log(`a8 = ${a8} :type ${typeof a8}`);
console.log(`a9 = ${a9} :type ${typeof a9}`);
console.log(`a10 = ${a10} :type ${typeof a10}`);
console.log(`a11 = ${a11} :type ${typeof a11}`);
console.log(`a12 = ${a12} :type ${typeof a12}`);
console.log(`a13 = ${a13} :type ${typeof a13}`);
console.log(`a14 = ${a14} :type ${typeof a14}`);
console.log(`a15 = ${a15} :type ${typeof a15}`);
console.log(`a16 = ${a16} :type ${typeof a16}`);
console.log(`a17 = ${a17} :type ${typeof a17}`);
console.log(`a18 = ${a18} :type ${typeof a18}`);
console.log("#### task9 done ####");


let a22 = 4;
let b22 = 3;
a22 = a22 * b22;
b22 = a22 / b22;
a22 = a22 / b22;
console.log ("a22 = " + a22);
console.log ("b22 = " + b22);
// второй вариант через сложение по аналогии
console.log("#### task1 of ADVANCED level done ####");


let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log (`шифровка из центра - ${cipher}`);
console.log("#### task2 of ADVANCED level done ####");