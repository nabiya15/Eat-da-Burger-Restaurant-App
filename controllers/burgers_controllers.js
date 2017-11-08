var express = require0("express");
var burger = require("../models/burgers.js");
var router = express.Router();

router.post("/",function(request,response){
	burger.create(["burger_name", "devoured"],[request.body.burger_name, request.body.devoured], function(result){
		response.json({id : result.id})
	})
});

router.put("/:id",function(request,response){
	var condition="id = "+request.params.id;
	console.log(condition);
	burger.update({devoured : req.body.devoured},condition, function(result){
		if(result.changedRows === 0){
			return res.send(404).end();
		}else{
			res.status(200).end();
		}
	})
})



module.exports = router;