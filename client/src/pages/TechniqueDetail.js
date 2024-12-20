import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MOCK_TECHNIQUES = {
  '1': {
    name: 'Pêche au coup',
    description: 'La pêche au coup est une technique de pêche très populaire, particulièrement adaptée aux débutants. Elle consiste à pêcher avec une canne fixe, sans moulinet, en utilisant un flotteur pour détecter les touches. Cette technique est idéale pour débuter car elle permet d\'apprendre les bases de la pêche tout en prenant du plaisir.',
    difficulty: 'Facile',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/05/15/14/41/fishing-768339_1280.jpg',
    equipment: [
      {
        name: 'Canne au coup',
        description: 'Canne télescopique de 4 à 8 mètres',
        importance: 'Essentiel'
      },
      {
        name: 'Ligne',
        description: 'Fil de 12 à 16 centièmes',
        importance: 'Essentiel'
      },
      {
        name: 'Flotteur',
        description: 'De 0.5 à 2 grammes selon les conditions',
        importance: 'Essentiel'
      },
      {
        name: 'Hameçons',
        description: 'Tailles 18 à 14',
        importance: 'Essentiel'
      },
      {
        name: 'Amorce',
        description: 'Mélange pour attirer les poissons',
        importance: 'Important'
      }
    ],
    steps: [
      {
        title: 'Préparation de l\'amorce',
        description: 'Mélanger l\'amorce avec de l\'eau jusqu\'à obtenir la bonne consistance'
      },
      {
        title: 'Montage de la ligne',
        description: 'Installer le flotteur, les plombs et l\'hameçon sur la ligne'
      },
      {
        title: 'Amorçage',
        description: 'Lancer quelques boules d\'amorce pour attirer les poissons'
      },
      {
        title: 'Pêche',
        description: 'Pêcher à la profondeur repérée en surveillant le flotteur'
      }
    ],
    tips: [
      'Commencer par une canne de taille moyenne (4-5m)',
      'Utiliser une amorce légère au début',
      'Observer le comportement du flotteur',
      'Rester discret au bord de l\'eau'
    ],
    targetFish: ['Gardon', 'Brème', 'Carpe', 'Rotengle'],
    bestConditions: {
      weather: ['Temps calme', 'Légère couverture nuageuse'],
      season: ['Printemps', 'Été'],
      waterType: ['Étang', 'Canal', 'Rivière calme']
    },
    commonMistakes: [
      'Trop amorcer au début',
      'Pêcher trop profond',
      'Utiliser des hameçons trop gros',
      'Faire trop de bruit'
    ]
  },
  '2': {
    name: 'Pêche aux leurres',
    description: 'La pêche aux leurres est une technique active qui consiste à attraper les poissons carnassiers en imitant leurs proies naturelles. Cette technique demande de la pratique et une bonne connaissance des postes à poissons, mais elle est très gratifiante une fois maîtrisée.',
    difficulty: 'Intermédiaire',
    imageUrl: 'https://cdn.pixabay.com/photo/2017/07/31/21/45/fishing-2561501_1280.jpg',
    equipment: [
      {
        name: 'Canne spinning',
        description: 'Canne de 1.80m à 2.40m, puissance 7-28g',
        importance: 'Essentiel'
      },
      {
        name: 'Moulinet',
        description: 'Taille 2500-4000 avec bon ratio',
        importance: 'Essentiel'
      },
      {
        name: 'Leurres',
        description: 'Assortiment de leurres souples et durs',
        importance: 'Essentiel'
      },
      {
        name: 'Bas de ligne',
        description: 'Fluorocarbone 20-30/100',
        importance: 'Important'
      }
    ],
    steps: [
      {
        title: 'Choix du leurre',
        description: 'Sélectionner le leurre adapté aux conditions et au poisson recherché'
      },
      {
        title: 'Repérage',
        description: 'Identifier les zones susceptibles d\'abriter des carnassiers'
      },
      {
        title: 'Lancer',
        description: 'Effectuer des lancers précis vers les postes repérés'
      },
      {
        title: 'Animation',
        description: 'Donner vie au leurre par des animations adaptées'
      }
    ],
    tips: [
      'Varier les vitesses d\'animation',
      'Pêcher les structures (arbres immergés, herbiers)',
      'Adapter la taille du leurre à la saison',
      'Rester en contact avec le leurre'
    ],
    targetFish: ['Brochet', 'Perche', 'Sandre', 'Black-bass'],
    bestConditions: {
      weather: ['Temps couvert', 'Vent léger', 'Après la pluie'],
      season: ['Printemps', 'Automne'],
      waterType: ['Lac', 'Rivière', 'Étang']
    },
    commonMistakes: [
      'Animation trop rapide',
      'Mauvais choix de leurre',
      'Négliger la qualité du bas de ligne',
      'Ne pas changer de technique quand ça ne mord pas'
    ]
  },
  '3': {
    name: 'Pêche à la mouche',
    description: 'La pêche à la mouche est une technique élégante qui imite les insectes dont se nourrissent les poissons. Cette méthode requiert de la patience pour maîtriser le lancer, mais offre une expérience de pêche unique et très gratifiante.',
    difficulty: 'Difficile',
    imageUrl: 'https://cdn.pixabay.com/photo/2014/08/26/15/32/fishing-428111_1280.jpg',
    equipment: [
      {
        name: 'Canne à mouche',
        description: 'Canne de 8-9 pieds, soie 4-5',
        importance: 'Essentiel'
      },
      {
        name: 'Soie',
        description: 'Soie flottante adaptée à la canne',
        importance: 'Essentiel'
      },
      {
        name: 'Mouches',
        description: 'Sélection de mouches sèches et nymphes',
        importance: 'Essentiel'
      },
      {
        name: 'Waders',
        description: 'Pour pêcher dans l\'eau',
        importance: 'Important'
      }
    ],
    steps: [
      {
        title: 'Observation',
        description: 'Identifier les insectes présents sur l\'eau'
      },
      {
        title: 'Choix de la mouche',
        description: 'Sélectionner l\'imitation la plus proche'
      },
      {
        title: 'Lancer',
        description: 'Effectuer un lancer précis et délicat'
      },
      {
        title: 'Dérive',
        description: 'Laisser la mouche dériver naturellement'
      }
    ],
    tips: [
      'S\'exercer au lancer dans un parc',
      'Observer les insectes avant de pêcher',
      'Approcher discrètement du poste',
      'Soigner la présentation de la mouche'
    ],
    targetFish: ['Truite', 'Ombre', 'Saumon', 'Chevesne'],
    bestConditions: {
      weather: ['Temps doux', 'Éclosions d\'insectes'],
      season: ['Printemps', 'Été'],
      waterType: ['Rivière', 'Ruisseau', 'Lac de montagne']
    },
    commonMistakes: [
      'Lancer trop puissant',
      'Mauvaise lecture de la rivière',
      'Négliger l\'approche',
      'Utiliser une mouche trop grosse'
    ]
  }
};

