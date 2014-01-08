App.AppointmentsRoute = Ember.Route.extend({

	model: function () {
		return this.store.find('appointment');
	},

	setupController: function (controller, model) {
		controller.set('appointments', model);
	}
});
