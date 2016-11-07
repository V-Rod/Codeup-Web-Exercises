/**
 * Created by V-Rod on 11/4/16.
 */
'use strict';
// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
console.log('This is how many cones I start with: ' + allCones + '.');


// This is how you get a random number between 1 and 5
var cones = Math.floor(Math.random() * 5) + 1;


do {
    allCones = allCones - cones;
    console.log('I sold ' + cones + ' cones.');
    if (cones > allCones){
        console.log('Cannot sell you ' + cones +' cones, I have only ' + allCones + '...');
    } else {
        allCones -= cones;
        console.log('I sold ' + cones + ' cones.');
    }
} while (allCones > 0);
console.log('Yay I sold all cones');


//DO NOT DELETE THIS IS CORRECT
/*var i = 2;

while (i <= 65536) {
    console.log(i);
i *= 2;
}*/


