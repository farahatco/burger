/* require("./burger.js");
   require("express"); 

 app.get("/",  (req,res)=>{
    selectAll('burgers', function(burgers){
      res.render("index",{burgers});
    })
  })
  
   app.post("/add",(req,res)=>{
    var burgeName = req.body.burgeName
   insertOne("burgers",+burgeName)
     
      res.redirect("/");
      
  });
  //})
  
  app.post("/upd/:id",(req,res)=>{
    var id = req.body.burger_id;
    ORM.UpdateOne("burgers",id)
      res.redirect("/")
  });
   */
