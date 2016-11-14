/**
 * Created by V-Rod on 11/3/16.
 */
'use strict';

//var studentgrade = (70 + 80 + 95)/3;


(function() {

    var getGradeOne;
    var getGradeTwo;
    var getGradeThree;


    function askForGrade1() {
        getGradeOne = prompt('Please enter the first grade');
        console.log(getGradeOne);
    }


    function askForGrade2() {
        getGradeTwo = prompt('Please enter the second grade');
        console.log(getGradeTwo);
    }

    function askForGrade3() {
        getGradeThree = prompt('Please enter the second grade');
        console.log(getGradeThree);

    }

     askForGrade1();
     askForGrade2();
     askForGrade3();




    function averageGrades(grade1, grade2, grade3){
        var message;
        var average = (grade1 + grade2 + grade3) / 3;
        console.log(average);
        if (average <= 80) {
            message = 'You need to study more';
        } else {
            message = 'Good job!'
        }

        return message;
    }

    var grade1 = parseInt(getGradeOne);
    var grade2 = parseInt(getGradeTwo);
    var grade3 = parseInt(getGradeThree);

    var result = alert(averageGrades(grade1, grade2, grade3));

})();




// 3.3.1

// returns a string with a message that contains the name of the person shopping, and
// the total amount they will pay
// ex. 'Zach\'s total is $225, he will pay $200' // if a discount is applied

function calculateHEBDiscount(shopperName, groceryTotal, discountPercent) {

}

























// will take in two strings, and randomly pick one of the two strings to return
//function decideBetweenOptions(theFirstOption, theSecondOption) {

//}








/*if (studentgrade >= 80) {
    console.log("Operation was successful");
} else {
    console.log("Oops, something went wrong.  Try again!")
}



var flipACoin = Math.floor(Math.random()* 2);

if (flipACoin == 0) {
    console.log("Buy a house");
} else if (flipA Coin == 1){
    console.log("Buy a car");
} else {
    console.log("Something went wrong")
}*/


/*var flipACoin = Math.floor(Math.random()* 2);*/


/*var ryan = 250;
var cameron = 180;
var george = 320;
var discount = 200;

if (ryan>=discount) {
    document.write("Ryan has spent $" + (ryan-discount) + " over the required amount of $200 and has earned a discount");
} else if (ryan<discount) {
    document.write(" Ryan needs to spend $" + (discount - ryan) + " to earn a discount.");
};

if (cameron >= discount) {
    document.write("Cameron has spent $" + (cameron - discount) + " over the required amount of $200 and has earned a discount");
} else if (cameron < discount) {
    document.write("Cameron needs to spend $" + (discount - cameron) + " to earn a discount.");
};

if (george >= discount) {
    document.write("George has spent $" + (george - discount) + " over the required amount of $200 and has earned a discount");
} else if (george < discount) {
    document.write("George needs to spend $" + (discount - george) + " to earn the discount.");
};*/

