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