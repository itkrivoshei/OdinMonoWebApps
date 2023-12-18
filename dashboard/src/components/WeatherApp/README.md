# [Weather App](https://itkrivoshei.github.io/JSt-For-Fun/#/WeatherApp)

## Introduction

The [Weather App](https://itkrivoshei.github.io/JSt-For-Fun/#/WeatherApp) is an interactive web application that provides real-time weather forecasts. Built with React, TypeScript, and Redux, this project integrates with the Weather API to fetch weather data and displays it in a user-friendly interface. Users can search for specific locations and choose between Fahrenheit or Celsius for temperature display. The UI adapts dynamically based on the weather data, enhancing the user experience with color changes and weather-related images, including GIFs sourced from the Giphy API.

## Features

- **Real-time Weather Data**: Fetch and display weather forecasts for any location.
- **Temperature Unit Toggle**: Switch between Fahrenheit and Celsius.
- **Weather-related GIFs**: Integrates with the Giphy API for fun, weather-related visual feedback.
- **Redux for State Management**: Utilizes Redux for efficient state management across the application.

## Technologies Used

- React
- TypeScript
- Redux
- Weather API
- Giphy API
- SCSS

## Setup/Installation

1. Clone the repository: `git clone https://github.com/itkrivoshei/JSt-For-Fun/`
2. Navigate to the project directory: `cd JSt-For-Fun`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open `http://localhost:3000` in your browser.

## Usage Instructions

- Enter a location in the search bar to retrieve the weather forecast.
- Toggle the temperature unit (°F/°C) using the provided switch.
- Enjoy dynamic visual feedback based on the current weather, including unique GIFs for different weather conditions.

## API Keys and Security

- Ensure your API keys for WeatherAPI and Giphy API are stored securely, preferably in environment variables.
- Never commit your API keys in the codebase. Use `.env` files or server-side management for key storage.

## Contributing

Contributions to enhance the Weather App are welcome. Please adhere to the following guidelines:

- Fork the repository.
- Create a new branch for your feature or fix.
- Commit your changes with clear, descriptive messages.
- Push to the branch and open a pull request.

## License

This project is open source and available under the [MIT License](../../../LICENSE).

## Acknowledgments

- This project was inspired by and built as part of the curriculum for [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-weather-app).
- Special thanks to the Weather API and Giphy API for providing the data and media used in this application.
