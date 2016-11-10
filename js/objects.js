/**
 * Created by V-Rod on 11/10/16.
 */
(function(){
    "use strict";

    // TODO: Create person object
    // var person = todo;

    var person = {};

    // TODO: Create firstName and lastName properties in your person object; assign your name to them
    person.firstName = 'Pedro';
    person.lastName = 'Velazquez';
    // TODO: Add a sayHello method to the person object that
    // alerts a greeting using the firstName and lastName properties
    person.sayHello = function() {
        console.log('Hello, ' + person.firstName + ' ' + person.lastName + '!');
    }
    // Say hello from the person object.
     person.sayHello();
})();