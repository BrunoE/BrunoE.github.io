PDFJS.workerSrc = 'build/pdf.worker.js';

var pdf;
var pdfFile;
var currPageNumber = 1;
var maxPages = 0;
var pdfArray = new Array();

function getFile(url){
    getBinaryData(url);
    //startPDF();
}

function getPages(){
    var i;
    var page;

    for(i=0;i<maxPages;i++){
        page = i+1;
        pdfFile.getPage(page).then(function getPageHelloWorld(page) {
            pdfArray.push(page);
        });
    }
}

function openNextPage() {
    if (currPageNumber < maxPages) {
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
    page = pdfArray[page];

    // Fetch the first page
    var scale = 0.8;
    var viewport = page.getViewport(scale);

    // Prepare canvas using PDF page dimensions
    var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // Render PDF page into canvas context
    var renderContext = {
        canvasContext: context,
        viewport: viewport
    };
    page.render(renderContext);
}

function getBinaryData (url) {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';

    xhr.onreadystatechange = function(oEvent){
        if (xhr.readyState === 4){
            if (xhr.status === 200){
                console.log(xhr.response);
                callGetDocument(xhr.response);
            }
            else{
                console.log("Error", xhr.statusText);
            }
        }
    }
    xhr.send();
}

function callGetDocument (response) {

    PDFJS.getDocument(response).then(function getPdfHelloWorld(pdf) {
        pdfFile = pdf;

        //How many pages it has
        maxPages = pdfFile.numPages;

        getPages();
        log("Chegou");
    });
}
