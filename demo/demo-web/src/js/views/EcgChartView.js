App.EcgChartView = Ember.View.extend({
	tagName: 'div',

	height: 600,
	width: 800,

	didInsertElement: function () {

		this.$().ecgChart({
			height: this.height,
			width: this.width
		});

		// TODO: Implement this in a smarter way.
		App.ecgChart = this.$();
	},

	willDestroyElement: function () {
		this.$().ecgChart('destroy');
	}
});

Ember.Handlebars.helper('ecg-chart', App.EcgChartView);
