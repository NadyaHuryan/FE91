// 1 task
let x = 20;
let y = 58;
let z = 42;
let sum1 = x + y + z;
console.log('Сумма ' + sum1);
// 2 task
let str = 'Привет',
    sum = 123,
    num = 15.5,
    flag = true,
    txt = 'true';
console.log(str, typeof str);
console.log(sum, typeof sum);
console.log(num, typeof num);
console.log(flag, typeof flag);
console.log(txt, typeof txt);
// 3 task
let secInMin = 60,
    minInHour = 60,
    hourInDay = 24,
    dayInAge = 365,
    myAge = 24,
    myAgeInSeconds = myAge * dayInAge * hourInDay * minInHour * secInMin;
console.log('Мне '+ myAge + ' лет ' + myAgeInSeconds + ' в секундах')
// 4 task
let count = 42;
let userName = '42';
let countInTxt = String(count),
    userNameInNum = Number(userName);
console.log(countInTxt, typeof countInTxt);
console.log(userNameInNum, typeof userNameInNum)
console.log('' + count);
console.log(+ userName);
// 5 task
let a = 1;
let b = 2;
let c = "белых медведей";
console.log('' + a + b + ' ' + c);
console.log(`${a}${b} ${c}`);
// 6 task
let txt1 = 'доступ',
    txt2 = 'морпех',
    txt3 = 'наледь',
    txt4 = 'попрек',
    txt5 = 'рубило';
let allTxt = txt1 + txt2 + txt3 + txt4 + txt5;
let lengthWords = allTxt.length;
console.log(lengthWords);
// 7 task
let text = 'Hello',
    num1 = 15,
    bool = false;
console.log('Переменная ' + text + ' имеет тип ' + typeof(text));
console.log('Переменная ' + num1 + ' имеет тип ' + typeof(num1));
console.log('Переменная ' + bool + ' имеет тип ' + typeof(bool));
// 8 task
let name1 = prompt('Введите Имя');
let age = prompt('Ваш возраст');
let l = 2022 - Number(age)
console.log('Имя ' + name1 + ' Возраст ' + age + ' Год рождения ' + l);
// 9 task
let a1 = 5 % 3,
    a2 = 3 % 5,
    a3 = 5 + '3',
    a4 = '5'- 3,
    a5 = 75 + 'kg',
    a6 = 785 *653,
    a7 = 100 / 25,
    a8 = 0 * 0,
    a9 = 0 / 2
    a10 = 89 / 0,
    a11 = 98 + 2,
    a12 = 5 - 98,
    a13 = (8 + 56 * 4) / 5,
    a14 = (9 - 12) * 7 / (5 + 2),
    a15 = + '123',
    a16 = 1 || 0,
    a17 = false || true,
    a18 = true > 0;
console.log('a1 ' + a1 + ' a2 ' + a2 + ' a3 ' + a3 + ' a4 ' + a4 + ' a5 '+ a5 + ' a6 ' + a6 + ' a7 ' + a7 + ' a8 ' + a8 + ' a9 ' + a9 + ' a10 ' + a10 + ' a11 ' + a11 + ' a12 ' + a12 + ' a13 ' + a13 + ' a14 ' + a14 + ' a15 ' + a15 + ' a16 ' + a16 + ' a17 ' + a17);
