App.AppointmentsController = Ember.ArrayController.extend({

	// These are populated from the route.
	appointments: [],
	showCreateAppointment: false,
	showEditAppointment: false,

	// Search parameters.
	startDateFilter: null,
	endDateFilter: null,
	textFilter: null,

	actions: {

		editAppointmentFromId: function (id) {
			this.transitionToRoute('appointments.edit', this.store.find('appointment', id));
		}
	},

	content: function () {

		var startDate = moment(this.get('startDateFilter'));
		var endDate = moment(this.get('endDateFilter'));
		var text = new RegExp(this.get('textFilter'));

		var excludeStartDate = !this.get('startDateFilter') || !startDate.isValid();
		var excludeEndDate = !this.get('endDateFilter') || !endDate.isValid();
		var excludeText = !this.get('textFilter');

		return this.get('appointments').filter(function (appointment) {
			return (excludeStartDate || !startDate.isAfter(appointment.get('startTime'))) &&
					(excludeEndDate || endDate.add('days', 1).isAfter(appointment.get('endTime'))) &&
					(excludeText || text.test(appointment.get('notes')));
		});
	}.property('startDateFilter', 'endDateFilter', 'textFilter', 'appointments.@each')
});
