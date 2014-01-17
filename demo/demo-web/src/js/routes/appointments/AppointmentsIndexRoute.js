App.AppointmentsIndexRoute = Ember.Route.extend({

	redirect: function () {
		this.transitionTo('appointments.day');
	}
});
