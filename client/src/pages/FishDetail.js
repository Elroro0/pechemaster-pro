import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MOCK_FISH = {
  '1': {
    name: 'Truite fario',
    scientificName: 'Salmo trutta',
    category: 'Eau douce',
    description: 'La truite fario est un poisson noble recherché pour sa combativité et sa méfiance. Elle vit principalement dans les rivières fraîches et bien oxygénées. Ce poisson territorial est un excellent indicateur de la qualité de l\'eau.',
    imageUrl: 'https://cdn.pixabay.com/photo/2017/08/23/13/03/brown-trout-2672317_1280.jpg',
    habitat: 'Rivières fraîches et oxygénées, zones montagneuses',
    averageSize: { min: 20, max: 50, unit: 'cm' },
    averageWeight: { min: 0.2, max: 2, unit: 'kg' },
    season: [
      { name: 'Printemps', activity: 'Forte' },
      { name: 'Été', activity: 'Moyenne' },
      { name: 'Automne', activity: 'Forte' },
      { name: 'Hiver', activity: 'Faible' }
    ],
    techniques: ['Pêche à la mouche', 'Pêche aux leurres', 'Pêche au toc'],
    characteristics: [
      'Dos brun-vert moucheté de noir',
      'Flancs dorés avec des points rouges et noirs',
      'Ventre blanc-jaune',
      'Nageoires robustes'
    ],
    diet: ['Insectes', 'Petits poissons', 'Vers', 'Larves'],
    bestTime: 'Tôt le matin ou en fin de journée',
    regulations: {
      minimumSize: 23,
      season: {
        start: '14 Mars',
        end: '20 Septembre'
      },
      quota: 6
    }
  },
  '2': {
    name: 'Brochet',
    scientificName: 'Esox lucius',
    category: 'Eau douce',
    description: 'Le brochet est le grand prédateur de nos eaux douces, réputé pour sa voracité et sa puissance. C\'est un poisson emblématique de la pêche sportive en France, apprécié pour ses attaques spectaculaires et ses combats mémorables.',
    imageUrl: 'https://cdn.pixabay.com/photo/2017/10/25/16/54/pike-2888246_1280.jpg',
    habitat: 'Lacs, étangs et rivières avec végétation',
    averageSize: { min: 50, max: 130, unit: 'cm' },
    averageWeight: { min: 1, max: 15, unit: 'kg' },
    season: [
      { name: 'Printemps', activity: 'Forte' },
      { name: 'Été', activity: 'Moyenne' },
      { name: 'Automne', activity: 'Forte' },
      { name: 'Hiver', activity: 'Faible' }
    ],
    techniques: ['Pêche aux leurres', 'Pêche au vif', 'Pêche au mort manié'],
    characteristics: [
      'Corps allongé et puissant',
      'Tête en forme de bec de canard',
      'Robe verte marbrée',
      'Dents acérées'
    ],
    diet: ['Poissons', 'Grenouilles', 'Écrevisses', 'Petits mammifères'],
    bestTime: 'Matinée et crépuscule',
    regulations: {
      minimumSize: 60,
      season: {
        start: '1er Mai',
        end: '31 Janvier'
      },
      quota: 2
    }
  },
  '3': {
    name: 'Bar',
    scientificName: 'Dicentrarchus labrax',
    category: 'Eau de mer',
    description: 'Le bar est un poisson marin très prisé pour sa chair et sa combativité. Excellent chasseur, il est réputé pour son intelligence et sa méfiance, ce qui en fait un adversaire de choix pour les pêcheurs sportifs.',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/04/13/07/18/bass-1326143_1280.jpg',
    habitat: 'Côtes rocheuses et plages',
    averageSize: { min: 30, max: 80, unit: 'cm' },
    averageWeight: { min: 0.5, max: 6, unit: 'kg' },
    season: [
      { name: 'Printemps', activity: 'Moyenne' },
      { name: 'Été', activity: 'Forte' },
      { name: 'Automne', activity: 'Forte' },
      { name: 'Hiver', activity: 'Moyenne' }
    ],
    techniques: ['Pêche aux leurres', 'Surfcasting', 'Pêche en bateau'],
    characteristics: [
      'Corps argenté élancé',
      'Dos gris-bleu',
      'Ligne latérale bien visible',
      'Deux nageoires dorsales distinctes'
    ],
    diet: ['Petits poissons', 'Crevettes', 'Crabes', 'Calmars'],
    bestTime: 'Marées montantes et descendantes',
    regulations: {
      minimumSize: 42,
      season: {
        start: 'Toute l\'année',
        end: 'avec restrictions'
      },
      quota: 2
    }
  }
};

const FishDetail = () => {
  const { id } = useParams();
  const fish = MOCK_FISH[id];

  if (!fish) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Poisson non trouvé</h1>
          <Link to="/fish-guide" className="text-nature-blue hover:underline">
            Retourner au guide des poissons
          </Link>
        </div>
      </div>
    );
  }

  const ActivityBadge = ({ activity }) => {
    const colors = {
      Forte: 'bg-green-100 text-green-800',
      Moyenne: 'bg-yellow-100 text-yellow-800',
      Faible: 'bg-red-100 text-red-800'
    };
    return (
      <span className={`inline-block px-2 py-1 rounded-full text-sm ${colors[activity]}`}>
        {activity}
      </span>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Link to="/fish-guide" className="text-nature-blue hover:underline mb-6 inline-block">
        ← Retour au guide
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img src={fish.imageUrl} alt={fish.name} className="w-full h-96 object-cover" />
          </div>
          <div className="md:w-1/2 p-6">
            <h1 className="text-3xl font-bold text-nature-blue mb-2">{fish.name}</h1>
            <p className="text-gray-600 italic mb-4">{fish.scientificName}</p>
            <p className="text-gray-800 mb-6">{fish.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-semibold text-gray-700">Taille moyenne</h3>
                <p>{fish.averageSize.min}-{fish.averageSize.max} {fish.averageSize.unit}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Poids moyen</h3>
                <p>{fish.averageWeight.min}-{fish.averageWeight.max} {fish.averageWeight.unit}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-nature-blue mb-4">Habitat et comportement</h2>
              <p className="mb-4">{fish.habitat}</p>
              <h3 className="font-semibold text-gray-700 mb-2">Caractéristiques</h3>
              <ul className="list-disc list-inside mb-4">
                {fish.characteristics.map((char, index) => (
                  <li key={index} className="text-gray-600">{char}</li>
                ))}
              </ul>
              <h3 className="font-semibold text-gray-700 mb-2">Alimentation</h3>
              <div className="flex flex-wrap gap-2">
                {fish.diet.map((food, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {food}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-nature-blue mb-4">Pêche et réglementation</h2>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 mb-2">Activité par saison</h3>
                <div className="grid grid-cols-2 gap-4">
                  {fish.season.map((s, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span>{s.name}</span>
                      <ActivityBadge activity={s.activity} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 mb-2">Techniques recommandées</h3>
                <div className="flex flex-wrap gap-2">
                  {fish.techniques.map((technique, index) => (
                    <span key={index} className="bg-nature-blue text-white px-2 py-1 rounded">
                      {technique}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Réglementation</h3>
                <ul className="space-y-2">
                  <li>Taille minimale: {fish.regulations.minimumSize} cm</li>
                  <li>Période: {fish.regulations.season.start} - {fish.regulations.season.end}</li>
                  <li>Quota journalier: {fish.regulations.quota} prises</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FishDetail;
