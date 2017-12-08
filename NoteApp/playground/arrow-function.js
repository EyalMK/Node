var square = (x) => x*x;

console.log(square(9));

var user = {
	name: 'Snooze',  
	// sayHi: () => {
	// 	console.log(`Hi ${user.name}`);                ES5 syntax
	// },

	sayHiAlt () {
		console.log(arguments);
		console.log(`Hi ${user.name}`);			    // ES6 syntax

	}
};

user.sayHiAlt(1, 2, 3);