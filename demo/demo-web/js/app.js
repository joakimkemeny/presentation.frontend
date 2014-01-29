window.App = Ember.Application.create({

	LOG_TRANSITIONS: true,
	LOG_TRANSITIONS_INTERNAL: true,
	LOG_BINDINGS: true,
	LOG_ACTIVE_GENERATION: true
});

App.Router.map(function () {

	this.resource('appointments', function () {
		this.route('edit', { path: '/:appointment_id/edit'});
		this.route('create');
		this.route('day');
		this.route('week');
		this.route('month');
		this.route('year');
	});

	this.resource('patients', function () {
		this.route('create');
		this.resource('patient', { path: '/:patient_id'}, function () {
			this.resource('notes', function () {
				this.resource('note', { path: '' }, function () {
					this.route('edit', { path: '/:note_id/edit' });
				});
				this.route('create');
			});
			this.route('edit');
			this.route('ecg');
		});
	});

	this.resource('reports');
	this.resource('administration');
});

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

App.ApplicationAdapter = DS.RESTAdapter.extend({
	host: 'http://localhost:8080',
	namespace: 'api'
});

App.IsodatetimeTransform = DS.Transform.extend({
	deserialize: function (serialized) {
		return moment(serialized).toDate();
	},
	serialize: function (deserialized) {
		return moment(deserialized).format('YYYY-MM-DD[T]HH:mm:ss');
	}
});

App.AppointmentsController = Ember.ArrayController.extend({

	// These are populated from the route.
	appointments: [],
	showCreateAppointment: false,
	showEditAppointment: false,
	currentView: 'day',

	// Search parameters.
	startDateFilter: moment({ hour: 0, minute: 0, seconds: 0, milliseconds: 0 }).toDate(),
	endDateFilter: moment({ hour: 0, minute: 0, seconds: 0, milliseconds: 0 }).toDate(),
	textFilter: null,

	actions: {

		editAppointmentFromId: function (id) {
			this.transitionToRoute('appointments.edit', this.store.find('appointment', id));
		},

		next: function () {

			var start = moment(this.get('startDateFilter'));
			var end = moment(this.get('endDateFilter'));

			if (this.get('currentView') === 'day') {
				start.add('days', 1);
				end.add('days', 1);
			} else if (this.get('currentView') === 'week') {
				start.add('weeks', 1);
				end.add('weeks', 1);
			}

			this.set('startDateFilter', start.format('YYYY-MM-DD'));
			this.set('endDateFilter', end.format('YYYY-MM-DD'));
		},

		previous: function () {

			var start = moment(this.get('startDateFilter'));
			var end = moment(this.get('endDateFilter'));

			if (this.get('currentView') === 'day') {
				start.subtract('days', 1);
				end.subtract('days', 1);
			} else if (this.get('currentView') === 'week') {
				start.subtract('weeks', 1);
				end.subtract('weeks', 1);
			}

			this.set('startDateFilter', start.format('YYYY-MM-DD'));
			this.set('endDateFilter', end.format('YYYY-MM-DD'));
		}
	},

	content: function () {

		var startDate = moment(this.get('startDateFilter'));
		var endDate = moment(this.get('endDateFilter'));
		var text = new RegExp(this.get('textFilter'), 'i');

		var excludeStartDate = true; //!this.get('startDateFilter') || !startDate.isValid();
		var excludeEndDate = true; // !this.get('endDateFilter') || !endDate.isValid();
		var excludeText = !this.get('textFilter');

		return this.get('appointments').filter(function (appointment) {
			return (excludeStartDate || !startDate.isAfter(appointment.get('startTime'))) &&
					(excludeEndDate || endDate.add('days', 1).isAfter(appointment.get('endTime'))) &&
					(excludeText || text.test(appointment.get('notes')));
		});
	}.property('startDateFilter', 'endDateFilter', 'textFilter', 'appointments.@each'),

	showCalendar: function () {
		return this.get('currentView') === 'day' || this.get('currentView') === 'week';
	}.property('currentView')
});

App.AppointmentsCreateController = Ember.ObjectController.extend({

	needs: 'appointments',

	actions: {

		cancel: function () {
			this.transitionToRoute('appointments');
		},

		save: function () {

			var appointment = this.store.createRecord('appointment', this.get('model'));

			// Store a reference to the save promise to make it possible to wait for it elsewhere.
			// TODO: Solve this in a better (and safer) way.
			App.Appointment.createPromise = appointment.save().then(function () {
				this.transitionToRoute('appointments');
			}.bind(this));
		}
	}
});

App.AppointmentsEditController = Ember.ObjectController.extend({

	needs: 'appointments',

	actions: {

		cancel: function () {

			var appointment = this.get('model');
			appointment.rollback();

			this.transitionToRoute('appointments');
		},

		save: function () {

			var appointment = this.get('model');
			appointment.save();

			this.transitionToRoute('appointments');
		}
	}
});

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

