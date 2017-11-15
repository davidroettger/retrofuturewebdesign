
var gedicht = {
  titel:"Der Panther",
  strophen: ["Sein Blick ist vom Vorübergehn der Stäbe so müd geworden, dass er nichts mehr hält. Ihm ist, als ob es tausend Stäbe gäbe und hinter tausend Stäben keine Welt.", "Der weiche Gang geschmeidig starker Schritte, der sich im allerkleinsten Kreise dreht, ist wie ein Tanz von Kraft um eine Mitte, in der betäubt ein großer Wille steht.", "Nur manchmal schiebt der Vorhang der Pupille sich lautlos auf -. Dann geht ein Bild hinein, geht durch der Glieder angespannte Stille - und hört im Herzen auf zu sein." ] 
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
  this.scaleOuterDivs = function () {
    for (var i = 0; i < numberofdivs; i++) {
      var selector = document.querySelector(".outerlayer_"+i);
      selector.style.transform = "rotate(45deg)" 
    }
  }
}

// Initialize new Divs Object

var divs =  new Divs(".selection_1",2000);

console.log(divs.idofdiv);

// Execute Method of divs Object
divs.creatediv();
divs.scaleClasses();
divs.scaleOuterDivs();



