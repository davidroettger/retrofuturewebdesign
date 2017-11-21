
var gedicht = {
  titel:"Kraftwerk – Nummern",
  strophen: ["Eins, zwei, drei, vier   Fünf, sechs, sieben, acht    Uno, due    Três, quatro    One, two    Ichi, ni, san, chi    Adjin, dva, tri   Li, tva, tri"] 
 }

// Object Prototype / Constructor / Argument ist eine Div ID / 

function Divs(idofdiv,numberofdivs)  {
  this.idofdiv = idofdiv,
  this.creatediv = function () {
    var container = document.querySelector(idofdiv);

    // create divs // the argument should be used as the name of the parent div 
    // you can throw in every div //

    for (var i = 0 ; i < numberofdivs; i++) {
      var outerlayer = container.appendChild(document.createElement("DIV"));
      outerlayer.classList.add("outerlayer_"+i);
      var innerlayer = outerlayer.appendChild(document.createElement("DIV"));
      innerlayer.classList.add("innerlayer_"+i);

    }
}
    // looks for classes and change the scale properties of the inner div
  this.scaleClasses = function () {
    for (var i = 0; i < numberofdivs; i++) {
      var selector = document.querySelector(".innerlayer_"+i);
      selector.style.transform = "scale(" + i/550 + ")" 
    }
  }
  // looks for classes and change rotate properties of the outer div
  this.rotateOuterDivs = function () {
    for (var i = 0; i < numberofdivs; i++) {
      var selector = document.querySelector(".outerlayer_"+i);
      selector.classList.toggle("rotate")
      //selector.style.transform = "rotate(45deg)";
    }
  }
  
  //pick random outer divs and change class for coloration 
  this.pickandcolorclass = function () {
    for (var i = 0; i < numberofdivs/25; i++) {
      var randomnumber = Math.round(getRandomArbitrary(1,numberofdivs)); 
      var selector = document.querySelector(".outerlayer_"+randomnumber);
      selector.classList.add("colored");
    }
  }

  //click div --> zoom / text
  this.addEventListenerRect = function() {
    for (var i = 0; i < numberofdivs; i++) { 
      (function() {
      var selector = document.querySelector(".outerlayer_"+i);
      selector.addEventListener("click", function(){
        var text = document.createTextNode(gedicht.strophen[0]);
        selector.classList.toggle("zoom");
        selector.appendChild(text);
      }

        )
      }());

    }     
  }

}


// Funktion für Random Numbers (for coloration)

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// Initialize new Divs Object

var divs =  new Divs(".selection_1",3000);

console.log(divs.idofdiv);

// Execute Method of divs Object
divs.creatediv();
divs.scaleClasses();
divs.rotateOuterDivs();
divs.pickandcolorclass();
// divs.addEventListenerRect();



