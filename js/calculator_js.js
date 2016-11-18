/**
 * Created by V-Rod on 11/16/16.
 */
"use strict";

(function () {



    //---Displays
    var left = document.getElementById("displayLeft");
    var operator = document.getElementById("displayCenter");
    var right = document.getElementById("displayRight");


    //--Digits
    var pressNumberButton = function () {
        var numberButtons = document.getElementsByClassName("number");
        for (var i = 0; i < numberButtons.length; i++) {
            numberButtons[i].addEventListener("click", sendNumberToTop);
        }
    };

    var sendNumberToTop = function () {
        if (operator.value == "") {
            left.value += this.getAttribute("value");
        } else {
            right.value += this.getAttribute("value");
        }

    };
    pressNumberButton();


    //--Operands
    var pressSignButton = function () {
        var operationButtons = document.getElementsByClassName("signs");
        for (var i = 0; i < operationButtons.length; i++) {
            operationButtons[i].addEventListener("click", sendSignToTop);
        }
    };


    var sendSignToTop = function () {
        var operator = document.getElementById("displayCenter");
        operator.value = this.getAttribute("value");
    };
    pressSignButton();


    //--Math Operations
    var equals = function () {
        var equalsButton = document.getElementById("equals");
        equalsButton.addEventListener("click", math);
    };

    var math = function () {
        var x = left.value;
        var y = operator.value;
        var z = right.value;
        var result;

        if (y == "+") {
            result = parseFloat(x) + parseFloat(z);
        } else if (y == "-") {
            result = parseFloat(x) - parseFloat(z);
        } else if (y == "/") {
            result = parseFloat(x) / parseFloat(z);
        } else if (y == "*") {
            result = parseFloat(x) * parseFloat(z);

        }

        left.value = result;
        right.value = "";
        operator.value = "";

    };
    equals();


    //--Clear the displays
    var clearDisplay = function () {
        var clearButton = document.getElementById("clear");
        clearButton.addEventListener("click", function () {
            left.value = "";
            operator.value = "";
            right.value = "";
        });
    };
    clearDisplay();


})();