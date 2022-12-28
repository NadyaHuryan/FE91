
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
    console.log("Storage user ready ", storageUser);
    return storageUser
}
const getContactsData = function() {
    console.log("Storage contacts ready ", storageContacts);
    return storageContacts
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
    console.log("Request data...")
    // let userData = getUserData(),
    // userContacts = getContactsData()
    let userData,
        userContacts;

        //userData = getUserData()
    setTimeout(function(){
        userData = getUserData()
    }, 3000);
    setTimeout(function(){
        userContacts = getContactsData();
    }, 5000)
    preparingData(userData, userContacts )
    console.log("All data received")
}();


