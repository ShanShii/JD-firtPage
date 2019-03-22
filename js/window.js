$("doucument").ready(function() {
	var play = function(offset) {
	var index = $("#main .main-col2 #slideWindow").data("index");
	var num = $("#main .main-col2 #slideWindow").data("imgs");
	var $imgs = $("#main .main-col2 #slideWindow img");
	var $indicators = $("#main .main-col2 #slideIndicator .indicatorBtn");
	var nexti = (index+offset)%num;
	nexti = nexti==-1 ? num-1 : nexti;
	$imgs.eq(index).fadeOut(500);
	$("#main .main-col2 #slideWindow").data("index", nexti);
	$imgs.eq(nexti).fadeIn("fast");
	// 点indicators轮播
	$indicators.eq(nexti).toggleClass("iActive")
			   .siblings().removeClass("iActive");
	}
	var prev = function() {
		play(-1);
	}
	var nex = function() {
		play(1);
	}
	$("#main .main-col2 #slideWindow button").on("click", function(event) {
		var $button = $(this) //this === event.target 都是相应的DOM element
	    if ($button.hasClass('gua-slide-button-left')) {
	        prev()
	    } else {
	        nex()
	    }
	})

	// 自动轮播
	var timer;
	var start = function() {
		timer = setInterval(nex, 2000);
	}
	start();
	var stop = function() {
	    clearInterval(timer);
	}
	$("#main .main-col2 #slideWindow").mouseover(stop).mouseout(start);
})
