App.PatientEditController = Ember.ObjectController.extend({

	needs: 'patient',

	actions: {

		cancel: function () {

			var patient = this.get('model');
			patient.rollback();

			this.transitionToRoute('patient', patient);
		},

		save: function () {

			var patient = this.get('model');
			patient.save();

			this.transitionToRoute('patient', patient);
		}
	}
});
