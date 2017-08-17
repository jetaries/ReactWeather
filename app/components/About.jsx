var React = require('react');

var About = (props) => {
	return (
		<div>
			<h1 className="text-centered page-title">About</h1>
			<p>Here are the resources we used:</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
				</li>
				<li>
					<a href="http://openweathermap.org">Open Weather Map</a> - I used open weather map to search for weather data by city name.
				</li>
			</ul>
		</div>
	);
};

module.exports = About;