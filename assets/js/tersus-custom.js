jQuery(document).ready(function($) {
  "use strict";

    // Custom functions
    //-------------------------------------------------------------------------------
    function rgb2hex(rgb) { // converts rgb color code to hex
        if (  rgb.search("rgb") == -1 ) {
            return rgb;
        } else {
            rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            return "#" +
                ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
                ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
                ("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
        }
    }

    jQuery.fn.extend({ // custom jQuery function for sliding tab
        customTab: function (options) {
            var defaults = {
                activ: 'none',
                fix: 'none'
            };
            options = $.extend(defaults, options);

            this.each( function(i) {
                var tab_content = $(this).find('.tab-content');

                switch(options.fix){

                    case 'slide' :
                        var count = 0;
                        tab_content.find('.tab-pane').each(function(i){
                            count = i * 100;
                            $(this).attr('data-tab-pane', i);
                            $(this).css({'margin-left': count + '%'});     
                        });

                        $(this).find('.tab-trigger li').removeClass('active');
                        $(this).find('.tab-trigger li:first-child').addClass('active');
                    break;

                    case 'height':
                        var height = (options.activ != 'none') ? tab_content.find(options.activ + '.tab-pane').height() : tab_content.find('.tab-pane.active').height();
                        tab_content.height(height);
                    break;
                }
            });

        return this;
        }
    });

    if($.isFunction($.fn.fancybox)){
        $(".lightbox-trigger").fancybox({
            modal: false,
            margin: 0,
            padding: 0,
            maxWidth : 960
        });
    }
    // Portfolio Image
    //-------------------------------------------------------------------------------
    if($.isFunction($.fn.magnificPopup)){
        $('.magnificant-lightbox').magnificPopup({

            gallery: {
                    enabled: true
                },
            removalDelay: 300,
            type: 'image',
            mainClass: 'mfp-fade',
            callbacks: {
              beforeOpen: function() {
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomIn');
              },
              open: function(){
                if(this.isOpen){
                    //overwrite default prev + next function. Add timeout for css3 crossfade animation
                    $.magnificPopup.instance.next = function() {
                        var self = this;
                        self.wrap.removeClass('mfp-in').addClass('mfp-out');
                        setTimeout(function() { $.magnificPopup.proto.next.call(self); self.wrap.removeClass('mfp-out').addClass('mfp-in'); }, 220);
                        
                        
                    }
                    $.magnificPopup.instance.prev = function() {
                        var self = this;
                        self.wrap.removeClass('mfp-in').addClass('mfp-out');
                        setTimeout(function() { $.magnificPopup.proto.next.call(self); self.wrap.removeClass('mfp-out').addClass('mfp-in'); }, 220);
                    }
                }
            }
            }
          });
      }


        // Window Size
        //-------------------------------------------------------------------------------
        var h = $(window).height();
        var w = $(window).width();


        // Boostrap According fix
        //-------------------------------------------------------------------------------
        $('.panel-heading a').on('click',function(e){
            if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
                e.stopPropagation();
            }
            e.preventDefault();
        });

        // navigation
        //-------------------------------------------------------------------------------
        $('body').scrollspy({target: '#navigation-1', offset: 88});

    $( '#navigation-1-collapse' ).find( 'a[href*=#]:not([href=#])' ).on( 'click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: (target.offset().top - 40)
                    }, 1000);
    				
    				if($('.navbar-toggle').css('display') !='none'){
    					$(this).parents('.container').find(".navbar-toggle").trigger( "click" );
    				}				
                    return false;
                }
            }
        });

    $( '#navigation-1 .navbar-toggle.large-view' ).on( 'click', function () {
            $('.navbar-offcanvas').toggleClass('shownupdown');

        });


        // scroll
        // --------------------------------------------------------------------------
    /*$( '.scroll-to' ).on( 'click', function ( e ) {
            e.preventDefault();
            var target = $(this).attr('href');
                target = (typeof target !== 'undefined') ? target : $(this).attr('data-scroll-to');
                target = (target == '#top') ? 0 : $(target).offset().top - 80;

            $('html,body').stop().animate({
                scrollTop: (target)
            }, 800);
        });*/
	$( '.scrollup' ).on( 'click', function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });

    $( '.md-scroll-to' ).on( 'click', function ( e ) {
            var w = $(window).width();

            if(w<991){
                e.preventDefault();
                var target = $(this).attr('href');
                    target = (typeof target !== 'undefined') ? target : $(this).attr('data-scroll-to');
                    target = (target == '#top') ? 0 : $(target).offset().top - 80;

                $('html,body').stop().animate({
                    scrollTop: (target)
                }, 800);
            }
        });


        // According Scroll
        //-------------------------------------------------------------------------------
        $('.tersus-block-projects-1 .projects-accordion').on('shown.bs.collapse', function () {
            var target = $(this).find('.collapse.in').offset().top - 80;
            $('html,body').stop().animate({
                scrollTop: (target)
            }, 800);
        });


        // Vertical Progressbar
        //-------------------------------------------------------------------------------
        $('.progress-vertical').each( function(){
            var value = $(this).find('.progress-bar').attr('data-value');
            $(this).find('.progress-bar').html('<span style="height:'+value+';"></span>');
        });
        $(window).scroll(function () {
            if ($(this).scrollTop() > 900) { // on scroll navbar fadeIn
                $('.intro, .section-sticky').addClass('hidden-visibility');
            } else {
                $('.intro, .section-sticky').removeClass('hidden-visibility');
            }
        });
        // Background Img
        //-------------------------------------------------------------------------------
        $('.img-bg').each( function(){
            var src = $(this).attr('data-src');
            $(this).attr('style', 'background-image: url(' + src + ');');
        });
        // CounterUp
        //-------------------------------------------------------------------------------
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
        // Map
        //-------------------------------------------------------------------------------
        // checks if #map div exists
        if ($('#map').length > 0) {

            // picks color code from #map for changing map's color
            var mapColor = $( '#map' ).css( "backgroundColor" );
            var saturation = $('#map').attr('data-mapsaturation');

            if (saturation == '' || typeof(saturation) === 'undefined') { saturation = 50; };

            // configuring styles
            var styles = [{
                featureType: "all",
                stylers: [{
                    saturation: -100
                }]
            }, {
                featureType: "road",
                elementType: "geometry",
                stylers: [{
                    hue: rgb2hex(mapColor)
                }, {
                    saturation: saturation
                }]
            }];

            // configuring GMaps plugin
            var map = new GMaps({
                div: '#map',
                zoom: 14,
                styles: styles,
                mapTypeControl: false,
                scrollwheel: false,
                draggable: false,
                lat: tersusConfig.mapLat,
                lng: tersusConfig.mapLng
            });
            
            // adding marker on map
            map.addMarker({
                lat: tersusConfig.mapLat,
                lng: tersusConfig.mapLng
            });

            // adding "view on googlemaps.com" on map
            map.addControl({
                position: 'top_right',
                content: 'view on googlemaps.com',
                style: {
                    margin: '5px',
                    padding: '1px 6px',
                    border: 'solid 1px #aaa',
                    background: '#fff'
                },
                events: {
                    click: function () {
                        window.location.href = 'https://maps.google.com/maps?q=' + tersusConfig.mapLat + ',' + tersusConfig.mapLng + '+(My+Point)&z=14&ll=' + tersusConfig.mapLat + ',' + tersusConfig.mapLng;
                    }
                }
            });
        }


        // Fancybox & Lightbox
        //-------------------------------------------------------------------------------
    $( '.lightbox-default .portfolio-img' ).on( 'click', function () {
            $( this ).find('.portfolio-cover').addClass('hovered');
        }, function() {
            $( this ).find('.portfolio-cover').removeClass('hovered');
        });


        // Form Ajax
        //-------------------------------------------------------------------------------
        $('.form-ajax').submit(function( e ) {
            var action = $(this).attr('action');
            var form = $(this);

            form.find('.btn').val('wait..');
            $.ajax({
                type: "POST",
                url: action,
                data: form.serialize(),
                success: function (data) {
                    form.html(data);
                }
            });

            return false;
            e.preventDefault();
        });

        // On window resize
        //-------------------------------------------------------------------------------
        $(window).resize(function(){
            var h = $(window).height();
            var w = $(window).width();

            
        });


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

	$( '.icon-box.icon-box-boxed2-huerin ul > li > a' ).on('click',function () {
        var splitName = this.id.split("-");

             $('.circle-detail#'+splitName[0]+'-'+splitName[1]).addClass('show-element');
             var contenido = document.querySelector('.circle-detail#'+splitName[0]+'-'+splitName[1]);
             var ele = $('.content-circle#'+splitName[0]+''+splitName[1]).html();

        if($.trim(ele)){
                 $.magnificPopup.open({
                     items:{
                         src:contenido,
                         type:'inline'
                     }
                 });
         }else{
            $('.circle-detail#'+splitName[0]+'-'+splitName[1]).removeClass('show-element');
        }

    });

    $(window).load(function () {
        // Preloader
        //-------------------------------------------------------------------------------

		$(".preloader").delay(300).fadeOut(200);
	});


/* ends */
});