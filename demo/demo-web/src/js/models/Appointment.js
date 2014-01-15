App.Appointment = DS.Model.extend({

	startTime: DS.attr('isodatetime'),
	endTime: DS.attr('isodatetime'),
	notes: DS.attr()
});
