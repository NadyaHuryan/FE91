/*
1. Дан селект. Дан инпут. Дана кнопка. Сделайте так, чтобы в инпут можно было ввести число, нажать на кнопку и в селекте становился выбранным пункт с этим номером
2. Дан селект. Дан инпут. По изменению селекта выведите текст выбранного пункта в инпут.
3. Дан селект со списком стран. Сделайте так, чтобы при выборе страны рядом появлялся еще и селект со списком городов из этой страны. (сделать через объекты)
4. Даны 3 селекта: с днем, с месяцем и годом. Сделайте так, чтобы некорректную дату нельзя было выбрать.
5. В инпут через запятую вводятся страны. По нажатию на кнопку сделайте так, чтобы эти страны записались в ul под инпутом (каждая страна отдельный li). 
6. Дана таблица с числами. По нажатию на кнопку найдите ячейку, в которой хранится максимальное число, и сделайте ее фон красным.
7. Реализуйте калькулятор валют. Есть два селекта - селект с исходной валюты, селект с той валютой, в которую мы хотим перевести деньги, инпут, в который вводится сумма для обмена. Курсы валют храните в массиве. Сделайте так, чтобы в селектах нельзя было выбрать две одинаковых валюты.
8. Реализуйте генератор таблиц, ширина и высота таблиц задается в двух инпутах (например, таблица 5 на 10 ячеек). 
9. Дан список и кнопка. По нажатию на кнопку посортируйте пункты списка по возрастанию
10. Дан абзац. Дан массив цветов ['red', 'green', 'blue']. Сделайте так, чтобы каждые 3 секунды абзац менял свой цвет на определенное значение их массива: сначала 'red', потом 'green' и так далее. Как только цвета в массиве закончатся - все начнется сначала. Количество цветов в массиве может быть любым.
*/


let task1 = document.getElementById("task1");
let inputNumber = document.querySelector("[name='inputNumber']");
let selectNumber = document.querySelectorAll("[name='selectNumber'] option");

const changeSelectNumber = function(n){
    for (let i = 0; i < selectNumber.length; i++) {
        if (i == n) {
            selectNumber[i].setAttribute("selected", "selected")
        } else {
            selectNumber[i].removeAttribute("selected")
        }
    }
    
}
task1.addEventListener("click", function(){
    let numb = inputNumber.value;
    changeSelectNumber(numb);
})




const countryArr = [
        {
            country: "BY",
            countryFull: "Беларусь",
            city: ["Минск", "Гродно"]
        },
        {
            country: "SP",
            countryFull: "Испания",
            city: ["Барселона", "Майорка"]
        }
    ]



let countrySelect = document.getElementById("country");
let citySelect = document.getElementById("city");

const setCountry = function() {
    countrySelect.innerHTML = "";
    let optionDefault = document.createElement("option");
        optionDefault.value = "0";
        optionDefault.innerHTML = "Выберите страну";
        optionDefault.setAttribute("disabled","disabled");
        optionDefault.setAttribute("selected","selected");
    countrySelect.appendChild(optionDefault)
    countryArr.forEach( item => {
        let option = document.createElement("option");
        option.value = item.country;
        option.innerHTML = item.countryFull;
        countrySelect.appendChild(option)
    })
}

const setCity = function(val) {
    citySelect.innerHTML= "";
    let [checkedCountry] = countryArr.filter( item => item.country == val);
    console.log(checkedCountry);
    checkedCountry.city.forEach( item => {
        let option = document.createElement("option");
        option.value = item;
        option.innerHTML = item;
        citySelect.appendChild(option)
    })

}

window.addEventListener("load", function(){
    setCountry();
    countrySelect.addEventListener("change", function(){
        console.log(this.options);
        console.log(this.selectedIndex)
        let val = this.options[this.selectedIndex].value;
        setCity(val)
    });
});
