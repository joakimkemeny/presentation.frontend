App.AppointmentsCreateController = Ember.ObjectController.extend({

	needs: 'appointments',

	actions: {

		cancel: function () {
			this.transitionToRoute('appointments');
		},

		save: function () {

			var appointment = this.store.createRecord('appointment', this.get('model'));

			// Store a reference to the save promise to make it possible to wait for it elsewhere.
			// TODO: Solve this in a better (and safer) way.
			App.Appointment.createPromise = appointment.save().then(function () {
				this.transitionToRoute('appointments');
			}.bind(this));
		}
	}
});
