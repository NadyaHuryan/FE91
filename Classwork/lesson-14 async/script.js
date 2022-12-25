// console.log(1);

// let f1 = function() {console.log("Set timeout 1000")}
// let f0 = function() { console.log("Set timeout 0")}
// setTimeout(f1, 1000);

// setTimeout(f0);

// console.log(2)
// console.log("final");

let btnStart = document.querySelector("#btnStart"),
    btnPause = document.querySelector("#btnPause"),
    btnStop = document.querySelector("#btnStop");

let timer = document.querySelector("#timer"),
    countSec = 0, countMin = 0,
    startTimer, flag = true;


btnStart.addEventListener("click", function(){
    if (flag) {
        startTimer = setInterval(()=>{
            countSec++;
            if (countSec > 59) {
                countSec = 0;
                countMin++
            }
            
            timer.innerHTML = `${(countMin < 10) ? `0${countMin}`: `${countMin}`} 
            : ${(countSec < 10) ? `0${countSec}`: `${countSec}`}`
        }, 100);
        flag = false;
        
    }
   
});
btnPause.addEventListener("click", function(){
    clearInterval(startTimer);
    flag = true;
})

btnStop.addEventListener("click", function(){
    clearInterval(startTimer);
    timer.innerHTML = `00 : 00`
    countSec = 0;
    countMin = 0;
    flag = true;

})