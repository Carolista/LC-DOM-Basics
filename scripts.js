/*** DOM BASICS ***/

/*
    Here are a couple basic exercises on the same page to give you a little practice before proceeding to the A5 prep exercises.
*/

// Event listener for page load
window.addEventListener("load", function() {
    console.log('Page loaded.');
    init();
});

// DOM code for page elements
function init() {

    /*** STEP 1: CHANGE THE BORDER COLOR ***/

    // TODO: Declare objects to gain access to element properties.
    
    let box = document.getElementById("box");
    let red = document.getElementById("red");
    let yellow = document.getElementById("yellow")
    let blue = document.getElementById("blue");

    // TODO: Create listeners to change color of border to same hex values as buttons.
    // Note: DOM can't access style sheets, so just hard-code the hex codes here for now.

    red.addEventListener("click", function () {
        console.log('Red Box!');
        box.style.borderColor = "red";
    });

    yellow.addEventListener("click", function () {
        console.log("Yellow Box!");
        box.style.borderColor = "yellow";
    });

    blue.addEventListener("click", function () {
        console.log("Blue Box!");
        box.style.borderColor = "blue";
    });





    /*** STEP 2: CHANGE THE BORDER THICKNESS ***/

    // TODO: Declare objects to gain access to element properties.

    let fourPx = document.getElementById("4");
    let eightPx = document.getElementById("8");
    let twelvePx = document.getElementById("12");


    // TODO: Create listeners to change thickness of box border.

    fourPx.addEventListener("click", function () {
        console.log("Four PX!");
        box.style.borderWidth = 4 + 'px';
    });

    eightPx.addEventListener("click", function () {
        console.log("Eight PX!");
        box.style.borderWidth = 8 + 'px';
    });

    twelvePx.addEventListener("click", function () {
        console.log("Twelve Px!");
        box.style.borderWidth = 12 + 'px';
    });

    /*** STEP 3: CHANGE THE BORDER STYLE ***/

    // TODO: Declare objects to gain access to element properties.
    
    let dottedLine = getElementById("dotted");
    let doubleLine = getElementById("double");
    let dashedLine = getElementById("dashed");

    // TODO: Create listeners to change style of box border.

    dottedLine.addEventListener("click", function () {
        console.log("Dotted Line Please!");
        box.style.borderStyle = "dotted";
    });

    doubleLine.addEventListener("click", function () {
        console.log("Double Line!");
        box.style.borderStyle = "double";
    });

    dashedLine.addEventListener("click", function () {
        console.log("Dashed Line :)");
        box.style.borderStyle = "dashed";
    })

}