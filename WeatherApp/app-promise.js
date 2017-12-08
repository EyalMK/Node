const yargs = require('yargs');
const axios = require('axios');
const readline = require('readline');

const argv = yargs
	.options({
		address: {
			demand: true,
			alias: 'a',
			describe: 'Address to fetch weather information for.',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;


const yesresponse = ['y', 'yes', 'ye', 'yeah', 'ya', 'yup', 'yeh', 'yh', 'yas', '\r\n'];
var encodedURI = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURI}`;




axios.get(geocodeUrl).then((response) => {
	if (response.data.status === 'ZERO_RESULTS') {
		throw new Error('Unable to locate address location.');
	}
	var lat = response.data.results[0].geometry.location.lat;
	var lng = response.data.results[0].geometry.location.lng;
	var weatherUrl = `https://api.darksky.net/forecast/158f5f4aded805ae4beea02ed19ac83c/${lat},${lng}`;

	console.log(response.data.results[0].formatted_address);
	return axios.get(weatherUrl);

}).then((response) => {
	var temperature = response.data.currently.temperature;
	var actualTemperature = response.data.currently.apparentTemperature;

	console.log(`It's currently ${temperature} degrees. It feels like ${actualTemperature} degrees.`);
	var summary = response.data.currently.summary.toLowerCase();
	var windSpeed = response.data.currently.windSpeed;
	var dailyForecast = response.data.daily.summary;

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	rl.question('Would you like to be presented with more information? [Y/n]: ', (choice) => {
		if ((typeof choice.toLowerCase() === 'string' && yesresponse.includes(choice.toLowerCase())) === true) {
			console.log(`The sky is ${summary}`);
			console.log(`Windspeed is ${windSpeed}`);
			console.log(dailyForecast);
			rl.close();
		} else {
			rl.close();
			// Do nothing. 
			// Close readline interface.
		}
	});

	
}).catch((e) => {
	if(e.code === 'ENOTFOUND') {
		console.log('Unable to connect to API servers.');
	} else {
		console.log(e.message);
	}
});





