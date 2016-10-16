var myWorker;
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
		console.log(whatMode);
		Parse(message, whatMode);
	}
}

function Parse(message, value){
	switch(value){
		case 1:
			FileParse(message);
			break;
		case 2:
			LaserParse(message);
			break;
		case 3:
			DrawParse(message);
			break;
		 default:
			break;
	}
}

function FileParse(message){
	if(message == "Start"){
		startPDF();
	}
	else if(message.indexOf("https://dl") != -1){
		getBinaryData(message);
	}
}

function LaserParse(message){
	if(message == "forwards"){
		openNextPage()
	}
	else if(message == "backwards"){
		openPrevPage();
	}
	else{
		
	}
}

function DrawParse(message){
	if(message == "swipeLeft"){
		openPrevPage();
	}
	else if(message == "swipeRight"){
		openNextPage()
	}
	else if(message == "pressUp"){
		
	}
	else if(message == "pressLong"){
	
	}
	else if(message.indexOf("move") != -1){
	
	}
}
