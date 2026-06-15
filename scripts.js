/**** DOM BASICS ****/

/** ONE ELEMENT TO BE MANIPULATED **/

// Declare an object representing the box element
let box = document.getElementById('box');

/*** CHANGE THE BORDER THICKNESS ***/

// Declare objects to gain access to element properties
let four = document.getElementById('4');
let eight = document.getElementById('8');
let twelve = document.getElementById('12');

// Create a reusable function that manipulates the border-width property
function changeBorderWidth(width) {
    console.log(`Make it ${width} pixels thick!`);
    box.style.borderWidth = width + 'px';
}

// Create listeners to change thickness of box border
four.addEventListener('click', () => changeBorderWidth(4));
eight.addEventListener('click', () => changeBorderWidth(8));
twelve.addEventListener('click', () => changeBorderWidth(12));

/*** CHANGE THE BORDER COLOR ***/

// Declare objects representing the three colored buttons
let red = document.getElementById('red');
let yellow = document.getElementById('yellow');
let blue = document.getElementById('blue');

// Create a reusable function to manipulate the border-color property
function changeBorderColor(name, hexCode) {
	console.log(`Make it ${name}!`);
	box.style.borderColor = hexCode;
}

// Create listeners to change color of border to same hex values as buttons
// Note: DOM can't access style sheets, so we must provide the color code
red.addEventListener('click', () => changeBorderColor('red', '#a7240d'));
yellow.addEventListener('click', () => changeBorderColor('yellow', '#ddac0a'));
blue.addEventListener('click', () => changeBorderColor('blue', '#0d64b6'));

/*** CHANGE THE BORDER STYLE ***/

// Declare objects to gain access to element properties
let dotted = document.getElementById('dotted');
let double = document.getElementById('double');
let dashed = document.getElementById('dashed');

// Define a reusable function that manipulates the border-style property
function changeBorderStyle(style) {
	console.log(`Make it ${style}!`);
	box.style.borderStyle = style;
}

// Create listeners to change style of box border
dotted.addEventListener('click', () => changeBorderStyle('dotted'));
double.addEventListener('click', () => changeBorderStyle('double'));
dashed.addEventListener('click', () => changeBorderStyle('dashed'));
