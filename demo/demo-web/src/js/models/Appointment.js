App.Appointment = DS.Model.extend({

	startTime: DS.attr('date'),
	endTime: DS.attr('date'),
	notes: DS.attr()
});
