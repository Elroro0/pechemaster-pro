import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaRuler, FaWeight, FaCalendarAlt, FaWater, FaFish } from 'react-icons/fa';
import { fishData } from '../data/fishData';

function FishDetails() {
  const { id } = useParams();
  const fish = fishData.find(f => f.id === id);

  if (!fish) {
    return (
      <div className="fish-not-found">
        <h2>Poisson non trouvé</h2>
        <Link to="/fish-guide" className="back-link">
          <FaArrowLeft /> Retour au guide
        </Link>
      </div>
    );
  }

  const getMonthName = (monthNumber) => {
    const months = [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];
    return months[monthNumber - 1];
  };

  return (
    <div className="fish-details-page">
      <div className="fish-details-header">
        <Link to="/fish-guide" className="back-link">
          <FaArrowLeft /> Retour au guide
        </Link>
        <h1>{fish.name}</h1>
        <p className="scientific-name">{fish.scientificName}</p>
        <span className="fish-family">{fish.family}</span>
      </div>

      <div className="fish-details-content">
        <div className="fish-main-info">
          <div className="fish-image-container">
            <img
              src={`/images/fish/${fish.id}.jpg`}
              alt={fish.name}
              className="fish-image"
              onError={(e) => {
                e.target.src = '/images/fish/default-fish.jpg';
              }}
            />
          </div>

          <div className="fish-characteristics">
            <h2>Caractéristiques</h2>
            <div className="characteristic-item">
              <FaRuler />
              <span>Taille : {fish.characteristics.size.min}-{fish.characteristics.size.max} {fish.characteristics.size.unit}</span>
            </div>
            <div className="characteristic-item">
              <FaWeight />
              <span>
                Poids : {
                  fish.characteristics.weight.average
                    ? `${fish.characteristics.weight.average} ${fish.characteristics.weight.unit}`
                    : `${fish.characteristics.weight.min}-${fish.characteristics.weight.max} ${fish.characteristics.weight.unit}`
                }
              </span>
            </div>
          </div>
        </div>

        <div className="fish-details-grid">
          <div className="detail-card regulation">
            <h3>Réglementation</h3>
            <div className="regulation-info">
              {fish.regulation.legalSize && (
                <p>Taille légale : {fish.regulation.legalSize} cm</p>
              )}
              {fish.regulation.closedPeriod && (
                <p>Période de fermeture : {fish.regulation.closedPeriod}</p>
              )}
              <p>{fish.regulation.specificRules}</p>
            </div>
          </div>

          <div className="detail-card feeding">
            <h3>Alimentation</h3>
            <p><strong>Type : </strong>{fish.feeding.type}</p>
            <div className="feeding-preferences">
              <h4>Préférences :</h4>
              <ul>
                {fish.feeding.preferences.map((pref, index) => (
                  <li key={index}>{pref}</li>
                ))}
              </ul>
            </div>
            {fish.feeding.details && <p>{fish.feeding.details}</p>}
          </div>

          <div className="detail-card reproduction">
            <h3>Reproduction</h3>
            <div className="reproduction-period">
              <FaCalendarAlt />
              <span>
                {getMonthName(fish.reproduction.period.start)} à {getMonthName(fish.reproduction.period.end)}
              </span>
            </div>
            {fish.reproduction.conditions && (
              <p>{fish.reproduction.conditions}</p>
            )}
          </div>

          <div className="detail-card habitat">
            <h3>Habitat</h3>
            <div className="habitat-info">
              <FaWater />
              <div>
                <h4>Milieux :</h4>
                <ul>
                  {fish.habitat.type.map((type, index) => (
                    <li key={index}>{type}</li>
                  ))}
                </ul>
              </div>
            </div>
            {fish.habitat.characteristics && (
              <div className="habitat-characteristics">
                <h4>Caractéristiques :</h4>
                <ul>
                  {fish.habitat.characteristics.map((char, index) => (
                    <li key={index}>{char}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="seasonal-tips-section">
          <h2>Conseils de Pêche Saisonniers</h2>
          <div className="seasonal-tips-grid">
            {Object.entries(fish.seasonalTips).map(([season, tips]) => (
              <div key={season} className={`season-card ${season}`}>
                <h3>{season.charAt(0).toUpperCase() + season.slice(1)}</h3>
                <p className="behavior">{tips.behavior}</p>
                <ul className="tips-list">
                  {tips.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FishDetails;
