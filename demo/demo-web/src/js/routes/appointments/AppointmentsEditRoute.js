App.AppointmentsEditRoute = Ember.Route.extend({

	activate: function () {
		this.controllerFor('appointments').set('showEditAppointment', true);
	},

	deactivate: function () {
		this.controllerFor('appointments').set('showEditAppointment', false);
	},

	model: function (params) {
		return this.store.find('appointment', params.appointment_id);
	}
});
