App.NoteEditController = Ember.ObjectController.extend({

	needs: 'patient',

	types: [
		{ name: 'Anteckning', id: 'Note' },
		{ name: 'Besök', id: 'Visit' },
		{ name: 'Symptom', id: 'Symptom' },
		{ name: 'Bedömning', id: 'Assessment' },
		{ name: 'Åtgärd', id: 'Action' }
	],

	actions: {

		cancel: function () {

			var note = this.get('model');
			note.rollback();

			this.transitionToRoute('patient', note.get('patient'));
		},

		save: function () {

			var note = this.get('model');
			note.save();

			this.transitionToRoute('patient', note.get('patient'));
		}
	}
});
