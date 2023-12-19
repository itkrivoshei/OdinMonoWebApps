# Weather App

## Overview

The [Weather App](https://itkrivoshei.github.io/OdinMonoWebApps/#/WeatherApp) is a dynamic web application that provides real-time weather forecasts. Developed using React, TypeScript, and Redux, this project integrates with the [Weather API](https://www.weatherapi.com/) and [Giphy API](https://developers.giphy.com/) to fetch and display weather data and related GIFs in a user-friendly interface. It offers features like location-based weather search and the ability to toggle between Fahrenheit and Celsius temperature units. The adaptive UI enhances user experience with color changes and weather-themed visuals.

## Key Features

- **Real-time Weather Data**: Utilizes the Weather API to fetch current weather forecasts for any specified location.
- **Temperature Unit Conversion**: Users can switch between Fahrenheit and Celsius units for temperature display.
- **Interactive Weather GIFs**: Incorporates Giphy API to provide engaging weather-themed GIFs based on current weather conditions.
- **State Management with Redux**: Manages application state efficiently, ensuring a responsive and smooth user experience.

## Technologies

- **React**: For building the user interface.
- **TypeScript**: To ensure type safety and improve maintainability.
- **Redux**: For managing application state.
- **Weather API**: Provides accurate and up-to-date weather information.
- **Giphy API**: Offers a vast collection of GIFs for various weather conditions.
- **SCSS**: For styling the application with more advanced CSS features.

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
