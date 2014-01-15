App.Note = DS.Model.extend({

	createdTime: DS.attr('isodatetime'),
	type: DS.attr(),
	text: DS.attr(),
	doctor: DS.attr(),

	patient: DS.belongsTo('patient'),

	typeText: function () {

		var type = this.get('type');

		switch (type) {
			case 'Action':
				return 'Åtgärd';
			case 'Assessment':
				return 'Bedömning';
			case 'Note':
				return 'Anteckning';
			case 'Symptom':
				return 'Symptom';
			case 'Visit':
				return 'Besök';
			default:
				return '';
		}
	}.property('type')
});
