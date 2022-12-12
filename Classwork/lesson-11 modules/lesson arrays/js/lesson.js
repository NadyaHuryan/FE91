// Деструктуризация массива

{
    const names = ['Pam', 'Jim', 'Toby', 'Jen'];
    const [name1, , name2 ] = names;
    console.log(name1);
    console.log(name2);
    // console.log(name3);
}

// "Деструктурирующее присваивание" не уничтожают массив. Оно вообще ничего не делает с правой частью присваивания, его задача - только скопировать нужные значения в переменные

// если нам элемент не нужен - можно пропустить его запятой

// вложенные массивы

{
    const names = ['Pam', 'Jim', 'Toby', ["Michael", "Angela"]];
    const [name1, name2, name3, [nameName1, nameName2]] = names;
    console.log(nameName1);
    console.log(nameName2);
    console.log(name1);
}

//значение по умолчанию
// Если в массиве меньше значение, чем в присваивании - ошибки не будет. Будет undefined

{
    const names = ['Pam', 'Jim'];
    const [name1, name2, name3] = names;
    console.log(name1);
    console.log(name2);
    console.log(name3);
}

// Если надо использовать значение по умолчанию, то можно использовать =

{
    const names = ['Pam', 'Jim'];
    const [name1, name2, name3 = "Angela"] = names;
    console.log(name1);
    console.log(name2);
    console.log(name3);
}

// задача
{
    const [a, b] = [1, 2];
    console.log(a);
    console.log(b);
} 

// Деструктуризация объектов
// чаще используются
{
    const user = {
        firstName: 'Alex',
        lastName: "Smith",
        age: 32,
        address: {
            home: 20,
            room: 3
        }
 }
    // console.log(user.firstName, user.address.home);
    const {age, firstName} = user;
    console.log(firstName, age)
}   
//можем ли мы использовать другие имена переменных (не такие как название свойств)
// НЕТ! Но можем вызывать в разном порядке и пропускать
// параметры по умолчанию будут работать
// если хотим переименовать можно использовать :
{
    const user = {
    firstName: 'Alex',
    lastName: "Smith",
    age: 32,
    address: {
        home: 20,
        room: 3
    }
 }

    const {firstName, lastName: lastNewName, age, lang = "ru"} = user;
    console.log(firstName, lastNewName, age, lang);
    console.log(user)
}   
// Вложенная диструктуризация
{
    const user = {
        firstName: 'Alex',
        lastName: "Smith",
        age: 32,
        address: {
            home: 20,
            room: {
                window: 4,
                door: 5
            }
            }
        }
    
    const {firstName, address: {home, room: {window}}} = user;
    console.log(firstName)
    console.log(home)
    // console.log(room)
    // console.log(address)
}

// смешанная диструктуризация на слайде

// деструктуризация на практике

{
    function log({id, name, age}) {
        console.log(id)
        console.log(name)
        console.log(age)
    }
    const user = {
        id: '12234',
        name: "Smith",
        age: 32
    }
    log(user)
}

{
    let userData = [
        {   id: 1,
            name: "Pete",
            age:25
        }, 
        {   id: 2,
            name: "Boris",
            age: 30
        }, 
        {   id: 3,
            name: "Simon",
            age: 19
        }
    ]
    //средний возраст всех юзеров

    let sumAge = 0;
    // userData.map(item => {
    //     sumAge += item.age;
    // })
    userData.map( ({age}) => {
        sumAge += age;
    })
    console.log(sumAge / userData.length);

}