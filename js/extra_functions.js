/**
 * Created by V-Rod on 11/8/16.
 */
'use strict';

//create four functions
//that take two numbers as input and produce an output that is the result of the respective operation

//-add
//-subtract
//-divide
//-multiply
//-test these with console logs


var firstNumber;
var secondNumber;
var res = 0;

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return add(a, (b * -1));
}

function mul(a, b) {
    var res = 0;
    for(var i = 0; i < b; i++){
        res += a;
    }
    return res;
}

function div(a, b) {
    return a / b;
}

function askForNumbers() {
    firstNumber = parseInt(prompt("Give me the first number"));
    secondNumber = parseInt(prompt("Give me the second number"));
}


//hook these functions up to user input

var userInputName = prompt('Hello, what is your name?');

var typeOfOperation;

while (!userInputName || userInputName == 'no') {
    userInputName = prompt('We need your name.');
}

alert('Welcome ' + userInputName + '!');

typeOfOperation = prompt(userInputName + ' , what operation would you like to do:\n addition, substraction, multiplication,\n or division?');

switch (typeOfOperation) {

    case 'addition':
        askForNumbers();
            res = add(firstNumber , secondNumber);
            break;


    case 'multiplication':
        askForNumbers();
        res = mul(firstNumber , secondNumber);
        break;

    case 'substraction':
        askForNumbers();
        res = sub(firstNumber , secondNumber);
        break;

    case 'division':
        askForNumbers();
        res = div(firstNumber , secondNumber);
        break;

    default:
        alert('Please refresh the page and try again');

}

console.log(res);


//for each of the above functions...
//make sure the user input is valid
//prompt the user for the two numbers
//perform the calculation using your functions
//allow the user to choose which operation they want to perform, then prompt for inputs

//** Bonus **

//define your functions in terms of each other

//do not use the * operator inside of your multiply function
//do not subtract the two numbers inside of your subtract function
//instead call your add function