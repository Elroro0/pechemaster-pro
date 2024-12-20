import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SpotCard = ({ spot }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img src={spot.imageUrl} alt={spot.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-nature-blue">{spot.name}</h3>
        <div className="flex items-center">
          <span className="text-yellow-500 mr-1">★</span>
          <span className="text-gray-600">{spot.rating.toFixed(1)}</span>
        </div>
      </div>
      <div className="mb-3">
        <span className={`inline-block px-2 py-1 rounded text-sm ${
          spot.accessibility === 'Facile' ? 'bg-green-100 text-green-800' :
          spot.accessibility === 'Moyen' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {spot.accessibility}
        </span>
        <span className="ml-2 inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
          {spot.type}
        </span>
      </div>
      <p className="text-gray-600 mb-4 line-clamp-2">{spot.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {spot.facilities.map((facility, index) => (
          <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
            {facility}
          </span>
        ))}
      </div>
      <Link
        to={`/spot/${spot._id}`}
        className="inline-block bg-nature-green text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200"
      >
        Voir le spot
      </Link>
    </div>
  </div>
);

const FishingSpots = () => {
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    type: '',
    search: '',
    radius: '50'
  });
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Get user's location if they allow it
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      },
      () => {
        console.log('Location access denied');
      }
    );
  }, []);

  useEffect(() => {
    const fetchSpots = async () => {
      try {
        const params = new URLSearchParams();
        if (filters.type) params.append('type', filters.type);
        if (filters.search) params.append('search', filters.search);
        if (userLocation) {
          params.append('lat', userLocation.lat);
          params.append('lon', userLocation.lon);
          params.append('radius', filters.radius);
        }
        
        const response = await fetch(`/api/fishing-spots?${params}`);
        const data = await response.json();
        setSpots(data);
      } catch (error) {
        console.error('Error fetching spots:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpots();
  }, [filters, userLocation]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nature-blue"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-nature-blue mb-8">Spots de Pêche</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            placeholder="Rechercher un spot..."
            className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-nature-blue focus:border-transparent"
          />
          <select
            value={filters.type}
            onChange={(e) => handleFilterChange('type', e.target.value)}
            className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-nature-blue focus:border-transparent"
          >
            <option value="">Tous les types</option>
            <option value="Lac">Lac</option>
            <option value="Rivière">Rivière</option>
            <option value="Étang">Étang</option>
            <option value="Mer">Mer</option>
            <option value="Port">Port</option>
          </select>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="10"
              max="100"
              value={filters.radius}
              onChange={(e) => handleFilterChange('radius', e.target.value)}
              className="flex-1"
            />
            <span className="text-sm text-gray-600 whitespace-nowrap">
              {filters.radius} km
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {spots.map((spot) => (
          <SpotCard key={spot._id} spot={spot} />
        ))}
      </div>

      {spots.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">
            Aucun spot trouvé. Essayez d'autres critères de recherche.
          </p>
        </div>
      )}
    </div>
  );
};

export default FishingSpots;
