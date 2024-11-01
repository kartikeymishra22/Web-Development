const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

let port = 8080;

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended : true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Kartikey@22',
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};
//  let q = "SHOW TABLES";
//  let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// let data = [];
// for(let i = 1; i<=100; i++){
//   data.push(getRandomUser());
// }

// connection.end();

app.listen(port, () =>{
  console.log("app is listening to port 8080");
})

app.get("/", (req,res) =>{
  let q = `SELECT count(*) FROM user`;
  
try{
  connection.query(q,  (err,result) =>{
    if (err) throw err;
    let count = result[0]["count(*)"];
    res.render("home.ejs", {count});
  });
}
catch (err){
  console.log(err);
  res.send("some err occurred in DB");
}
});

app.get("/user", (req,res) =>{
  let q = `SELECT * FROM user`;
  try{
    connection.query(q, (err,users) =>{
      if(err) throw err;
      // console.log(result);
      // res.send(result);
      res.render("user.ejs", { users});
    })
  }
  catch(err){
    console.log(err);
    res.send("Some err occured in DB");
  }
});

app.get("/user/:id/edit", (req,res)=>{
  let {id } = req.params;
  let q = `SELECT * FROM user WHERE id= '${id}'`;
  try{
    connection.query(q, (err,result) =>{
      if(err) throw err;
      let user = result[0];
      res.render("edit.ejs", {user});
    })
  }
  catch(err){
    console.log(err);
    res.send("Some err occured in DB");
  }
  
})

// update route

app.patch("/user/:id", (req,res) =>{
  res.send("updated");
})

