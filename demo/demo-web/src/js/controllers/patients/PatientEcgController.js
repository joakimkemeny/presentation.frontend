App.PatientEcgController = Ember.ObjectController.extend({

	needs: 'patient',

	actions: {

		cancel: function () {
			this.transitionToRoute('patient', this.get('model'));
		}
	}
});
