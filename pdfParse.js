/**
 * Created by Utilizador on 14-10-2016.
 */


pdfWorker.workerSrc = 'build/pdf.worker.js';

var pdf;
var pdfFile;
var currPageNumber = 0;
var maxPages = 0;
var savedCanvas = 0;
var pdfArray = new Array();
var saveCanvas = new Array();

var flagDrawn = false;

function getFile(){

    var url = "Aula1_MKT.pdf";
    callGetDocument (url);
}

function getPages(){
    var i;
    var page;

    for(i=0;i<maxPages;i++){
        page = i+1;
        pdfFile.getPage(page).then(function getPage(page) {
            pdfArray.push(page);
        });
    }
}

function openNextPage() {
    if (currPageNumber < maxPages) {
        saveChanges();
        currPageNumber = currPageNumber + 1;
        if(currPageNumber > savedCanvas){
            savedCanvas = savedCanvas + 1;
        }
        changePage(currPageNumber);
    }
}

function openPrevPage() {
    if (currPageNumber > 0) {
        saveChanges();
        currPageNumber = currPageNumber - 1;
        changePage(currPageNumber);
    }
}

function startPDF(){
    changePage(0);
    pageFlag = 1;
}

function changePage(page){

    var data = pdfArray[page];

    // Fetch the first page
    var scale = 1;
    var viewport = data.getViewport(scale);

    // Prepare canvas using PDF page dimensions
    var canvas = document.getElementById('canvasPDF');
    var context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // Render PDF page into canvas context
    var renderContext = {
        canvasContext: context,
        viewport: viewport
    };
    data.render(renderContext);

    reloadLaser(canvas.width, canvas.height);

    var canvas1 = document.getElementById('canvasDraw');
    var context1 = canvas1.getContext('2d');
    canvas1.height = viewport.height;
    canvas1.width = viewport.width;
    
    loadDrawnCanvas(page, context1);

    if(page == 0){
        var canvasLaser = document.getElementById('canvasLaser');
        canvasLaser.height = viewport.height;
        canvasLaser.width = viewport.width;
    }
}

function callGetDocument (url) {

    pdfWorker.getDocument(url).then(function getPdf(pdf) {
        pdfFile = pdf;

        //How many pages it has
        maxPages = pdfFile.numPages;

        getPages();
    });
}

function saveChanges(){
    if(flagDrawn == true){
        flagDrawn = false;

        var canvas = document.getElementById('canvasDraw');
        var drawnSlide = canvas.toDataURL();

        saveCanvas.splice(currPageNumber, 1);
        saveCanvas.splice(currPageNumber, 0, drawnSlide);
    }
}
