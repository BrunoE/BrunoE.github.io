/**
 * Created by Utilizador on 14-10-2016.
 */

var flagDraw = false;
var flagDrawn = false;
var flagDrawMouse = 0;

var saveCanvas = new Array();
var drawImage = new Image();
var color = "black";
var lineWidth = 2;

var pointerDrawWidth, pointerDrawHeight;
var drawWidth, drawHeight;
var xDraw, yDraw;
var xDrawPrevious, yDrawPrevious;

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

            contextDraw.drawImage(drawImage, x - pointerDrawWidth, y - pointerDrawHeight);
        }
        drawImage.src = 'ledBlue.png';
    }
}

function movePoint(message){
    var canvasDraw = document.getElementById('canvasPointer');
    var contextDraw = canvasDraw.getContext('2d');
    
    var index1 = message.indexOf(":");
    index1 = index1 + 1;
    var index2 = message.indexOf("|");
    
    var xString = message.substring(index1, index2);
    index2 = index2 + 1;
    var yString = message.substring(index2);

    console.log(xString);
    console.log(yString);
    
    var xDistance = parseInt(xString, 10);
    var yDistance = parseInt(yString, 10);
    
    xDrawPrevious = xDraw;
    yDrawPrevious = yDraw;
    
     xDraw = xDraw + xDistance;
     yDraw = yDraw + yDistance;
    
     contextDraw.clearRect(0, 0, drawWidth, drawHeight);
     contextDraw.drawImage(DrawImage, xLaser, yLaser);
    
    if(flagDraw){
        draw();
    }
}

function draw(){
    var canvasDrawn = document.getElementById('canvasDraw');
    var contextDrawn = canvasDrawn.getContext("2d");
    
    contextDrawn.beginPath();
    contextDrawn.moveTo(xDrawPrevious, yDrawPrevious);
    contextDrawn.lineTo(xDraw, yDraw);
    contextDrawn.strokeStyle = color;
    contextDrawn.lineWidth = lineWidth;
    contextDrawn.stroke();
    contextDrawn.closePath();
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
