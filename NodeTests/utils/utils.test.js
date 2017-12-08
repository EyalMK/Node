const utils = require('./utils.js');
const expect = require('expect');



describe('Utils', () => {
	describe('#add', ()=> {
		it('should add two numbers.', () => {
			var res = utils.add(45, 24);

			expect(res).toBe(69).toBeA('number');
		});
	});

	it('should async add two numbers', (done) => {
		utils.asyncAdd(4, 3, (sum) => {
			expect(sum).toBe(7).toBeA('number');
			done();
		});
	});


	it ('should square a number.', () => {
		var res = utils.square(3);
		
		expect(res).toBe(9).toBeA('number');
	});


	it ('should async square a number.', (done) => {
		utils.asyncSquare(3, (res) => {
			expect(res).toBe(9).toBeA('number');
			done();
		});
	});
});	





// it('should expect some values', () => {
// 	// expect(12).toNotBe(12);

// 	// expect({name: 'Snooze'}).toEqual({name: 'Snooze'});

// 	// expect([2,3,4]).toExclude([5]);

// 	expect({
// 		name: 'Snooze',
// 		age: 18,
// 		location: 'IL'
// 	}).toInclude({
// 		age: 18
// 	});
// });



it('should verify first and last names are set', () => {

	var user = {age: 18, location: 'IL'};
	var res = utils.setName(user, 'Eyal Maklada');

	expect(res).toInclude({
		firstName: 'Eyal',
		lastName: 'Maklada'
	});
});