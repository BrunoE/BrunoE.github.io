/**
 * Created by Utilizador on 05-09-2016.
 */

PDFJS.workerSrc = 'build/pdf.worker.js';

var pdf;
var pdfFile;
var currentPage = 0;
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
    if (currentPage < numPages) {
        currentPage = currentPage + 1;
        changePage(currentPage);
    }
}

function openPrevPage() {
    if (currentPage > 0) {
        currentPage = currentPage - 1;
        changePage(currentPage);
    }
}

function startPDF(){
    changePage(0);
    pageFlag = 1;
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
