var orm = require("../config/orm.js");

var burger = {
	all : function(cb){
		orm.all("burgers",function(result){
			cb(result);
		})
	},

	create : function(columns, values, cb){
		orm.create("burgers", columns, values,function(result){
			cb(result);
		})
	},

	update : function(objOfColVals, condition, cb){
		orm.update("burgers", objOfColVals, condition, function(result){
			cb(result);
		});
	}
};

module.exports = burger;