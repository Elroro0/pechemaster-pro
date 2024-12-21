import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import weatherImg from '../assets/images/weather.jpeg';
import fishGuideImg from '../assets/images/fish-guide.jpg';
import fishingTechniqueImg from '../assets/images/fishin-technique.jpeg';
import lureFishingImg from '../assets/images/lure-fishing.jpeg';

// Image de fond du hero
const HERO_BG = '/images/home-bg.jpg';

const modules = [
  {
    id: 1,
    title: 'Guide des Poissons',
    description: 'Découvrez les différentes espèces de poissons de nos eaux douces.',
    image: fishGuideImg,
    link: '/fish-guide'
  },
  {
    id: 2,
    title: 'Techniques de Pêche',
    description: 'Maîtrisez les techniques essentielles pour une pêche réussie.',
    image: fishingTechniqueImg,
    link: '/catalog'
  },
  {
    id: 3,
    title: 'Météo & Conditions',
    description: 'Consultez les conditions météorologiques optimales pour la pêche.',
    image: weatherImg,
    link: '/weather'
  }
];

const quickLinks = [
  { id: 1, title: 'Top 10 Poissons', link: '/top-fish' },
  { id: 2, title: 'Guide Débutant', link: '/beginner' },
  { id: 3, title: 'Spots Populaires', link: '/spots' },
  { id: 4, title: 'Réglementation', link: '/rules' }
];

const featuredFish = {
  name: 'Brochet',
  description: 'Prédateur emblématique de nos eaux douces, le brochet est reconnaissable à sa silhouette élancée et sa nage furtive.',
  image: lureFishingImg,
  period: 'Meilleure période : Automne'
};

const seasonalTips = [
  { tip: 'Privilégiez la pêche en début de matinée' },
  { tip: 'Les poissons sont plus actifs près des berges' },
  { tip: 'Utilisez des leurres de surface' }
];

const dailyTip = {
  tip: "Astuce du jour : Les poissons sont plus actifs pendant les changements de pression atmosphérique."
};

function Home() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const currentDate = format(new Date(), "d MMMM yyyy", { locale: fr });

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img 
          src={HERO_BG}
          alt="Paysage de pêche" 
          className="hero-background"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Votre guide complet pour la pêche en eau douce</h1>
          <p className="hero-subtitle">Découvrez les meilleures espèces et techniques</p>
          <Link to="/fish-guide" className="hero-button">Explorer les espèces</Link>
        </div>
      </section>

      <div className="section-divider" />

      {/* Search Section */}
      <section className="search-section">
        <div className="container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Rechercher une espèce, une technique..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="popular-searches">
            <span>Recherches populaires : </span>
            <Link to="/search?q=brochet" className="search-tag">Brochet</Link>
            <Link to="/search?q=mouche" className="search-tag">Pêche à la mouche</Link>
            <Link to="/search?q=carpe" className="search-tag">Carpe</Link>
          </div>
        </div>
      </section>

      {/* Daily Tip */}
      <section className="container">
        <div className="tip-of-day">
          <p>{dailyTip.tip}</p>
        </div>
      </section>

      {/* Main Modules Section */}
      <section className="modules-section">
        <div className="container">
          <div className="modules-grid">
            {modules.map((module) => (
              <Link to={module.link} key={module.id} className="module-card">
                <div className="module-image-container">
                  <img src={module.image} alt={module.title} className="module-image" />
                </div>
                <div className="module-content">
                  <h3 className="module-title">{module.title}</h3>
                  <p className="module-description">{module.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="container">
        <div className="featured-section">
          {/* Weather Widget */}
          <div className="weather-widget">
            <h3>Météo Locale</h3>
            <div className="weather-info">
              <div className="weather-details">
                <p>22°C</p>
                <p>12 km/h</p>
                <p>1015 hPa</p>
              </div>
            </div>
          </div>

          {/* Featured Fish */}
          <div className="featured-fish">
            <h3>Poisson du Mois</h3>
            <div className="featured-fish-image-container">
              <img src={featuredFish.image} alt={featuredFish.name} />
              <div className="featured-fish-title">
                <h4>{featuredFish.name}</h4>
              </div>
            </div>
            <div className="featured-fish-info">
              <p>{featuredFish.description}</p>
              <span>{featuredFish.period}</span>
              <Link to="/fish-guide/brochet" className="featured-fish-button">
                En savoir plus
              </Link>
            </div>
          </div>

          {/* Seasonal Tips */}
          <div className="seasonal-tips">
            <h3>Conseils de Saison</h3>
            <div className="current-date">
              {currentDate}
            </div>
            {seasonalTips.map((tip, index) => (
              <div key={index} className="tip-item">
                <span>{tip.tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container">
        <div className="quick-links">
          <h3>Accès Rapide</h3>
          <div className="quick-links-grid">
            {quickLinks.map((link) => (
              <Link key={link.id} to={link.link} className="quick-link-item">
                <span>{link.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
