Ember.TextField.reopen({

	didInsertElement: function () {

		if (this.$().is('[placeholder]:not(.no-float)')) {
			this.$().floatingLabel();
			if (this.get('value')) {
				this.$().addClass('floatingLabel-active');
				this.$().prev().css({
					opacity: 1,
					bottom: 0
				});
			}
		}
	}
});
