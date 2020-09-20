const request = require("postman-request");

const access_key = "41b45222a016cd90d57b3d67072c731d";
const query = "37.8267,-122.4233";
const units = "f";

const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${query}&units=${units}`;

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service!");
  } else if (response.body.error) {
    console.log("Unable to find location!");
  } else {
    const cur = response.body.current;
    console.log(
      `It is currently ${cur.weather_descriptions.join(", ")} outside. ` +
        `The temp is ${cur.temperature} degrees, it feels like ${cur.feelslike}, ` +
        `and there is an a ${cur.precip}% of rain.`
    );
  }
});

const geocodeKey =
  "pk.eyJ1Ijoicy10b3RoZS1hbSIsImEiOiJja2YzODZ3NWwwMG85MnVtbm80NnFpM3FvIn0.j2dXgLI9wX-oJbPTAK4ubA";
const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${geocodeKey}&limit=1`;

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to Geocoding Service!");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find location - Try another Search!");
  } else {
    const data = response.body.features[0];
    console.log(
      `The Latitude for Los Angles California is ${data.center[1]} the Longitude is ${data.center[0]}`
    );
  }
});
