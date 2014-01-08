App.Note = DS.Model.extend({

	createdTime: DS.attr('date'),
	type: DS.attr(),
	text: DS.attr(),
	doctor: DS.attr(),

	patient: DS.belongsTo('patient')
});