const TechniqueDetail = () => {
  const { id } = useParams();
  const technique = MOCK_TECHNIQUES[id];

  if (!technique) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Technique non trouvée</h1>
          <Link to="/catalog" className="text-nature-blue hover:underline">
            Retourner au catalogue
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Link to="/catalog" className="text-nature-blue hover:underline mb-6 inline-block">
        ← Retour au catalogue
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img src={technique.imageUrl} alt={technique.name} className="w-full h-96 object-cover" />
          </div>
          <div className="md:w-1/2 p-6">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold text-nature-blue">{technique.name}</h1>
              <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                technique.difficulty === 'Facile' ? 'bg-green-100 text-green-800' :
                technique.difficulty === 'Intermédiaire' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {technique.difficulty}
              </span>
            </div>
            <p className="text-gray-800 mb-6">{technique.description}</p>
          </div>
        </div>

        <div className="p-6 border-t">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-nature-blue mb-4">Équipement nécessaire</h2>
              <div className="space-y-4">
                {technique.equipment.map((item, index) => (
                  <div key={index} className="border-b pb-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-gray-700">{item.name}</h3>
                      <span className={`text-sm px-2 py-1 rounded ${
                        item.importance === 'Essentiel' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.importance}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-nature-blue mb-4">Étapes de la technique</h2>
              <div className="space-y-4">
                {technique.steps.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-nature-blue text-white rounded-full flex items-center justify-center mr-3">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-nature-blue mb-4">Conseils pratiques</h2>
              <ul className="list-disc list-inside space-y-2">
                {technique.tips.map((tip, index) => (
                  <li key={index} className="text-gray-700">{tip}</li>
                ))}
              </ul>

              <h3 className="font-semibold text-gray-700 mt-6 mb-3">Poissons ciblés</h3>
              <div className="flex flex-wrap gap-2">
                {technique.targetFish.map((fish, index) => (
                  <span key={index} className="bg-nature-blue text-white px-2 py-1 rounded">
                    {fish}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-nature-blue mb-4">Conditions optimales</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Météo idéale</h3>
                  <div className="flex flex-wrap gap-2">
                    {technique.bestConditions.weather.map((weather, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {weather}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Meilleures saisons</h3>
                  <div className="flex flex-wrap gap-2">
                    {technique.bestConditions.season.map((season, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {season}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Types d'eau</h3>
                  <div className="flex flex-wrap gap-2">
                    {technique.bestConditions.waterType.map((water, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {water}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <h3 className="font-semibold text-gray-700 mt-6 mb-3">Erreurs courantes à éviter</h3>
              <ul className="list-disc list-inside space-y-2">
                {technique.commonMistakes.map((mistake, index) => (
                  <li key={index} className="text-gray-700">{mistake}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechniqueDetail;
