const request = require('request');


var getWeather = (lat, lng, callback) => {


	request({
		url: `https://api.darksky.net/forecast/158f5f4aded805ae4beea02ed19ac83c/${lat},${lng}`,
		json: true,
	}, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
		} else {
			callback('Unable to fetch weather information.');
		}
	});
};

module.exports.getWeather = getWeather;