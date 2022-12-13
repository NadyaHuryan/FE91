
export let getLocalData = function(){
    return  JSON.parse(localStorage.getItem("todo"));

}
export let setLocalData = function(arr){
    localStorage.setItem("todo",JSON.stringify(arr));
};

/*
[
    {
        "id": 1,
        "task": "первый",
        "status": false,
        "date": "13 - 11 - 2022 "
    },
    {
        "id": 2,
        "task": "второй",
        "status": false,
        "date": "13 - 11 - 2022 "
    },
    {
        "id": 3,
        "task": "третий",
        "status": false,
        "date": "13 - 11 - 2022 "
    }
]
*/
