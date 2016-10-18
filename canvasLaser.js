
var xLaser, yLaser;
var laserFlag = 0;
var laserImage = new Image();
var pageFlag = 0;
var laserWidth, laserHeight;

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

            xLaser = x;
            yLaser = y;

            context2.drawImage(laserImage, x, y);
        }
        laserImage.src = 'laser_pointer.png';
    }
}

function moveLaser(keycode){

    //var canvas2 = document.getElementById('canvasLaser');
    //var context2 = canvas2.getContext('2d');

    //context2.clearRect(0, 0, laserWidth, laserHeight);
    //ctx2.drawImage(laserImage, xLaser, yLaser);
}
