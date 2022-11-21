// Объекты
// Task 1

// Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. 

const task1 = {
   color: 'red',
   width: 30
}

console.log(task1)

delete task1.color
delete task1.width

console.log(task1)

// Task 2

// Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ 
// и если есть вывести в консоль **true**

const task2 = {
   color: 'red',
   width: 30
}

if ('color' in task2) {
   console.log('true')
} else {
   console.log('false')
}

if ('height' in task2) {
   console.log('true')
} else {
   console.log('false')
}

//  Task 3

// Дан обьект.
// C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта.

const student = {
   name: 'John',
   age: 19,
   isHappy: true
}

for (const key in student) {
   console.log(key)
   console.log(student[key])
}

// Task 4

// Дан обьект.
// Вывести в консоль слово красный и синий

const colors = {
   'ru pum pu ru rum': {
      red: 'красный',
      green: 'зеленый',
      blue: 'синий'
   },
};

console.log(colors['ru pum pu ru rum'].red + ' ' + colors['ru pum pu ru rum'].blue)

// Task 5 

// Дан обьект.
// Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

let salaries = {
   andrey: 500,
   sveta: 413,
   anton: 987,
   andrey: 664,
   alexandra: 199
}

function salariesSumm(salaries) {
   let n = Object.keys(salaries).length
   let summ = 0
   for (let key in salaries) {
      summ += salaries[key]
   }
   return summ / n
}

console.log(salariesSumm(salaries))

// Task 6

// Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект. 
// Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение **Добро пожалоВать**. 

let data = {}

let userName = prompt('Введите логин для регистрации:')
let password = prompt('Введите пароль для регистрации:')

data.name = userName
data.password = password

console.log(data)

let loginUserName = prompt('Введите логин для авторизации')
let loginPassword = prompt('Введите пароль для авторизации')

if (loginPassword == data.password && loginUserName == data.name) {
   alert('Добро пожаловать')
} else {
   alert('Попробуйте еще раз')
}


// ADVANCED level

// Task 2 

// Даны два одинаковых обьекта. Сравните их так чтобы они были равны

let student1 = {
   name: 'Polina',
   age: 27,
}

let student2 = {
   name: 'Polina',
   age: 27,
}

console.log(JSON.stringify(student1) === JSON.stringify(student2))

// Task 3 

// У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. Но произошла ошибка и в этом обьекте 
// нету птицы. Если попробуем узнать имя мы получим **ОШИБКУ**. 
// Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.

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

console.log(animals.bird?.name) 