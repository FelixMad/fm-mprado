$(document).ready(function(){

	//var $changeElement = ".list";
	var $changeElement = ".tRoom";
	var $zRoom = new Array();
	var $aRoom = new Array();
	var $bRoom = new Array();
			
	$zRoom[-1] = "0";
	$aRoom[-1] = "0";
	$bRoom[-1] = "0";
	
    $.getJSON("data/list.json", function(data){
    	if($work_id){
			$("audio.audioPicture").attr("src", "audio/"+data.items[$work_id].clave+".mp3");		
			$("img.imgPicture").attr("src", "picture/"+data.items[$work_id].clave+".jpg");
			$(".tObra").html(data.items[$work_id].title);
			$(".tAutor").html(data.items[$work_id].autor);
			$(".tID").html($work_id);
		}else{
    		$.each(data.items, function(i){

    			//sortRoom(i, data, $aRoom, $bRoom, $zRoom);
				
				if(/[a-z]{1}$/.test(data.items[i].room)) $aRoom[i] = data.items[i].room.slice(0,-1);
				
    			$($changeElement).first().clone().appendTo($($changeElement).parent());
    			$(".tObra").eq(i).html(data.items[i].title);
				$(".tAutor").eq(i).html(data.items[i].autor);
				$(".tRoom").eq(i).html(data.items[i].room);
				$(".imagePreview").eq(i).attr("src", "picture/"+data.items[i].clave+"_preview.jpg");
				
			}); 
			$($changeElement).last(); 
    	}
    	
		console.log($aRoom.sort(function(a,b){return a.room - b.room}));
		//console.log($bRoom);
    	
    	
    	
	});		
});

function sortRoom(i, data, $aRoom, $bRoom, $zRoom){
	$zRoom[i] = data.items[i].room;
	$aRoom[i] = data.items[i].room;
	$bRoom[i] = data.items[i].room;
						
	if(/[a-z]{1}$/.test(data.items[i].room)) $zRoom[i] = data.items[i].room.slice(0,-1);

	if(parseInt($zRoom[i]) == parseInt($zRoom[i-1])){						
		if($aRoom[i].substr(-1) < $aRoom[i-1].substr(-1)){

		}
	}else if(parseInt($zRoom[i]) < parseInt($zRoom[i-1])){
		//$aRoom[i-1] = $bRoom[i];
		//$aRoom[i] = $bRoom[i-1];
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