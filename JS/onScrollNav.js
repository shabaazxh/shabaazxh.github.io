$(document).ready(function(){
	$(window).scroll(function(){
		if ($(document).scrollTop() > 50){
			$("header").addClass("onScroll");
			$("header").addClass("onScrollAnimate");
			$("nav").addClass("onScroll-Nav");
			$("#owner-title").addClass("onScroll-SiteTitle");
		} else {
			$("header").removeClass("onScroll");
			$("header").removeClass("onScrollAnimate");
			$("nav").removeClass("onScroll-Nav");
			$("#owner-title").removeClass("onScroll-SiteTitle");
		}
	});
});