App.NoteEditRoute = Ember.Route.extend({

	activate: function () {
		this.controllerFor('patient').set('showEditNote', true);
	},

	deactivate: function () {
		this.controllerFor('patient').set('showEditNote', false);
	},

	model: function (params) {
		return this.store.find('note', params.note_id);
	}
});
