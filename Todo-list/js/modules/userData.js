
export let getLocalData = function(){
    return  JSON.parse(localStorage.getItem("todo"));

}
export let setLocalData = function(arr){
    localStorage.setItem("todo",JSON.stringify(arr));
};


export let removeLocalData = function(){
    localStorage.removeItem("todo");
}

