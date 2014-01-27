App.PatientsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('patient');
  }
});

App.PatientsController = Ember.ArrayController.extend({
  sortAscending: true,
  sortProperties: ['firstName', 'lastName', 'civicRegNr']
});
