const mysql = require("mysql");
require("dotenv").config();
let connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: "localhost",
    port:3306,
	user: process.env.SQL_USER,
	password: process.env.SQL_PASSWORD,
	database: "burgers_db"
});
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Connected as ID " + connection.threadId);
});


module.exports = connection;