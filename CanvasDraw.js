/**
 * Created by Utilizador on 14-10-2016.
 */

var canvas1, canvasDrawn, ctx, ctx2, flag = false, prevX = 0, currX = 0, prevY = 0, currY = 0, dot_flag = false;
var x = "black", y = 2;
var xLaser, yLaser;

function draw(){
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();

    ctx2.moveTo(prevX, prevY);
}

function findxy(res, e){
    if(res == 'down'){
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas1.offsetLeft;
        currY = e.clientY - canvas1.offsetTop;

        flag = true;
        dot_flag = true;
        if(dot_flag){
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if(res == 'up' || res == "out"){
        flag = false;
    }
    if(res == 'move'){
        if(flag){
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas1.offsetLeft;
            currY = e.clientY - canvas1.offsetTop;
            draw();
        }
    }
}

function init(){
    canvas1 = document.getElementById('canvasLaser');
    canvasDrawn = document.getElementById('canvasDraw');
    ctx = canvasDrawn.getContext("2d");
    ctx2 = canvas1.getContext("2d");

    document.body.appendChild(canvas1);
    document.addEventListener("keydown", function (e) {
        moveLaser(e.keyCode);
    });

    document.addEventListener("keyup", function (e) {
        moveLaser(e.keyCode);
    });

    canvas1.addEventListener("mousemove", function(e){
        findxy('move', e)
    }, false);
    canvas1.addEventListener("mousedown", function(e){
        findxy('down', e)
    }, false);
    canvas1.addEventListener("mouseup", function(e){
        findxy('up', e)
    }, false);
    canvas1.addEventListener("mouseout", function(e){
        findxy('out', e)
    }, false);
    canvas1.addEventListener("mousemove", function(e){
        checkPos(e)
    }, false);
    canvas1.addEventListener("mouseup", function(){
        canvasChange();
    }, false);
    canvas1.addEventListener("mousedown", function(){
        changeCursorDraw();
    }, false);
    canvas1.addEventListener("mouseup", function(){
        changeCursorNormal();
    }, false);
}

function checkPos(e){
    prevX = currX;
    prevY = currY;
    currX = e.clientX - canvas1.offsetLeft;
    currY = e.clientY - canvas1.offsetTop;
}

function canvasChange(){
    if(currY <= canvas1.height && currX <= canvas1.width){
        flagDrawn = true;
    }
}

function changeCursorDraw(){
    if(currY <= canvas1.height && currX <= canvas1.width){
        canvas1.style.cursor="crosshair";
    }
}

function changeCursorNormal(){
    canvas1.style.cursor="default";
}

function changeColor(){
    var color = document.getElementById("color").value;
    if(color == ""){
        alert("Insert a color");
    }
    else{
        x = color;
        document.getElementById("color").value="";
    }
}