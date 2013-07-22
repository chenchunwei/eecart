
$(function() {
	//keyword
var keyword = $("#keyword");
keyword.bind("focus", function() {
		$(".keyword").fadeIn();
	});
keyword.bind("blur",function() {
		$(".keyword").fadeOut();
	});

})