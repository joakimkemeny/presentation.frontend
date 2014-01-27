App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:8080',
  namespace: 'api'
});

App.Patient = DS.Model.extend({
  civicRegNr: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  streetAddress: DS.attr('string'),
  ...

  notes: DS.hasMany('note', { async: true })
});
