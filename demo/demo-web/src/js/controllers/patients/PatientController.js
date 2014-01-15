App.PatientController = Ember.ArrayController.extend({

	needs: 'patients',
	sortAscending: true,
	sortProperties: ['createdTime'],

	// These is populated from the route.
	patient: null,
	showCreateNote: false,
	showEditNote: false,
	showEditPatient: false,
	showEcg: false,

	// Search parameters.
	startDateFilter: null,
	endDateFilter: null,
	doctorFilter: null,
	textFilter: null,

	actions: {

		back: function () {
			this.transitionToRoute('patients');
		}
	},

	content: function () {

		var startDate = moment(this.get('startDateFilter'));
		var endDate = moment(this.get('endDateFilter')).add('days', 1);
		var doctor = new RegExp(this.get('doctorFilter'), 'i');
		var text = new RegExp(this.get('textFilter'), 'i');

		var excludeStartDate = !this.get('startDateFilter') || !startDate.isValid();
		var excludeEndDate = !this.get('endDateFilter') || !endDate.isValid();
		var excludeDoctor = !this.get('doctorFilter');
		var excludeText = !this.get('textFilter');

		if (this.get('patient') === null) {
			return [];
		} else {
			return this.get('patient').get('notes').filter(function (note) {
				return (excludeStartDate || !startDate.isAfter(note.get('createdTime'))) &&
						(excludeEndDate || endDate.isAfter(note.get('createdTime'))) &&
						(excludeDoctor || doctor.test(note.get('doctor'))) &&
						(excludeText || text.test(note.get('text')));
			});
		}
	}.property('startDateFilter', 'endDateFilter', 'doctorFilter', 'textFilter', 'patient', 'patient.notes.@each'),

	showSearch: function () {
		return !this.get('showCreateNote') && !this.get('showEditPatient') && !this.get('showEditNote');
	}.property('showCreateNote', 'showEditPatient', 'showEditNote')
});
