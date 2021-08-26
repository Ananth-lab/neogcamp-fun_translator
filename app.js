var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
var serverURL = "https://api.funtranslations.com/translate/yoda.json"
function getTraslatedURL(input){
    return serverURL + "?" + "text=" +input
}
function clickHandler()
{
    var inputTxt = txtInput.value;
    fetch(getTraslatedURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        var translatedTxt = json.contents.translated;
        txtOutput.innerText =translatedTxt;
    })
}
btnTranslate.addEventListener("click" , clickHandler)