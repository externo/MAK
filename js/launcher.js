var windowHeight;
var windowWidth;

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