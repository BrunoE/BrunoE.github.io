/**
 * Created by Utilizador on 14-10-2016.
 */

var flagDraw = false;
var flagDrawn = false;
var flagDrawMouse = 0;

var saveCanvas = new Array();
var drawImage = new Image();
var color = "black";

var pointerDrawWidth, pointerDrawHeight;
var laserWidth, laserHeight;
var drawWidth, drawHeight;
var xDraw, yDraw;

function initDrawMouse(){
    if(pageFlag == 1){
        if(flagDrawMouse == 0){
            flagDrawMouse = 1;

            var canvasPDF = document.getElementById('canvasPDF');
            reloadDraw(canvasPDF.width, canvasPDF.height);
        }
        else if(flagDrawMouse == 1){
            flagDrawMouse = 0;
            
            var canvasDraw = document.getElementById('canvasPointer');
            var contextDraw = canvasDraw.getContext("2d");
            
            contextDraw.clearRect(0, 0, canvasDraw.width, canvasDraw.height);
        }
    }
}

function reloadDraw(width, height){
    if(flagDrawMouse == 1) {
        
        var canvasDraw = document.getElementById('canvasPointer');
        var contextDraw = canvasDraw.getContext('2d');
        canvasDraw.height = height;
        canvasDraw.width = width;

        drawWidth = width;
        drawHeight = height;

        drawImage.onload = function () {
            var x = width / 2;
            var y = height / 2;
            
            pointerDrawWidth = this.width/2;
            pointerDrawHeight = this.height/2;
            
            xDraw = x - pointerDrawWidth;
            yDraw = y - pointerDrawHeight;

            contextLaser.drawImage(drawImage, x - pointerDrawWidth, y - pointerDrawHeight);
        }
        drawImage.src = 'blueOrange.png';
    }
}

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
