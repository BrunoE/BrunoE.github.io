
var xLaser, yLaser;
var laserFlag = 0;
var laserImage = new Image();
var pageFlag = 0;
var laserWidth, laserHeight;
var pointerWidth, pointerHeight;

function initLaser(){
    if(pageFlag == 1){
        if(laserFlag == 0){
            laserFlag = 1;

            var canvasPDF = document.getElementById('canvasPDF');
            reloadLaser(canvasPDF.width, canvasPDF.height);
        }
        else if(laserFlag == 1){
            laserFlag = 0;
            
            var canvasLaser = document.getElementById('canvasLaser');
            var contextLaser = canvasLaser.getContext("2d");
            
            contextLaser.clearRect(0, 0, canvasLaser.width, canvasLaser.height);
        }
    }
}

function reloadLaser(width, height){
    if(laserFlag == 1) {
        
        var canvasLaser = document.getElementById('canvasLaser');
        var contextLaser = canvasLaser.getContext('2d');
        canvasLaser.height = height;
        canvasLaser.width = width;

        laserWidth = width;
        laserHeight = height;

        laserImage.onload = function () {
            var x = width / 2;
            var y = height / 2;
            
            pointerWidth = this.width/2;
            pointerHeight = this.height/2;
            
            xLaser = x - pointerWidth;
            yLaser = y - pointerHeight;

            contextLaser.drawImage(laserImage, x - pointerWidth, y - pointerHeight);
        }
        laserImage.src = 'laser_pointer.png';
    }
}

function moveLaser(message, index){

    var canvasLaser = document.getElementById('canvasLaser');
    var contextLaser = canvasLaser.getContext('2d');
    
    var xString = message.substring(0, index);
    index = index + 1;
    var yString = message.substring(index);
    
    var xPercentage = parseFloat(xString, 10);
    var yPercentage = parseFloat(yString, 10);
    
    xPercentage = (xPercentage*1.0) / 100;
    yPercentage = (yPercentage*1.0) / 100;
    
    xLaser = laserWidth * xPercentage;
    yLaser = laserHeight * yPercentage;
    
    xLaser = Math.floor( xLaser );
    yLaser = Math.floor( yLaser );

    contextLaser.clearRect(0, 0, laserWidth, laserHeight);
    contextLaser.drawImage(laserImage, xLaser, yLaser);
}
