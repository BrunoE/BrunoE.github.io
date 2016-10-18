

var laserFlag = 0;
var laserImage = new Image();
var pageFlag = 0;
var DownArrow = 40, UpArrow = 38;
var laserWidth, laserHeight;

function initLaser(){
    if(pageFlag == 1){
        if(laserFlag == 0){
            laserFlag = 1;

            var canvas2 = document.getElementById('canvasPDF');
            reloadLaser(canvas2.width, canvas2.height);
        }
        else if(laserFlag == 1){
            laserFlag = 0;

            var canvas2 = document.getElementById('canvasLaser');
            var context2 = canvas2.getContext('2d');
            context2.clearRect(0, 0, canvas2.width, canvas2.height);
        }
    }
}

function reloadLaser(width, height){
    if(laserFlag == 1) {
        var canvas2 = document.getElementById('canvasLaser');
        var context2 = canvas2.getContext('2d');
        canvas2.height = height;
        canvas2.width = width;

        laserWidth = width;
        laserHeight = height;

        laserImage.onload = function () {
            var x = width / 2;
            var y = height / 2;

            xLaser = x;
            yLaser = y;

            context2.drawImage(laserImage, x, y);
        }
        laserImage.src = 'laserpointer.png';
    }
}

function moveLaser(keycode){

    var canvas2 = document.getElementById('canvasLaser');
    var context2 = canvas2.getContext('2d');

    context2.clearRect(0, 0, laserWidth, laserHeight);
    if(keycode == DownArrow){
        yLaser = yLaser - 7;
    }
    else if (keycode == UpArrow){
        yLaser = yLaser + 7;
    }
    ctx2.drawImage(laserImage, xLaser, yLaser);
}