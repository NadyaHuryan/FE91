const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];


function showNumber1 (arr){
    arr.forEach(function(item) {
        console.log(`${item}`);
        });
};
function showNumber2 (arr){
    arr.forEach(item  => console.log(`${item}`));
};
// полустрелочная функция, не понимаю как сделать стрелочную облочку для forEach

showNumber1(fibonacci);
console.log('---------')
showNumber2(fibonacci);

//task 1 NORMAL level


