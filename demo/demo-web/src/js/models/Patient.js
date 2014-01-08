App.Patient = DS.Model.extend({

	civicRegNr: DS.attr(),
	firstName: DS.attr(),
	lastName: DS.attr(),
	streetAddress: DS.attr(),
	zipCode: DS.attr(),
	city: DS.attr(),
	phone: DS.attr(),
	mobile: DS.attr(),

	notes: DS.hasMany('note', { async: true })
});
