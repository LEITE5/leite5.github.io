var x = 1;
var y = null; // To keep under proper scope

setTimeout(function() {
    x = x * 3 + 2;
    y = x / 2;
    document.getElementById("delay").innerHTML = "Delay Working";
    var x = document.createElement("IMG");
  x.setAttribute("src", "4.jpg");
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  x.setAttribute("alt", "The Pulpit Rock");
  document.body.appendChild(x);
}, 5000);