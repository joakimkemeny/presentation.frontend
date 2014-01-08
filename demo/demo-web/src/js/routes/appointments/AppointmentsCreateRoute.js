App.AppointmentsCreateRoute = Ember.Route.extend({

	activate: function () {
		this.controllerFor('appointments').set('showCreateAppointment', true);
	},

	deactivate: function () {
		this.controllerFor('appointments').set('showCreateAppointment', false);
	},

	model: function () {
		return Ember.Object.create({});
	}
});
