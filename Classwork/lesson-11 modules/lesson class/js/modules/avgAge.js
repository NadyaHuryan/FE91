
/*
[{age: 25}, {age: 35}]
 */
const date = new Date();
export default function avgAge(users) {
    let sum = 0;
    users.map( item => {
        sum += item.age
    });

    return sum / users.length;
}

export let getTime = function() {
    return `${date.getFullYear()}`
}