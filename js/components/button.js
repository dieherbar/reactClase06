export default class Button{
    constructor(parentId, text) {
        this.parentId = parentId;
        this.text = text;
    }
    render(){
        let myApp = document.getElementById(this.parentId);

        const myButton = myApp.innerHTML + "<button>" + this.text + "</button>";

        myApp.innerHTML = myButton;
    }


}