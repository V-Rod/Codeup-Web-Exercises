/**
 * Created by V-Rod on 11/7/16.
 */
'use strict';

var oddNumber;

do {
    oddNumber = Math.floor(Math.random()*50+1);
} while (oddNumber % 2 == 0);

console.log('Random odd number to skip: ' + oddNumber);

for ( var i = 1; i <= 50; i += 1) {
    //skip even numbers
    if (i % 2 == 0) {
        continue;
    }
    if (i == oddNumber) {
        console.log('Skipping number: ' + i);
    } else{
        console.log('Here is an odd number: ' + i);
    }

}
