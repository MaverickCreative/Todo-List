// Check off specific todos by clicking

$("ul").on("click" , "li" , function(){
	$(this).toggleClass("completed");
});

//Click on X to delete a specific todo!!

$("ul").on("click" , "span" , function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13)
	{
		//Grabbing the new input in the todo
		
		var todoText = $(this).val();
		//Clearing the input
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "  + todoText + "</li>");
	}
})

$("#toggle").click(function(){
	$("input[type='text']").fadeToggle();
})