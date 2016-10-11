var myWorker;

function whatCommand(message){
	if(message == "file"){
		myWorker = new Worker("threads/FileParse.js");
	}
	else if(message == "laser"){
		myWorker = new Worker("threads/LaserMode.js");
	}
	else if(message == "draw"){
		myWorker = new Worker("threads/LaserMode.js");
	}
	else if(message == "exit"){
		myWorker.terminate();
	}
	else{
		myWorker.postMessage(message);
	}
}
