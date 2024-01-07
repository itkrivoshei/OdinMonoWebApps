# Weather App

## Overview

The [Weather App](https://itkrivoshei.github.io/OdinMonoWebApps/#/WeatherApp) is a dynamic web application providing real-time weather forecasts. It is developed using React, TypeScript, and Redux Toolkit, offering a user-friendly interface with Material UI components styled using a custom CyberPunk Font. The app integrates with the [Weather API](https://www.weatherapi.com/) and [Giphy API](https://developers.giphy.com/) to fetch and display weather data and related GIFs. Users can search for weather forecasts by city and enjoy an adaptive UI that changes gif based on the weather conditions.

## Key Features

- **Real-time Weather Data**: Fetches current weather forecasts for any specified location using the Weather API.
- **Unit Conversion**: Users can switch between metric (°C, km/h) and imperial (°F, mph) units for temperature and wind speed.
- **Interactive Weather GIFs**: Engaging weather-themed GIFs from the Giphy API based on the current weather conditions.
- **State Management with Redux Toolkit**: Efficient application state management for a responsive user experience.
- **City Search Functionality**: Allows users to search for weather information by city.

## Technologies

- **React**: For building the user interface.
- **TypeScript**: Ensures type safety and improves maintainability.
- **Redux Toolkit**: For state management.
- **Weather API & Giphy API**: Provides weather data and GIFs.
- **Material UI**: For component styling, replacing SCSS.
- **Custom CyberPunk Font**: For a unique UI experience.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/itkrivoshei/OdinMonoWebApps.git
   ```
2. Navigate to the App directory:
   ```bash
   cd OdinMonoWebApps/dashboard
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```

## Usage

- **Location Search**: Enter a city or location to get the current weather forecast.
- **Toggle Temperature Units**: Use the switch to change temperature units between Fahrenheit and Celsius.
- **Enjoy Weather GIFs**: The app displays unique GIFs related to the current weather conditions.

## API Keys and Security

- **Secure your API Keys**: Keep your WeatherAPI and Giphy API keys secure, preferably using environment variables.
- **Avoid Publicly Exposing API Keys**: Never commit your API keys to the public repository. Use `.env` files or server-side configuration to manage them.

## How to Contribute

We welcome contributions to the Weather App. To contribute:

1. Fork the [main repository](https://github.com/itkrivoshei/OdinMonoWebApps).
2. Create a feature branch (`git checkout -b feature/AmazingFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add AmazingFeature'`).
5. Push to the branch (`git push origin feature/AmazingFeature`).
6. Open a pull request.

For more details, see the [CONTRIBUTING.md](https://github.com/itkrivoshei/OdinMonoWebApps/blob/master/CONTRIBUTING.md) in the main repository.

## License

This project is open source, available under the [MIT License](https://github.com/itkrivoshei/OdinMonoWebApps/blob/master/LICENSE).

## Acknowledgments

- Inspired by [The Odin Project's curriculum](https://www.theodinproject.com/lessons/node-path-javascript-weather-app).
- Thanks to [Weather API](https://www.weatherapi.com/) and [Giphy API](https://developers.giphy.com/) for the data and media resources.
