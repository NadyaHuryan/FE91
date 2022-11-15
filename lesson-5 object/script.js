"use script";

// #### Task 5 🖥 ####

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
};
let sumCount = 0;
let count = 0;
for (const item in salaries) {
    sumCount += salaries[item];
    count++;
}

console.log(sumCount, count);

let avg = sumCount/count;

console.log(avg);
console.log(salaries);

// #### Task 6 🖥 ####

for (let i = 1; i <= 10; i++);
for (let j = 1; j <= 10; j++);
console.log(`${i} * ${j} = ${i*j}`);