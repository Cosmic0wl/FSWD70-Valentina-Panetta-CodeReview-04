$(document).ready(function() {
    var obj = movies;
    //JSON GENERATOR
    setContent();

    // INCREMENT LIKES FUNCTION

    function incrementLikes(i) {
        obj[i].likes++;
        var plusLikes = $(".plusLikes");
        $(plusLikes[i]).html(obj[i].likes);
    }

    // COMPARE FUNCTIONS 

    function compareLikes(movie1, movie2) {
        return movie2.likes - movie1.likes;
    }

    function compareTitles(movie1, movie2) {
        return movie1.title.localeCompare(movie2.title);
    }

    // SORT FUNCTIONS

    function sortObjByLikes() {
        return obj.sort(compareLikes);
    }

    function sortObjByAlphabet() {
        return obj.sort(compareTitles);
    }

    var sortingL = $(".sort");
    $(sortingL).click(function() {
        sortObjByLikes();
        setContent();
    });

    var sortingA = $(".alphabet");
    $(sortingA).click(function() {
        sortObjByAlphabet();
        setContent();
    });

    // SET CONTENT FUNCTION 

    function setContent() {

        for (let i = 0; i < obj.length; i++) {
            var myImage = $('<img src=' + obj[i].img + '>');
            var imgDiv = $(".image");
            $(imgDiv[i]).html(myImage);
            var myText = $('<p>' + obj[i].title + '</p>' + '<p>' + obj[i].description + '</p>');
            var textDiv = $(".text");
            $(textDiv[i]).html(myText);
            var myLikes = $('<span class="text-success button">Like <i class="fa fa-thumbs-o-up"></i></span>' +
                '<span class="plusLikes bg-success text-light">' + obj[i].likes + '</span>');
            var likesDiv = $(".likes");
            $(likesDiv[i]).html(myLikes);
        }

        var btn = $(".button");

        for (let i = 0; i < btn.length; i++) {
            $(btn[i]).click(function() {
                incrementLikes(i);
            });
        }
        $("p").addClass("text-light");
        $(".plusLikes").addClass("ml-3").addClass("rounded-circle").addClass("p-3");
        $("img").addClass("img-fluid");
    }

    // ADDITIONAL STYILING

});