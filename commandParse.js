var whatMode = 0;

function whatCommand(message){
	if(message == "file"){
		whatMode = 1;
	}
	else if(message == "laser"){
		whatMode = 2;
		toggleLaser();
	}
	else if(message == "draw"){
		whatMode = 3;
		toggleDrawMouse();
	}
	else if(message == "exit"){
		if(whatMode == 2){
			toggleLaser();
		}
		else if(whatMode == 3){
			toggleDrawMouse();
		}
		whatMode = 0;
	}
	else{
		whatParse(message, whatMode);
	}
}

function whatParse(message, value){
	switch(value){
		case 1:
			fileParse(message);
			break;
		case 2:
			laserParse(message);
			break;
		case 3:
			drawParse(message);
			break;
		 default:
			break;
	}
}

function fileParse(message){
	if(message == "start"){
		startPDF();
	}
	else if(message.indexOf("https://dl") != -1){
		getURLData(message);
	}
}

function laserParse(message){
	if(message == "forwards"){
		openNextPage();
	}
	else if(message == "backwards"){
		openPreviousPage();
	}
	else{
		var index = message.indexOf("|");
		if(index > 0){
			moveLaser(message, index);
		}
	}
}

function drawParse(message){
	if(message == "swipeLeft"){
		openPreviousPage();
	}
	else if(message == "swipeRight"){
		openNextPage();
	}
	else if(message == "pressLong"){
		flagDraw = false;
	}
	else if(message == "doubleTap"){
		flagDraw = true;
		flagDrawn = true;
	}
	else if(message.indexOf("move") != -1){
		movePoint(message);
	}
	else if(message.indexOf("color") != -1){
		changeColor(message);
	}
}
