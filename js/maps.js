var tile_divs = {};
var zoom = 1 ;
var $floor = 0;

$(document).ready(function(){
	addTileDivs();
	
});

function addTileDivs(){
	var w = $("section").width();
	var h = $("section").height();
	var tx = Math.ceil(w/256);
	var ty = Math.ceil(h/256);
	
	for(var i=-tx; i<tx;i++){
		for(var j=-ty; j<ty;j++){
			addDiv(i,j);
		}
	}
}
function addDiv(i,j){
	var scale = 1;
	var s = 256*scale;
	var x = (i*256)*scale;
	var y = (j*256)*scale;
	var el = $("<img />");
	$(el).attr("class", "tile");
	$(el).css("top", y+"px");
	$(el).css("left", x+"px");
	$(el).appendTo(".draggable");	
	tile_divs[i+','+j] = el;
	updateDiv(i,j, zoom);
}
function updateDiv(i,j,zoom){
	var $validate = true;
	var el = tile_divs[i+','+j];
	var gxy = getGoogleTitleXY(i,j,zoom);
	$(el).attr("title", i+'X '+j+'Y');
	
	
	//$(el).attr("src", "image/maps/"+$floor+"/z"+zoom+"/x"+i+"_y"+j+"_s1.png");
	

	$.get('image/maps/'+$floor+'/z'+zoom+'/x'+gxy[0]+'_y'+gxy[1]+'_s1.png', function(){
		//$(el).attr("src", "image/maps/"+$floor+"/z"+zoom+"/x"+gxy[0]+"_y"+gxy[1]+"_s1.png");
		$(el).attr("src", "image/maps/"+$floor+"/z"+zoom+"/x"+i+"_y"+j+"_s1.png");
	}).error(function() { 
		$(el).attr("src","picture/muestra_preview.jpg");
	});
	
//el.innerHTML = gxy[0]+", "+gxy[1];				
}
function getGoogleTitleXY(i,j,zoom){	
	var ts = getTileSize(zoom);	
	var tc = ts/2;
	var gi = (i+tc) % ts;
	var gj = (j+tc) % ts;
	if (gi<0) gi+=ts;
	if (gj<0) gj+=ts;
	return [gi, gj, 7+zoom];
}
function getTileSize(zoom){
	return Math.pow(2,10-zoom);
}











