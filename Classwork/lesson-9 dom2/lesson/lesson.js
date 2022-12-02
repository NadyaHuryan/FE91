
let clickme = document.querySelector(".clickme button");

//способ 2
// clickme.onclick = function() {
//     console.log("Hello world")
//     console.log(this);
// }

clickme.addEventListener("click", function() {
    console.log("Способ 3")
});

let block = document.querySelector(".block");


// block.addEventListener("mouseover", function() {
//     this.classList.toggle("active");
// });
// block.addEventListener("mouseout", function() {
//     this.classList.toggle("active");
// });
block.addEventListener("mouseover", function() {
    this.style.backgroundColor = "red";
    console.log("Мышь внутри")
});

block.addEventListener("mouseout", function() {
    this.style.backgroundColor = "yellow";
    console.log("Мышь снаружи")
});

block.addEventListener("mousemove", function() {
    console.log("Мышь двигается");
});
block.addEventListener("mousedown", function() {
    console.log("Мышь Нажата");
});
block.addEventListener("mouseup", function() {
    console.log("Мышь Отжата");
});

let changeBg = function() {
    let red = Math.floor(Math.random()*256),
        green = Math.floor(Math.random()*256),
        blue = Math.floor(Math.random()*256);

    this.style.background = `rgb(${red}, ${green}, ${blue})`;
    // window.location.href = "http://google.com"
}

let bgchange = document.querySelector(".bgchange button");

bgchange.addEventListener("click", changeBg);

clickme.addEventListener("click", changeBg);


let links = document.querySelectorAll(".links a");

links.forEach( function(item, index) {
    item.addEventListener("click", function(event){
        console.log(this);
        event.preventDefault();
        event.target.href = "http://google.com"
    })
});