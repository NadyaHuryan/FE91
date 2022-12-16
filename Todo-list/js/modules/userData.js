
export const getLocalData = function(){
    return  JSON.parse(localStorage.getItem("todo"));

}
export const setLocalData = function(arr){
    localStorage.setItem("todo",JSON.stringify(arr));
};


export const removeLocalData = function(){
    localStorage.removeItem("todo");
}

export const valideLocalData = function(){
    return (localStorage.getItem("todo") === null ||localStorage.getItem("todo") === undefined);
}