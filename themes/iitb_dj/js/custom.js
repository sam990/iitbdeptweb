!function($) {
  var mainHeader = $('#navbar'),
      topHeader = $('.top-nav'),
  		secondaryNavigation = $('.cd-secondary-nav'),
  		//this applies only if secondary nav is below intro section
  		belowNavHeroContent = $('.sub-nav-hero'),
  		headerHeight = mainHeader.height();

  	//set scrolling variables
  	var scrolling = false,
  		previousTop = 0,
  		currentTop = 0,
  		scrollDelta = 2,
  		scrollOffset = 20;

  	mainHeader.on('click', '.nav-trigger', function(event){
  		// open primary navigation on mobile
  		event.preventDefault();
  		mainHeader.toggleClass('nav-open');
  	});

  	$(window).on('scroll', function(){
  		if( !scrolling ) {
  			scrolling = true;
  			(!window.requestAnimationFrame)
  				? setTimeout(autoHideHeader, 250)
  				: requestAnimationFrame(autoHideHeader);
  		}
  	});

  	$(window).on('resize', function(){
  		headerHeight = mainHeader.height();
  	});

  	function autoHideHeader() {
  		var currentTop = $(window).scrollTop();

  		( belowNavHeroContent.length > 0 )
  			? checkStickyNavigation(currentTop) // secondary navigation below intro
  			: checkSimpleNavigation(currentTop);

  	   	previousTop = currentTop;
  		scrolling = false;
  	}

  	function checkSimpleNavigation(currentTop) {
		// if ( $(window).width() > 767 ){
  		//there's no secondary nav or secondary nav is below primary nav
  	    if (previousTop - currentTop > scrollDelta) {
  	    	//if scrolling up...
          if ( $(window).width() > 767 ){
  	    	  mainHeader.removeClass('is-hidden');
            $(".top-nav").removeClass('top-nav-fixed').addClass('top-nav-hidden');
          }

  	    } 
        else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
  	    	//if scrolling down...
          if ( $(window).width() > 767 )
            mainHeader.addClass('is-hidden');
            $(".top-nav").removeClass('top-nav-hidden').addClass('top-nav-fixed');
          }
		    }
		  // }
  	}

    $('#back-to-top').on('click', function(){
      $('body,html').animate({
      scrollTop: 0
      }, 800);
    });
    ///////////////////////////
  	// On Scroll
  	$(window).on('scroll', function() {
  		var wScroll = $(this).scrollTop();

  	
  		// Back To Top Appear
  		wScroll > 100 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
  	});


    // $('.portfolioFilter a').click(function() {
    //   $('.portfolioFilter .current').removeClass('current');
    //   $(this).addClass('current');
    //
      // var selector = $(this).attr('data-filter');
      // $container.isotope({
      //
      //   filter: selector,
      // });
    //   return false;
    // });


    // $(document).ready(function(){
    //   $('.Portfolio-nav > li > a').hover(function() {
    //       $('.portfolioFilter .current').removeClass('current');
    //   $(this).tab('show').addClass('current');
    //   });
    // });

  

    function theme_menu(){

    	//Main menu
    	$('#main-menu').smartmenus();

    	//Mobile menu toggle
    	$('.navbar-toggle').click(function(){
    		$('.region-navigation-collapsible').slideToggle();
    	});

    	//Mobile dropdown menu
    	if ( jQuery(window).width() < 767) {
    		$(".region-navigation-collapsible li a:not(.has-submenu)").click(function () {
    			$('.region-navigation-collapsible').hide();
    	    });
    	}
    }

      $(document).ready(function($){
      theme_menu();
    });



}(jQuery);
