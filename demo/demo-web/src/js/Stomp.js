/* global Stomp */
Ember.Application.initializer({
	name: 'stompInitializer',

	initialize: function (container) {

		// Get a reference to the data store.
		var store = container.lookup('store:main');

		// Create a Stomp client over a WebSocket.
		var stompClient = Stomp.over(new WebSocket('ws://localhost:8080/ws'));
		stompClient.connect(null, null, function () {

			var dateTimePattern = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;

			var dateTimeReviver = function (key, value) {

				if (typeof value === 'string' && dateTimePattern.test(value)) {
					return moment(value).toDate();
				}
				return value;
			};

			var executeOnPromise = function (promise, callback) {
				if (promise) {
					promise.then(callback);
				} else {
					callback();
				}
			};

			// Keep the appointment data updated.
			stompClient.subscribe('/topic/appointment.created.*', function (message) {
				executeOnPromise(App.Appointment.createPromise, function () {
					store.push('appointment', JSON.parse(message.body, dateTimeReviver));
				});
			});
			stompClient.subscribe('/topic/appointment.updated.*', function (message) {
				store.push('appointment', JSON.parse(message.body, dateTimeReviver));
			});
			stompClient.subscribe('/topic/appointment.deleted.*', function (message) {
				var obj = JSON.parse(message.body, dateTimeReviver);
				if (store.hasRecordForId('appointment', obj.id)) {
					store.deleteRecord(store.find('appointment', obj.id));
				}
			});

			// Keep the note data updated.
			stompClient.subscribe('/topic/note.created.*', function (message) {
				executeOnPromise(App.Note.createPromise, function () {
					var note = JSON.parse(message.body, dateTimeReviver);
					store.push('note', note);
					note.patient.reload();
				});
			});
			stompClient.subscribe('/topic/note.updated.*', function (message) {
				store.push('note', JSON.parse(message.body, dateTimeReviver));
			});
			stompClient.subscribe('/topic/note.deleted.*', function (message) {
				var obj = JSON.parse(message.body, dateTimeReviver);
				if (store.hasRecordForId('note', obj.id)) {
					var note = store.find('note', obj.id);
					store.patient.reload();
					store.deleteRecord(note);
				}
			});

			// Keep the patient data updated.
			stompClient.subscribe('/topic/patient.created.*', function (message) {
				executeOnPromise(App.Patient.createPromise, function () {
					store.push('patient', JSON.parse(message.body, dateTimeReviver));
				});
			});
			stompClient.subscribe('/topic/patient.updated.*', function (message) {
				store.push('patient', JSON.parse(message.body, dateTimeReviver));
			});
			stompClient.subscribe('/topic/patient.deleted.*', function (message) {
				var obj = JSON.parse(message.body, dateTimeReviver);
				if (store.hasRecordForId('patient', obj.id)) {
					store.deleteRecord(store.find('patient', obj.id));
				}
			});

			// Subscribe to ecg events.
			stompClient.subscribe('/topic/patient.ecg', function (message) {
				App.ecgChart.ecgChart('addDataPoint', JSON.parse(message.body));
			});
		});
	}
});
