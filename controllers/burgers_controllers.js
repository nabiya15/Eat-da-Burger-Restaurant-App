var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.post("/",function(request,response){
	burger.create(["burger_name", "devoured"],[request.body.burger_name, request.body.devoured], function(result){
		response.json({id : result.insertId})
	})
});

router.put("/:id",function(request,response){
	var condition="id = "+request.params.id;
	console.log(condition);
	burger.update({devoured : request.body.devoured},condition, function(result){
		if(result.changedRows === 0){
			return response.send(404).end();
		}else{
			response.status(200).end();
		}
	})
})



module.exports = router;