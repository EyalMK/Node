const expect = require('expect');
const request = require('supertest');

var app = require('./server.js').app;

describe('server', () => {
	describe('#/', () => {
		it('should return a hello world! response.', (done) => {
			request(app)
				.get('/')
				.expect(404)
				.expect((res) => {
					expect(res.body).toInclude({
						error: 'Page not found.'
					})
				})
				.end(done);
		});
	});
	describe('#/users', () => {
		it('should assert status code 200 and input exists in users array.', (done) => {
			request(app)
				.get('/users')
				.expect(200)
				.expect((res) => {
					expect(res.body).toInclude({
						name: 'Snooze',
						age: 18
					});
				})
				.end(done);
		});
	});
});




