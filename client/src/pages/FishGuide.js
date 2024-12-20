import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { fishData } from '../data/fishData';

function FishGuide() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFamily, setSelectedFamily] = useState('all');

  // Extraire toutes les familles uniques
  const families = ['all', ...new Set(fishData.map(fish => fish.family))];

  // Filtrer les poissons en fonction de la recherche et de la famille
  const filteredFish = fishData.filter(fish => {
    const matchesSearch = fish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         fish.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFamily = selectedFamily === 'all' || fish.family === selectedFamily;
    return matchesSearch && matchesFamily;
  });

  return (
    <div className="fish-guide-page">
      <div className="guide-header">
        <h1>Guide des Poissons</h1>
        <p>Découvrez les différentes espèces de poissons d'eau douce</p>
      </div>

      <div className="search-filters">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Rechercher un poisson..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="family-filter">
          <FaFilter className="filter-icon" />
          <select
            value={selectedFamily}
            onChange={(e) => setSelectedFamily(e.target.value)}
          >
            {families.map(family => (
              <option key={family} value={family}>
                {family === 'all' ? 'Toutes les familles' : family}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="fish-grid">
        {filteredFish.map(fish => (
          <Link to={`/fish-guide/${fish.id}`} key={fish.id} className="fish-card">
            <div className="fish-image-container">
              <img
                src={`/images/fish/${fish.id}.jpg`}
                alt={fish.name}
                className="fish-image"
                onError={(e) => {
                  e.target.src = '/images/fish/default-fish.jpg';
                }}
              />
              <div className="fish-overlay">
                <h3>{fish.name}</h3>
                <p className="scientific-name">{fish.scientificName}</p>
              </div>
            </div>
            <div className="fish-info">
              <div className="fish-details">
                <span className="fish-size">
                  {fish.characteristics.size.min}-{fish.characteristics.size.max} {fish.characteristics.size.unit}
                </span>
                <span className="fish-family">{fish.family}</span>
              </div>
              <div className="fish-season">
                {fish.seasonalTips.summer.behavior}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FishGuide;
