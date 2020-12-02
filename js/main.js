//*Gloubal JS */
$(function () {
    
    "use strict";
            var  btn    = $('#button'),
                 win    = $(window),
            navbar      = $(".navbar");
            /*niceScroll
           $("html").niceScroll();*/
  
        /*Scroll Navbar  Animation*/    
        function activeNavbar() {
                if (win.scrollTop() > 20) {
                    navbar.addClass("active-nav");
                } else {
                    navbar.removeClass("active-nav");
                } 
            }
            activeNavbar();
            win.on("scroll", function () {
                activeNavbar();
            });
            //navbar active link
            $(".navbar ul li a").click(function(){
                $(".navbar ul li a").removeClass("active")
                $(this).addClass("active")
            })
            $(".burger").click(function(){
                $(this).toggleClass("active")
                $(".navbar").toggleClass("open");
            })

    });