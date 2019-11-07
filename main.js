let startPage = $(".container-startPage");
let about = $(".container-aboutPage");
let portfolio = $(".container-portfolioPage");
let contact = $(".container-contactPage");

$(document).ready(function() {

    $("#about-btn").click(function() {
        about.removeClass("hidden");
        startPage.addClass("hidden");
        contact.addClass("hidden");
        portfolio.addClass("hidden");
    });

    $("#portfolio-btn").click(function() {
        portfolio.removeClass("hidden");
        startPage.addClass("hidden");
        about.addClass("hidden");
        contact.addClass("hidden");
    });

    $("#contact-btn").click(function() {
        contact.removeClass("hidden");
        startPage.addClass("hidden");
        about.addClass("hidden");
        portfolio.addClass("hidden");
    });

    $("#home-btn").click(function() {
        startPage.removeClass("hidden");
        contact.addClass("hidden");
        about.addClass("hidden");
        portfolio.addClass("hidden");
    });

});

