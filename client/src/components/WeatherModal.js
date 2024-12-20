import React, { useState } from 'react';

const WeatherModal = ({ onClose }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState('');
  const [useManualLocation, setUseManualLocation] = useState(false);

  const fetchWeatherByCoords = async (position) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}`);
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError('Erreur lors de la récupération des données météo');
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByCity = async (city) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/weather/city?q=${encodeURIComponent(city)}`);
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError('Ville non trouvée ou erreur de récupération des données');
    } finally {
      setLoading(false);
    }
  };

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    if (location.trim()) {
      fetchWeatherByCity(location.trim());
    }
  };

  const useGeolocation = () => {
    setUseManualLocation(false);
    navigator.geolocation.getCurrentPosition(
      fetchWeatherByCoords,
      () => {
        setError('Impossible d\'obtenir votre position');
        setLoading(false);
      }
    );
  };

  const getRecommendations = (weatherData) => {
    if (!weatherData) return [];
    
    const recommendations = [];
    const { windSpeed, temperature, isRaining } = weatherData;

    if (windSpeed > 30) {
      recommendations.push('Vent fort : privilégiez la pêche au fond ou les techniques lourdes');
    }
    if (temperature < 10) {
      recommendations.push('Température basse : les poissons sont moins actifs, utilisez des leurres plus lents');
    }
    if (isRaining) {
      recommendations.push('Temps pluvieux : excellent pour la pêche ! Utilisez des leurres de surface');
    }

    return recommendations;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-nature-blue">Météo locale</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="mb-6">
          <div className="flex gap-4 mb-4">
            <button
              onClick={useGeolocation}
              className={`flex-1 py-2 px-4 rounded ${
                !useManualLocation
                  ? 'bg-nature-blue text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Géolocalisation
            </button>
            <button
              onClick={() => setUseManualLocation(true)}
              className={`flex-1 py-2 px-4 rounded ${
                useManualLocation
                  ? 'bg-nature-blue text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Saisie manuelle
            </button>
          </div>

          {useManualLocation && (
            <form onSubmit={handleLocationSubmit} className="mb-4">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Entrez une ville..."
                className="w-full p-2 border border-gray-300 rounded mb-2"
              />
              <button
                type="submit"
                className="w-full bg-nature-green text-white py-2 rounded hover:bg-green-700 transition duration-200"
              >
                Rechercher
              </button>
            </form>
          )}
        </div>

        {loading && (
          <div className="text-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-nature-blue mx-auto"></div>
          </div>
        )}

        {error && (
          <div className="text-red-500 text-center py-4">
            {error}
          </div>
        )}

        {weather && (
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-4">
              <div className="text-4xl">{weather.icon}</div>
              <div>
                <div className="text-2xl font-bold">{weather.temperature}°C</div>
                <div className="text-gray-600">{weather.description}</div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h3 className="font-bold mb-2">Recommandations :</h3>
              <ul className="space-y-2">
                {getRecommendations(weather).map((rec, index) => (
                  <li key={index} className="text-sm text-gray-700">
                    • {rec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherModal;
