App.PatientsRoute = Ember.Route.extend({

	model: function () {
		return this.store.find('patient');
	},

	renderTemplate: function () {

		this.render();

		// TODO: Find out if this is really the best way to do this?
		this.render('patients/header', {
			into: 'patients',
			outlet: 'patientsHeader'
		});
	},

	setupController: function (controller, model) {
		controller.set('patients', model);
	}
});
