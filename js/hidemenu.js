/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// from w3schools - https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp

let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topmenu").style.top = "0";
  } else {
    document.getElementById("topmenu").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
} 