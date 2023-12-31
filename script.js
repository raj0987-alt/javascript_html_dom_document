var docAncInp = document.getElementById("docAncInp");
var docAncOut = document.getElementById("docAncOut");
var docAncBtnWrap = document.getElementById("docAncBtnWrap");
var docAncBtn = document.getElementById("docAncBtn");
var docAncInpStr = "";
docAncBtn.onclick = function () {
    docAncInpStr = "";
    let docAncNode = document.anchors;

    docAncBtnWrap.style.display = "none";
    try {
        docAncInpStr += "<br><br><b>The total valid anchors using length property = </b>" + docAncNode.length;
        docAncInpStr += "<br><br><b>The first valid anchor innerHTML = </b>" + docAncNode[0].innerHTML;
        docAncInpStr += "<br><br><b>The first valid anchor href = </b>" + docAncNode[0].href;
        docAncInpStr += "<br><br><b>The first valid anchor inner text = </b>" + docAncNode[0].innerText;
        docAncInpStr += "<br><br><b>The second valid anchor name = </b>" + docAncNode[1].name;
        docAncInpStr += "<br><br><b>The second valid anchor text = </b>" + docAncNode[1].text;
    } catch (e) {
        docAncInpStr += "<br><br>" + e;
    }
    docAncOut.innerHTML = docAncInpStr;

};

var docAllAncBtn = document.getElementById("docAncAllBtn");

docAllAncBtn.onclick = function () {
    let docAncNode = document.anchors;

    docAncBtnWrap.style.display = "none";

    try {
        for (let i = 0; i <= docAncNode.length; i++) {
            docAncInpStr += `<br><br><h6>Position ${i + 1} valid href is: ${docAncNode[i].href}</h6>`
        }
    } catch (e) {
        docAncInpStr += "<br><br>" + e;
    }
    docAncOut.innerHTML = docAncInpStr;

}

//base uri start
let baseUriBtn = document.getElementById("base-uri-btn");

baseUriBtn.onclick = function () {
    let baseUri = document.baseURI;
    let baseURIShow = document.getElementById("base-uri");

    try {
        baseURIShow.innerHTML = `<span>The base URI is ${baseUri}</span>`

    }
    catch (e) {

        baseURIShow.innerHTML = `<span>No result found</span>`
    }
}

//base uri end

// document.body start

function paraAppend() {

    let paraID = document.getElementById("paraID");

    const para = document.createElement("p");
    const node = document.createTextNode("This is a paragraph.");


    para.appendChild(node);
    para.appendChild(para);
    document.body.appendChild(para);

}
// document.body end