/*

			function updateForma(zv){
				var $roomSize = $(".recuadro").size();
				var $windowWidth = window.innerWidth;
				var $windowHeight = window.innerHeight;

				if(zv == "-1"){
					
					$layerLeft = $("#layer").offset().left;
					$layerTop = $("#layer").offset().top;
					
					var $mLeft =($layerLeft-($windowWidth*2))-(-$calcZoom);
					var $mTop =($layerTop-($windowHeight*2))-(-$calcZoom);
				
					$cuadrado = $cuadrado*2;
					$calcZoom = $calcZoom*2;
					
					$cloudDivWidth = $cloudDivWidth*2;
					$cloudDivHeight = $cloudDivHeight*2;
					
					$imageWidth = $imageWidth*2;
					$imageHeight = $imageHeight*2;
					
					$cloudImgWidth = $cloudImgWidth*2;
					$cloudImgHeight = $cloudImgHeight*2;
					$textId = $textId*2;
					for (var $a = 0; $a < $roomSize; $a++){
						var $recuadroLeft = $(".recuadro").eq($a).offset().left;
						var $recuadroTop = $(".recuadro").eq($a).offset().top;
						$rl = $recuadroLeft*2;
						$rt = $recuadroTop*2;
						
						var $recuadroWidth = $(".recuadro").eq($a).width();
						var $recuadroHeight = $(".recuadro").eq($a).height();
						$rw = $recuadroWidth*2;
						$rh = $recuadroHeight*2;
						
						$recuTop = $calcZoom + $rt;
						$recuLeft = $calcZoom + $rl;
					
						$(".recuadro").eq($a).css({"top": ($recuTop-($windowHeight*4)-($mTop*2))+"px", "left": ($recuLeft-($windowWidth*4)-($mLeft*2))+"px"});
						$(".recuadro").eq($a).css({"height": $rh+"px", "width": $rw+"px"});
					}
				}else if(zv == "1"){

					$layerLeft = $("#layer").offset().left;
					$layerTop = $("#layer").offset().top;
					
					var $mLeft =($layerLeft-($windowWidth/2))-(-$calcZoom);
					var $mTop =($layerTop-($windowHeight/2))-(-$calcZoom);

					$cuadrado = $cuadrado/2;
					$calcZoom = $calcZoom/2;
					
					$cloudDivWidth = $cloudDivWidth/2;
					$cloudDivHeight = $cloudDivHeight/2;
					
					$imageWidth = $imageWidth/2;
					$imageHeight = $imageHeight/2;
					
					$cloudImgWidth = $cloudImgWidth/2;
					$cloudImgHeight = $cloudImgHeight/2;
					$textId = $textId/2;
					for (var $a = 0; $a < $roomSize; $a++){

						$recuadroLeft = $(".recuadro").eq($a).offset().left;
						$recuadroTop = $(".recuadro").eq($a).offset().top;
						
						$rl = $recuadroLeft/2;
						$rt = $recuadroTop/2;
						
						var $recuadroWidth = $(".recuadro").eq($a).width();
						var $recuadroHeight = $(".recuadro").eq($a).height();
						$rw = $recuadroWidth/2;
						$rh = $recuadroHeight/2;

						$recuTop = $calcZoom + $rt;
						$recuLeft = $calcZoom + $rl;
						
						$(".recuadro").eq($a).css({"top": ($recuTop-($windowHeight/4)-($mTop/2))+"px", "left": ($recuLeft-($windowWidth/4)-($mLeft/2))+"px"});
						$(".recuadro").eq($a).css({"height": $rh+"px", "width": $rw+"px"});
						
					}
				}else{
					$cuadrado = 256;
					$calcZoom = ($cuadrado * $cuadrado);
					
					$cloudDivWidth = $(".cloudDiv").width();
					$cloudDivHeight = $(".cloudDiv").height();
					$imageWidth = $(".image").width();
					$imageHeight = $(".image").height();
					$cloudImgWidth = $(".cloudImg").width();
					$cloudImgHeight = $(".cloudImg").height();
					
					$cloudDivWidth = 56;
					$cloudDivHeight = 56;
					$imageWidth = 48;
					$imageHeight = 48;
					$cloudImgWidth = 56;
					$cloudImgHeight = 56;
					$textId = 20;
					
					for (var $a = 0; $a < $roomSize; $a++){

						var $recuadroLeft = $(".recuadro").eq($a).offset().left;
						var $recuadroTop = $(".recuadro").eq($a).offset().top;
						
						$rl = $recuadroLeft;
						$rt = $recuadroTop;
						
						var $recuadroWidth = $(".recuadro").eq($a).width();
						var $recuadroHeight = $(".recuadro").eq($a).height();
						$rw = $recuadroWidth;
						$rh = $recuadroHeight;
						
						$rt = $calcZoom + $rt;
						$rl = $calcZoom + $rl;
					
						$(".recuadro").eq($a).css({"top": $rt+"px", "left": $rl+"px"});
						$(".recuadro").eq($a).css({"height": $rh+"px", "width": $rw+"px"});
						
					}
				}

				setTimeout("reparPicture()", 200);
				$(".textId").css("font-size",$textId+"px");
				$(".cloudDiv").css({"height": $cloudDivHeight+"px", "width": $cloudDivWidth+"px"});
				$(".image").css({"height": $imageHeight+"px", "width": $imageWidth+"px", "margin-left":-($imageWidth/2)+"px", "margin-top":-($imageHeight/2)+"px"});
				$(".cloudImg").css({"height": $cloudImgHeight+"px", "width": $cloudImgWidth+"px"});
				
				if($roomSize == 1){
					setPosition(-$rl-($rw/2), -$rt-($rh/2));
				}else{
					setPosition(-$calcZoom, -$calcZoom);
				}
				return $calcZoom, $cuadrado, $rt, $rl, $rw, $rh, $cloudDivWidth, $cloudDivHeight, $imageWidth, $imageHeight, $cloudImgWidth, $cloudImgHeight, $textId;
			}
*/

$(document).ready(function(){console.log("maps.js");});