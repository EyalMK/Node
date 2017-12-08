const express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.status(404).send({
		error: 'Page not found.',
		name: 'Eldorado'
	});
});

app.get('/users', (req, res) => {
	res.send([{
		name: 'Snooze',
		age: 18 }, {
			name: 'PotatoHQ',
			age: 15
		}, {
			name: 'Arika',
			age: 19
		}]);
});

app.listen(3000);


module.exports.app = app;