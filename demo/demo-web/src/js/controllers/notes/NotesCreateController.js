App.NotesCreateController = Ember.ObjectController.extend({

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
			this.transitionToRoute('patient', this.get('model').get('patient'));
		},

		save: function () {

			var note = this.store.createRecord('note', this.get('model'));

			// Store a reference to the save promise to make it possible to wait for it elsewhere.
			// TODO: Solve this in a better (and safer) way.
			App.Note.createPromise = note.save().then(function () {
				this.transitionToRoute('patient', this.get('model').get('patient'));
			}.bind(this));
		}
	}
});
