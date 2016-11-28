/**
 * Created by V-Rod on 11/21/16.
 */
(function () {
    "use strict";

    //Render the map with the required options(zoom, center)
    var map = new google.maps.Map(document.getElementById("map-canvas"), {
        center: {lat: 29.520839, lng: -98.542628},
        zoom: 12
    });

    //Create array of objects(restaurants)

    var restaurants = [

        {
            name: "Asian Star",
            location: "San Antonio, TX",
            lat: 29.534191,
            lng: -98.5670407,
        },

        {
            name: "Las Palapas",
            location: "San Antonio, TX",
            lat:29.512307,
            lng: -98.5541447
        },

        {
            name: "Wasabi",
            location: "San Antonio, TX",
            lat:29.5339343,
            lng: -98.5656509
        }
    ];

    // Loop through the array of objects using  a ".forEach" loop and print out the specified information about each one.

    //start forEach loop
    restaurants.forEach(function (restaurant, index) {
        var location = {lat: restaurant.lat, lng: restaurant.lng};
        var marker = new google.maps.Marker({
            position: location,
            map: map,
            animation: google.maps.Animation.DROP
        });

        //Create InfoWindow for every object in the array
        var infowindow = new google.maps.InfoWindow({
            content: "<h2>Asian Star</h2><p>Best asian buffet on I-10</p>"
        }); //infowindow.open(map, marker);
        marker.addListener("click", function () {
            infowindow.open(map, marker)
        })
    })
















})();