App.PatientController = Ember.ArrayController.extend({

	needs: 'patients',
	sortAscending: true,
	sortProperties: ['createdTime'],

	// These is populated from the route.
	patient: null,
	showCreateNote: false,
	showEditNote: false,
	showEditPatient: false,
	showEcg: false,

	// Search parameters.
	startDateFilter: null,
	endDateFilter: null,
	doctorFilter: null,
	textFilter: null,

	actions: {

		back: function () {
			this.transitionToRoute('patients');
		}
	},

	content: function () {

		var startDate = moment(this.get('startDateFilter'));
		var endDate = moment(this.get('endDateFilter')).add('days', 1);
		var doctor = new RegExp(this.get('doctorFilter'), 'i');
		var text = new RegExp(this.get('textFilter'), 'i');

		var excludeStartDate = !this.get('startDateFilter') || !startDate.isValid();
		var excludeEndDate = !this.get('endDateFilter') || !endDate.isValid();
		var excludeDoctor = !this.get('doctorFilter');
		var excludeText = !this.get('textFilter');

		if (this.get('patient') === null) {
			return [];
		} else {
			return this.get('patient').get('notes').filter(function (note) {
				return (excludeStartDate || !startDate.isAfter(note.get('createdTime'))) &&
						(excludeEndDate || endDate.isAfter(note.get('createdTime'))) &&
						(excludeDoctor || doctor.test(note.get('doctor'))) &&
						(excludeText || text.test(note.get('text')));
			});
		}
	}.property('startDateFilter', 'endDateFilter', 'doctorFilter', 'textFilter', 'patient', 'patient.notes.@each'),

	showSearch: function () {
		return !this.get('showCreateNote') && !this.get('showEditPatient') && !this.get('showEditNote');
	}.property('showCreateNote', 'showEditPatient', 'showEditNote')
});

App.PatientEcgController = Ember.ObjectController.extend({

	needs: 'patient',

	actions: {

		cancel: function () {
			this.transitionToRoute('patient', this.get('model'));
		}
	}
});

App.PatientEditController = Ember.ObjectController.extend({

	needs: 'patient',

	actions: {

		cancel: function () {

			var patient = this.get('model');
			patient.rollback();

			this.transitionToRoute('patient', patient);
		},

		save: function () {

			var patient = this.get('model');
			patient.save();

			this.transitionToRoute('patient', patient);
		}
	}
});

App.PatientsController = Ember.ArrayController.extend({

	sortAscending: true,
	sortProperties: ['firstName', 'lastName', 'civicRegNr'],

	// These are populated from the route.
	patients: [],
	showPatient: false,
	showCreatePatient: false,

	// Search parameters.
	civicRegNrFilter: null,
	firstNameFilter: null,
	lastNameFilter: null,
	cityFilter: null,

	content: function () {

		var civicRegNr = new RegExp(this.get('civicRegNrFilter'));
		var firstName = new RegExp(this.get('firstNameFilter'), 'i');
		var lastName = new RegExp(this.get('lastNameFilter'), 'i');
		var city = new RegExp(this.get('cityFilter'), 'i');

		var excludeCivicRegNr = !this.get('civicRegNrFilter');
		var excludeFirstName = !this.get('firstNameFilter');
		var excludeLastName = !this.get('lastNameFilter');
		var excludeCity = !this.get('cityFilter');

		return this.get('patients').filter(function (patient) {
			return (excludeCivicRegNr || civicRegNr.test(patient.get('civicRegNr'))) &&
					(excludeFirstName || firstName.test(patient.get('firstName'))) &&
					(excludeLastName || lastName.test(patient.get('lastName'))) &&
					(excludeCity || city.test(patient.get('city')));
		});

	}.property('civicRegNrFilter', 'firstNameFilter', 'lastNameFilter', 'cityFilter', 'patients.@each'),

	showSearch: function () {
		return !this.get('showCreatePatient');
	}.property('showCreatePatient')
});

App.PatientsCreateController = Ember.ObjectController.extend({

	needs: 'patients',

	actions: {

		cancel: function () {
			this.transitionToRoute('patients');
		},

		save: function () {

			var patient = this.store.createRecord('patient', this.get('model'));

			// Store a reference to the save promise to make it possible to wait for it elsewhere.
			// TODO: Solve this in a better (and safer) way.
			App.Patient.createPromise = patient.save().then(function (result) {
				this.transitionToRoute('patient', result);
			}.bind(this));
		}
	}
});

Ember.Handlebars.helper('formatDate', function (date) {
	return moment(date).format('YYYY-MM-DD');
});

