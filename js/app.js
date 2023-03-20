import Button from "./components/button.js";
import Input from "./components/input.js";
import Video from "./components/video.js";
import Iframe from "./components/iframe.js";

let arrayButtons = ["Login","Signup","Reset","Cancel","Send"];

function RenderButtons(text){
    let myButton = new Button("botones", text );
    myButton.render();
}
arrayButtons.forEach(element => RenderButtons(element));


var arrInputs = ["input", "input", "output", "input","output"];

function filtrarInput(elemento){
    return elemento = "input";
}
var inputFiltrados = arrInputs.filter(filtrarInput);

function RenderInputs(type){
    let myInput = new Input("inputs", type );
    myInput.render();
}
inputFiltrados.forEach(element => RenderInputs(element));

////////tarea clase06////////
function renderVideo(){
    let myVideo = new Video("video");  //"https://vimeo.com/783453912" https://www.youtube.com/embed/4z9TulgGIZo
    myVideo.render();
}
let myVideoJs = renderVideo("video","resources/dolbycanyon.mp4");
//myVideoJs.render();

const myIframe = new Iframe("iframe","https://www.youtube.com/embed/gAuB15tqSKk");
myIframe.render();
//new Video("video");
//myVideoJs.render();