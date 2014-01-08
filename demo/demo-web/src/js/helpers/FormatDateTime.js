Ember.Handlebars.helper('formatDateTime', function (date) {
	return moment(date).format('YYYY-MM-DD HH:mm');
});
