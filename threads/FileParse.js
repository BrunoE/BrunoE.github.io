/**
 * Created by Utilizador on 11-10-2016.
 */

self.addEventListener('message', function(e) {
  var data = e.data;
  console.log("Entrou");
  if(data == "start"){
    console.log("Entrou_S");
    startPDF();
    self.postMessage('Presentation Started');
  }
  else if(data.indexOf("https://dl") != -1){
    console.log("Entrou_HTTP");
    self.postMessage('Presentation Started');
    getBinaryData(data);
  }
}, false);

