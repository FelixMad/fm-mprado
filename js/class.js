var $objClass = function(){

	/*$("<img class='linkMore bgSprite'/><img class='imagePreview'src='picture/muestra_preview.jpg'/><h2 class='tObra'>Titulo</h2><p class='tAutor'>autor</p><hr></hr>").appendTo(".list");*/
	
	$("<p class='tObra'>Obra</p><p class='tAutor'>Autor</p><div class='classTime'></div>").appendTo(".classControl");
	
	$("<div class='draggable slider'></div><div class='barContent bar'></div>").appendTo(".classVolume");
	
	$("<button class='bPlayer bPlay bgSprite'/></button><button class='bPlayer bResume bgSprite'/></button><audio class='audioPicture'></audio>").appendTo(".classPlayer");
	
	$("<p class='textTime'>00:00</p><div class='barContent bar'></div><p class='textTime'>00:00</p>").appendTo(".classTime");
	
	$("<div class='barFull bar'></div>").appendTo(".barContent");
}


$(document).ready(function(){console.log("class.js")});