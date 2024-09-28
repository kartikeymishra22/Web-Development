const figlet = require("figlet");

figlet("Kartikey Mishra",
     function(err, data) {
  if (err){
    cosole.log("Something went wrong...");
    console.log(err);
    return;
  }
  console.log(data);
});