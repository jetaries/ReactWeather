var React = require('react');

var WeatherMessage = ({location, temp}) => {
	return (
		<h3 className="text-centered">The weather in {location} is {temp}.</h3>
	);
}

module.exports = WeatherMessage;