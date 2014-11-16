	var $a=0;
			var md = false;
			var tc = false;
			var $listTop = 0;
			var $startPosY = 0;
			var $listPosY = 0;
			var $posY = 0;
	
			
			
			function mouseDown(event){
    			$startPosY = event.pageY;
    			
				tc = true;
				md = true;
			}	

			function mouseUp($a, event){
				
				$listTop = $("#list").position().top;
				var $heightNavBar = $("#navBar").height();
				$listPosY = $listTop - $heightNavBar;
				var $heightList = $("#list").height();
				var $windowHeight = window.innerHeight;
				var $limitHeight = -($heightList-$windowHeight)+$heightNavBar-85;

				if($posY >= -1){
					$("#list").css("top", "0px");
					
				}else if($posY <= $limitHeight){
					$("#list").css("top", $limitHeight+"px");
				}
				
				if(tc){
					envio($a);
				}
				
				md = false;
			}

			function mouseMove(event){
				tc = false;
				if (!md) return;
				
				var $heightNavBar = $("#navBar").height();
				var $movePosY = event.pageY;

				$posY = $movePosY - ($startPosY - $listPosY);
				
				console.log($posY);
				
	
				$("#list").css("top", $posY+"px");
				
			}

			function touchMove(event){
				event.preventDefault(); 
				if(event.touches.length == 1){ 
					var event = event.touches[0]; 
					mouseMove(event);
				}
			}

			function touchDown(event){
				event.preventDefault(); 
				if(event.touches.length == 1){ 
					var event = event.touches[0]; 
					mouseDown(event);
				}
			}

			function touchUp(event){
				mouseUp(event);
			}		
