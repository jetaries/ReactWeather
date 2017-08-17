var axios = require('axios');

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/find?units=metric&appid=818149f6a467b5686e8facb07101b594";

module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(res) {
			if (res.data.cod != "200" && res.data.message) {
				throw new Error(res.data.message);
			} else {
				if (res.data.count > 0)
					return res.data.list[0].main.temp;
				else
					throw new Error("City not found.");		
			}
		}, function(res) {
			throw new Error(res.data.message);
		});
	}
}