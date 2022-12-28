



// const f2 = function() {
//     console.log("f2")
// }
// f2()
// f1()
// в каком порядке будет в консоли?


// const f1 = function() {
    
//     setTimeout(()=>{
//         console.log("f1")
//         f1()
//     }, 1000)
// }
// f1()

// setInterval(()=> {
//     f1()
// }, 1000)


// setTimeout(()=>{
//     console.log("ST1")
// }, 1000)

// setTimeout(()=>{
//     console.log("ST2")
// }, 1000);

// console.log("f3");

// let a, b, c

// const f1 = function() {
//     setTimeout(function(){
//         console.log("f1");
//         a = 1;
//     }, 5000)
// }
// const f2 = function() {
//     setTimeout(function(){
//         console.log("f2");
//         b = 2;
//     }, 1000)
// }
// const f3 = function() {
//     setTimeout(function(){
//         console.log("f3")
//         c = a + b;
//         console.log(c)
//     }, 2000)
// }
// f1();
// f2();
// f3()




const f1P = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            console.log("f1P");
            a = 1;
            resolve(a)
        }, 1000)
    });
    
}
const f2P = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            console.log("f2P");
            b = 2;
            // reject("Ошибка кода")
            resolve(b)
            
        }, 500)
    });
}
const f3P = function(a, b) {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            console.log("f3P")
            c = a + b;
            console.log("C" + c)
            resolve()
        }, 2000)
    });
}

f1P().then((a)=> {
    console.log("A " + a)
    f2P().then((b)=>{
        console.log("B " + b)
        f3P(a, b)
    })
})


// new Promise.then(()=> {
//     new Promise.then(()=>{

//     })
// })



// Promise.all([f1(), f2(), f3()]).then(function(){
//     console.log("all functions completed")
// })