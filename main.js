let startPage = $(".container-startPage");
let about = $(".container-aboutPage");
let portfolio = $(".container-portfolioPage");
let contact = $(".container-contactPage");
let burger = $(".container-nav")

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




    $(".burger").click(function() {
        burger.removeClass("container-nav");
        
        $("#about-btn").click(function() {
            about.removeClass("hidden");
            startPage.addClass("hidden");
            contact.addClass("hidden");
            portfolio.addClass("hidden");
            burger.addClass("container-nav");
        });
    
        $("#portfolio-btn").click(function() {
            portfolio.removeClass("hidden");
            startPage.addClass("hidden");
            about.addClass("hidden");
            contact.addClass("hidden");
            burger.addClass("container-nav");

        });
    
        $("#contact-btn").click(function() {
            contact.removeClass("hidden");
            startPage.addClass("hidden");
            about.addClass("hidden");
            portfolio.addClass("hidden");
            burger.addClass("container-nav");

        });
    
        $("#home-btn").click(function() {
            startPage.removeClass("hidden");
            contact.addClass("hidden");
            about.addClass("hidden");
            portfolio.addClass("hidden");
            burger.addClass("container-nav");

        });
    });

});

var arrLanguage = {
    "swe" : {
        "hem" : "Hem",
        "om mig" : "Om mig",
        "portfolio" : "Portfolio",
        "kontakt" : "Kontakt"
    },
    "eng" :{
        "hem" : "Home",
        "om mig" : "About me",
        "portfolio" : "Portfolio",
        "kontakt" : "Contact"
    }
};

