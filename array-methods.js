console.log("array-methods.js loaded");

var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");

planets.forEach(function(item){
	el.innerHTML += `<p>` + item + `</p>`;
});

// Use the map method to create a new array where the first letter of each planet is capitalized

var properPlanets = planets.map(function(val, index) {
	return val.charAt(0).toUpperCase() + val.slice(1);
});

console.log(properPlanets);
// Use the filter method to create a new array that contains planets with the letter 'e'
var E_planets = planets.filter(function(val, index) {
	return val.includes("e");
});
console.log(E_planets);
// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence =  words.reduce(function(val, index) {
	return val + " " + index;
});
console.log(sentence);