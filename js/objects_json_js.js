/**
 * Created by V-Rod on 11/10/16.
 */

'use strict';

// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author.
// The book author should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array
 var books = [
     {
         book: 0,
         title: 'Pride & Prejudice',
         author: {
             firstName: 'Jane',
             lastName: 'Austen'
         }
     },

     {
         book : 1,
         title : 'Treasure Island',
         author : {
             firstName : 'Robert Louis',
             lastName : 'Stevenson'
         }
     },

     {

         book: 2,
         title: 'Dracula',
         author: {
             firstName: 'Bram',
             lastName: 'Stocker'
         }
     },
     {

         book: 3,
         title: 'War and Peace',
         author: {
             firstName: 'Leo',
             lastName: 'Tolstoy'
         }
     },

     {
         book : 4,
         title : 'JavaScript : The Good Parts',
         author : {
             firstName : 'Douglas',
             lastName : 'Crockford'
         }


     }

 ];

// log out the books array
// console.log(books);
console.log(books);

// grab the first element
var book = books [0];

//log out the book number, its title and its author's first and last name
console.log('Title is ' + book.title + ' written by ' + book.author.firstName + ' ' + book.author.lastName + '.');

//if we follow the pattern of repeating code, then we can do a for Each loop

books.forEach (function (book, index) {
    //var fullName = book.author.firstName + ' ' + book.author.lastName;
    //var message = ('Book number# ' + (index + 1) + ' title is ' + book.title + ' written by ' + fullName);
    console.log('Book number# ' + (index + 1) + ' title is ' + book.title + ' written by ' + book.author.firstName + ' ' + book.author.lastName + '.');
});


