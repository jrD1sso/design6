/*global $, jQuery, alert*/
$(function () {
    'use strict';
    // mixItUp
    $("#works").mixItUp();
      
    $("#mixUp button").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    // Change Themes
    $(".themes span").on("click", function () {
    	$("link[href*='theme']").attr("href", $(this).attr("data-value"));
    	if($(this).hasClass("fa-circle-o")) {
    		$(".brand img").attr("src", "images/logo-light.png");
    	} else {
    		$(".brand img").attr("src", "images/logo-dark.png");
    	}
    });

    // Nice Scroll
    $("html").niceScroll({
        cursorcolor: '#e8115b',
        cursorwidth: '7px',
        cursorborder: '1px solid #e8115b',
        cursorborderradius: '3px',
        mousescrollstep:'50',
        scrollspeed: '80'
    });
    
});