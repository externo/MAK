/*
* Launcher V1.1
* Copyright 2015, Limitless LLC
* www.limitless.company
*/

var windowHeight;
var windowWidth;

jQuery(document).ready(function($) {
   'use strict';

	$(".variation").click(function(){
		var url = $(this).attr("data-url");
		window.open(url, "_self");
	});

	$(".demo .variation").each(function() {
		var f = "./images/background/";
		var i = $(".demo .variation").index(this) + 1;
		$(this).css("background-image", "url("+f+i+".jpg)");
	});


	var c = $(".demo .variation").length;
	$(".demo .variation").hover(function(e){
		if (windowWidth > 768) {
			$(this).siblings().css("width", "30%");
			$(this).css("width", "40%");
		}
	}, function(){
		if (windowWidth > 768) {
			$(".demo .variation").css("width", 100/c + "%");
		}
	});
});


$(window).load(function() {
	fixSizes();
	$(".loader").delay(1000).fadeOut('slow');
});


$(window).resize(function() {
	fixSizes();
});


function fixSizes() {

   	windowHeight = $(window).height();
	windowWidth = $(window).width();

	$(".fullscreen").css('height', windowHeight);
	var c = $(".demo .variation").length;

	if (windowWidth > 768) {

		$(".demo .variation").css('width', 100/c + '%');
		$(".demo .variation").css('height', windowHeight);

	} else {

		$(".demo .variation").css('height', windowHeight/c + 'px');
		$(".demo .variation").css('width', windowWidth);

	}

	$(".demo .variation .inner").each(function() {
		$(this).css('margin-top', ($(".demo .variation").height() - $(this).height()) / 2);
	});

	$(".vertical-center").each(function() {
		$(this).css('top', ($(this).parent().height() - $(this).height()) / 2);
	});

}