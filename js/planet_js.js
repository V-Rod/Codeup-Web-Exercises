/**
 * Created by V-Rod on 11/10/16.
 */
(function(){
    "use strict";

    // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
    var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

    // function for logging the planets array
    function logPlanets(planets) {
        console.log("Here is the list of planets:");
        console.log(planets);
        console.log("---- ---- ---- ----");
    }

    logPlanets(planets);

    console.log('Adding "The Sun" to the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.unshift("The Sun");
    logPlanets(planets);

    console.log('Adding "Pluto" to the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.push("Pluto");
    logPlanets(planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.shift("The Sun");
    logPlanets(planets);

    console.log('Removing "Pluto" from the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.pop("Pluto");
    logPlanets(planets);

    console.log('Finding and logging the index of "Earth" in the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    //var index = planets.indexOf("Earth");
    console.log("The index of Earth in the array is: " + planets.indexOf("Earth"));
    console.log("---- ---- ---- ----");

    console.log('Using splice to remove the planet after "Earth".');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    var removed = planets.splice(planets.indexOf("Mars"), 1);
    logPlanets(planets);
    //logPlanets("The planet removed was " + removed);

    console.log('Using splice to add back the planet after "Earth".');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.splice(planets.indexOf("Earth") + 1 , 0, "Mars");
    logPlanets(planets);

    console.log("Reversing the order of the planets array.");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.reverse();
    logPlanets(planets);

    console.log("Sorting the planets array.");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.sort();
    logPlanets(planets);

    // TODO: Write a function that takes as a parameter an array, and returns a random item from the array

    function sortArray() {
        var item = items[Math.floor(Math.random() * items.length)];
    };




})();