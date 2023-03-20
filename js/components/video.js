export default class Video {
    constructor(parentId,source) {
        this.parentId = parentId;
        this.source = source;
    }
    render() {
        let myApp = document.getElementById(this.parentId);
        const myVideo = myApp.innerHTML + "<video width='320' height='320' controls> <source src='./"+this.source+"' type='video/mp4'></video>";
        myApp.innerHTML = myVideo;
    }
}

// export class Iframe{
// constructor(parentId) {
//     this.parentId = parentId;
//     //this.url = url;
// }
// render() {
//     let myApp = document.getElementById(this.parentId);
//     const myIframe = myApp.innerHTML + "<iframe width='560' height='315' src='https://www.youtube.com/embed/gAuB15tqSKk' ></iframe>";
//     myApp.innerHTML = myIframe;
// }
// }
