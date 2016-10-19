/**
 * Created by Utilizador on 14-10-2016.
 */

var flagDraw = false;
var flagDrawn = false;

function movePoint(message){

}

function changeColor(message){
  
}

function saveChanges(currentPageNumber){
    if(flagDrawn == true){
        flagDrawn = false;

        var canvasDraw = document.getElementById('canvasDraw');
        var drawnSlide = canvasDraw.toDataURL();

        saveCanvas.splice(currentPageNumber, 1);
        saveCanvas.splice(currentPageNumber, 0, drawnSlide);
    }
