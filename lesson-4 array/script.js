'use strict';

const colors = ['red', 'green', 'blue'];
console.log(colors.length);
//task 1  NORMAL level 


const animals = ['monkey', 'dog', 'cat'];
console.log(colors[colors.length-1]);   //old version
console.log(colors.at(-1));             // new version
//task 2  NORMAL level 



const numb1 = [5, 43, 63, 23, 90];
numb1.length = 0;
console.log(numb1);
//version 1


const numb2 = [5, 43, 63, 23, 90];
numb2.splice(0, numb2.length);
console.log(numb2);
//version 2

const numb3 = [5, 43, 63, 23, 90];
for (let i = numb3.length ; i > 0; i--) {
  numb3.pop();
};
console.log(numb3);
//version 3
//task 3  NORMAL level 


const students1 = ['Polina', 'Dasha', 'Masha'];

students1.pop();
students1.push('Borya');
students1.shift();
students1.unshift('Andrey');

console.log(students1);
//version 1

const students2 = ['Polina', 'Dasha', 'Masha'];
students2.splice(students2.length-1 , 1, 'Borya');
students2.splice(0, 1, 'Andrey');
console.log(students2);
//version 2 
//task 4  NORMAL level 


const cats = ['Gachito', 'Tom', 'Batman']

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}


for (let cat of cats) {
  console.log(cat);
}
//task 5 NORMAL level 