
export let getLocalData = function(main){
    main = JSON.parse(localStorage.getItem("todo"));

}
export let setLocalData = function(main){
    localStorage.setItem("todo",JSON.stringify(main));
};

