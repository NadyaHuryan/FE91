// ex 1

let height = 15;
let width = 20;

if (height > width) {
  console.log(`Наибольшая сторона ширина и ее размер`, height);
} else if (height < width) {
  console.log(`Наибольшая сторона высота и ее размер`, width);
} else {
  console.log(`Стороны равны и их размер`, width);
}

// ex 2

let numb = 5;
let sum = 0;

for (let i = 1; i <= numb; i++) {
  sum = sum + i;
}
console.log(sum);

// ex 3

for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}

// ex 4

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork = key && documents && pen && (apple || orange);

if (shouldGoToWork) {
  console.log(`Ты взял все необходимое`);
} else {
  console.log(`Ты что-то забыл`);
}

// ex 5 

let userNumber = prompt(`Введите число`);

if (userNumber == 0 || isNaN(userNumber)) {
  alert(`Error`);
} else if ((userNumber % 3 == 0) && (userNumber % 5 == 0)) {
  alert(`FizBuz`);
} else if (userNumber % 5 == 0) {
  alert(`Fiz`);
} else if (userNumber % 3 == 0) {
  alert(`Buz`);
} else {
  alert(`Это число не делится ни на 3, ни на 5`);
}

// ex 6 

let userAge = prompt(`Введите ваш возраст`);

if (userAge > 18) {
  alert(`Доступ разрешен`);
} else if (userAge >= 16 && userAge <= 18) {
  alert(`Уже почти`);
} else {
  alert(`Доступ запрещен`);
}

// ex 7 

let sideOfTheWorld = prompt(`Привет, путешественник! В какую сторону света ты бы хотел отправиться?`)
switch (sideOfTheWorld) {
  case `юг`:
    alert(`на юг пойдешь счастье найдешь`);
    break;
  case `север`:
    alert(`на север пойдешь много денег найдешь`)
    break;
  case `запад`:
    alert(`на запад пойдешь верного друга найдешь`)
    break;
  case `восток`:
    alert(`на восток пойдешь разработчиком станешь`)
    break;
  default:
    alert("по этому пути лучше тебе никуда не идти");
    break;
}

//ADVANCED level

// EX 1

let sum1 = 0;
let i = 0;

while (true) {
  let randomNumber = prompt(`Введите число`);
  if (randomNumber == 0 || randomNumber == ` ` || randomNumber == null) {
    alert(`Сумма чисел равна ` + sum1 + '. ' + `Среднее арифметическое чисел равно ` + (sum1 / i));
    break;
  } else {
    if (isNaN(randomNumber)) {
      alert(`Ошибка ввода`);
    } else {
      i++;
      sum1 = sum1 + +randomNumber;
    }
  }
}

// EX 2

let result = ``;
let j = 0;
let value;

while (true) {
  switch (j) {
    case 0:
      value = Number(prompt(`Введите число`));
      result = `(((` + value;
      break;
    case 1:
      let minus = Number(prompt(`Сколько отнять от предыдущего результата? ` + value));
      value = value - minus;
      result = result + `- ` + minus + `) `;
      break;
    case 2:
      let plus = Number(prompt(`Сколько прибавить к предыдущему результату? ` + value));
      value = value + plus;
      result = result + `+ ` + plus + `) `;
      break;
    case 3:
      let multiply = Number(prompt(`На сколько умножить предыдущий результат? ` + value));
      value = value * multiply;
      result = result + `* ` + multiply + `) `;
      break;
    case 4:
      let divide = Number(prompt(`На сколько разделить предыдущий результат? ` + value));
      value = value / divide;
      result = result + `/ ` + divide;
      break;
    default: break;
  }
  if (j == 4) {
    result = result + ` = ` + value;
    alert(result);
    break;
  }
  j++;
}

// EX 3

let startStairs = ``;

for (let i = 1; i <= 6; i++) {
  startStairs = startStairs + `#`;
  console.log(startStairs);
}