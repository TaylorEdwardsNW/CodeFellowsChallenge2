$(document).ready(function(){
	$("#submit").on('click',function(){
		var value = $("#input").val();
		$("p").prepend("<p>" + value + "</p>");

	});
});