
var mysql = require("mysql");

var express = require("express");

var burger = require("./models/burger.js") 

var app = express();

var nodemailer = require('nodemailer');

var PORT = process.env.PORT || 4000;

app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

//burger(app)cosoln
var cookieParser = require('cookie-parser');

var session = require('express-session');

	//allow sessions
	app.use(session({ key: "user_sid" , secret: 'app', cookie: { maxAge: 1*1000*60*60*24*365 }}));

	app.use(cookieParser());
burger(app)

/* app.post('/signup/:email/:password', function(req, res){

	bcrypt.genSalt(10, function(err, salt) {
	    
	    // res.send(salt);
        console.log(req.body.email)
        console.log(req.body.password)
	    bcrypt.hash(req.body.password, salt, function(err, p_hash) { 

	    	// res.send(p_hash);
           
	    	connection.query('INSERT INTO users (email, password_hash) VALUES (?, ?)', [req.body.email, p_hash],function (error, results, fields) {
              
                console.log(req.body.email)
                console.log(p_hash)
	    	  var what_user_sees = "";
	    	  if (error){
	    	  	what_user_sees = 'you need to use a unique email';
	    	  }else{
	    	  	what_user_sees = 'you have signed up - please go login at the login route';
	    	  }

	    	  res.send(what_user_sees);
	    	  
	    	});
	    });
	});
});
*/

 

 app.listen(PORT,function(){
  console.log("connecting on port " + PORT)
});




 