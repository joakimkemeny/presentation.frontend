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
