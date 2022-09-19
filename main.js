var SpeechRecognition = window.webkitSpeechRecognition;
var recongnition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recongnition.start();
}
recongnition.onresult = function (event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
}
