function whatCommand(message){
    if(message == "Start"){
			startPDF();
		}
    else if(message.indexOf("https://dl") != -1){
        getFile(message);
    }
    
   else if(message == "backwards"){
       openPrevPage()
   }
    else if(message == "forwards"){
        openNextPage()
    }
}
