App.AppointmentsEditController = Ember.ObjectController.extend({

	needs: 'appointments',

	actions: {

		cancel: function () {

			var appointment = this.get('model');
			appointment.rollback();

			this.transitionToRoute('appointments');
		},

		save: function () {

			var appointment = this.get('model');
			appointment.save();

			this.transitionToRoute('appointments');
		}
	}
});
