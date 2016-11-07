/**
 * Created by V-Rod on 11/4/16.
 */
"use strict";

/*var luckyNumber = Math.floor(Math.random() * 6);
console.log(luckyNumber);

var total = 60;
var discountPercent = 0;
var discount;

//THIS IS WHAT I WROTE WHICH WAS WRONG
 /*switch (luckyNumber) {
 case 0:
 console.log("You get no discount");
 break;
 case 1:
 console.log("You get 10% discount");
 break;
 case 2:
 console.log("You get 25% discount");
 break;
 case 4:
 console.log("You get 50% discount");
 break;
 case 5:
 console.log("You will get it for free");
 break;
 default:
 console.log("You get no discount");
 }*/

 /*switch (luckyNumber) {
     case 1:
         discountPercent = 0.1;
         break;
     case 2:
         discountPercent = 0.25;
         break;
     case 4:
         discountPercent = 0.5;
         break;
     case 5:
         discountPercent = 1;
         break;
     default:
         discountPercent = 0;
 }
 //apply the discountPercent
discount = (total * discountPercent);
console.log("You will pay " + (total - discount));
console.log("Your original price: " + total);
console.log("Your lucky number was " + luckyNumber);
console.log("You get a discount of " + (discountPercent));
console.log("You saved $" +  discount + ".");
console.log("You will pay $" + (total - discount));*/

/*var luckyNumber = Math.floor(Math.random() * 13)
//var month = 12;

switch(luckyNumber) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February')
        break;
    case 3:
        console.log('March');
        break;
    //etc etc etc DO NOT WRITE STUFF ON NOTES AND THEN COPY PASTE HERE IT WILL GIVE YOU SYNTAX ERRORS//
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log('July');
        break;
    case 8:
        console.log('August');
        break;
    case 9:
        console.log('September');
        break;
    case 10:
        console.log('October');
        break;
    case 11:
        console.log('November');
        break;
    case 12:
        console.log('December');
}*/

var luckyNumber = Math.floor(Math.random()* 6);
var receipt = 60;
var discount1 = 0.1;
var discount2 = 0.25;
var discount4 = 0.5;
var discount5 = 1;

switch (luckyNumber) {
    case (luckyNumber = 0):
        console.log("Your lucky number was " + luckyNumber + ". You get no discount.  You will have to pay $" + receipt + ".");
        break;

    case (luckyNumber = 1):
        console.log("Your lucky number was " + luckyNumber + ". You get a 10% discount.  You will pay $" + (receipt - (receipt * discount1)) + ".");
        break;

    case (luckyNumber = 2):
        console.log("Your lucky number was " + luckyNumber + ". You get a 25% discount.  You will pay $" + (receipt - (receipt * discount2)) + ".");
        break;

    case (luckyNumber = 3):
        console.log("Your lucky number was " + luckyNumber + ". You get no discount.  You will have to pay $" + receipt + ".");
        break;

    case (luckyNumber = 4):
        console.log("Your lucky number was " + luckyNumber + ". You get a 50% discount.  You will have to pay $" + (receipt - (receipt * discount4)) + ".");
        break;

    case (luckyNumber = 5):
        console.log("Your lucky number was " + luckyNumber + ". You get a 100% discount.  You will have to pay $" + (receipt - (receipt * discount5)) + ".");
        break;
}