/*
	Spatial by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/
$(document).ready(function () {
	$("#click").click(function (){
			$('html, body').animate({
				scrollTop: $("#three").offset().top
			}, 2000);
		});
	});

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Off-Canvas Navigation.
		$actions = '.actions';
		$(
			'<br>' +
			'<a href="http://order.firesite.tk"><button id="click" class="click1"><li>О нас</li></button></a>'
		).appendTo($actions);

			// Fix: Remove transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#navPanel')
						.css('transition', 'none');
	});

})(jQuery);