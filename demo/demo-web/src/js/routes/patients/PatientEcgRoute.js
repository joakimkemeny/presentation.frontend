App.PatientEcgRoute = Ember.Route.extend({

	activate: function () {
		this.controllerFor('patient').set('showEcg', true);
		$.ajax('http://localhost:8080/api/patients/startecg');
	},

	deactivate: function () {
		this.controllerFor('patient').set('showEcg', false);
		$.ajax('http://localhost:8080/api/patients/stopecg');
	},

	model: function () {
		return this.modelFor('patient');
	}
});
