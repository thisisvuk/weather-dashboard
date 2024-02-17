# Weather-Dashboard
This project is a simple React weather application that displays the current weather and tomorrow's forecast for a specific city. It utilizes the OpenWeatherMap API to fetch weather data.

## Project Structure

### App.js: 
- The main component that fetches data from the OpenWeatherMap API and renders the WeatherWidget component.

### WeatherWidget.js: 
- A component responsible for displaying the current weather and tomorrow's forecast. It includes a toggle button to switch between today's weather and tomorrow's forecast.

### API Choice
- This project uses the OpenWeatherMap API to obtain weather data. The API provides accurate and up-to-date weather information, including current weather conditions and forecasts. The choice of this API was based on its simplicity, availability, and the variety of weather data it offers.

## Unique Element
The unique element added to this application is the ability to toggle between today's weather and tomorrow's forecast using a simple button. This feature provides users with the flexibility to view either the current weather conditions or plan for the next day.

## Special Instructions
To run this application, follow these steps:

- Clone the repository to your local machine.
- Install dependencies using npm install or yarn install.
- Obtain an API key from OpenWeatherMap and replace the placeholder API_KEY in the App.js file.
- Customize the CITY variable in App.js to the desired city for weather information.
- Run the application using npm start or yarn start.
Open your browser and navigate to http://localhost:3000 to view the weather application.

Note: Ensure that you have Node.js and npm (or yarn) installed on your machine.

Feel free to explore and enhance the application further based on your preferences and requirements.