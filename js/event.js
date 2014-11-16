
var md = false;
var tc = false;
var $startPosY = null;
var $startPosX = null;
var $endPosY = null;
var $endPosX = null;
var $segAudio = "0";
var $minAudio = 0;

var $dAudio = null;
var $cTAudio = null;

var $button = false;
var $urlKey;
var $urlValue;
var $e=0;
var $historyPages = new Array();	

$(document).ready(function(){
	changePage();
	$historyPages[0] = "main";
	$("body").bind("touchmove",function(event){event.preventDefault()});	
	if($urlKey)firstPage($urlKey);
});

function readUrl(){
	var $url = String(window.location.search);
	$urlKey = $url.substr(1,($url.indexOf("=")-1));
	$urlValue = $url.substr($url.indexOf("=")+1,3);
}

function changePage(){
	$e++;
	console.log($historyPages);
	readUrl();
	$objClass();
	eventButton();
	structure();
	//conexPlayer();
}

function firstPage($page){
	$historyPages[$e] = $page;
	$("<div id='"+$page+"'></div>").appendTo("body").load($page+'.html', function(){
		$('#'+$historyPages[$historyPages.length-2]).remove();
		changePage();
	});
}

function eventButton(){
	$(".bPlay").bind('mouseup touchend', bPlayPlayer);
	$(".bResume").bind('mouseup touchend', bResumePlayer);
	$("* #bSearch").bind('click',function(){renovePage("search")});
	$("* #bList").bind('click',function(){renovePage("list");});
	$("* .list").bind('click', function(){renovePage("player");});
	$("* .bMaps").bind('click', function(){renovePage("maps")});
	$("* #bBack").bind('click', function(){
		$page = $historyPages[$historyPages.length-2];
		$historyPages[$e] = $page;
		console.log($historyPages[$historyPages.length-2]);
		$("<div id='"+$page+"'></div>").appendTo("body").load($page+'.html', function(){
			$('#'+$page).addClass("aniBack1");
			$('#'+$historyPages[$historyPages.length-2]).addClass("aniBack2");
			setTimeout(function(){changePage()},"100")
			setTimeout(function(){
				$('#'+$page).removeClass("aniBack1");
				var $objClass2 = $objClass;
				$objClass2 = 0;
				$('#'+$historyPages[$historyPages.length-2]).remove();
			},"600");
			conexPreList();
			window.history.pushState($urlKey, $page, "?"+$page+"=");
			
		});
	});
/*
	$(".draggable").bind("mousedown touchstart", function(){startEvent(event)});
	$(".draggable").bind("mousemove touchmove", function(){moveEvent(event)});
	$(".draggable").bind("mouseup touchend", function(){endEvent(event)});
*/
}
function renovePage($page){
	$historyPages[$e] = $page;
	$("<div id='"+$page+"'></div>").appendTo("body").load($page+'.html', function(){
		$('#'+$page).addClass("aniGo2");
		$('#'+$historyPages[$historyPages.length-2]).addClass("aniGo1");
		setTimeout(function(){changePage()},"100")
		setTimeout(function(){
			$('#'+$historyPages[$historyPages.length-2]).remove();
			$('#'+$page).removeClass("aniGo2");
		},"600");
		conexPreList();
		window.history.pushState($urlKey, $page, "?"+$page+"="+$(this).index());
		
	});
}

function bPlayPlayer(){
	$dAudio = parseInt($("audio")[0].duration);
	$cTAudio = parseInt($("audio")[0].currentTime);
	$(".textTime:last").html("-"+(parseInt($("audio")[0].duration/60)%60)+":"+(parseInt($("audio")[0].duration%60)));
	$("audio")[0].play();
	$(".bPlay").css("display", "none");
	$(".bResume").css("display", "inline-block");
	$("audio")[0].volume = 1;
	$timeAudio = setInterval("timeAudio()",1000);
}

function bResumePlayer(){
	$("audio")[0].pause();
	clearInterval($timeAudio);
	$(".bResume").css("display", "none");
	$(".bPlay").css("display", "inline-block");
}

function timeAudio(){
	if(parseInt($("audio")[0].duration) <= parseInt($("audio")[0].currentTime)) bResumePlayer()
	var $segAudioMore = parseInt($("audio")[0].currentTime)%60;
	if($segAudioMore.toString().length == "1") $segAudioMore = "0"+$segAudioMore;
	$(".textTime:first").html(parseInt(($("audio")[0].currentTime/60)%60)+":"+$segAudioMore);
	var $segAudioLess = $dAudio%60;
	if($segAudioLess.toString().length == "1") $segAudioLess = "0"+$segAudioLess;
	$(".textTime:last").html("-"+parseInt(($dAudio/60)%60)+":"+$segAudioLess);
	$(".classTime .barFull").css("width", ((parseInt($("audio")[0].currentTime)/parseInt($("audio")[0].duration))*100)+"%");
	$dAudio--;
}

function startEvent(event){
	event.preventDefault();
	if (event.type == "touchstart") var event = event.touches[0]; 
	$startPosX = event.pageX;
	$startPosY = event.pageY;
	tc = true;
	md = true;
}

function moveEvent(event){
	event.preventDefault();
	if(event.type == "touchmove") var event = event.touches[0]; 
	tc = false;
	if (!md) return;
	var $movePosY = event.pageY;
	var $movePosX = event.pageX;
	var $movePosY = $movePosY - ($startPosY - $endPosY);
	var $movePosX= $movePosX - ($startPosX - $endPosX);
	blockDragY($movePosY);
	blockDragX($movePosX);
	$(".draggable").css("top", $movePosY+"px");
	$(".draggable").css("left", $movePosX+"px");
}

function endEvent(event){
	event.preventDefault();
	$endPosY = $(".draggable").position().top;
	$endPosX = $(".draggable").position().left;
	md = false;		
}

function blockDragY($movePosY){
	var $eDragHeight = $(".draggable").offsetHeight;
	if($eDragHeight > $(".draggable").parent().height()) $(".draggable").css("top", $movePosY+"px");
}
function blockDragX($movePosX){
	var $eDragWidth = $(".draggable").offsetWidth;
	if($eDragWidth > $(".draggable").parent().width()) $(".draggable").css("left", $movePosX+"px");;
}

$(document).ready(function(){console.log("event.js");});