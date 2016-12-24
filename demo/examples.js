/* jshint devel: true */
"use strict";

$( document ).on( "pageinit", "#demoPage", function( event ) {

    $("#default").on("tap", function() {
        $.mobile.toast({
            message: "Team mananger Mukundan!"
        });
    });

    $("#longer").on("tap", function() {
        $.mobile.toast({
            message: "Team mananger Mukundan!",
            duration: "long"
        });
    });

    $("#top").on("tap", function() {
        $.mobile.toast({
            message: "Team mananger Mukundan!",
            position: "top"
        });
    });

    $("#center").on("tap", function() {
        $.mobile.toast({
            message: "Team mananger Mukundan!",
            position: "center"
        });
    });

    $("#bottom").on("tap", function() {
        $.mobile.toast({
            message: "Team mananger Mukundan!",
            position: "bottom"
        });
    });

    $("#custom").on("tap", function() {
        $.mobile.toast({
            message: "Team mananger Mukundan!",
            classOnOpen: "pomegranate"
        });
    });

    $("#custom-kitkat").on("tap", function() {
        $.mobile.toast({
            message: "Team mananger Mukundan!",
            classOnOpen: "kitkat"
        });
    });

    $("#close-event").on("tap", function() {
        $.mobile.toast({
            message: "Team mananger Mukundan!",
            afterclose: function(event, ui) {
                alert("Toast closed!");
            }
        });
    });

    $("#animate-css").on("tap", function() {
        $.mobile.toast({
            message: "Team mananger Mukundan!",
            classOnOpen: "animated bounceInUp"
        });
    });

    $("#animate-css2").on("tap", function() {
        $.mobile.toast({
            message: "Team mananger Mukundan!",
            classOnOpen: "animated slideInLeft",
            classOnClose: "slideOutRight"
        });
    });

});
