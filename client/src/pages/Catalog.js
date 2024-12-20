import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaFilter } from 'react-icons/fa';

const MOCK_TECHNIQUES = [
  {
    id: '1',
    name: 'Pêche au coup',
    difficulty: 'Facile',
    description: 'La pêche au coup est une technique de pêche très populaire, particulièrement adaptée aux débutants.',
    imageUrl: '/images/fishing-techniques.jpg'
  },
  {
    id: '2',
    name: 'Pêche aux leurres',
    difficulty: 'Intermédiaire',
    description: 'La pêche aux leurres est une technique active qui consiste à attraper les poissons carnassiers en imitant leurs proies naturelles.',
    imageUrl: '/images/lure-fishing.jpg'
  },
  {
    id: '3',
    name: 'Pêche à la mouche',
    difficulty: 'Difficile',
    description: 'La pêche à la mouche est une technique élégante qui imite les insectes dont se nourrissent les poissons.',
    imageUrl: '/images/fly-fishing.jpg'
  }
];

function Catalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  // Extraire toutes les difficultés uniques
  const difficulties = ['all', ...new Set(MOCK_TECHNIQUES.map(technique => technique.difficulty))];

  // Filtrer les techniques en fonction de la recherche et de la difficulté
  const filteredTechniques = MOCK_TECHNIQUES.filter(technique => {
    const matchesSearch = technique.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         technique.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'all' || technique.difficulty === selectedDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className="fish-guide-page">
      <div className="guide-header">
        <h1>Catalogue des Techniques de Pêche</h1>
        <p>Découvrez les différentes techniques pour une pêche réussie</p>
      </div>

      <div className="search-filters">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Rechercher une technique..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="family-filter">
          <FaFilter className="filter-icon" />
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
          >
            {difficulties.map(difficulty => (
              <option key={difficulty} value={difficulty}>
                {difficulty === 'all' ? 'Toutes les difficultés' : difficulty}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="fish-grid">
        {filteredTechniques.map((technique) => (
          <Link to={`/technique/${technique.id}`} key={technique.id} className="fish-card">
            <div className="fish-image-container">
              <img src={technique.imageUrl} alt={technique.name} className="fish-image" />
            </div>
            <div className="fish-content">
              <h3 className="fish-name">{technique.name}</h3>
              <p className="fish-description">{technique.description}</p>
              <span className={`difficulty-badge ${technique.difficulty.toLowerCase()}`}>
                {technique.difficulty}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
