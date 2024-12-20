const express = require('express');
const router = express.Router();
const axios = require('axios');

// Route pour la géolocalisation
router.get('/', async (req, res) => {
  try {
    const { lat, lon } = req.query;
    
    if (!lat || !lon) {
      return res.status(400).json({ message: 'Latitude and longitude are required' });
    }

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${process.env.OPENWEATHER_API_KEY}`
    );

    const weatherData = formatWeatherData(response.data);
    res.json(weatherData);
  } catch (error) {
    console.error('Weather API error:', error);
    res.status(500).json({ message: 'Error fetching weather data' });
  }
});

// Route pour la recherche par ville
router.get('/city', async (req, res) => {
  try {
    const { q } = req.query;
    
    if (!q) {
      return res.status(400).json({ message: 'City name is required' });
    }

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&lang=fr&appid=${process.env.OPENWEATHER_API_KEY}`
    );

    const weatherData = formatWeatherData(response.data);
    res.json(weatherData);
  } catch (error) {
    console.error('Weather API error:', error);
    res.status(500).json({ message: 'Error fetching weather data' });
  }
});

function formatWeatherData(data) {
  return {
    temperature: Math.round(data.main.temp),
    description: data.weather[0].description,
    windSpeed: data.wind.speed,
    icon: getWeatherIcon(data.weather[0].icon),
    isRaining: data.weather[0].main === 'Rain'
  };
}

function getWeatherIcon(code) {
  const icons = {
    '01d': '☀️',
    '01n': '🌙',
    '02d': '⛅',
    '02n': '☁️',
    '03d': '☁️',
    '03n': '☁️',
    '04d': '☁️',
    '04n': '☁️',
    '09d': '🌧️',
    '09n': '🌧️',
    '10d': '🌦️',
    '10n': '🌧️',
    '11d': '⛈️',
    '11n': '⛈️',
    '13d': '🌨️',
    '13n': '🌨️',
    '50d': '🌫️',
    '50n': '🌫️'
  };
  return icons[code] || '🌤️';
}

module.exports = router;