Ember.Handlebars.helper('formatDateTime', function (date) {
	return moment(date).format('YYYY-MM-DD HH:mm');
});

App.Appointment = DS.Model.extend({

	startTime: DS.attr('isodatetime'),
	endTime: DS.attr('isodatetime'),
	notes: DS.attr(),

	date: function (key, value) {

		// setter
		if (arguments.length > 1 && value.length === 10) {

			var date = moment(value, 'YYYY-MM-DD');

			var start = moment(this.get('startTime'));
			start.year(date.year());
			start.month(date.month());
			start.day(date.day());
			this.set('startTime', start.toDate());

			var end = moment(this.get('endTime'));
			end.year(date.year());
			end.month(date.month());
			end.day(date.day());
			this.set('endTime', end.toDate());
		}

		// getter
		return moment(this.get('startTime')).format('YYYY-MM-DD');

	}.property('startTime'),

	start: function (key, value) {

		// setter
		if (arguments.length > 1 && value.length === 5) {

			var time = moment(value, 'HH:mm');

			var start = moment(this.get('startTime'));
			start.hour(time.hour());
			start.minute(time.minute());
			this.set('startTime', start.toDate());
		}

		// getter
		return moment(this.get('startTime')).format('HH:mm');

	}.property('startTime'),

	end: function (key, value) {

		// setter
		if (arguments.length > 1 && value.length === 5) {

			var time = moment(value, 'HH:mm');

			var end = moment(this.get('endTime'));
			end.hour(time.hour());
			end.minute(time.minute());
			this.set('endTime', end.toDate());
		}

		// getter
		return moment(this.get('endTime')).format('HH:mm');

	}.property('endTime')
});

App.Note = DS.Model.extend({

	createdTime: DS.attr('isodatetime'),
	type: DS.attr(),
	text: DS.attr(),
	doctor: DS.attr(),

	patient: DS.belongsTo('patient'),

	typeText: function () {

		var type = this.get('type');

		switch (type) {
			case 'Action':
				return 'Åtgärd';
			case 'Assessment':
				return 'Bedömning';
			case 'Note':
				return 'Anteckning';
			case 'Symptom':
				return 'Symptom';
			case 'Visit':
				return 'Besök';
			default:
				return '';
		}
	}.property('type')
});

App.Patient = DS.Model.extend({

	civicRegNr: DS.attr(),
	firstName: DS.attr(),
	lastName: DS.attr(),
	streetAddress: DS.attr(),
	zipCode: DS.attr(),
	city: DS.attr(),
	phone: DS.attr(),
	mobile: DS.attr(),

	notes: DS.hasMany('note', { async: true })
});

App.AppointmentsCreateRoute = Ember.Route.extend({

	activate: function () {
		this.controllerFor('appointments').set('showCreateAppointment', true);
	},

	deactivate: function () {
		this.controllerFor('appointments').set('showCreateAppointment', false);
	},

	model: function () {
		return Ember.Object.create({});
	}
});

App.AppointmentsDayRoute = Ember.Route.extend({

	activate: function () {

		var controller = this.controllerFor('appointments');

		controller.set('endDateFilter', controller.get('startDateFilter'));
		controller.set('currentView', 'day');
	}
});

App.AppointmentsEditRoute = Ember.Route.extend({

	activate: function () {
		this.controllerFor('appointments').set('showEditAppointment', true);
	},

	deactivate: function () {
		this.controllerFor('appointments').set('showEditAppointment', false);
	},

	model: function (params) {
		return this.store.find('appointment', params.appointment_id);
	}
});

App.AppointmentsIndexRoute = Ember.Route.extend({

	redirect: function () {
		this.transitionTo('appointments.day');
	}
});

App.AppointmentsMonthRoute = Ember.Route.extend({

	activate: function () {
		this.controllerFor('appointments').set('currentView', 'month');
	}
});

App.AppointmentsRoute = Ember.Route.extend({

	model: function () {
		return this.store.find('appointment');
	},

	setupController: function (controller, model) {
		controller.set('appointments', model);
	}
});

App.AppointmentsWeekRoute = Ember.Route.extend({

	activate: function () {

		var controller = this.controllerFor('appointments');

		var start = controller.get('startDateFilter');
		var end = controller.get('endDateFilter');
		if (start === end) {
			controller.set('startDateFilter', moment(start).isoWeekday(1).format('YYYY-MM-DD'));
			controller.set('endDateFilter', moment(end).isoWeekday(5).format('YYYY-MM-DD'));
		}

		controller.set('currentView', 'week');
	}
});

App.AppointmentsYearRoute = Ember.Route.extend({

	activate: function () {
		this.controllerFor('appointments').set('currentView', 'year');
	}
});

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

