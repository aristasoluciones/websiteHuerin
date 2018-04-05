$('body').waitForImages(function() {

    if(w > 991){

        // Wow.js
        //-------------------------------------------------------------------------------
        new WOW({mobile: false}).init();


        // Parallax
        //-------------------------------------------------------------------------------
        $.stellar({
            // Set scrolling to be in either one or both directions
            horizontalScrolling: false,

            // Set the global alignment offsets
            horizontalOffset: 0,
            verticalOffset: 0,

            // Refreshes parallax content on window load and resize
            responsive: true,

            // Select which property is used to calculate scroll.
            // Choose 'scroll', 'position', 'margin' or 'transform',
            // or write your own 'scrollProperty' plugin.
            scrollProperty: 'scroll',

            // Select which property is used to position elements.
            // Choose between 'position' or 'transform',
            // or write your own 'positionProperty' plugin.
            positionProperty: 'transform',

            // Enable or disable the two types of parallax
            parallaxBackgrounds: true,
            parallaxElements: true,

            // Hide parallax elements that move outside the viewport
            hideDistantElements: false,

        });
    }




    // Isotope
    //-------------------------------------------------------------------------------
    // init Isotope
    $('.portfolio-grid').isotope({
        // options
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        filter: '.branding'
    });

    // filter items on button click
    $('.portfolio-filter').on( 'click', 'button', function() {
        $('.portfolio-filter button').removeClass('active');

        var filterValue = $(this).attr('data-filter');
        $('.portfolio-grid').isotope({ filter: filterValue });
        $(this).addClass('active');
    });
});