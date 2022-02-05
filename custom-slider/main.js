var currentSlide = 1;
var $slider = $(".slides");
var slideCount = $slider.children().length;
var slideTime = 2000;
var animationTime = 800;

setInterval(function() {
    $slider.animate({
        marginLeft : '-=900px'
    }, animationTime);
}, slideTime);