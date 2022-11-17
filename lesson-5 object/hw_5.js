
/* <p align='right'>< TeachMeSkills /></p> */
/* <h1 align='center'>Objects</h1> */

// ## Complete exercise

// ### NORMAL level

// #### Task 1 💻

// Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.
console.log("Task 1");
const pets = {
  cat: true,
  dog: true,
};

console.log(pets);

delete pets.cat;
console.log(pets);

// #### Task 2 🖥

// Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true**
console.log("Task 2");

// const flowers = {
//    name: Alena,

// }

const flowers = {
  lily: "white",
  violet: "purple",
};
console.log("lily" in flowers);

// #### Task 3 🖥

// Дан обьект:

// ```javascript
//     const student = {
//         name: 'John',
//         age: 19,
//         isHappy: true
//     }
// ```

// C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта.
console.log("Task 3");

const student = {
  name: "John",
  age: 19,
  isHappy: true,
};

for (let key in student) {
  console.log(key);
}

for (let key in student) {
  console.log(student[key]);
}

// #### Task 4 🖥

// Дан обьект:

// ```javascript
// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };
// ```

// Вывести в консоль слово красный и синий
console.log("Task 4");
const colors = {
  "ru pum pu ru rum": {
    red: "красный",
    green: "зеленый",
    blue: "синий",
  },
};

console.log(colors["ru pum pu ru rum"].red);
console.log(colors["ru pum pu ru rum"]["blue"]);

// #### Task 5 🖥

// Дан обьект:

// ```javascript
//     let salaries = {
//         andrey: 500,
//         sveta: 413,
//         anton: 987,
//         andrey: 664,
//         alexandra: 199
//     }
// ```

// Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную
console.log("Task 5");

let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  alex: 664,
  alexandra: 199,
};

let sumCount = 0;
let count = 0; 
let averageSalaries = 0;

for (const item in salaries) {
  sumCount += +salaries[item];
  count++;
}

console.log(averageSalaries = sumCount / count)

// #### Task 6 🖥

// Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект.
// Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение **Добро пожалоВать**.
console.log("Task 6");


let userCheck = function() {
    let userLoginCheck = prompt('Подтвердите логин'),
    userPassCheck = prompt('Подтвердите пароль');
    if (userLoginCheck === this.login && userPassCheck === this.pass) {
        console.log('Добро пожаловать');
    } else {
        console.log('Неверно');
    }
}

let userInfo = function() {
    let userLogin = prompt('Введите логин'),
    userPass = prompt('Введите пароль'),
    userInfoObj = {
        login: userLogin,
        pass: userPass,
        check: userCheck
    };
    return userInfoObj;
}

let user1 = userInfo();
 
user1.check();


// ### ADVANCED level

// #### Task 1 👨‍🏫

// Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами. Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль.

// #### Task 2 🖥

// Даны два одинаковых обьекта. Сравните их так чтобы они были равны

// ```javascript
//     let student1 = {
//         name: 'Polina',
//         age: 27,
//     }

//     let student2 = {
//         name: 'Polina',
//         age: 27,
//     }
// ```

// #### Task 3 🖥

// У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим **ОШИБКУ**.
// Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.

// ```javascript
// const animals = {
//    cat: {
//       name: 'Енчик',
//       age: 3,
//    },
//    dog: {
//       name: 'Орео',
//       age: 2,
//    }
// }
// ```
=======
/* <p align='right'>< TeachMeSkills /></p>
<h1 align='center'>Objects</h1>

## Complete exercise

### NORMAL level

#### Task 1 💻

Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. 

#### Task 2 🖥

Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true**

#### Task 3 🖥

Дан обьект:

```javascript
    const student = {
        name: 'John',
        age: 19,
        isHappy: true
    }
```

C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта.



#### Task 4 🖥

Дан обьект:

```javascript
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
```

Вывести в консоль слово красный и синий

#### Task 5 🖥

Дан обьект:

```javascript
    let salaries = {
        andrey: 500,
        sveta: 413,
        anton: 987,
        andrey: 664,
        alexandra: 199
    }
```
Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

#### Task 6 🖥

Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект. 
Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение **Добро пожалоВать**. 


### ADVANCED level

#### Task 1 👨‍🏫

Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами. Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль. 

#### Task 2 🖥

Даны два одинаковых обьекта. Сравните их так чтобы они были равны

```javascript
    let student1 = {
        name: 'Polina',
        age: 27,
    }

    let student2 = {
        name: 'Polina',
        age: 27,
    }
```

#### Task 3 🖥

У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим **ОШИБКУ**. 
Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.

```javascript
const animals = {
   cat: {
      name: 'Енчик',
      age: 3,
   },
   dog: {
      name: 'Орео',
      age: 2,
   }
}
``` */

