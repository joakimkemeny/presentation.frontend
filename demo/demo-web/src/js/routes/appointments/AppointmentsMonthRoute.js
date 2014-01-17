App.AppointmentsMonthRoute = Ember.Route.extend({

	activate: function () {
		this.controllerFor('appointments').set('currentView', 'month');
	}
});
