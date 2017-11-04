
$(document).ready(function () {
	"use strict";
	$('.button-order-bottom a').hover(
		function(){
			$('.button-order-top a').css({"background-color":"#fff", "color":"#15aeeb"});
		},
		function(){
			$('.button-order-top a').css({"background-color":"#15aeeb", "color":"#fff"});
		}
		);
	// button-filter blog-category
	$('document').ready(function(){
		$('.button-filter').click(function(){
			$('.open-block-felter').fadeToggle();
		});
	});
	// heart on home-page
	$(function(){
		$('.click_like').click(function(){
			$(this).toggleClass('fa-heart');
		});
	});
	$(function(){
		$('.more-info').click(function(){
			$(this).hide();
			$('.more-text').addClass('active');
		});
	});
	// heart on comments-page
	$(function(){
		$('.fa-heart').click(function(){
			$(this).addClass('fa-heart-blue');
		});
	});
	//slider work
	var swiper = new Swiper('.swiper-container-work', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		spaceBetween: 30,
		autoplay: 7000,
		keyboardControl: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		loop: true
	});
	//slider gallery
	var swiper = new Swiper('.gallery-new-events', {
		nextButton: '.gallery-services-button-next',
		prevButton: '.gallery-services-button-prev',
		slidesPerView: 3,
		spaceBetween: 20,
		breakpoints: {
			600: {
				slidesPerView: 1,
			},
			900: {
				slidesPerView: 2,
			}
		}
	});
	var galleryTop = new Swiper('.gallery-top', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		spaceBetween: 10,
	});
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 10,
		centeredSlides: false,
		slidesPerView: '3',
		touchRatio: 0.2,
		slideToClickedSlide: true
	});
	galleryTop.params.control = galleryThumbs;
	galleryThumbs.params.control = galleryTop;
    //slider last
    var swiper = new Swiper('.swiper-container-last', {
    	pagination: '.swiper-pagination-last',
    	slidesPerView: 3,
    	paginationClickable: true,
    	spaceBetween: 30,
    	freeMode: true,
    	breakpoints: {
    		600: {
    			slidesPerView: 1,
    		},
    		900: {
    			slidesPerView: 2,
    		}
    	}
    });
    $(function(){
    	$(".test .hra").click(function(){
    		$(this).find(".fa-plus").fadeToggle('fast');
    		$(this).find(".fa-minus").fadeToggle('fast');
    	});
    });
    $(function(){
    	$('.mobile-header-bottom .menu-i .fa-bars').click(function(){
    		$(this).toggleClass("fa-times");
    	});
    });
	//slider on home-page
	var mySwiper = new Swiper ('.slider .swiper-container', {
		loop: true,
		speed: 1000,
		autoplay: 7000,
		pagination: '.swiper-pagination',
		paginationClickable: true
	});
	var swiper = new Swiper('.swiper-container-table', {
		scrollbar: '.swiper-scrollbar',
		slidesPerView: 3,
		paginationClickable: true,
		spaceBetween: 30,
		breakpoints: {
			600: {
				slidesPerView: 1,
			},
			900: {
				slidesPerView: 2,
			}
		}
	});

});
$(document).ready(function()
{
	var flag=true;
	$(".toggle-container").click(function()
	{
		if(flag==true)
		{
			$(".menu-icon").slideUp();
			flag=!flag;
		}
		else
		{
			$(".menu-icon").slideDown();
			flag=!flag;
		}
	});
});



var ww = document.body.clientWidth;
$(document).ready(function() {
	$(".nav-bottom-mobile li .hra").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
		};
	})
	
	$(".togMenu").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".nav-bottom-mobile").toggle();
	});
	adjustMenu();
})
$(window).bind('resize orientationchange', function() {
	ww = document.body.clientWidth;
	adjustMenu();
});

var adjustMenu = function() {
	if (ww < 1050) {
		$(".togMenu").css("display", "inline-block");
		if (!$(".togMenu").hasClass("active")) {
			$(".nav-bottom-mobile").hide();
		} else {
			$(".nav-bottom-mobile").show();
		}
		$(".nav-bottom-mobile li").unbind('mouseenter mouseleave');
		$(".nav-bottom-mobile li a.parent").unbind('click').bind('click', function(e) {
			// must be attached to anchor element to prevent bubbling
			e.preventDefault();
			$(this).parent("li").toggleClass("hover");
		});
	} 
	else if (ww >= 1050) {
		$(".togMenu").css("display", "none");
		$(".nav-bottom-mobile").hide();
		$(".nav-bottom-mobile li").removeClass("hover");
		$(".nav-bottom-mobile li a").unbind('click');
		$(".nav-bottom-mobile li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
		 	// must be attached to li so that mouseleave is not triggered when hover over submenu
		 	$(this).toggleClass('hover');
		 });
	}
}
count=0;
$( document ).on( "click", "#btn-like", function() {
	count++;
	$(this).find(".like-value").text(count);
	$('.like-value').addClass('like-brackets-left');
	$('.like-value').addClass('like-brackets-right');
});
jQuery(document).ready(function($){
	$('.button-list').click(function(){
		$('.mobile-list').toggleClass('active');
	});
	$('.list .drob-list li .sublist').hide();
	$('.list .drob-list li ').click(function() {
		$(this).find('.sublist').slideToggle('fast');
		$(this).find('.fa-caret-down').toggleClass('fa-caret-right');
		$(this).children('a').toggleClass("bold");
	});
})
