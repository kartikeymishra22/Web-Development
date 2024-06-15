function savetoDb(data){
    return new Promise((resolve,reject) =>{
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
            resolve("success : data was saved");
        }
        else{
            reject("failure : weak connection");
        }
    });
}

let request =  savetoDb("apna college"); 
request.then(()=>{
    console.log("promise was resolved");
})
.catch(()=>{
    console.log("promise was rejected");
})