function isPolindrom2(str){
    let arrStr =  str.split("");
    let halfLenght = Math.ceil(((arrStr.length) / 2));
    let result = true;
    for (let i = 0; i < halfLenght; i++){
      (arrStr[i] === arrStr[arrStr.length-[i+1]]) ? result = result : result = false;
      /*
       попарное сровнение с двух концов, 
       если пары не совподают -> result перезаписываеться, 
       если совподают не меняеться =))
       */
    console.log("step " + result)
    }
  
    //
    return result;

  } 
  
  console.log(isPolindrom2("tenet"));
  console.log(isPolindrom2("mama"));
  console.log(isPolindrom2("redder"));

