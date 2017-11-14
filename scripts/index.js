var gedicht = {
	titel:"Der Panther",
	strophen: ["Sein Blick ist vom Vorübergehn der Stäbe so müd geworden, dass er nichts mehr hält. Ihm ist, als ob es tausend Stäbe gäbe und hinter tausend Stäben keine Welt.", "Der weiche Gang geschmeidig starker Schritte, der sich im allerkleinsten Kreise dreht, ist wie ein Tanz von Kraft um eine Mitte, in der betäubt ein großer Wille steht.", "Nur manchmal schiebt der Vorhang der Pupille sich lautlos auf -. Dann geht ein Bild hinein, geht durch der Glieder angespannte Stille - und hört im Herzen auf zu sein." ] 
 }


// global selector
var container = document.querySelector(".gedicht");

var panther = document.querySelector(".panther");

// create paragraph for verse and attach class to every paragraph

for(var i = 0; i < gedicht.strophen.length; i ++) {

var paragraph = document.createElement("p"); 
paragraph.appendChild(document.createTextNode(gedicht.strophen[i]));
container.appendChild(paragraph).classList.add("anotherclass_"+i);

}

// click scale paragraphs 

for(var i = 0; i < gedicht.strophen.length; i ++) {

const clickp = document.querySelector(".anotherclass_"+i);
clickp.addEventListener("click", function(){;
	clickp.classList.toggle("zoom")

}, false);

}

// Animation

var start = null;
var elements = document.querySelector('.gedicht');
elements.style.position = "absolute";

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  elements.style.left = 0 + 'px';
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

elements.addEventListener("click", function() { 
	window.requestAnimationFrame(step);

	panther.style.transform= "scale(2)";

}, false);


// Task : add a new class when transition is over. Then back again.

