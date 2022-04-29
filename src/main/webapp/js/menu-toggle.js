$(".header-nav").hide();
$("#menu-toggler").click(function() {
	$("#menu-toggler").toggleClass("active");
	$(".togline").toggleClass("active");
	$(".header-nav").slideToggle(500);
});