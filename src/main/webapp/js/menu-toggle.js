$("#menu-toggler").click(function() {
	$("#menu-toggler").toggleClass("active");
	$(".togline").toggleClass("active");
					
	var $element = $(".header-nav");
	if ($element.is(':visible')) {
		$element.slideUp();
	}
	else {
		$element.slideDown({
			duration: 500,
			start: function() {
				$element.css('display','grid');
			}
		});
	}
});