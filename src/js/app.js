/* global Rainbow, impress, console */
(function ($, Rainbow, impress, console) {
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
			var addressBar = browser.find('.address div');
			browser.append('<iframe src="' + addressBar.text() + '" frameborder="0"></iframe>');

			var backButton = browser.find('button.back');
			var forwardButton = browser.find('button.forward');
			var refreshButton = browser.find('button.refresh');

			var iframe = browser.find('iframe');

			iframe.load(function () {
				addressBar.text(this.src);
				var w = this.contentWindow;

				backButton.on('click', function (e) {
					w.history.back();
				});

				forwardButton.on('click', function (e) {
					w.history.forward();
				});

				refreshButton.on('click', function (e) {
					w.location.reload();
				});

				$(w).on('hashchange', function (e) {
					addressBar.text(e.originalEvent.newURL);
					console.log(w.location);
				});
			});

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
			Frontend.loadDemo($(this));
		});

		Frontend.enterFullScreen();

		impress().init();
		impressConsole().init('css/console.css');
	});

}($, Rainbow, impress, console));
