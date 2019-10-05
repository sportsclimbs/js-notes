// Currently this file only works w page 5 because the CSS uses tha attribute selector href="#" to mark a button active.
// Need a way to get the file name and if the file name === href= name replace it with #. This might requre a loop.

document.getElementById('topmenu').innerHTML = '<ul><li><a href="index.html">page 1</a></li><li><a href="page2.html">page 2</a></li><li><a href="page3.html">page 3</a></li><li><a href="page4.html">page 4</a></li><li><a href="#">page 5</a></li><li><a href="page6.html">page 6</a></li><li><a href="page7.html">page 7</a></li><li><a href="page8.html">page 8</a></li><li><a href="page9.html">page 9</a></li><li><a href="page10.html">page 10</a><li><a href="links.html">Links</a></li></li></ul>'



// Lessons from this:

// 1. Line breaks YOU can put in tags etc. but a line break means you're starting a new statement.

// 2. The link to this file needs to be at the bottom of the page. Would document.ready have helped if wanted at the top?

// 3. Still can't use of every page because CSS uses an attribute selector for the current page href="#"

// 4. innerHTML refers to the HTML of the selected element. What is inner can be anything inc. more HTML tags


// Could maybe use the replace function to sort out the attribute selector with a body class of page5.
// It could be: if {body.class = page5 replace('page5.html', '#')}