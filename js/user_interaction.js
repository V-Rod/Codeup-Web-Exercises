/**
 * Created by V-Rod on 11/7/16.
 */
'use strict';
// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

var userInputName = prompt('What is your name?');
var userLikesPizza;
while (!userInputName) {
    userInputName = prompt('What is your name?');
}

//If we want to keep asking a while loop is the best way because it will keep looping until the true statement is
//satisfied.


// TODO: Show an alert message that welcomes the user based on their input.

alert('Welcome ' + userInputName + '!');


// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

var userLikesPizza = prompt('Do you like pizza?');

while (!userLikesPizza || userLikesPizza == 'no') {
    alert('You monster!');
    userLikesPizza = prompt('Do you like pizza?');
}

alert('It is the reason for life!');

var pizzaType = prompt('What kind of pizza would you like to order?');

switch (pizzaType) {
    case 'mushroom':
        alert('I\'m a big fan of mushroom');
        break;
    case 'pepperoni':
        alert('I\'m not too fond of this one');
        break;
    case 'cheese':
        alert('Classic');
        break;
    default:
        alert('We do not carry this one');

}






