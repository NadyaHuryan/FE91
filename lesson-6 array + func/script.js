//1 Task
//function declaretion
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
fibonacci.forEach(function(elem){
    console.log(elem);
    return elem;
});
//Arrow
fibonacci.forEach(elem => console.log(elem));

//2 Task

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
let arr = users.map(function(elem, id){
    elem = `Member ${id + 1} : ${elem}`;
    return elem
})
console.log(arr)

//3 Task

const numbers = [7, -4, 32, -90, 54, 32, -21]
let numbersFilter = numbers.filter(function(elem){
    return (elem >= 0);
})
console.log(numbersFilter);

//4 Task

const fibonaccii = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
let arrReduce = fibonaccii.reduce(function(sum, elem){
    return sum + elem;
})
console.log(arrReduce);

//5 Task

const numberss = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
let arrFind = numberss.find(function(elem){
    return (elem % 2 === 0)   
})
console.log (arrFind)

//Advance level
//1 Task

function Student(name, rate, salary){
    this.name = name;
    this.rate = rate;
    this.salary = salary;
    this.getCredit = function(){
        if ((this.rate === 'A') || (this.rate === 'a')){
            return salary * 12;
        } else if((this.rate === 'B') || (this.rate === 'b')){
            return salary * 9;
        } else if((this.rate === 'C') || (this.rate === 'c')){
            return salary * 6;
        } else if((this.rate === 'D') || (this.rate === 'd')){
            return 0;
        }
    }
}
let student0 = new Student('Ivan', 'B', 600);
let student1 = new Student('Aliona', 'c', 200);
let student2 = new Student('Vlad', 'B', 400);
let student3 = new Student('Sergei', 'A', 1000);
let student4 = new Student('Roman', 'B', 700);
const students = [student0, student1, student2, student3, student4];
let arrMap = students.reduce(function(itemLeft, elem){
    return itemLeft + elem.getCredit();
}, 0)
console.log(arrMap)

//2 Task
'a', 'e', 'i', 'o', 'u'
const vowels = {
    a: 'a',
    e: 'e',
    i: 'i',
    o: 'i',
    u: 'u'
};
function censor(str){
    let arr = str.split('');
    let arrMap = arr.map(function(elem){
        if ((elem in vowels) || (elem.toLowerCase() in vowels)){
            return elem = '';
        } else return elem;
    });
    let str1 = arrMap.join('');
    return str1;
}
console.log(censor('This website is for losers LOL!'));

//3 Task

function accum(str){
    let arr = str.split('')
    let arrMap = arr.map(function(elem, index){
        let element = elem.split('');
        element[0] = elem.toUpperCase();
        element.length = index + 1;
        element.fill(elem.toLowerCase(), 1);
        return element.join('')
    })
    return arrMap.join('-')
}
console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));

//4 Task

function highAndLow(str){
    let arr = str.split(' ');
    arr.sort(function(a, b) {return a - b;});
    let arrSort = [];
    arrSort.push(arr[arr.length - 1], arr[0]);
    return arrSort.join(' ');
}
console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));

//5 Task

function isIsogram(str){
    let str1 = str.toLowerCase()
    let arr = str1.split('');
    let arrReduce = arr.reduce(function(itemLeft, itemRight, index, arr){
        let arr1 = arr.slice(index + 1);
        let arrF = arr1.find(function(elem){
            return elem === itemRight;
        })
        if (arrF === undefined){return true}
        else {
            arr.length = index;
            return false
        }
    }, 0)
    if (arrReduce) return true
    else return false
}
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));

//6 Task 

function codes(str){
    let arr = str.split('');
    let total1 = arr.reduce(function(itemLeft, elem){
        return itemLeft + elem.charCodeAt(0)
    }, '');
    let arr1 = total1.split('');
    let total2 = arr1.reduce(function(itemLeft, elem){
        if (elem == 7){
            elem = 1;
        }
        return itemLeft + elem;
    }, '')
    return total1 - total2;
}
console.log(codes('ABC'));

//7 Task 

function isUnique(str){
    let str1 = str.toLowerCase()
    let arr = str1.split('');
    let arrReduce = arr.reduce(function(itemLeft, itemRight, index, arr){
        let arr1 = arr.slice(index + 1);
        let arr2 = arr.slice(0, index)
        arrR = arr2.concat(arr1)
        let arrF = arrR.find(function(elem){
            return elem === itemRight;
        })
        if (arrF === undefined){
            itemLeft.push('(');
        }
        else {
            itemLeft.push(')');
        }
        return itemLeft;
    }, [])
    return arrReduce.join('');
}
console.log(isUnique("din"));
console.log(isUnique("recede"));
console.log(isUnique("Success"));
console.log(isUnique("(( @"));