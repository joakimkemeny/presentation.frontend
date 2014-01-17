App.AppointmentsYearRoute = Ember.Route.extend({

	activate: function () {
		this.controllerFor('appointments').set('currentView', 'year');
	}
});
