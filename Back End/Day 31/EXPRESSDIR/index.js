const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () =>{
    console.log(`app is listening ${port}`);
});

app.get("/", (req,res) =>{
    res.send("hello, i am root path");
});
// app.get("/apple", (req,res) =>{
//     res.send("you are contacted apple path");
// });
// app.get("/orange", (req,res) =>{
//     res.send("you are contacted orange path");
// });

// app.get("*", (req,res) =>{
//     res.send("this path does not exist");
// });

// app.post("/orange", (req,res) =>{
//     res.send("you are contacted orange path");
// });

// app.use((req,res)=>{
//     // console.log(req);
//     console.log("new incoming request");
//     res.send("this is a basic response");
// });

app.get("/:username/:id",(req,res) =>{
    let {username, id} = req.params;
    res.send(`This account belong to @${username}`);
});

app.get("/search", (req, res) =>{
    console.log(req.query);
    res.send("no results");
});