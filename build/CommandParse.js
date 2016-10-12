var myWorker;

function whatCommand(message){
	if(message == "file"){
		myWorker = new Worker('threads/FileParse.js');
		setListener();
	}
	else if(message == "laser"){
		myWorker = new Worker('threads/LaserMode.js');
		setListener()
	}
	else if(message == "draw"){
		myWorker = new Worker('threads/LaserMode.js');
		setListener()
	}
	else if(message == "exit"){
		myWorker.terminate();
	}
	else{
		myWorker.postMessage(message);
	}
}

function setListener(){
	myWorker.addEventListener('message', function(e) {
        	document.getElementById('Conexao').textContent = e.data;
	}, false);
}
