/**
 * Created by V-Rod on 12/5/16.
 */
$(document).ready(function () {
    "use strict";


    var blogPosts= $.get("data/blog.json"); //getting the data from the JSON file

    var posts = []; //empty array to post data to the DOM

    var newPosts = []; // new data from user that will get pushed to the DOM


    blogPosts.done(function (content) {
        //alert("AJAX call completed successfully!");
        //console.log(blogPosts);
        content.forEach(function (value) {
            posts += "<div>"
                + "<h3 id='blog-title'>" + value.title + "</h3>"
                + "<p id='blog-content'>" + value.content + "</p>"
                + "<p id='blog-date'>" + value.date + "</p>"
                + "<p id='blog-categories'>" + value.categories.join(", ") + "</p>"
                + "<button type='button' class='btn btn-danger' id='remove-post'>" + "Remove Post" + "</button>"
                +"</div>";
            $("#posts").html(posts);
            newPosts.push(value);
        });
        posts = []; //after the data has been posted, clears the data from the array so it doesn't get posted again
    });



/*---ADDING A BLOG POST---need to add date field (or function) and add categories input or dropdown menu*/

console.log(newPosts);
$(".btn").click(function () {
    var newData = {
        title: $("#blog-title").val(),
        content: $("#post").val(),
        date: $("#date").val(),
        categories: $("#blog-categories").val()
    };
    newPosts.push(newData);
    console.log(newPosts);
    newPosts.forEach(function (value) {
        posts += "<div>"
            + "<h3 id='blog-title'>" + value.title + "</h3>"
            + "<p id='blog-content'>" + value.content + "</p>"
            + "<p id='blog-date'>" + value.date + "</p>"
            + "<p id='blog-categories'>" + value.categories + "</p>"
            +"<button type='button' class='btn btn-danger' id='remove-post'>" + "Remove Post" + "</button>"
            +"</div>";
        $("#posts").html(posts);
    });
    posts = [];
    clear(); //clear function to clear fields from the submit form

});



/*---REMOVING BLOG POST(add a button to each blog post)---*/

    var deletePost = $("#remove-post").click(function () {
        $("#blog-content").html("");
        $("#blog-title").html("");
        $("#blog-date").html("");
        $("#blog-categories").html("");
    });


/*---CLEAR FUNCTION FOR THE INPUT FIELDS---*/

function clear() {
    $("#name").val("");
    $("#post").val("");
}



});