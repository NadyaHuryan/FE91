"use strict"


// Массивы
// методы
// forEach(), find(), filter(), findIndex(), includes(), map(), reverse(),  
// sort(),  fill(), flat(), flatMap(), reduce(), some(), every(), 
// pop(), push(), shift(), unshift(), indexOf(), lastIndexOf(), concat()

// ************Перебор*********** 
// forEach()
// значения в массиве можно менять, но только напрямую
let array = ["Rachel", "Phoebe", "Monica"];
array.forEach((item, index, array) => {
  // array[index] += "2"
    console.log(`${item} имеет позицию ${index} в ${array}`);
});
console.log(array)

for (let i=0; i<array.length;i++) {
  console.log(`${array[i]} имеет позицию ${i} в ${array}`);
}

// ****************Поиск***************
// .find() возвращает только первый элемент, подходящий под условие 
// .filter() все элементы
array = [1, 2, 3, 4, 5];
let x = array.find(item => item > 3);
console.log(x)
array.find(function(item) {
  return item > 3
})
let arrayFilter = array.filter(item => item > 3); //4, 5
console.log(arrayFilter);
console.log(array)// что будет с массивом array?
array.filter(item => item > 3);
console.log(array); // а так?

// .findIndex() возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.
array = [1, 2, 3, 4, 5];
console.log(array.findIndex(item => item > 3 ));
//разница с indexOf
let array2 = [1, 2, 3, 4, 5, "test"];
array2["car"] = "audi"
console.log(array2)
console.log(array2.indexOf("test"));


// .includes() возвращает значение true, если массив содержит определенный элемент, и значение false — если нет.
const myAwesomeArray = [1, 2, 3, 4, 5]
console.log(myAwesomeArray.includes(3));
console.log(myAwesomeArray.includes(8));


// ***************Преобразование**************
// .map() создает новый массив
let arrayNew = array.map(item => item*10);
array.map(function(item) {
  return item*10;
})
console.log(arrayNew);
console.log(array); // что будет?


// .reverse() меняет порядок следования элементов в массиве на обратный
let arr4 = [1, 2, 3, 4];
let arrReverse = arr4.reverse();
console.log(arr4); // что будет ?
console.log(arrReverse); // что будет?

//.sort() - сортировка массива
// особенности
let months = ['March', 'Jan', 'Feb', 'Dec'];
let arraySort = months.sort(); // Dec, Feb, Jan, March
console.log(months);
arraySort = [1, 30, 4, 21, 100000]; //1, 4, 21, 30, 100000
console.log(arraySort.sort());  // что выведет?

console.log(arraySort.sort((a, b) => a - b)) //по возрастанию
console.log(arraySort.sort((a, b) => b - a)) // по убыванию

// .fill() - заполняет все элементы массива от начального до конечного индексов одним значением
let arrFill = [1, 2, 3, 4];
// заполнит значением 0 от позиции 2 до позиции 4
arrFill.fill(0, 2, 4)
console.log(arrFill);

// .flat() - принимает в качестве аргумента массив массивов и сглаживает вложенные массивы в массив верхнего уровня. Этот метод работает только для одного уровня
// Текущий массив не меняет

let arrFlat1 = [1, 2, [3, 4]];
let arrFlatNew1 = arrFlat1.flat();
console.log(arrFlatNew1)
console.log(arrFlat1)
// [1, 2, 3, 4]

var arrFlat2 = [1, 2, [3, 4, [5, 6]]];
console.log(arrFlat2.flat());
console.log(arrFlat2.flat(Infinity)); // К СОБЕСУ

// .flatMap() применяет функцию к каждому элементу, а затем преобразует полученный результат в плоскую структуру и помещает в новый массив

let arr8 = [1, 2, [3], [4]];
let arrFlatMap = arr8.flatMap(x => [x * 2]);
console.log(arrFlatMap)


// .reduce() вычисляет одно значение на основе всего массива
let array3 = [1, 2, 3, 4, 5];
console.log(array3.reduce((itemLeft, itemRight) => itemLeft+itemRight))  //сумма всех элементов массива
console.log([0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, index, array) {
    return accumulator + currentValue;
}, 10));

// .some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции. возвращает true/false
console.log([2, 5, 8, 1, 41].some(elem => elem > 10));
// .every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции. возвращает true/false
console.log([2, 5, 8, 1, 4].every(elem => elem < 10));

//.concat() объединяет массивы или строки в единый массив или строку
//.split(), .join()


// spread и rest
// оператор ... интерпретируется по-разному, в зависимости от контекста применения. 
// Spread используется для разделения коллекций на отдельные элементы, а rest, наоборот, для соединения отдельных значений в массив

let sum = (x, y, z) => { //1, 2, 3
    return x + y + z;
}
  
array = [1, 5, 3];

console.log(sum(...array));
// array3 = [...arrayNew, ...array];




// function log() {
//   console.log(arguments)
// }
let log = (...arg) => {
  console.log(arg);
};
log(1, 2, 3, 4, 5);

// Дан массив с числами. Оставьте в нем только четные числа.
let arr5 = [1, 5, 8, 9];
let arrFilter = arr5.filter(item => item % 2 === 0 );
console.log(arrFilter)

// Дан массив с числами. Найти сумму только четные числа.
let arr6 = [1, 5, 8, 9, 10, 12];
let arrSum = arr6.reduce(function(itemLeft, itemRight) {
  if (itemRight % 2 === 0) {
    return itemLeft + itemRight
  } else {
    return itemLeft;
  }
}, 0)
console.log(arrSum)

// Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел. 
let arr7 = [1, 5, 8, 9, 10, 12];
let arr7New = arr7.map(item => item**2);

// Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0. 
let arr9 = [1, 2, 3, 0, 4, 5, 6];
let stop = -1;
let arr9New = arr9.reduce(function(itemLeft, itemRight, index) {

  if (itemRight === 0) {
    stop = index;
  } 
  if (stop <= index && stop != -1) {
    return itemLeft;
  } else {
    return itemLeft+itemRight;
  }
}, 0);
console.log(arr9New)