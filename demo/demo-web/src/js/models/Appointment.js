App.Appointment = DS.Model.extend({

	startTime: DS.attr('isodatetime'),
	endTime: DS.attr('isodatetime'),
	notes: DS.attr(),

	date: function (key, value) {

		// setter
		if (arguments.length > 1 && value.length === 10) {

			var date = moment(value, 'YYYY-MM-DD');

			var start = moment(this.get('startTime'));
			start.year(date.year());
			start.month(date.month());
			start.day(date.day());
			this.set('startTime', start.toDate());

			var end = moment(this.get('endTime'));
			end.year(date.year());
			end.month(date.month());
			end.day(date.day());
			this.set('endTime', end.toDate());
		}

		// getter
		return moment(this.get('startTime')).format('YYYY-MM-DD');

	}.property('startTime'),

	start: function (key, value) {

		// setter
		if (arguments.length > 1 && value.length === 5) {

			var time = moment(value, 'HH:mm');

			var start = moment(this.get('startTime'));
			start.hour(time.hour());
			start.minute(time.minute());
			this.set('startTime', start.toDate());
		}

		// getter
		return moment(this.get('startTime')).format('HH:mm');

	}.property('startTime'),

	end: function (key, value) {

		// setter
		if (arguments.length > 1 && value.length === 5) {

			var time = moment(value, 'HH:mm');

			var end = moment(this.get('endTime'));
			end.hour(time.hour());
			end.minute(time.minute());
			this.set('endTime', end.toDate());
		}

		// getter
		return moment(this.get('endTime')).format('HH:mm');

	}.property('endTime')
});
