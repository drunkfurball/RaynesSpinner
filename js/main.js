(function () {
    
    //And go...
    // draw the canvas to the viewport size
    reloadCanvas(window.innerWidth, window.innerHeight, "canv");
    
    // redraw the canvas element to fit the window if resized
    window.addEventListener("resize", function(){
        reloadCanvas(window.innerWidth, window.innerHeight, "canv");
    });

    //activate user controls
    document.body.addEventListener("keydown", playerControlKey);
    document.body.addEventListener("mousedown", msDrag);
    document.body.addEventListener("mouseup", msDrop);
    document.body.addEventListener("click", msClick);

    let loop = setInterval(update, 1000 / FPS);

})(args);