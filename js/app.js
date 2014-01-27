/* global impress, impressConsole */
(function ($, impress, impressConsole) {
	'use strict';

	var Presentation = {

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

				backButton.on('click', function () {
					w.history.back();
				});

				forwardButton.on('click', function () {
					w.history.forward();
				});

				refreshButton.on('click', function () {
					w.location.reload();
				});

				$(w).on('hashchange', function (e) {
					addressBar.text(e.originalEvent.newURL);
				});
			});

			step.data('demo-loaded', true);
		}
	};

	$(function () {

		$('.step').on('impress:stepenter', function () {
			Presentation.loadDemo($(this));
		});

		Presentation.enterFullScreen();

		impress().init();
		impressConsole().init('css/console.css');
	});

}($, impress, impressConsole));
