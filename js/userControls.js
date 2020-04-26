//User Control Handlers

// Keyboard
function playerControlKey(event) {
    
    let keyEvt = event;
    
    switch(keyEvt.key) {
        
        case "w":
            console.log("Walking North");
            break;
            
        case "a":
            console.log("Walking West");
            break;
            
        case "s":
            console.log("Walking South");
            break;
            
        case "d":
            console.log("Walking East");
            break;

        case "q":
            console.log("Displaying Quit Menu");
            break;

        case "e":
            console.log("Displaying Player Inventory");
            break;

        case "r":
            console.log("Initiating Reply Dialog Box");
            break;

        case "f":
            console.log("Utilizing Selected Action Bar Item");
            break;

        case "1":
            console.log("Selecting Action Bar Item Number 1");
            break;

        case "2":
            console.log("Selecting Action Bar Item Number 2");
            break;

        case "3":
            console.log("Selecting Action Bar Item Number 3");
            break;

        case "4":
            console.log("Selecting Action Bar Item Number 4");
            break;

        case "5":
            console.log("Selecting Action Bar Item Number 5");
            break;

        case "6":
            console.log("Selecting Action Bar Item Number 6");
            break;

        case "7":
            console.log("Selecting Action Bar Item Number 7");
            break;

        case "8":
            console.log("Selecting Action Bar Item Number 8");
            break;

        case "9":
            console.log("Selecting Action Bar Item Number 9");
            break;

        case "0":
            console.log("Selecting Action Bar Item Number 0");
            break;

        case " ":
            console.log("Initiating Context Sensitive Action");
            break;

        default:
            break;

    }

}

//Mouse Clicks
function msDouble(event) {

    let msEvt = event;

    console.log("Double click at x:" + msEvt.offsetX + " y:" + msEvt.offsetY, msEvt);

}

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