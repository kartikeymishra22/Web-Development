const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chats.js")
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));

main()
.then(()=>{
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// Chat.findByIdAndUpdate("671e8f43cede177cd370aede", {message : "Prepare for war" }, {runValidators : true})
// .then((res) =>{
//     console.log(res);
// }).catch((err) =>{
//     console.log(err);
// })

// Index route

app.get("/chats", async (req,res) =>{
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", {chats});
})

// New route
app.get("/chats/new", (req,res) =>{
    res.render("new.ejs");
})

// create route

app.post("/chats", (req,res) =>{
    let {from, to, message} = req.body;
    let newChat = new Chat({
        from : from,
        to : to,
        message  : message,
        created_at : new Date(),
    });
    newChat.save()
    .then((res) =>{
        console.log("chat was saved");
    }).catch((err) =>{
        console.log(err);
    });
    res.redirect("/chats");
});

// edit route

app.get("/chats/:id/edit", async (req,res) =>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
});

// Update route

app.put("/chats/:id", async (req,res) =>{
    let {id} = req.params;
    let {message : newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id,
        {message : newMsg},
        {runValidators : true, new : true},
    );
    console.log(updatedChat);
    res.redirect("/chats");
});

// Destru route

app.delete("/chats/:id", async (req,res) =>{
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
})

// let chat1 = new Chat({
//     from : "neha",
//     to : "priya",
//     message : "send me your exam sheets",
//     created_at : new Date(),
// });

// chat1.save()
// .then((res) =>{
//     console.log(res);
// });


let port = 8080;

app.get("/", (req,res) =>{
    res.send("root is working");
})

app.listen(port, () =>{
    console.log(`server is listening on port ${ port} `);
})