const mongoose = require('mongoose');

main().then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
})

const User = mongoose.model("User", userSchema);

User.findByIdAndUpdate("671be64105c71dce6394f33c", {age: 44}, {new :true})
.then((res) =>{
    console.log(res);
}).catch((err) =>{
    console.log(err);
})

// User.updateOne({name:"Bruce"}, {age :"49"})
// .then((res) =>{
//     console.log(res);
// })
// .catch((err) =>{
//     console.log(err);
// });

// User.find({}).then((res) =>{
//     console.log(res);
// }).catch((err) =>{
//     console.log(err);
// });

// User.insertMany([
//     {name:"Tony", email: "Tony@gmail.com", age: 44},
//     {name:"Bruce", email: "Bruce@gmail.com", age: 44},
//     {name:"Peter", email: "Peter@gmail.com", age: 44},
// ]).then((res) =>{
//     console.log(res);
// });

// const user1 = new User({name:"adam", email:"adam@gmail.com", age: 44});

// user1.save();

// const user2 = new User({name:"Eve", email: "eve@gmail.com", age: 48});

// user2.save().then((result) =>{
//     console.log(result);
// }).catch((err) =>{
//     console.log(err);
// });