App.PatientEditRoute = Ember.Route.extend({

	activate: function () {
		this.controllerFor('patient').set('showEditPatient', true);
	},

	deactivate: function () {
		this.controllerFor('patient').set('showEditPatient', false);
	},

	model: function () {
		return this.modelFor('patient');
	}
});
