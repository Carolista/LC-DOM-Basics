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

    // Declare objects to gain access to element properties
    let box = document.getElementById("box");
    let red = document.getElementById("red");
    let yellow = document.getElementById("yellow");
    let blue = document.getElementById("blue");

    // Create listeners to change color of border to same hex values as buttons
    // Note: DOM can't access style sheets, so just hard-code the hex codes here for now
    red.addEventListener("click", function() {
        console.log('Make it red!'); // use the browser dev tools JS console to see this happening
        box.style.borderColor = "#a7240d";
    });
    yellow.addEventListener("click", function() {
        console.log('Make it yellow!');
        box.style.borderColor = "#ddac0a";
    });
    blue.addEventListener("click", function() {
        console.log('Make it blue!');
        box.style.borderColor = "#0d64b6";
    });


    /*** STEP 2: CHANGE THE BORDER THICKNESS ***/

    // Declare objects to gain access to element properties
    let four = document.getElementById("4");
    let eight = document.getElementById("8");
    let twelve = document.getElementById("12");

    // Create listeners to change thickness of box border
    four.addEventListener("click", function() {
        console.log('Make it 4 pixels thick!');
        box.style.borderWidth = 4 + 'px';
    });
    eight.addEventListener("click", function() {
        console.log('Make it 8 pixels thick!');
        box.style.borderWidth = 8 + 'px';
    });
    twelve.addEventListener("click", function() {
        console.log('Make it 12 pixels thick!');
        box.style.borderWidth = 12 + 'px';
    });


    /*** STEP 3: CHANGE THE BORDER STYLE ***/

    // Declare objects to gain access to element properties
    let dotted = document.getElementById("dotted");
    let double = document.getElementById("double");
    let dashed = document.getElementById("dashed");

    // Create listeners to change style of box border
    dotted.addEventListener("click", function() {
        console.log('Make it dotted!');
        box.style.borderStyle = "dotted";
    });
    double.addEventListener("click", function() {
        console.log('Make it doubled!');
        box.style.borderStyle = "double";
    });
    dashed.addEventListener("click", function() {
        console.log('Make it dashed!');
        box.style.borderStyle = "dashed";
    });

}