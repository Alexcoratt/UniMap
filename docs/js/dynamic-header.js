var maxStaticScroll = 0;

function checkWindowWidth(){
	if (window.innerWidth <= 950)
		$(".header-nav").hide();
	else
		$(".header-nav").show();
}

$(window).resize(checkWindowWidth);

checkWindowWidth();

$(window).scroll(function() {
	if ($(window).scrollTop() > maxStaticScroll){
		$("#header").addClass("shifted");
	}
	else{
		$("#header").removeClass("shifted");
	}
});