var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
	// Check if E-Mail already exists.
	db.saveUser({
		email,
		password
	});
	// Send welcome email.
};