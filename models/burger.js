
     
          // Require Modules
  var connection = require("../config/connectionParam.js")

  var ORM = require("../config/orm.js");

  var bcrypt = require('bcryptjs');

  var bodyParser = require('body-parser')

  var session = require('express-session');

  var nodemailer = require('nodemailer');

            // Create nodemailer Transport
            var transporter = nodemailer.createTransport({
                
             service: 'gmail',
             auth: {
                user: 'burgerapp2019@gmail.com',
                pass: 'Burger_app76'
                   }
        });

      // Export Burger.js 
       module.exports = function (app) {

      // Hoem Route (Login)
       app.get("/", function (req, res) {     
       res.render("logon")
       })

       app.get("/test",(req,res) => {

       ORM.selectAll("burgers", function(burgers){
        res.render("index", { burgers: burgers, user: req.session.email })
          console.log(burgers)
       })
       })

       // burgers Route
       app.get("/burgers", (req, res) => {
           
       var queryAll = "select * from burgers";
             
       connection.query(queryAll, function (err, result) {
             
       if (err)
         {
           return res.status(500).end();
         }
      
       if (req.session.user_id && req.cookies.user_sid) 
         {
           res.render("index", { burgers: result, user: req.session.email })
         }
       else 
         {
           res.render("logon")
         }
        });
       })

       // Add New burger Route
       app.post("/add", (req, res) => {
             
       var burgeName = req.body.burgeName
            
       ORM.insertOne("burgers", burgeName)
              
       res.redirect("/");
       })

       // Move Burger To devoured List  Route
       app.post("/upd/:id", (req, res) => {
            
       var id = req.body.burger_id;
            
       ORM.UpdateOne("burgers", id)
            
       res.redirect("/")
       })

      // SignUp  Route
      app.get("/signup", function (req, res) {
      
      res.render("signup")
      })
 
      // Logon  Route 
      app.get('/logon', function (req, res) {
       
      connection.query('SELECT * FROM users WHERE email = ?', [req.query.email], function (error, results, fields) {
      
      if (error) 
         throw error;
      if (results.length == 0) 
       {
        res.send('try again');
       }
      else 
       {
         bcrypt.compare(req.query.password, results[0].password_hash, function (err, result) {
      if (result == true) 
       {
         req.session.user_id = results[0].id;
         req.session.email = results[0].email;
         res.redirect('/burgers');
       }
      else 
       {
         console.log(" ERROR ")
         res.redirect('/');
       }
       });
       }
       })
       }); 

       // LogOut  Route
       app.get('/logout', function(req, res){
      
       req.session.destroy(function(err){
       res.render("logon");
       })
       }); 

       // SignUp  Route
       app.post('/signup', function (req, res) {
       console.log(req.body.email);
       console.log(req.body.username);
       
       bcrypt.genSalt(10, function (err, salt) {
       bcrypt.hash(req.body.password, salt, function (err, p_hash) {
        console.log(p_hash);
       connection.query('INSERT INTO users (email,username,password_hash) VALUES (?,?,?)', [req.body.email,req.body.username,p_hash], function (error, results, fields) {
       //var what_user_sees = "";
       if (error) 
         {
            console.log('you need to use a unique email');
            return res.json({error: error})
         }
       else
         {
           // Sending Email
            var mailOptions = {
            from: 'burgerapp2019@gmail.com',
            to: req.body.email,
            subject: 'Sending Email using Node.js',
            text: `You Signed Up Successfully with BurgersApp 
                  Enjoy Your Time With Us
                  
                  
                  We are Waiting Your Orders
                   Order Now...`
            };

         transporter.sendMail(mailOptions, function(error, info){
        if (error) 
          {
            console.log(error);
          } 
        else 
          {
            console.log('Email sent to : ' + mailOptions.to + '  the response ' + info.response);
          }
          });  

             // what_user_sees = 'you have signed up - please go login at the login route';
         }
            res.render("logon");
          });
        });
      });
    })
  
}
