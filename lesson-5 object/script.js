const something = {
    name: 'the bug',
    status: 42,
} 

delete something.name;
delete something.status;
// task 1 NORMAL level



const men = {
    name : "Valera",
    age: 19,
}

console.log ("name" in men);
// task 2 NORMAL level



const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for (key in student){
    console.log(key);
}

for (key in student){
    console.log(student[key]);
}
// task 3 NORMAL level
