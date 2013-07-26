$(function() {
	//keyword
	var keyword = $("#keyword");
	keyword.bind("focus", function() {
		$(".keyword").fadeIn();
	});
	keyword.bind("blur", function() {
		$(".keyword").fadeOut();
	});
	//up &down
	jQuery.easing['easeInOutElastic'] = function(x, t, b, c, d) {
		return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	};
	$(".i-more").bind("click", function() {
		var eve = $(this).parents(".m-b").find(".m-cent");
		var $this = $(this);
		eve.slideToggle(350, "easeInOutElastic", function() {
			$this.toggleClass("i-more-up");
		});
	});
	//op
	$(".i-open").bind("click", function() {
		var $this = $(this);
		var right = $this.css("right");
		var m = (right == "-27px") ? -167 : -27;
		$this.animate({
			"right": m
		}, 250, function() {
			$this.toggleClass("i-close");
		});
		$(".u-d").fadeToggle(350);
	});
	//heck 
	var isIE = document.all && !document.querySelector;
	if (isIE) {
		$(".ms-list li").hover(function() {
			$(this).css({
				"z-index": 100
			});
		}, function() {
			$(this).css({
				"z-index": 1
			});
		})
	}

})