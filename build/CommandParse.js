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
			//DrawParse(message);
			break;
		 default:
			break;
	}
}

function FileParse(message){
	if(data == "start"){
		startPDF();
	}
	else if(data.indexOf("https://dl") != -1){
		getBinaryData(message);
	}
}

LaserParse(message){
	if(message == "forwards"){
		openNextPage()
	}
	else if(message == "backwards"){
		openPrevPage();
	}
}
