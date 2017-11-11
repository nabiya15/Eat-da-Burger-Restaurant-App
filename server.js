var express = require("express");
var methodOverride= require("method-override");
var bodyParser = require("body-parser");
var expressHandlebars = require("express-handlebars");

var burgerController = require("./controllers/burgers_controllers");
var burger = require("./models/burger.js");

var port = process.env.PORT || 8000;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended : false}));

app.engine("handlebars", expressHandlebars({
	defaultLayout : "main" }));
app.set("view engine","handlebars");

app.get("/",function(request,response){
	burger.all(function(data){
		var handlebarObject = {
			burgers : data
		};
		console.log(handlebarObject);
		response.render("index",handlebarObject);
	});
});

app.use("/api/burgers",burgerController);

app.listen(port, function(response){
	console.log("App Listening on port "+port);
})