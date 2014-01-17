/* global Rainbow, impress */
(function ($, Rainbow, impress) {
	'use strict';

	var Frontend = {

		/**
		 * Attaches key handlers to enter full screen.
		 */
		enterFullScreen: function () {

			$(document).keypress(function (e) {
				if (e.keyCode === 102) {
					document.getElementsByTagName('html')[0].webkitRequestFullScreen();
				}
			});
		},

		/**
		 * Loads the demo for the current step into an iframe.
		 */
		loadDemo: function (step) {

			if (step.data('demo-loaded')) {
				return;
			}

			var browser = step.find('.browser');
			var src = browser.data('src');
			browser.append('<iframe src="' + src + '" frameborder="0"></iframe>');

			step.data('demo-loaded', true);
		},

		/**
		 * Loads the source code for the current step.
		 */
		loadSrc: function (step) {

			if (step.data('src-loaded')) {
				return;
			}

			$('code[data-src]', step).each(function (index, element) {
				var $element = $(element);
				var srcUrl = $element.data('src');
				var srcLang = $element.data('language');
				$.get(srcUrl, function (data) {
					if (srcLang === 'text' || srcLang === '') {
						$element.append(data);
					} else {
						Rainbow.color(data, srcLang, function (highlighted) {
							$element.append(highlighted);
						});
					}
				}, 'text');
			});

			step.data('src-loaded', true);
		}
	};

	$(function () {

		$('.step').on('impress:stepenter', function () {
			Frontend.loadSrc($(this));
		});

		Frontend.enterFullScreen();

		impress().init();
	});

}($, Rainbow, impress));
