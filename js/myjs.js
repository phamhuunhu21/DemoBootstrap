$(document).ready(function() {

	//load website
	$('html, body').animate({
		'scrollTop':$('body').offset().top,
	}, 1000);

	//Choose Apple
	$('#apple').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			'scrollTop':$('#h2-apple').offset().top,
		}, 1000);
	});

	//Choose Samsung
	$('#samsung').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			'scrollTop':$('#h2-samsung').offset().top,
		}, 1000);
	});

	//Choose Oppo
	$('#oppo').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			'scrollTop':$('#h2-oppo').offset().top,
		}, 1000);
	});

	//Choose Home
	$('#home-click').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			'scrollTop':$('body').offset().top,
		}, 1000);
	});

});