console.log('Starting app');


// setTimeout takes 2 arguments, the first a function, the second time in milliseconds. Run function after X time.
setTimeout(() => {
	console.log('Inside of callback.');
}, 2000);


setTimeout(() => {
	console.log('Second setTimeout works.');
}, 0);

console.log('Finishing up');