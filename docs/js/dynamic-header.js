var maxStaticScroll = 0;

$(window).scroll(function() {
	if ($(window).scrollTop() > maxStaticScroll){
		$("#header").addClass("fixed");
		$("body").addClass("shifted");
	}
	else{
		$("#header").removeClass("fixed");
		$("body").removeClass("shifted");
	}
});