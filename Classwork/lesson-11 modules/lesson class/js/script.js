// import './modules/data.js'  
import {getTime, getDate} from './modules/data.js'
import x, { getTime as getYearTime} from './modules/avgAge.js';
import { userData } from './modules/userData.js';
import * as varObj from './modules/variable.js';


console.log("На часах " + getTime());
console.log("На календаре " + getDate());
console.log("На календаре год " + getYearTime());

console.log(x([{age: 25}, {age: 35}]));
console.log(x(userData));

console.log(varObj)

// console.log(1)