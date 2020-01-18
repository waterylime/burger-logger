const mysql = require("mysql");

require("dotenv").config();

//var PORT = process.env.PORT || 8080;

let connection;



if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASS,
    database: "burgers_DB"
  });

}






connection.connect(function(err) {
  if (err) throw err;
  
});

module.exports = connection;