// declarations, etc.

const FPS = 30; //Frames per second
const DEFAULT_BACKGROUND = "black";

function reloadCanvas(width, height, name) {

    //delete any remnants of canvas elements past
    let root = document.getElementById('root');
    root.removeChild(root.childNodes[0]);

    //create a new canvas element, same as the first, but with the new dimensions
    let canv = document.createElement('canvas');
    canv.id = name;
    canv.width = width;
    canv.height = height;
    canv.style.position = "absolute";
    canv.style.top = 0;
    canv.style.left = 0;
    canv.style.margin = 0;
    canv.style.zIndex = 10;

    // add the new element
    root.appendChild(canv);

}

//erase the canvas element (by filling it with the default background color)
function clearBoard(ctx, cnv) {

    ctx.fillStyle = DEFAULT_BACKGROUND;
    ctx.fillRect(0, 0, cnv.width, cnv.height);

}

//everything that needs to be redrawn each frame
function update() {

    reloadCanvas(window.innerWidth, window.innerHeight, "canv");
    let cnv = document.getElementById("canv");
    let ctx = cnv.getContext("2d");
    clearBoard(ctx, cnv);
    
}

let args = ["Success!"]; // run-time parameters, handy for debugging, passed to the main.js function onload