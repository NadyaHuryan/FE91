let globalData = [];

// const getPhotos = function() {
//     return new Promise(function(resolve, reject) {
//         let url = "https://jsonplaceholder.typicode.com/todos";
//         fetch(url).then(response => {
//             if (response.status  == 200) {
//                 resolve(response.json())
//             } else {
//                 reject("Server Error")
//             }
//             // return response.json()
//         })
        
//         // .then(function(data){
//         //     // console.log(data)
//         //     // globalData = [...data];
//         //     // console.log(globalData)
//         // })
//     })
   
// }

// getPhotos().then((data) => {
//     console.log(data)
// })
// // console.log(globalData)



const getPhotos = function() {
        let url = "https://jsonplaceholder.typicode.com/todos";
        let data;
        fetch(url).then(response => response.json())
        .then(dataResponse=> {
            console.log(dataResponse);
            data = dataResponse
            console.log("End code")
            return data
        })
        
            
}

    
console.log(getPhotos())