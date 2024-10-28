const express =  require("express");
const app = express();

let port = 8080;

app.listen(port, () =>{
    console.log(`app is listening on port {port}`);
});

// app.use((req,res)=>{
//     console.log("request recieved");
//     res.send("this is a basic response");
// });

// app.get("/apple", (req,res) =>{
//     res.send({
//         name: "apple",
//         color :"red"
//     });
// });


// app.get("/", (req,res)=>{
//     res.send("You are contacted root path");
// });

// app.get("*", (req,res)=>{
//     res.send("This path does not exist");
// });

// app.post("/",(req,res)=>{
//     res.send("You are contacted post method");
// });

app.get("/:username", (req,res)=>{
    console.log(req.params);
    res.send("Ypu are contacted root path");
})
