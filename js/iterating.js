/**
 * Created by V-Rod on 11/9/16.
 */
(function(){
    'use strict';

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    var names = ['Fernando', 'Zach', 'Dimitri', 'Jason'];

    // TODO: Create a log statement that will log the number of elements in the names array.

    console.log('The length of this array is ' + names.length + '.');

    // TODO: Create log statements that will print each of the names array elements individually.

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

// Exercise 3.5.1
// Modify the code that logs the names array elements individually to instead use a for loop.
// Below the for loop, use a forEach loop to print the names again.
    for (var i = 0; i < names.length; i++) {
        console.log('The names at index ' + i + ' is ' + names[i] + '.');
    }

    names.forEach(function(element, index, array) {
        console.log('This is the forLoop exercise.');
        console.log('The names at ' + index + ' is ' + element);
    })

})();