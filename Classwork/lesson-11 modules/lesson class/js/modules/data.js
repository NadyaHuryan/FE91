

const date = new Date();

export let getTime = function() {
    return `${date.getHours()}: ${date.getMinutes()}`
}

export let getDate = function() {
    return `${date.getDay()}- ${date.getMonth()}`
}

// export {getDate, getTime}