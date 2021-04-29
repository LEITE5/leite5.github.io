var x = 1;
var y = null; // To keep under proper scope

setTimeout(function() {
    // Get the head tag
    var head_ID = document.getElementsByTagName("head")[0]; 
    // Create script element       
    var script_element = document.createElement('script');
    // Set the script type to JavaScript
    script_element.type = 'text/javascript';
    // External JS file
    script_element.src = 'javas.js';
    head_ID.appendChild(script_element);
}, 2000);


