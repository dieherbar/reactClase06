import Button from "./components/button.js";
import Input from "./components/input.js";

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