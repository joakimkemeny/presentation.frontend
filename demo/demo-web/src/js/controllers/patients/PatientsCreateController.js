App.PatientsCreateController = Ember.ObjectController.extend({

	needs: 'patients',

	actions: {

		cancel: function () {
			this.transitionToRoute('patients');
		},

		save: function () {

			var patient = this.store.createRecord('patient', this.get('model'));

			// Store a reference to the save promise to make it possible to wait for it elsewhere.
			// TODO: Solve this in a better (and safer) way.
			App.Patient.createPromise = patient.save().then(function (result) {
				this.transitionToRoute('patient', result);
			}.bind(this));
		}
	}
});
