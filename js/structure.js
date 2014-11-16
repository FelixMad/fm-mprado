function structure(){
	var $margin = 10;
	var $ww = window.innerWidth;
	var $wh = window.innerHeight;
	var $wwcenter = $ww/2;
	var $whcenter = $wh/2;
	var $headerh = $("header").height();
	var $sectionh = $("section").height();
	var $footerh = $("footer").height();

	//$("body>div").css("height", $wh+"px");
	
	$("header h1").css("position", "relative");
	$("header p").parent("h1").css("top", ((($headerh)-($("header h1").height()+$("header p").height()))/2)+"px");
	$("header h1").css("top", ($("header").height()/2)-($("header h1").height()/2)+"px");
		
	$("header button").css("top", ($headerh/2)-($("header button").innerHeight()/2)+"px");
	
	$("navigation").css("height", $headerh+"px");
		
		
	$(".alingBotton>.classControl").css("top", "-"+($(".classControl").outerHeight()+$margin)+"px");
		
	//$("section").css("height", ($wh-($headerh + $footerh))+"px");
		
	//$(".classControl").css("width", ($ww - ($margin*2))+"px");
	//$(".classControl").parent(".alingBotton").css("height", $(".classControl").innerHeight()+"px");

	$(".classTime .barContent").css("margin-top", (($(".classTime").outerHeight()/2)-($(".barContent").height()/2))+"px");
		
	$(".classPlayer .bResume").css("display", "none");
	$(".classPlayer .bPause").css("display", "none");
		
	$(".classVolume:eq("+0+")").css("margin-left", $margin+"px");
	$(".classVolume:eq("+0+")").css("width", ($(".classVolume").parent().width()-($margin*2))+"px");
	$(".classVolume").css("height", $(".slider").outerHeight()+"px");
	$(".classVolume .barContent").css("margin-top", (($(".slider").outerHeight()/2)-($(".barContent").height()/2))+"px");
		
	if($(".imgPicture").width() > $(".imgPicture").height()) {
		if($(".imgPicture").parent().parent().height() < $(".imgPicture").parent().parent().width()){
			//$(".imgPicture").css("height", "90%");
		}else{
			//$(".imgPicture").css("width", "90%");
		}
	}else if($(".imgPicture").width() < $(".imgPicture").height()){
		if($(".imgPicture").parent().parent().height() < $(".imgPicture").parent().parent().width()){
			$(".imgPicture").css("height", "70%");
		}else{
			//$(".imgPicture").css("width","90%");
			
		}
}
}
$(document).ready(function(){console.log("structure.js");});


