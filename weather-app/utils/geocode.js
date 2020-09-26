const request = require("postman-request");

const geocode = (address, callback) => {
	const adr = encodeURIComponent(address);
	const geocodeKey =
		"pk.eyJ1Ijoicy10b3RoZS1hbSIsImEiOiJja2YzODZ3NWwwMG85MnVtbm80NnFpM3FvIn0.j2dXgLI9wX-oJbPTAK4ubA";
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${adr}.json?access_token=${geocodeKey}&limit=1`;

	request({ url: url, json: true }, (error, response) => {
		if (error) {
			callback("Unable to connect to location services!", undefined);
		} else if (response.body.features.length === 0) {
			callback("Unable to find location. Try another search", undefined);
		} else {
			const geoData = response.body.features[0];
			const [longitude, latitude] = geoData.center.slice(0, 2);
			callback(undefined, {
				latitude: latitude,
				longitude: longitude,
				location: geoData.place_name,
			});
		}
	});
};

module.exports = geocode;
