/**
 * Created by V-Rod on 11/7/16.
 */
'use strict';

var myNameIs = ' V-Rod'; // TODO: Fill in your name here.

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello from the passed in name.

function generateHello(name) {
    //console.log('Hello ' + name);
    return 'Hello' + name;
}

console.log(generateHello(myNameIs));

// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.

//sayHello(myNameIs);

//function sayHello(myNameIs) {
  //  console.log ('Hello ' + myNameIs);
//}


// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random
var random = Math.floor((Math.random()*100)+1);
//console.log('Random number:' + random);

// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.

function isOdd(number) {
    //if
    var result = ((number % 2) == 1 ) ? number + ' is True' : number + ' is False';
    return result; //use return to return the value of the operation
}

isOdd(random);

//alert (isOdd(random));
//console.log(isOdd(random));

// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.