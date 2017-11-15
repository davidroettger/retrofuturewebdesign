
var container = document.querySelector(".container");

var create_div_outer = document.createElement("DIV");

var create_div_inner = document.createElement("DIV");

var outerlayer = container.appendChild(create_div_outer)

outerlayer.classList.add("outerlayer");

var innerlayer = document.querySelector(".outerlayer").appendChild(create_div_inner);

innerlayer.classList.add("innerlayer");


//mouseover add class move to innerlayer to animate the x position

outerlayer.addEventListener('mouseover', function() {
  innerlayer.classList.add("move");
}, false)


outerlayer.addEventListener('mouseout', function() {
  innerlayer.classList.remove("move");
}, false)








