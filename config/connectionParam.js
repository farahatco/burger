require("../.env");
require("dotenv").config();
var mysql = require("mysql");

/* 
 var connection = mysql.createConnection({
   host: process.env.HOST,
   dbport:  process.env.dbPORT,
   user: process.env.USER,
   password: process.env.PASSWORD,
   database: process.env.DATABASE,
 });
  */
 
 
module.exports = connection 

if(process.env.JAWSDB_URL){
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
}
  else{
   var  connection = mysql.createConnection({
    host: "localhost",
    port:  3306,
    user:  "root",
   password: "root",
   database: "burgers_db"
  })
  connection.connect(function (err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
}
module.exports = connection 
/*
mysql://ludbbhfcijux6mwc:zy31qq2qddrgss2h@uc13jynhmkss3nve.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/wjdba12z0ohkxttj
Host 	uc13jynhmkss3nve.cbetxkdyhwsb.us-east-1.rds.amazonaws.com 	
Username 	ludbbhfcijux6mwc 	
Password 	zy31qq2qddrgss2h 	
Port 	3306 	
Database 	wjdba12z0ohkxttj
*/