$(document).ready(function() {
    //JSON GENERATOR
    for (let i = 0; i < movies.length; i++) {
        var obj = movies;
        var myImage = $('<img src=' + obj[i].img + '>');
        var imgDiv = $(".image");
        $(imgDiv[i]).append(myImage);
        $("img").addClass("img-fluid");
        var myText = $('<p>' + obj[i].title + '</p>' + '<p>' + obj[i].description + '</p>');
        var textDiv = $(".text");
        $(textDiv[i]).append(myText);
        $("p").addClass("text-light");
        var myLikes = $('<span>' + obj[i].likes + '</span>');
        var likesDiv = $(".likes");
        $(likesDiv[i]).append(myLikes);
        }

     // LIKE BUTTON FUNCTION


     // CLASSES
});
