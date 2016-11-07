/**
 * Created by V-Rod on 11/7/16.
 */
'use strict';

/*for (var i = 0; i < 10; i++) {
    console.log('for loop iteration #' + i);
}*/

for (var x = 100; x >= 5; x -=5) {
    console.log(x);
}

// EXERCISE 3.3.4 #2

var i = Math.floor(Math.random()*10 + 1);

for (var j = 1 ; j <= 10; j += 1) {
    console.log(  i  + ' x ' +  j  + ' = ' + (i * j) );
}

// EXERCISE 3.3.4 #3

/* Using a for loop and the code to generate a random number from the previous lessons,
 generate 10 random numbers between 20 and 200 and output to the console whether
 each number is odd or even.
*/



for (var j = 1 ; j <= 10; j += 1){
    i = Math.floor(Math.random()*200 + 20);
    if ( i % 2 == 0) {
       console.log(i + ' is even');
    } else {
        console.log(i + ' is odd');
    }

}

/* Write some code that displays all the multiplication tables from 1 to 12
example output

1x1=1
1x2=2
...
2x1=2
2x2=4
...
 */

