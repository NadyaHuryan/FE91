export let updateStorage = function(toDoes, checkedToDoes) {
    localStorage.setItem("toDoes", JSON.stringify(toDoes));
    localStorage.setItem("checkedToDoes", JSON.stringify(checkedToDoes));
}