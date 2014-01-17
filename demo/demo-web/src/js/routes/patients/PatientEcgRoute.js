App.PatientEcgRoute = Ember.Route.extend({

	activate: function () {
		this.controllerFor('patient').set('showEcg', true);
	},

	deactivate: function () {
		this.controllerFor('patient').set('showEcg', false);
	},

	model: function () {
		return this.modelFor('patient');
	}
});
