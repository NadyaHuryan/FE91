{  let arr = [[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2]
  );
  console.log(arr)
}
//2
{
  const bird = {
    size: "small"
  };

  const mouse = {
    name: "Mickey",
    small: true
  };

  // console.log(mouse.bird.size);
  console.log(mouse[bird.size])
  console.log(mouse[bird["size"]])
}

// 3
{  
  // const randomValue = 21;

  // function getInfo() {
  //   console.log(typeof randomValue);
  //   const randomValue = "Lydia Hallie";
  // }

  // getInfo();
}

//4 
{
  // function sayHi() {
  //   console.log(name); //undefined
  //   console.log(age); // Reference Error
  //   var name = "Lydia";
  //   let age = 21;
  // }
  // sayHi();
}
//5
{
  // function getAge() {
  //   "use strict";
  //   age = 21;
  //   console.log(age);
  // }
  
  // getAge();
}

//6
{
  console.log(+true, !"Lydia");
}

//7
{
  var num = 8;
  var num = 10;

  console.log(num);
}
//8
{
  function sum(a, b) {
    return a + b;
  }
  
  sum(1, "2");
}
//9
{
  console.log(typeof typeof 1);
}
//10
{
  function sayHi() {
    return (() => 0)();
  }

  console.log(typeof sayHi());
}
//11 
{
  console.log(!!null, !!"", !!1);
}
//12
{
  let number = 0;
  console.log(number++);
  console.log(++number);
  console.log(number);
}
//13
{
  function checkAge(data) {
    if (data === { age: 18 }) {
      console.log("Ты взрослый!");
    } else if (data == { age: 18 }) {
      console.log("Ты все еще взрослый.");
    } else {
      console.log(`Хмм.. Кажется, у тебя нет возраста.`);
    }
  }
  
  checkAge({ age: 18 });
}
//14
{
  for (let i = 1; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
  }
}
//15
{
  function bark() {
    console.log("Woof!");
  }
  
  bark.animal = "dog";
  console.log(bark.animal);
}
//16
{
  const sum = eval("10*10+5");
  console.log(sum);
}
//17
{
  const person = { name: "Sarah" };
  const birthYear = "1997";

  function getInfo(member, year) {
    member.name = "Lydia";
    year = 1998;
  }
  

  
  getInfo(person, birthYear);
  
  console.log(person, birthYear);
}
//18
{
  let num = 10;

  const increaseNumber = () => num++;
  const increasePassedNumber = number => number++;

  const num1 = increaseNumber();
  const num2 = increasePassedNumber(num1);

  console.log(num1);
  console.log(num2);
}
//19
{
  const groceries = ["banana", "apple", "peanuts"];

  if (groceries.indexOf("banana")) {
    console.log("We have to buy bananas!");
  } else {
    console.log(`We don't have to buy bananas!`);
  }
}
//20
{
  // let radius = 40;
  const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius
  };
  
  console.log(shape.diameter());
  console.log(shape.perimeter());
}
//21
{
  let c = { greeting: "Hey!" };
  let d;

  d = c;
  c.greeting = "Hello";
  console.log(d.greeting);
}
//22
{
  let greeting;
  greetign = {}; // Опечатка!
  console.log(greetign);
}
//23 
{
  const a = {};
  const b = { key: "b" };
  const c = { key: "c" };

  a[b] = 123;
  a[c] = 456;

  console.log(a[b]);
}
// Ключи объекта автоматически конвертируются в строки. Мы собираемся добавить объект в качестве ключа к объекту `a` со значением `123`.

// Тем не менее, когда мы приводим объект к строке, он становится `"[object Object]"`. Таким образом, мы говорим, что `a["object Object"] = 123`. Потом мы делаем то же самое. `c` это другой объект, который мы неявно приводим к строке. Поэтому `a["object Object"] = 456`.

// Затем, когда мы выводим `a[b]`, мы имеем в виду `a["object Object"]`. Мы только что установили туда значение `456`, поэтому в результате получаем `456`.

//24 
{
  const obj = { a: "one", b: "two", a: "three" };
  console.log(obj);
}
//25

{
  let person = { name: "Lydia" };
  const members = [person];
  person = null;

  console.log(members);
}
//26
{
  function addToList(item, list) {
    return list.push(item);
  }
  
  const result = addToList("apple", ["banana"]);
  console.log(result);
}
//27
//28
{
  const numbers = [1, 2, 3];
  numbers[10] = 11;
  console.log(numbers);
}
//29
{
  console.log([1, 2, 3].map(num => {
    if (typeof num === "number") return;
    return num * 2;
  }));
}
//30
{
  function sayHi(name) {
    return `Hi there, ${name}`
  }
  
  console.log(sayHi())
}
//31
{
  function checkAge(age) {
    if (age < 18) {
      const message = "Sorry, you're too young."
    } else {
      const message = "Yay! You're old enough!"
    }
  
    return message
  }
  
  console.log(checkAge(21))
}
//32
{
  console.log(`${(x => x)('I love')} to program`)
}