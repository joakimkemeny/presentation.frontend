Ember.TextField.reopen({

	didInsertElement: function () {

		if (this.$().is('[placeholder]')) {
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
