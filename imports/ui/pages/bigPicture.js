/**
 * Created by Yonglin Wang on 9/24/2017.
 */

import './bigPicture.html';
import { Images } from '../../api/images/images.js';
import flickity from 'flickity';
import imagesLoaded from 'imagesloaded';

Template.contentPanel.onRendered(function () {
    Tracker.autorun(function () {
        let newsSub = Meteor.subscribe('announcements', 10, Meteor.userId());
        Meteor.subscribe('images');
        if(newsSub.ready()){
            $('.flickity').flickity({
                cellAlign: 'left',
                contain: true,
                imagesLoaded: true,
                lazyLoad: true,
                autoPlay: 5000,
                pageDots: false,
                prevNextButtons: false,
                pauseAutoPlayOnHover: false,
                selectedAttraction: 0.01,
                friction: 0.15
            });
            $('.dot').css('width',$('.flickity-page-dots').width()/$('.dot').length + 'px');
        }
    });
});

Template.contentPanel.helpers({
    'announcement': function () {
        return Posts.find({});
    }
});

Template.contentPanel.helpers({
    'imageLink': function () {
        try{
            return Images.findOne({_id: this.imgId}).link();
        }catch(e){}

    }
});

Template.bottomBar.onRendered(function () {
    $(document).ready(function() {
        displayTime();
        $("#rotatingMessage").Morphext(morphSettings);
    });
});

Template.sidePanel.onRendered(function (){
    $(document).ready(function() {
        displayTime();
        displayDate();
        displayWeather();
    });
});

function displayTime() {
    var time = moment().format('h:mm');
    $('#clock').html(time);
    setTimeout(displayTime, 1000);
}

function displayDate(){
    var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getUTCDate(),
    months = [ "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    $('#date').html(months[month] + " " + day + " " + year);
}

function displayWeather(){
    var Weather = {
        init: function() {
            this.getLocation();
        },

        cache: {
            showFahrenheit: false,
        },

        getLocation: function() {
            var c = Weather.cache;
            if ( window.chrome ) {
                $.getJSON('http://ip-api.com/json', function(json) {
                    c.lat = json.lat;
                    c.long = json.lon;
                    Weather.getInformation();
            });
        } else {
            if ( navigator.geolocation ) {
                navigator.geolocation.getCurrentPosition(function(data) {
                    c.lat = data.coords.latitude;
                    c.long = data.coords.longitude;
                    Weather.getInformation();
              });
            }
          }  
        },

        getInformation: function() {
            var c = Weather.cache;
    
            $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + c.lat + '&lon=' + c.long + '&units=imperial&appid=3acc16ffae9e45df92a064e41646355f', function(json) {
        
                // Store data in cache
                c.location = json.name;
                c.country = json.sys.country;
                c.fahrenheit = Math.round(json.main.temp);
                c.celcius = Math.round((c.fahrenheit - 32) * 5 / 9);
                c.icon = json.weather[0].id;
                c.coverage = json.weather[0].main;
                c.sunrise = json.sys.sunrise;
                c.sunset = json.sys.sunset;
        
                Weather.showMainInformation();
                Weather.showCurrentCoverage();
            });
        },

        showMainInformation: function() {
            var c = Weather.cache;
            $('#weather').html((c.showFahrenheit === false ? c.celcius : c.fahrenheit)+"°c");
        },

        showCurrentCoverage: function() {
            var c = Weather.cache;
            var currentTime = new Date().getTime() / 1000;
            console.log(c.icon);
            if ( currentTime > c.sunrise && currentTime < c.sunset ) {
                console.log("hello")
                $('#icon').attr('class', 'wi wi-owm-day-' + c.icon);
            } else {
                $('#icon').attr('class', 'wi wi-owm-night-' + c.icon);
            }
            $('#coverage').html(Weather.cache.coverage);
        }
    };
    setTimeout(Weather.getLocation(), 60000);
}
