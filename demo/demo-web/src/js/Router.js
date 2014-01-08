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
