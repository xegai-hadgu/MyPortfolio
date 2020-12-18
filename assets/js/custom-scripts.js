(function($) {
    "use strict";
  
    $.fn.andSelf = function() {
      return this.addBack.apply(this, arguments);
    };
  
    /* Loader Code Start */
    $(window).on("load", function() {
      $(".section-loader").fadeOut("slow");
  
      var $container = $(".portfolioContainer");
      $container.isotope({
        filter: "*",
        animationOptions: {
          queue: true
        }
      });
  
      $(window).scroll(function() {
        if ($(this).scrollTop() == 0) {
          $("li").removeClass("active");
        }
      });
  
      $(".portfolio-nav li").click(function() {
        $(".portfolio-nav .current").removeClass("current");
        $(this).addClass("current");
  
        var selector = $(this).attr("data-filter");
        $container.isotope({
          filter: selector,
          animationOptions: {
            queue: true
          }
        });
        return false;
      });
    });
    /* Loader Code End */
  
    /*
      |====================
      | Mobile NAv trigger
      |=====================
      */
  
    var trigger = $(".navbar-toggler"),
      overlay = $(".overlay"),
      navc = $(".navbar-collapse");
  
    var collapse = true;
  
    $(trigger).addClass("collapsed");
    $(".navbar-toggler").on("click", function() {
      //navc.toggleClass("active");
      if(collapse){
        navc.addClass("active");
        collapse = false;    
      } else{
        navc.removeClass("active");
        collapse = true;   
      }  
    });
  
    $(".navbar-nav li a").on("click", function() {
      navc.removeClass("collapse");
    });
  
  
  
  
    /*
      |=================
      | Onepage Nav
      |================
      */
  
    $("#mh-header").onePageNav({
      currentClass: "active",
      changeHash: false,
      scrollSpeed: 750,
      scrollThreshold: 0.5
    });
  
    /*
      |=================
      | fancybox
      |================
      */
  
    $("[data-fancybox]").fancybox({});
  
    /*
      |===============
      | WOW ANIMATION
      |==================
      */
    var wow = new WOW({
      mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();
  
    /*
      | ==========================
      | NAV FIXED ON SCROLL
      | ==========================
      */
    $(window).on("scroll", function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 50) {
        $(".nav-scroll").addClass("nav-strict");
      } else {
        $(".nav-scroll").removeClass("nav-strict");
      }
    });
  
  
    /*
      |=================
      | Portfolio mixin
      |================
      */
  
    $("#portfolio-item").mixItUp();
  })(jQuery);