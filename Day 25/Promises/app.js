function saveToDB(data,success,failure){
    let internetSpeed = Math.floor(Math.random() *10) +1;
    if(internetSpeed>4){
        success();
    }
    else{
        failure();
    }
}

saveToDB("apna College",()=>{
    console.log("Success : Data was saved");
    saveToDB("kartikey",()=>{
        console.log("Success2 : Data 2 was saved");
        saveToDB("Mishra",()=>{
            console.log("Success3 : Data3 was saved");
        },()=>{
            console.log("failure : data was not saved");
        })
    },()=>{
        console.log("Failure : Data wasn't saved");
    })
},()=>{
    console.log("Failure : Data wasn't saved");
}
)