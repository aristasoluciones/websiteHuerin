jQuery(document).ready(function($) {
  "use strict";

    // Window Size
    //-------------------------------------------------------------------------------
    var h = $(window).height();
    var w = $(window).width();


    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) { // on scroll navbar fadeIn
            $('#navigation-1').removeClass('navbar-transparent');
        } else {
            $('#navigation-1').addClass('navbar-transparent');
        }
    });
   $('#intro-slider-1').height(h);
    $(window).resize(function(){

        var h = $(window).height();
        var w = $(window).width();

        $('#intro-slider-1').height(h);
        
    });


});