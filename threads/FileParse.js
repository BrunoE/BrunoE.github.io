/**
 * Created by Utilizador on 11-10-2016.
 */

self.addEventListener('message', function(e) {
  var data = e.data;
  if(data == 'start'){
    startPDF();
    self.postMessage('Presentation Started');
  }
  else if(data.indexOf("https://dl") != -1){
    self.postMessage('Presentation Started');
    getBinaryData(data);
  }
}, false);
