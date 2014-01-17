App.AppointmentsDayRoute = Ember.Route.extend({

	activate: function () {

		var controller = this.controllerFor('appointments');

		controller.set('endDateFilter', controller.get('startDateFilter'));
		controller.set('currentView', 'day');
	}
});
