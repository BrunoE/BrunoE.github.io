/**
 * Created by Utilizador on 05-09-2016.
 */

PDFJS.workerSrc = 'build/pdf.worker.js';

var pdf;
var pdfFile;
var currPageNumber = 1;
var numPages = 0;
var pdfArray = new Array();

function getFile(url){
    getURLData(url);
}

function getPages(){
    var i;
    var page;
    
    for(i=0;i<numPages;i++){
        page = i+1;
        pdfFile.getPage(page).then(function getCertainPage(page) {
            pdfArray.push(page);
        });
    }
}

function openNextPage() {
    if (currPageNumber < numPages) {
        currPageNumber = currPageNumber + 1;
        changePage(currPageNumber);
    }
}

function openPrevPage() {
    if (currPageNumber > 0) {
        currPageNumber = currPageNumber - 1;
        changePage(currPageNumber);
    }
}

function startPDF(){
    changePage(0);
}

function changePage(page){
    var data = pdfArray[page];
    
    var scale = 1.0;
    var viewport = data.getViewport(scale);
    
    var canvas = document.getElementById('canvasPDF');
    var context = canvas.getContext('2d');
    
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    var contextObject = {
        canvasContext: context,
        viewport: viewport
    };
    data.render(contextObject);
}

function getURLData (url) {

    var request = new XMLHttpRequest();

    request.open('GET', url, true);
    request.responseType = 'arraybuffer';
    
    request.onreadystatechange = function(oEvent){
        if (request.readyState === 4){
            if (request.status === 200){
                callGetDocument(request.response);
            }
            else{
                console.log("Error", request.statusText);
            }
        }
    }
    request.send();
}

function callGetDocument (response) {

    PDFJS.getDocument(response).then(function getPDF(pdfObject) {
        pdfFile = pdfObject;
        numPages = pdfFile.numPages;
        getPages();
    });
}
