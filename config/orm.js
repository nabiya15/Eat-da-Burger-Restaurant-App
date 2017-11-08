var connection = require("./connection.js");
//prints question marks for each parameter in sql query
function printQuestionMarks(number){
	var array =[];
	for(var i= 0; i<number.length; i++){
		array.push("?");
	}
	return array.toString();
}

function objToSql(ob){
	var array = [];
	for(key in ob){
		var value = ob[key];
		if(ob.hasOwnProperty.call(ob,key)){
			if(typeof value === "String" && value.indexOf(" ") >= 0){
				value ="'"+value+"'";
			}
			array.push(key + "=" + value);
		}
	}
	return array.toString();
}

var orm = {
	// display all the burgers in the database
	all : function(tableInput,cb){
		var query = "SELECT * FROM"+tableInput;
		connection.query(query,function(error,result){
			if(error){
				return console.log(error);
			}
			cb(result);
		})
	},
	// create a new table row or an entry into the sql table
	create : function(table,columns,values,cb){
		var query = "INSERT INTO"+table;
		query += "(";
		query += columns.toString();
		query += ")";
		query += "VALUES (";
		query += printQuestionMarks(values.length);
		query += ")";

		console.log(query);
		connection.query(query, values, function(error, result){
			if(error){
				throw error;
			}
			cb(result);
		})
	},
	// update the value of devoured and send the burger to the other side of the page
	update : function(table, objOfColVals,condition, cb){
		var query ="UPDATE"+table;
		query += "SET";
		query += objToSql(objOfColVals);
		query += "WHERE";
		query += condition;

		console.log(query);
		connection.query(query,function(error,result){
			if(error){
				throw error;
			}
			cb(result);
		})
	},
};

module.exports = orm;