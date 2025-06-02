# Quiz & Weather Hub

A simple, responsive web application that allows users to:
- Take a multiple-choice quiz on basic web development concepts.
- Check real-time weather information for any city using the OpenWeatherMap API.

## Features

### ✅ Quick Quiz
- 5 multiple-choice questions covering HTML, CSS, and JavaScript.
- Score is displayed upon quiz completion.

### 🌦 Weather Checker
- Input a city name to fetch current weather data.
- Displays temperature and weather condition using the OpenWeatherMap API.

## Technologies Used

- **HTML** for structure (`index.html`)
- **CSS** for styling (`style.css`)
- **JavaScript** for interactivity (`app.js`)
- **OpenWeatherMap API** for real-time weather data

## Setup Instructions

1. **Clone or download this repository.**

2. **Open `index.html` in a browser** to view and use the application.

3. **Weather API Note:**
   - The app uses a sample API key for demonstration. For production use, get your own API key from [OpenWeatherMap](https://openweathermap.org/api) and replace the `apiKey` in `app.js`:

     ```javascript
     const apiKey = "YOUR_API_KEY_HERE";
     ```

## File Structure

