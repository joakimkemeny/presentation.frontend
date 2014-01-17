(function ($) {
	'use strict';

	var App = {

		initFloatingLabels: function () {

			var inputs = $('input[placeholder]:not(.no-float), textarea[placeholder]');
			inputs.floatingLabel();
			inputs.each(function () {
				var input = $(this);
				if (input.val() !== '') {
					input.addClass('floatingLabel-active');
					input.prev().css({
						opacity: 1,
						bottom: 0
					});
				}
			});
		}
	};

	$(function () {
		App.initFloatingLabels();
	});

})($);
