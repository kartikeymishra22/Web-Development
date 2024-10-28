const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Bat = require("./models/bat.js");

app.set("views",path.join(__dirname, "views"));
app.set("view engine", "ejs");

main()
.then(() =>{
    console.log("connection successful");
}).catch((err) =>{
    console.log(err);
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/talk');
};

let bat1 = new Bat({
    from : "Kartikey",
    to : "Jatin",
    message : "Prepare for UPSC",
    created_at : new Date(),
});

bat1.save()
.then((res) =>{
    console.log(res);
})


let port = 8080;

app.get("/", (req, res) =>{
    res.send("root is working");
})

app.listen(port, () =>{
    console.log(`app is listening on port ${port}`);
});