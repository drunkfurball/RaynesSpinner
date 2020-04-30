//User Control Handlers

// Keyboard
function playerControlKey(event) {
    
    let keyEvt = event;
    
    switch(keyEvt.key) {
        default:
            break;
    }

}

//Mouse Clicks

function msClick(event) {

    let msEvt = event;

    console.log("Single click at x:" + msEvt.offsetX + " y:" + msEvt.offsetY, msEvt);

}

//Mouse Drag and Drop
function msDrag(event) {
    
    //enable drag
    window.onmousemove = msMove;
    
}

function msDrop () {

    //disable drag
    window.onmousemove = null;

}

function msMove(event) {

    //mouse move event
    let msEvt = event;

    //translate drag motion
    console.log("Dragging to x:" + msEvt.offsetX + " y:" + msEvt.offsetY, msEvt);

}