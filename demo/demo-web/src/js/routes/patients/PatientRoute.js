App.PatientRoute = Ember.Route.extend({

	activate: function () {
		this.controllerFor('patients').set('showPatient', true);
	},

	deactivate: function () {
		this.controllerFor('patients').set('showPatient', false);
	},

	model: function (params) {
		return this.store.find('patient', params.patient_id);
	},

	renderTemplate: function () {

		this.render();

		// TODO: Find out if this is really the best way to do this?
		this.render('patient/header', {
			into: 'patients',
			outlet: 'patientHeader'
		});
	},

	setupController: function (controller, model) {
		controller.set('patient', model);
	}
});
