App.AppointmentsWeekRoute = Ember.Route.extend({

	activate: function () {

		var controller = this.controllerFor('appointments');

		var start = controller.get('startDateFilter');
		var end = controller.get('endDateFilter');
		if (start === end) {
			controller.set('startDateFilter', moment(start).isoWeekday(1).format('YYYY-MM-DD'));
			controller.set('endDateFilter', moment(end).isoWeekday(5).format('YYYY-MM-DD'));
		}

		controller.set('currentView', 'week');
	}
});
