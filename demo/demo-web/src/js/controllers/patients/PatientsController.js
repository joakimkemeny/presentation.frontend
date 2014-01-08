App.PatientsController = Ember.ArrayController.extend({

	sortAscending: true,
	sortProperties: ['firstName', 'lastName', 'civicRegNr'],

	// These are populated from the route.
	patients: [],
	showPatient: false,
	showCreatePatient: false,

	// Search parameters.
	civicRegNrFilter: null,
	firstNameFilter: null,
	lastNameFilter: null,
	cityFilter: null,

	content: function () {

		var civicRegNr = new RegExp(this.get('civicRegNrFilter'));
		var firstName = new RegExp(this.get('firstNameFilter'), 'i');
		var lastName = new RegExp(this.get('lastNameFilter'), 'i');
		var city = new RegExp(this.get('cityFilter'), 'i');

		var excludeCivicRegNr = !this.get('civicRegNrFilter');
		var excludeFirstName = !this.get('firstNameFilter');
		var excludeLastName = !this.get('lastNameFilter');
		var excludeCity = !this.get('cityFilter');

		return this.get('patients').filter(function (patient) {
			return (excludeCivicRegNr || civicRegNr.test(patient.get('civicRegNr'))) &&
					(excludeFirstName || firstName.test(patient.get('firstName'))) &&
					(excludeLastName || lastName.test(patient.get('lastName'))) &&
					(excludeCity || city.test(patient.get('city')));
		});

	}.property('civicRegNrFilter', 'firstNameFilter', 'lastNameFilter', 'cityFilter', 'patients.@each'),

	showSearch: function () {
		return !this.get('showCreatePatient');
	}.property('showCreatePatient')
});
