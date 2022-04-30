var maxStaticScroll = 0;

$(window).scroll(function() {
	if ($(window).scrollTop() > maxStaticScroll)
		$("#header").addClass("active");
	else
		$("#header").removeClass("active");
});