App.PatientEcgRoute = Ember.Route.extend({

	activate: function () {
		this.controllerFor('patient').set('showEcg', true);
	},

	deactivate: function () {
		this.controllerFor('patient').set('showEcg', false);
	},

	model: function () {
		return this.modelFor('patient');
	}
});

App.PatientEditRoute = Ember.Route.extend({

	activate: function () {
		this.controllerFor('patient').set('showEditPatient', true);
	},

	deactivate: function () {
		this.controllerFor('patient').set('showEditPatient', false);
	},

	model: function () {
		return this.modelFor('patient');
	}
});

App.PatientRoute = Ember.Route.extend({

	activate: function () {
		this.controllerFor('patients').set('showPatient', true);
	},

	deactivate: function () {
		this.controllerFor('patients').set('showPatient', false);
	},

	model: function (params) {
		return this.store.find('patient', params.patient_id);
	},

	renderTemplate: function () {

		this.render();

		// TODO: Find out if this is really the best way to do this?
		this.render('patient/header', {
			into: 'patients',
			outlet: 'patientHeader'
		});
	},

	setupController: function (controller, model) {
		controller.set('patient', model);
	}
});

App.PatientsCreateRoute = Ember.Route.extend({

	activate: function () {
		this.controllerFor('patients').set('showCreatePatient', true);
	},

	deactivate: function () {
		this.controllerFor('patients').set('showCreatePatient', false);
	},

	model: function () {
		return Ember.Object.create({});
	}
});

App.PatientsRoute = Ember.Route.extend({

	model: function () {
		return this.store.find('patient');
	},

	renderTemplate: function () {

		this.render();

		// TODO: Find out if this is really the best way to do this?
		this.render('patients/header', {
			into: 'patients',
			outlet: 'patientsHeader'
		});
	},

	setupController: function (controller, model) {
		controller.set('patients', model);
	}
});

App.CalendarView = Ember.View.extend({
	tagName: 'div',

	height: 600,
	width: 800,

	startDate: '2014-01-13',
	endDate: '2014-01-17',
	startTime: '07:00',
	endTime: '18:00',

	events: [],

	didInsertElement: function () {

		var view = this;
		var controller = this.get('controller');

		this._updateData = _.throttle(function () {

			var events = view.get('events')
					.filter(function (record) { return record.get('id') !== null; })
					.map(function (record) { return record.serialize({ includeId: true }); });

			this.$().calendar('updateData', events);

		}, 100, { leading: false, trailing: true });

		var width = this.$().innerWidth();

		this.$().calendar({

			height: this.height,
			width: width,
			startDate: this.get('controller.startDateFilter'),
			endDate: this.get('controller.endDateFilter'),
			startTime: this.startTime,
			endTime: this.endTime,

			click: function (e, id) {
				controller.send('editAppointmentFromId', id);
			}
		});

		this.$().calendar('updateData', this.get('events').map(function (record) {
			return record.serialize({ includeId: true });
		}));

		this.$().resize(function () {
			var width = view.$().innerWidth();
			view.$().calendar('setDimensions', width, view.height);
		});
	},

	willDestroyElement: function () {
		this.$().calendar('destroy');
	},

	filterData: function () {
		this.$().calendar('setDateInterval',
				this.get('controller.startDateFilter'),
				this.get('controller.endDateFilter'));
	}.observes('controller.startDateFilter', 'controller.endDateFilter'),

	updateData: function () {
		this._updateData();
	}.observes('events.@each', 'events.@each.startTime', 'events.@each.endTime', 'events.@each.notes')
});

Ember.Handlebars.helper('calendar', App.CalendarView);

App.EcgChartView = Ember.View.extend({
	tagName: 'div',

	height: 600,
	width: 800,

	didInsertElement: function () {

		this.$().ecgChart({
			height: this.height,
			width: this.width
		});

		// TODO: Implement this in a smarter way.
		App.ecgChart = this.$();
	},

	willDestroyElement: function () {
		this.$().ecgChart('destroy');
	}
});

Ember.Handlebars.helper('ecg-chart', App.EcgChartView);

Ember.TextArea.reopen({

	didInsertElement: function () {

		if (this.$().is('[placeholder]')) {
			this.$().floatingLabel();
			if (this.get('value')) {
				this.$().addClass('floatingLabel-active');
				this.$().prev().css({
					opacity: 1,
					bottom: 0
				});
			}
		}
	}
});

Ember.TextField.reopen({

	didInsertElement: function () {

		if (this.$().is('[placeholder]:not(.no-float)')) {
			this.$().floatingLabel();
			if (this.get('value')) {
				this.$().addClass('floatingLabel-active');
				this.$().prev().css({
					opacity: 1,
					bottom: 0
				});
			}
		}
	}
});
