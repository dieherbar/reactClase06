export default class Input {
    constructor(parentId, type) {
        this.parentId = parentId;
        this.type = type;
    }

    render() {
        let myApp = document.getElementById(this.parentId);

        const myInput = myApp.innerHTML +  "<input type= " + this.type + " ><br>"; //.innerHTML +  hace que no se sobreescriban los elementos

        myApp.innerHTML = myInput;
    }
}