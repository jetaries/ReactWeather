var React = require('react');

var WeatherMessage = ({location, temp}) => {
	return (
		<div>
			<span>The weather in {location} is {temp}.</span>
		</div>
	);
}

module.exports = WeatherMessage;