const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_temp',
    paaword: "Kartikey@22",
  });

  try{
    connection.query("SHOW TABLES", (err,result) =>{
        if(err)
            throw err;
        console.log(result);
    });
  }
  catch(err){
    console.log(err);
  }

let getRandomUser = () => {
    return {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }

 