/* jshint devel: true */
"use strict";

$( document ).on( "pageinit", "#demoPage", function( event ) {

    $("#default").on("tap", function() {
        $.mobile.toast({
            message: "Live long and Mukundan!"
        });
    });

    $("#longer").on("tap", function() {
        $.mobile.toast({
            message: "Live long and Mukundan!",
            duration: "long"
        });
    });

    $("#top").on("tap", function() {
        $.mobile.toast({
            message: "Live long and Mukundan!",
            position: "top"
        });
    });

    $("#center").on("tap", function() {
        $.mobile.toast({
            message: "Live long and Mukundan!",
            position: "center"
        });
    });

    $("#bottom").on("tap", function() {
        $.mobile.toast({
            message: "Live long and Mukundan!",
            position: "bottom"
        });
    });

    $("#custom").on("tap", function() {
        $.mobile.toast({
            message: "Live long and Mukundan!",
            classOnOpen: "pomegranate"
        });
    });

    $("#custom-kitkat").on("tap", function() {
        $.mobile.toast({
            message: "Live long and Mukundan!",
            classOnOpen: "kitkat"
        });
    });

    $("#close-event").on("tap", function() {
        $.mobile.toast({
            message: "Live long and Mukundan!",
            afterclose: function(event, ui) {
                alert("Toast closed!");
            }
        });
    });

    $("#animate-css").on("tap", function() {
        $.mobile.toast({
            message: "Live long and Mukundan!",
            classOnOpen: "animated bounceInUp"
        });
    });

    $("#animate-css2").on("tap", function() {
        $.mobile.toast({
            message: "Live long and Mukundan!",
            classOnOpen: "animated slideInLeft",
            classOnClose: "slideOutRight"
        });
    });

});
