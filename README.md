Weather Application

Overview

This Weather Application allows users to check the current weather conditions for any city around the world. Built using HTML, CSS, and JavaScript, it fetches real-time weather data from a public API and displays it in a clean, user-friendly interface. Users can view details such as temperature, humidity, wind speed, and a weather description for their selected location.

Features

	•	Real-Time Weather Data: Fetches and displays up-to-date weather information for any city.
	•	Search Functionality: Users can search for weather data by city name.
	•	Weather Icons: Displays appropriate weather icons based on the current weather conditions.
	•	Responsive Design: The application is fully responsive and works well on mobile, tablet, and desktop devices.
	•	Temperature Units: The temperature units are shown in Celsius.

Live Demo
https://attrirajat.github.io/weather-app/

Technologies Used

	•	HTML: Structure and content of the application.
	•	CSS: Styling and layout, including responsive design features.
	•	JavaScript: Handles the fetching of data from the weather API, updating the DOM, and managing user interactions.
	•	Weather API: OpenWeatherMap is used to retrieve real-time weather data.

Set up the API key:
	•	Sign up for an API key from a weather data provider OpenWeatherMap.
	•	Replace the placeholder API key in the script.js file with your actual API key:
     const API_KEY = 'your_api_key_here';

Usage

	•	Search for a City: Enter the name of a city in the search bar and click the “Search” button to retrieve and display the weather information.
	•	Weather Display: The application will show the temperature, weather description, humidity, wind speed, and an icon representing the weather conditions.
	•	Responsive Design: The layout adjusts based on the screen size, ensuring a smooth user experience on any device.

Code Structure

	•	index.html: Contains the structure and content of the application.
	•	style.css: Contains the styles for the layout, weather display, and responsive design.
	•	script.js: Contains the JavaScript code for fetching weather data from the API, handling search functionality, and updating the DOM with the retrieved data.

Acknowledgments

	•	API Provider: Special thanks to OpenWeatherMap for providing the weather data.
	•	Inspiration: This project was created as a learning exercise and to provide a useful tool for users to check weather conditions quickly and easily.
