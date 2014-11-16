$(document).ready(function(){

	//var $changeElement = ".list";
	var $changeElement = ".tRoom";

    $.getJSON("data/list.json", function(data){
    	if($work_id){
			$("audio.audioPicture").attr("src", "audio/"+data.items[$work_id].clave+".mp3");		
			$("img.imgPicture").attr("src", "picture/"+data.items[$work_id].clave+".jpg");
			$(".tObra").html(data.items[$work_id].title);
			$(".tAutor").html(data.items[$work_id].autor);
			$(".tID").html($work_id);
		}else{
		
			var $zRoom = new Array();
			var $aRoom = new Array();
			var $bRoom = new Array();
			
			$zRoom[-1] = "0";
			$aRoom[-1] = "0";
			
    		$.each(data.items, function(i){
				
				$zRoom[i] = data.items[i].room;
				$aRoom[i] = data.items[i].room;
				$bRoom[i] = data.items[i].room;
				
				if(/[a-z]{1}$/.test(data.items[i].room)) $zRoom[i] = data.items[i].room.slice(0,-1);
				
				var $a = parseInt($zRoom[i]);
   				var $b = parseInt($zRoom[i-1]);
   			
   				var $c = $aRoom[i];
   				var $d = $aRoom[i-1];
   				
   				var $e = $bRoom[i];
   				var $f = $bRoom[i-1];
				
				
    			sdfgsdfg(i, data, $a, $b, $c, $d, $e, $f);
				
    			$($changeElement).first().clone().appendTo($($changeElement).parent());
    			$(".tObra").eq(i).html(data.items[i].title);
				$(".tAutor").eq(i).html(data.items[i].autor);
				$(".tRoom").eq(i).html(data.items[i].room);
				$(".imagePreview").eq(i).attr("src", "picture/"+data.items[i].clave+"_preview.jpg");
				
			}); 
			$($changeElement).last(); 
    	}
    	
		console.log($aRoom);
		console.log($bRoom);
    	
    	
    	
	});		
});

function sdfgsdfg(i, data, $a, $b, $c, $d, $e, $f){

	if($a <= $b){
		if($a == $b){						
			if($c.substr(-1) < $d.substr(-1)){
				console.log($c+" es menor que "+$d);//
				$d = $e;
				$c = $f;
				//sdfgsdfg();
			}else if(data.items[i].room.substr(-1) == data.items[i-1].room.substr(-1)){
				//console.log($c+" es igual que "+$d);
			}else{
				//console.log($c+" es mayor que "+$d);
			}
		}else if($a < $b){
			console.log($c+" es_menor_que "+$d);//
			$e = $d;
			$f = $c ;
			//sdfgsdfg();
		}
	}else{
	//console.log($c+" es mayor que "+$d);
	}
}



$(document).ready(function(){console.log("conex.js");});

/*
			$(document).ready(function(){

				$.ajax({
					type: "GET",
					url: "list.xml",
					dataType: "xml",
					success: function(xml) {
						$(xml).find("channel").each(function(){
							var $idItem = ($(this).find('item').size())-1;
							for (var $a = 0; $a <= $idItem; $a++){
								var $room = $(this).find('item').eq($a).find('room').text();
								$("<option value='"+$room+"' id='title"+$a+"'></option>").html($room).appendTo("select");
								$("#title"+$a).append(" ");
								var $optionActual = $("#title"+$a).text();
								$("option:contains('"+$optionActual+"'):not(:last)").remove();
								$("option").sortElements(function(a, b){
   									return $(a).text() > $(b).text() ? 1 : -1;
								});	
							}
						});
					}
				});
			});	*/