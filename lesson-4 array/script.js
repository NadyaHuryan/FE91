'use strict';

const colors = ['red', 'green', 'blue'];
console.log(colors.length);
//task 1  NORMAL level 


const animals = ['monkey', 'dog', 'cat'];
console.log(colors[colors.length-1]);   //old version
console.log(colors.at(-1));             // new version
//task 2  NORMAL level 

const numb = [5, 43, 63, 23, 90];

//version 1
for (let i = 0; i < numb.length; i++) {
    console.log(numb[i]);
  }

//version 2
for (let j of numb) {
    console.log( j );
  }  
  //task 3  NORMAL level 