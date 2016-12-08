/**
 * Created by V-Rod on 12/6/16.
 */
$(document).ready(function () {
    "use strict";

    //------------Google Maps ------------------------------------------


    //-- Render the map with the required options(zoom, center) including initial marker
    var map = new google.maps.Map(document.getElementById("map-canvas"), {
        center: {lat: 29.4267857, lng: -98.4895764},
        zoom: 12
    });


    var marker = new google.maps.Marker({
        position: map.center,
        map: map,
        animation: google.maps.Animation.DROP,
        draggable: true
    });


    //------------Google Maps Search Box Functionality on Rendered Map  ---------------------------

    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
    });

    var markers = [];

    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach(function (marker) {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location,
                animation: google.maps.Animation.DROP,
                draggable: true
            }));

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });


//------------ Populate Forecast on DOM --------------------

    function populateForecast(object, i) {
        var day = moment.unix(object.dt);

        return "<div class='col-lg-4'>"
            + "<h5>" + day.format("dddd, MMM Do YYYY") + "</h5>"
            + "<h4>High " + object.temp.max.toFixed(0) + " / Low " + object.temp.min.toFixed(0) + "</h4>"
            + "<img src=" + "http://openweathermap.org/img/w/" + object.weather[0].icon + ".png>"
            + "<p><strong>" + object.weather[0].main + ": " + "</strong>"
            + object.weather[0].description + "</p>"
            + "<p>Humidity: " + object.humidity + "</p>"
            + "<p>Wind: " + object.speed + "</p>"
            + "<p>Pressure: " + object.pressure + "</p>"
            + "</div>";


    }

    google.maps.event.addListener(marker, "dragend", function (event) {
            var lat = event.latLng.lat();
            var lng = event.latLng.lng();
        requestWeatherData(lat, lng);
    });

    function requestWeatherData(lat, lng) {
        var weatherData = $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
            APPID: "160c9066e7b4a7d7c0e4f9795167de0f",
            lat: lat,
            lon: lng,
            units: "imperial",
            cnt: 3

        });

        //------------ Weather API OpenWeatherMap done function ----------------

        weatherData.done(function (data) {
            console.log(data);
            var city = data.city.name;
            $("#city").html(city);
            var columns = [];
            data.list.forEach(function (object, i) {
                columns.push(populateForecast(object, i));

            });
            $("#weather-forecast").html(columns);

        });
    }


        requestWeatherData(map.center.lat, map.center.lng);

});