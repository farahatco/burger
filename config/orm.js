
       var connection = require("./connectionParam.js");

       const orm = {

              selectAll: function(tname,callback){
              var query = `SELECT * from ${tname}`;
              connection.query(query, function(error, results, fields){
               
                callback(results);
      
              })
            
           },

              insertOne: function(tname,v){
              var query = `insert into ${tname} (burger_name)  values ("${v}")`;
              connection.query(query, function(error, results, fields){
              })  
           },
              UpdateOne: function(tname,id){
              var query = `update ${tname} set devoured = 1 where id = ${id}`;
              connection.query(query, function(error, results, fields){
              })
           },
  /* selectUser: function(tname,v,callback ){
    var query = `SELECT * FROM ${tname} WHERE email = "${v}"`;
    console.log(query)
    connection.query(query,function (error, results, fields) {
     // console.log(results);
    
    })
  } */
      }

module.exports = orm;
