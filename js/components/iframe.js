export default 
class Iframe{
constructor(parentId,url) {
    this.parentId = parentId;
    this.url = url;
}
render() {
    let myApp = document.getElementById(this.parentId);
    const myIframe = myApp.innerHTML + "<iframe width='560' height='315' src=" + this.url + "></iframe>";
    myApp.innerHTML = myIframe;
}
}