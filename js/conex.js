function conexPlayer(){
    $.getJSON("data/list.json", function(data){
   		$.each(data.items, function(i){
    		$("audio.audioPicture").attr("src", "audio/"+data.items[$urlValue].clave+".mp3");		
			$("img.imgPicture").attr("src", "picture/"+data.items[$urlValue].clave+".jpg");
			$(".tObra").html(data.items[$urlValue].title);
			$(".tAutor").html(data.items[$urlValue].autor);
			$(".tID").html($urlValue);
		});
	});
}

function conexList(){
	/*var $topList = 1;
	var $bottomList  = 5;
	
	var ty = Math.ceil(416/84);
	
	for($a=-ty;$a<=ty;$a++){
		console.log($a);
	}
	
*/
/*
	$.getJSON("data/list.json", function(data){
		var i=1;
		for($a=$topList;$a<=$bottomList;$a++){
			$("<article id='obra"+$a+"' class='list'><img class='linkMore bgSprite'/><img class='imagePreview'src='picture/muestra_preview.jpg'/><h2 class='tObra'>Titulo</h2><p class='tAutor'>autor</p><hr></hr></article>").appendTo("#list section");
      		$(".tObra").eq($i).html(data.items[$a].title);
			$(".tAutor").eq($i).html(data.items[$a].autor);
			$(".tRoom").eq($i).html(data.items[$a].room);
			$(".imagePreview").eq($i).attr("src", "picture/"+data.items[$a].clave+"_preview.jpg");
			$i++;
		} 
	});
*/

}


function conexPreList(){
	$.getJSON("data/list.json", function(data){
		var $i=1;
		for($a=1; $a<= Math.ceil(416/84) ;$a++){
			$("<article id='obra"+$a+"' class='list'><img class='linkMore bgSprite'/><img class='imagePreview'src='picture/_preview.jpg'/><h2 class='tObra'>Titulo</h2><p class='tAutor'>autor</p><hr></hr></article>").appendTo("#list section");
      		$(".tObra").eq($i).html(data.items[$a].title);
			$(".tAutor").eq($i).html(data.items[$a].autor);
			$(".tRoom").eq($i).html(data.items[$a].room);
			$(".imagePreview").eq($i).attr("src", "picture/"+data.items[$a].clave+"_preview.jpg");
			$i++;
		} 
	});

}

$(document).ready(function(){console.log("conex.js");});