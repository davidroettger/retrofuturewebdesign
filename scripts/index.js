
var gedicht = {
  titel:"Kraftwerk – Nummern",
  strophen: ["Eins","zwei", "drei", "vier"  ,"Fünf", "sechs", "sieben", "acht"   ,"Uno", "due"   ,"Três", "quatro" ,"One", "two  Ichi, ni, san, chi    Adjin, dva, tri   Li, tva, tri"] 
 };




var elem = document.getElementById('content');
var child = elem.children[2];







document.querySelector(".content__h1").addEventListener("click", function(event) {
	child.classList.toggle("content__strophe--animate");
}, false);


console.log(child);

