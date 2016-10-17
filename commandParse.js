var whatMode = 0;

function whatCommand(message){
	if(message == "file"){
		whatMode = 1;
	}
	else if(message == "laser"){
		whatMode = 2;
	}
	else if(message == "draw"){
		whatMode = 3;
	}
	else if(message == "exit"){
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
		getBinaryData(message);
	}
}

function laserParse(message){
	if(message == "forwards"){
		openNextPage();
	}
	else if(message == "backwards"){
		openPrevPage();
	}
	else{
		
	}
}

function drawParse(message){
	if(message == "swipeLeft"){
		openPrevPage();
	}
	else if(message == "swipeRight"){
		openNextPage();
	}
	else if(message == "pressUp"){
		
	}
	else if(message == "pressLong"){
	
	}
	else if(message.indexOf("move") != -1){
	
	}
}
