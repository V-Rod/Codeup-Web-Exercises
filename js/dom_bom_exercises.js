/**
 * Created by V-Rod on 11/15/16.
 */
"use strict";

(function(){

// write a function `chunk` that splits an array into chunks
// of 3
// ex
// > chunk([1,2,3,4,5,6,7])
//   [[1,2,3], [4,5,6], [7]]
// modify the function to take in a parameter for chunk size

    // nouns: array, chunks, function
    //verbs: write, splits

    var array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    var createGroupedArrays = function(array, chunkSize) {
        var groups = [];
        for (var i = 0; i < array.length; i += chunkSize) {
            groups.push(array.slice(i, i + chunkSize));
        }
        return groups;

    }
    console.log(createGroupedArrays(array1, 3));
    console.log(array1);

    //next step: display the results in the DOM

// python example
// write a function that generates a range of numbers as an array
// ex
// > range(1,5)
//   [1, 2, 3, 4]
//    modify the function such that you can pass in a third parameter
// for the step
// ex
// > range(2, 11, 2)
//   [2, 4, 6, 8, 10]
// can the third parameter be optional (default to 1)?
// can you create a range in reverse order? i.e. `range(5,2)


    // nouns: range of numbers, array, function
    // verbs: write, generate

    var newArray = function range(start, stop, step){
        var a=[start], b=start;
        while(b<stop){b+=step;a.push(b)}
        return a;
    };
    console.log(newArray(1, 30, 3));





})();
