App.NotesCreateRoute = Ember.Route.extend({

	activate: function () {
		this.controllerFor('patient').set('showCreateNote', true);
	},

	deactivate: function () {
		this.controllerFor('patient').set('showCreateNote', false);
	},

	model: function () {
		return Ember.Object.create({ patient: this.modelFor('patient') });
	}
});
