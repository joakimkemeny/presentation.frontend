App.PatientsCreateRoute = Ember.Route.extend({

	activate: function () {
		this.controllerFor('patients').set('showCreatePatient', true);
	},

	deactivate: function () {
		this.controllerFor('patients').set('showCreatePatient', false);
	},

	model: function () {
		return Ember.Object.create({});
	}
});
