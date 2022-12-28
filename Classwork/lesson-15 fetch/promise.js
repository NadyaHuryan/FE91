

const storageUser = [
    {name: "Alex"},
    {name: "Bob"},
    {name: "Mike"},
    {name: "Ben"}
]

const storageContacts = [
    {
        phone: "11111", 
        email: "alex@gmail.com"
    },
    {
        phone: "22222", 
        email: "bob@gmail.com"
    },
    {
        phone: "33333", 
        email: "mike@gmail.com"
    },
    {
        phone: "4444", 
        email: "ben@gmail.com"
    }
]

// функция инициализации данных

const getUserData = function() {
    return new Promise(function(resolve, reject) {
       
        setTimeout(function(){
            resolve(storageUser)
            console.log("Storage user ready ", storageUser);
        }, 3000);
    })
    
}
const getContactsData = function() {
    return new Promise(function(resolve, reject) {       
        setTimeout(function(){            
            // resolve(storageContacts)
            reject("Что-то пошло не так")
            console.log("Storage contacts ready ", storageContacts);
        }, 3000);
        
    })
    
}
// объединение данных
const preparingData = function(usersData, contactsData) {
    let data = []
    usersData.forEach( (item, index) => {
        // data.push(Object.assign(item, contactsData[index])) // показать что произойдет с user
        data.push(Object.assign({}, item, contactsData[index]))
    });
    console.log("Data is prepared", data);
    return data
}



const getData = function()
{
    // getUserData().then(function(userData){
    //     getContactsData().then(function(userContacts){
    //         console.log("Request data...");
    //         preparingData(userData, userContacts )
    //         console.log("All data received");
    //     })
    // });


    // способ 2
    Promise.all([ getUserData(), getContactsData()]).then(function(pArr){
        console.log(pArr)
        console.log("Request data...");
        preparingData(pArr[0], pArr[1] )
        console.log("All data received");
    })

    // catch
    Promise.all([ getUserData(), getContactsData()]).then(function(pArr){
        console.log(pArr)
        console.log("Request data...");
        preparingData(pArr[0], pArr[1] )
        console.log("All data received");
    }).catch(function(err){
        console.log("Ошибка промиса:"+ err)
    })
    
}();


