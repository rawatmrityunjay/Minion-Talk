var buttonTranslate = document.querySelector("#translate-button");
var minion_input = document.querySelector("#input")
var minion_output = document.querySelector("#output")

var api_url = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){

    return api_url + "?" + "text=" + input

}

function clickHandler(){

    var input_text = minion_input.value;

    fetch(getTranslationURL(input_text))
    .then(response => response.json())
    .then(json => {

        var translatedText = json.contents.translated;
        minion_output.innerText = translatedText;

    })

}

buttonTranslate.addEventListener("click",clickHandler)