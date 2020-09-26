const geocode = require("./utils/geocode.js")

const access_key = "41b45222a016cd90d57b3d67072c731d";
const query = "37.8267,-122.4233";
const units = "f";

const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${query}&units=${units}`;

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find location!");
//   } else {
//     const cur = response.body.current;
//     console.log(
//       `It is currently ${cur.weather_descriptions.join(", ")} outside. ` +
//         `The temp is ${cur.temperature} degrees, it feels like ${cur.feelslike}, ` +
//         `and there is an a ${cur.precip}% of rain.`
//     );
//   }
// });

geocode("New York", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
