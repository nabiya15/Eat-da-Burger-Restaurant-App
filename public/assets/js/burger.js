$(document).ready(function(){
	$("#submit").on("click",function(event){
		event.preventDefault();
		if(($("#name").val())===""){
			alert("Please Enter a valid name to continue!!!")
			return;
		}else{
			var newBurger = {
				burger_name : $("#name").val().trim(),
				devoured : 0
			};
			console.log(newBurger);
			$.ajax("/api/burgers",{
				type:"POST",
				data : newBurger
			}).then(function(){
					console.log("New Burger Added");
					location.reload();
				}
			)
		}
	});

	$(".devour").on("click",function(event){
		var id = $(this).data("id");
		console.log($(this).data("id"));
		var newDevour = {
			devoured : 1
		};
		$.ajax("/api/burgers/"+id,{
			type : "PUT",
			data: newDevour
		}).then(function(){
			console.log($(this).data("burger_name")+" is devoured")
			location.reload();
		})
	})
})