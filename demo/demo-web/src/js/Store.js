App.ApplicationAdapter = DS.RESTAdapter.extend({
	host: 'http://localhost:8080',
	namespace: 'api'
});

App.IsodatetimeTransform = DS.Transform.extend({
	deserialize: function (serialized) {
		return moment(serialized).toDate();
	},
	serialize: function (deserialized) {
		return moment(deserialized).toISOString();
	}
});
