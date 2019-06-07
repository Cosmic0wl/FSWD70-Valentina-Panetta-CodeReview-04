$(document).ready(function() {
    //JSON GENERATOR
    for (let i = 0; i < movies.length; i++) {
        var obj = movies;
        var myImage = $('<img src=' + obj[i].img + '>');
        var imgDiv = $(".image");
        $(imgDiv[i]).append(myImage);
        var myText = $('<p>' + obj[i].title + '</p>' + '<p>' + obj[i].description + '</p>');
        var textDiv = $(".text");
        $(textDiv[i]).append(myText);
        var myLikes = $('<span>' + obj[i].likes + '</span>');
        var likesDiv = $(".likes");
        $(likesDiv[i]).append(myLikes);
        }

     // LIKE BUTTON FUNCTION
     var btn = $(".button");
     var obj = movies;
     var i = 0;
     for (let i = 0; i < btn.length; i++) {
     	$(btn[i]).click(function() {
     		incrementLikes(i);
     	});
     }

     
     function incrementLikes(i) {
     	var obj = movies;
     	counter = obj[i].likes;
     	counter++;
     	return counter;
     }


     // SORT FUNCTION


     // STYILING
     $("p, span").addClass("text-light");
     $("img").addClass("img-fluid");

});
