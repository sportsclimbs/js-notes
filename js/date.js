
// Like topmenu.js the link to this file had to be at the bottom of the page to work

// Solution: add 'defer' to the script tag: <script src="js/date.js" defer></script>


document.getElementById('modified').innerHTML = document.lastModified;


// This next method uses code from https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics

// With elements it only works on the first element

let date = document.querySelector('#modified');
let lastMod = document.lastModified;

date.textContent = "Change this into a better format: " + lastMod;


// Next is just getting a simple date format

let theTime = new Date();
document.querySelector('#time6').textContent = theTime.getDate() + "/" + theTime.getMonth() + "/" + theTime.getFullYear();


// These are the five different paragraphs
document.querySelector('#time2').innerHTML = "<b>new Date(): </b> " + new Date();
document.querySelector('#time3').innerHTML = "<b>new Date(0): </b>" + new Date(0);
document.querySelector('#time4').innerHTML = "<b>new Date(epoch): </b>" + new Date(0);
document.querySelector('#time5').innerHTML = "<b>new Date(1978, 10, 14): </b>" + new Date(1978, 10, 14);


