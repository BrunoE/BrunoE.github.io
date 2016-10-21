/**
 * Created by Utilizador on 14-10-2016.
 */

var flagDraw = false;
var flagDrawn = false;
var saveCanvas = new Array();
var color = "black";

function movePoint(message){
  flagDrawn = true;
}

function changeColor(message){
  var index = message.indexOf("-");
  index = index + 1;
  color = message.substring(index);
}

function saveChanges(currentPageNumber){
    if(flagDrawn == true){
        flagDrawn = false;

        var canvasDraw = document.getElementById('canvasDraw');
        var drawnSlide = canvasDraw.toDataURL();

        saveCanvas.splice(currentPageNumber, 1);
        saveCanvas.splice(currentPageNumber, 0, drawnSlide);
    }
}
