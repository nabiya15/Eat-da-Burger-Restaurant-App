var mysql = require("mysql");

var connection; 
if(process.env.JAWSDB_URL){
	connection=mysql.createConnection(process.env.JAWSDB_URL);
}else{
	connection = mysql.createConnection({
		port : 3306,
		host : "localhost",
		user : "root",
		password : "Nabi786110",
		database : "burger_db"
	})
}
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("mysql connected as id " + connection.threadId);
});

module.exports =  connection;

