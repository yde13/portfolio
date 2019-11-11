let startPage = $(".container-startPage");
let about = $(".container-aboutPage");
let portfolio = $(".container-portfolioPage");
let contact = $(".container-contactPage");
let burger = $(".container-nav")

$(document).ready(function () {

    $("#about-btn").click(function () {
        about.removeClass("hidden");
        startPage.addClass("hidden");
        contact.addClass("hidden");
        portfolio.addClass("hidden");
    });

    $("#portfolio-btn").click(function () {
        portfolio.removeClass("hidden");
        startPage.addClass("hidden");
        about.addClass("hidden");
        contact.addClass("hidden");
    });

    $("#contact-btn").click(function () {
        contact.removeClass("hidden");
        startPage.addClass("hidden");
        about.addClass("hidden");
        portfolio.addClass("hidden");
    });

    $("#home-btn").click(function () {
        startPage.removeClass("hidden");
        contact.addClass("hidden");
        about.addClass("hidden");
        portfolio.addClass("hidden");
    });




    $(".burger").click(function () {
        burger.removeClass("container-nav");

        $("#about-btn").click(function () {
            about.removeClass("hidden");
            startPage.addClass("hidden");
            contact.addClass("hidden");
            portfolio.addClass("hidden");
            burger.addClass("container-nav");
        });

        $("#portfolio-btn").click(function () {
            portfolio.removeClass("hidden");
            startPage.addClass("hidden");
            about.addClass("hidden");
            contact.addClass("hidden");
            burger.addClass("container-nav");

        });

        $("#contact-btn").click(function () {
            contact.removeClass("hidden");
            startPage.addClass("hidden");
            about.addClass("hidden");
            portfolio.addClass("hidden");
            burger.addClass("container-nav");

        });

        $("#home-btn").click(function () {
            startPage.removeClass("hidden");
            contact.addClass("hidden");
            about.addClass("hidden");
            portfolio.addClass("hidden");
            burger.addClass("container-nav");

        });
    });

});

var arrLanguage = {
    "swe": {
        "hem": "Hem",
        "om": "Om mig",
        "portfolio": "Portfolio",
        "kontakt": "Kontakt",
        "studerande": "Studerande inom webbutveckling fullstack på Nackademin",
        "personligtbrev": "Jag är en glad, pålitlig och vidsynt kille som ser fram emot att ta mig ut i jobbvärlden för att skapa möjligheter för framtiden och för att skaffa erfarenhet som förbereder mig för framtida jobb. Efter utbildningen vill jag arbeta på en plats där jag får arbeta kreativt och systematiskt med uppgifterna jag blir tilldelad. Min vision för framtiden är att arbeta med webbdesign där jag får designa och utveckla webbsidor och andra sociala kanaler för kreatörer och/eller företag - jag vill vara hjärnan bakom deras framgång!  Jag är målmedveten, strukturerad och vill alltid fullfölja mina uppgifter och leverera bästa möjliga service för personen i fråga. <br> Jag är alltid på språng och är inte sen med att ta mig an uppgifter för att fortsätta utvecklas för att kunna nå mina mål. Mina kreativa och envisa egenskaper gör att jag inte ger upp utan jag blir snarare ‘’peppad’’ på att göra ett ännu bättre jobb och ser det som en lärorik utmaning. Som tidigare sagt så har jag ett öga för design och webbutveckling vilket gör att jag är flitig i skrift, språk och bild för att kunna leverera en snygg och felfri design.",
        "pic" : "Bild på mig",
        "quiz" : "Under vår första kurs Javasctipt 1 i utbildningen fick vi som examination en inlämningsuppift att göra ett quiz, vilket var väldigt lärorikt",
        "crm" : "Under vår andra kurs Javasctipt 2 i utbildningen fick vi som examination en inlämningsuppift i grupp och vi skulle bygga ett crm med hjälp av scrum vilket var väldigt lärorikt",
        "links" : "Länkar",
        "mail" : "Email",
        "phone" : "Telefon",
        "translater" : "Översättare",
        "swedish" : "Svenska",
        "english" : "Engelska",
    }, 
    "eng" : {
        "hem" : "Home",
        "om" : "About me",
        "portfolio" : "Portfolio",
        "kontakt" : "Contact",
       "studerande" : "Web development student focus fullstack at Nackademin",
        "personligtbrev" : "I am a happy, reliable and far-sighted guy who looks forward to taking me out in the job world too to create opportunities for the future and to gain experience that prepares me for future jobs. After graduation, I want to work in a place where I can work creatively and systematically information I am assigned. My vision for the future is to work with web design where I get to design and develop websites and other social channels for creators and / or companies - I want to be the brain behind them success! I am purposeful, structured and always want to fulfill my tasks and deliver the best possible service for the person in question. I'm always on the go and I'm not late to take charge tasks to continue to develop in order to reach my goals. My creative and stubborn qualities make me not giving up without me being rather pepped at doing an even better job and seeing it as an educational challenge. As I said before, I have an eye for design and web development which makes me diligent in writing, language and image to deliver a stylish and flawless design.",
        "pic" : "Picture of me",
        "quiz" : "During our first course Javasctipt 1 in the education, we were given an assignment to do a quiz, which was very educational",
        "crm" : "During our second course Javasctipt 2 in the education, we got an examination assignment in group and we would build a crm with the help of scrum which was very educational",
        "links" : "Links",
        "mail" : "Mail",
        "phone" : "Phone",
        "translater" : "Translater",
        "swedish" : "Swedish",
        "english" : "English",
    }
};

$(function(){
    $(".translate").click(function(){
        var lang = $(this).attr("id");

        $(".lang").each(function(index, element){
              $(this).text(arrLanguage[lang][$(this).attr("key")]);
        });  
    });
});
  
