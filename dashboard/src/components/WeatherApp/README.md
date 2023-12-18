# [Weather App](https://itkrivoshei.github.io/JSt-For-Fun/#/WeatherApp)

## Overview

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

To install and run these projects locally on your machine, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/itkrivoshei/JSt-For-Fun.git
   ```
2. Navigate to the project's root directory:
   ```bash
   cd JSt-For-Fun
   ```
3. Install the required dependencies for each project. For example, to set up the Weather App, navigate to its directory and run:
   ```bash
   cd dashboard/src/components/WeatherApp
   npm install
   ```
4. To start the project, run:
   ```bash
   npm start
   ```

## Usage Instructions

- Enter a location in the search bar to retrieve the weather forecast.
- Toggle the temperature unit (°F/°C) using the provided switch.
- Enjoy dynamic visual feedback based on the current weather, including unique GIFs for different weather conditions.

## API Keys and Security

- Ensure your API keys for WeatherAPI and Giphy API are stored securely, preferably in environment variables.
- Never commit your API keys in the codebase. Use `.env` files or server-side management for key storage.

## Contributing

To contribute, please follow the contribution guidelines of the main [JSt-For-Fun repository](https://github.com/itkrivoshei/JSt-For-Fun).

Here’s how you can contribute to the Weather App:

1. **Fork the Main Repository**: Start by forking the [JSt-For-Fun repository](https://github.com/itkrivoshei/JSt-For-Fun) to your GitHub account.
2. **Create a Branch**: In your fork, create a new branch for your work (`git checkout -b feature/AmazingWeatherFeature`).
3. **Make Your Changes**: Implement your changes or improvements in the new branch.
4. **Test Your Changes**: Ensure your changes do not break any existing functionality and adhere to the project's coding standards.
5. **Commit Your Changes**: Commit your changes with a clear and descriptive commit message (`git commit -m 'Add some AmazingWeatherFeature'`).
6. **Push Your Changes**: Push your branch to your fork (`git push origin feature/AmazingWeatherFeature`).
7. **Open a Pull Request**: Create a pull request from your branch to the main JSt-For-Fun repository’s `master` branch.

For more detailed instructions, refer to the [CONTRIBUTING.md](https://github.com/itkrivoshei/JSt-For-Fun/blob/master/CONTRIBUTING.md) file in the JSt-For-Fun repository.

---

This revised contribution section links directly to the main repository's contribution guidelines, ensuring consistency and making it easier for contributors to understand the contribution process.

## License

This project is open source and available under the [MIT License](../../../LICENSE).

## Acknowledgments

- This project was inspired by and built as part of the curriculum for [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-weather-app).
- Special thanks to the Weather API and Giphy API for providing the data and media used in this application.
