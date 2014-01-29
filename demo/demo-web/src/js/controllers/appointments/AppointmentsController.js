App.AppointmentsController = Ember.ArrayController.extend({

	// These are populated from the route.
	appointments: [],
	showCreateAppointment: false,
	showEditAppointment: false,
	currentView: 'day',

	// Search parameters.
	startDateFilter: moment({ hour: 0, minute: 0, seconds: 0, milliseconds: 0 }).toDate(),
	endDateFilter: moment({ hour: 0, minute: 0, seconds: 0, milliseconds: 0 }).toDate(),
	textFilter: null,

	actions: {

		editAppointmentFromId: function (id) {
			this.transitionToRoute('appointments.edit', this.store.find('appointment', id));
		},

		next: function () {

			var start = moment(this.get('startDateFilter'));
			var end = moment(this.get('endDateFilter'));

			if (this.get('currentView') === 'day') {
				start.add('days', 1);
				end.add('days', 1);
			} else if (this.get('currentView') === 'week') {
				start.add('weeks', 1);
				end.add('weeks', 1);
			}

			this.set('startDateFilter', start.format('YYYY-MM-DD'));
			this.set('endDateFilter', end.format('YYYY-MM-DD'));
		},

		previous: function () {

			var start = moment(this.get('startDateFilter'));
			var end = moment(this.get('endDateFilter'));

			if (this.get('currentView') === 'day') {
				start.subtract('days', 1);
				end.subtract('days', 1);
			} else if (this.get('currentView') === 'week') {
				start.subtract('weeks', 1);
				end.subtract('weeks', 1);
			}

			this.set('startDateFilter', start.format('YYYY-MM-DD'));
			this.set('endDateFilter', end.format('YYYY-MM-DD'));
		}
	},

	content: function () {

		var startDate = moment(this.get('startDateFilter'));
		var endDate = moment(this.get('endDateFilter'));
		var text = new RegExp(this.get('textFilter'), 'i');

		var excludeStartDate = true; //!this.get('startDateFilter') || !startDate.isValid();
		var excludeEndDate = true; // !this.get('endDateFilter') || !endDate.isValid();
		var excludeText = !this.get('textFilter');

		return this.get('appointments').filter(function (appointment) {
			return (excludeStartDate || !startDate.isAfter(appointment.get('startTime'))) &&
					(excludeEndDate || endDate.add('days', 1).isAfter(appointment.get('endTime'))) &&
					(excludeText || text.test(appointment.get('notes')));
		});
	}.property('startDateFilter', 'endDateFilter', 'textFilter', 'appointments.@each'),

	showCalendar: function () {
		return this.get('currentView') === 'day' || this.get('currentView') === 'week';
	}.property('currentView')
});
