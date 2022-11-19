const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

fibonacci.forEach(function(item) {
    console.log(`${item}`);
    });

console.log('---------')

fibonacci.forEach(item  => console.log(item));
console.log('##########')
//task 1 NORMAL level




const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

let remapUsers1 = users.map(function(item, index) {
    return "member " + (index + 1) + ": "+ item;
  })

let remapUsers2 = users.map((item, index) => "member " + (index + 1) + ": "+ item);

console.log(remapUsers1);
console.log('---------')
console.log(remapUsers2);
console.log('##########')
//task 2 NORMAL level
