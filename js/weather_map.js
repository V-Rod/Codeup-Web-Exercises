/**
 * Created by V-Rod on 12/6/16.
 */
$(document).ready(function () {
    "use strict";

    var weatherForecasts = $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
        APPID: "160c9066e7b4a7d7c0e4f9795167de0f",
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial",
        cnt: 3
    });

    weatherForecasts.done(function (data) {
        console.log(data);
        var city = data.city.name;
        $("#city").html(city);

        data.list.forEach(function (object, i) {

            var day = moment.unix(object.dt);

            //console.log(data.list);

            var columns;

            columns = "<div class='col-lg-4'>"
                + "<h5>" + day.format("dddd, MMM Do YYYY") + "</h5>"
                + "<h4>High " + object.temp.max.toFixed(0) + " / Low " + object.temp.min.toFixed(0) + "</h4>"
                + "<img src=" + "http://openweathermap.org/img/w/" + object.weather[0].icon + ".png>"
                + "<p><strong>" + object.weather[0].main + ": " + "</strong>"
                + object.weather[0].description + "</p>"

                + "<p>Humidity: " + object.humidity + "</p>"
                + "<p>Wind: " + object.speed + "</p>"
                + "<p>Pressure: " + object.pressure + "</p>"
                + "</div>";
            $("#weather-forecast").append(columns);

            //Render the map with the required options(zoom, center)
            var map = new google.maps.Map(document.getElementById("map-canvas"), {
                center: {lat: 29.520839, lng: -98.542628},
                zoom: 10,
                mapTypeId: "hybrid"
            });


        });

    });




});