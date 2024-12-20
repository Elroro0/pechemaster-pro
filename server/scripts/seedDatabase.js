const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const mongoose = require('mongoose');
const Technique = require('../models/Technique');
const Fish = require('../models/Fish');
const FishingSpot = require('../models/FishingSpot');

const techniques = [
  {
    name: 'Pêche au coup',
    description: 'La pêche au coup est une technique de pêche très populaire, particulièrement adaptée aux débutants.',
    difficulty: 'Facile',
    imageUrl: 'https://images.unsplash.com/photo-1516962126636-27ad087061cc?w=800',
    equipment: ['Canne au coup', 'Ligne', 'Flotteur', 'Hameçons', 'Amorce'],
    steps: [
      'Préparer l\'amorce',
      'Monter la ligne avec un flotteur',
      'Amorcer le poste',
      'Pêcher à la profondeur repérée'
    ]
  },
  {
    name: 'Pêche aux leurres',
    description: 'La pêche aux leurres est une technique active qui consiste à attraper les poissons carnassiers.',
    difficulty: 'Intermédiaire',
    imageUrl: 'https://images.unsplash.com/photo-1595183405644-6b3b0f6538bd?w=800',
    equipment: ['Canne spinning', 'Moulinet', 'Leurres', 'Bas de ligne'],
    steps: [
      'Choisir le bon leurre',
      'Repérer les postes',
      'Lancer et animer le leurre',
      'Ferrer au contact'
    ]
  },
  {
    name: 'Pêche à la mouche',
    description: 'La pêche à la mouche est une technique élégante qui imite les insectes dont se nourrissent les poissons.',
    difficulty: 'Difficile',
    imageUrl: 'https://images.unsplash.com/photo-1499242611767-cf8b9be02854?w=800',
    equipment: ['Canne à mouche', 'Soie', 'Mouches artificielles', 'Waders'],
    steps: [
      'Choisir la bonne mouche',
      'Observer les insectes présents',
      'Effectuer le lancer',
      'Dériver la mouche naturellement'
    ]
  }
];

const fishes = [
  {
    name: 'Truite fario',
    scientificName: 'Salmo trutta',
    category: 'Eau douce',
    description: 'La truite fario est un poisson noble recherché pour sa combativité et sa méfiance.',
    imageUrl: 'https://images.unsplash.com/photo-1545816250-0c13b5606fa6?w=800',
    habitat: 'Rivières fraîches et oxygénées',
    averageSize: { min: 20, max: 50, unit: 'cm' },
    averageWeight: { min: 0.2, max: 2, unit: 'kg' },
    season: [
      { name: 'Printemps', activity: 'Forte' },
      { name: 'Été', activity: 'Moyenne' },
      { name: 'Automne', activity: 'Forte' },
      { name: 'Hiver', activity: 'Faible' }
    ]
  },
  {
    name: 'Brochet',
    scientificName: 'Esox lucius',
    category: 'Eau douce',
    description: 'Le brochet est le grand prédateur de nos eaux douces, réputé pour sa voracité.',
    imageUrl: 'https://images.unsplash.com/photo-1590059951637-a7d9aaa829c6?w=800',
    habitat: 'Lacs, étangs et rivières',
    averageSize: { min: 50, max: 130, unit: 'cm' },
    averageWeight: { min: 1, max: 15, unit: 'kg' },
    season: [
      { name: 'Printemps', activity: 'Forte' },
      { name: 'Été', activity: 'Moyenne' },
      { name: 'Automne', activity: 'Forte' },
      { name: 'Hiver', activity: 'Faible' }
    ]
  },
  {
    name: 'Bar',
    scientificName: 'Dicentrarchus labrax',
    category: 'Eau de mer',
    description: 'Le bar est un poisson marin très prisé pour sa chair et sa combativité.',
    imageUrl: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?w=800',
    habitat: 'Côtes rocheuses et plages',
    averageSize: { min: 30, max: 80, unit: 'cm' },
    averageWeight: { min: 0.5, max: 6, unit: 'kg' },
    season: [
      { name: 'Printemps', activity: 'Moyenne' },
      { name: 'Été', activity: 'Forte' },
      { name: 'Automne', activity: 'Forte' },
      { name: 'Hiver', activity: 'Moyenne' }
    ]
  }
];

const fishData = [
  {
    id: 'gardon',
    name: 'Gardon',
    scientificName: 'Rutilus rutilus',
    family: 'Cyprinidés',
    characteristics: {
      size: {
        min: 15,
        max: 25,
        unit: 'cm'
      },
      weight: {
        average: 300,
        unit: 'g'
      }
    },
    regulation: {
      legalSize: null,
      closedPeriod: null,
      specificRules: 'Pas de taille légale de capture dans la plupart des cas. Vérifier les arrêtés locaux.'
    },
    feeding: {
      type: 'Omnivore',
      preferences: ['invertébrés', 'zooplancton', 'vers', 'débris végétaux'],
      details: 'Tendance insectivore et granivore'
    },
    reproduction: {
      period: {
        start: 4, // avril
        end: 6,   // juin,
      },
      conditions: 'Température de l\'eau d\'environ 14°C'
    },
    habitat: {
      type: ['rivières', 'canaux', 'étangs', 'lacs'],
      characteristics: ['eaux calmes', 'eaux légèrement courantes'],
      substrate: ['sable', 'vase'],
      preferences: 'Présence de végétation aquatique, vit en bancs'
    },
    seasonalTips: {
      winter: {
        behavior: 'Plus apathique',
        tips: ['Pêcher en eaux plus profondes', 'Amorçage léger']
      },
      spring: {
        behavior: 'Période de frai, très actif',
        tips: ['Utiliser des appâts vivants', 'vers', 'asticots']
      },
      summer: {
        behavior: 'Très actif en surface',
        tips: ['Graines', 'pain', 'asticots', 'amorces riches']
      },
      autumn: {
        behavior: 'Commence à redescendre en profondeur',
        tips: ['Pêcher plus lentement', 'Pêcher plus fin']
      }
    }
  },
  {
    id: 'rotengle',
    name: 'Rotengle',
    scientificName: 'Scardinius erythrophthalmus',
    family: 'Cyprinidés',
    characteristics: {
      size: {
        min: 20,
        max: 30,
        unit: 'cm'
      },
      weight: {
        average: 500,
        unit: 'g'
      }
    },
    regulation: {
      legalSize: null,
      closedPeriod: null,
      specificRules: 'Pas de taille légale dans la plupart des cas'
    },
    feeding: {
      type: 'Herbivore/Omnivore',
      preferences: ['végétaux', 'insectes de surface', 'petits crustacés'],
      details: 'Plutôt herbivore à tendance omnivore'
    },
    reproduction: {
      period: {
        start: 5, // mai
        end: 6    // juin
      },
      conditions: 'En eaux peu profondes et végétalisées'
    },
    habitat: {
      type: ['plans d\'eau calmes', 'lacs', 'étangs', 'bras morts de rivière'],
      characteristics: ['eaux calmes'],
      preferences: 'Végétation dense'
    },
    seasonalTips: {
      winter: {
        behavior: 'Dur à trouver',
        tips: ['Reste près des bordures profondes']
      },
      spring: {
        behavior: 'Très actif',
        tips: ['Approches de surface']
      },
      summer: {
        behavior: 'Actif en surface',
        tips: ['Pêche en surface', 'entre deux eaux', 'appâts végétaux', 'pain flottant']
      },
      autumn: {
        behavior: 'Se rapproche des herbiers',
        tips: ['Pêche lente']
      }
    }
  },
  {
    id: 'breme',
    name: 'Brème',
    scientificName: 'Abramis brama',
    family: 'Cyprinidés',
    characteristics: {
      size: {
        min: 30,
        max: 50,
        unit: 'cm'
      },
      weight: {
        min: 1,
        max: 3,
        unit: 'kg'
      }
    },
    regulation: {
      legalSize: null,
      closedPeriod: null,
      specificRules: 'Pas de taille légale standard, se renseigner localement'
    },
    feeding: {
      type: 'Omnivore benthique',
      preferences: ['vers', 'larves d\'insectes', 'mollusques'],
      details: 'Fouille le fond pour se nourrir'
    },
    reproduction: {
      period: {
        start: 4, // avril
        end: 6    // juin
      }
    },
    habitat: {
      type: ['rivières lentes', 'lacs', 'canaux'],
      characteristics: ['eaux calmes'],
      substrate: ['fond vaseux']
    },
    seasonalTips: {
      winter: {
        behavior: 'Moins active',
        tips: ['Pêche au feeder en profondeur']
      },
      spring: {
        behavior: 'Active en groupes denses',
        tips: ['Gros amorçage', 'asticots', 'vers de vase']
      },
      summer: {
        behavior: 'Active la nuit et tôt le matin',
        tips: ['Amorce sucrée', 'pellets']
      },
      autumn: {
        behavior: 'Ralentissement',
        tips: ['Pêche plus lente', 'amorces plus nutritives']
      }
    }
  },
  {
    id: 'carpe',
    name: 'Carpe',
    scientificName: 'Cyprinus carpio',
    family: 'Cyprinidés',
    characteristics: {
      size: {
        min: 30,
        max: 90,
        unit: 'cm'
      },
      weight: {
        min: 5,
        max: 30,
        typical: '5 à 15',
        unit: 'kg'
      }
    },
    regulation: {
      legalSize: 60,
      closedPeriod: null,
      specificRules: 'Taille légale variable, parfois No-Kill obligatoire'
    },
    feeding: {
      type: 'Omnivore benthique',
      preferences: ['graines', 'bouillettes', 'vers', 'écrevisses', 'moules d\'eau douce']
    },
    reproduction: {
      period: {
        start: 5, // mai
        end: 6    // juin
      },
      conditions: 'Dans les herbiers peu profonds et en eau réchauffée'
    },
    habitat: {
      type: ['plans d\'eau', 'rivières lentes', 'gravières', 'lacs'],
      characteristics: ['zones encombrées'],
      substrate: ['fonds meubles'],
      preferences: 'Végétation, bois mort, herbiers'
    },
    seasonalTips: {
      winter: {
        behavior: 'Moins active',
        tips: ['Appâts discrets', 'pêche lente', 'zones profondes']
      },
      spring: {
        behavior: 'Reprise d\'activité',
        tips: ['Bouillettes fruitées', 'graines', 'postes peu profonds ensoleillés']
      },
      summer: {
        behavior: 'Très active',
        tips: ['Amorçages importants', 'bouillettes carnées ou fruitées']
      },
      autumn: {
        behavior: 'Alimentation intense avant l\'hiver',
        tips: ['Bouillettes protéinées']
      }
    }
  },
  {
    id: 'tanche',
    name: 'Tanche',
    scientificName: 'Tinca tinca',
    family: 'Cyprinidés',
    characteristics: {
      size: {
        min: 20,
        max: 40,
        unit: 'cm'
      },
      weight: {
        min: 1,
        max: 2,
        unit: 'kg'
      }
    },
    regulation: {
      legalSize: null,
      closedPeriod: null,
      specificRules: 'Pas de taille légale dans la plupart des régions'
    },
    feeding: {
      type: 'Omnivore benthique',
      preferences: ['vers', 'larves', 'petits mollusques', 'végétaux']
    },
    reproduction: {
      period: {
        start: 6, // juin
        end: 7    // juillet
      }
    },
    habitat: {
      type: ['eaux calmes'],
      characteristics: ['riches en végétation'],
      substrate: ['fonds vaseux']
    },
    seasonalTips: {
      winter: {
        behavior: 'Très inactive',
        tips: ['Pêche difficile']
      },
      spring: {
        behavior: 'Commence à s\'alimenter',
        tips: ['Vers de terre']
      },
      summer: {
        behavior: 'Très active dans les herbiers',
        tips: ['maïs', 'pellets', 'vers']
      },
      autumn: {
        behavior: 'Constitution des réserves',
        tips: ['Appâts carnés']
      }
    }
  }
];

const fishingSpots = [
  {
    name: 'Lac de Sainte-Croix',
    description: 'Magnifique lac artificiel aux eaux turquoise, idéal pour la pêche aux carnassiers.',
    location: {
      type: 'Point',
      coordinates: [6.1419, 43.7722]
    },
    type: 'Lac',
    imageUrl: 'https://images.unsplash.com/photo-1515255384510-23e8b6a6ca3c?w=800',
    accessibility: 'Facile',
    facilities: ['Parking', 'Mise à l\'eau', 'Location de matériel'],
    bestSeasons: ['Printemps', 'Été'],
    regulations: 'Carte de pêche obligatoire. No-kill recommandé pour les black-bass.',
    rating: 4.5,
    reviews: [
      {
        user: 'Jean P.',
        comment: 'Superbe spot, eau claire et poissons au rendez-vous !',
        rating: 5
      }
    ]
  },
  {
    name: 'Port de La Rochelle',
    description: 'Spot urbain réputé pour la pêche du bar et de la dorade.',
    location: {
      type: 'Point',
      coordinates: [-1.1508, 46.1591]
    },
    type: 'Port',
    imageUrl: 'https://images.unsplash.com/photo-1520294037019-25bad4b35fac?w=800',
    accessibility: 'Facile',
    facilities: ['Parking', 'Restaurant', 'Toilettes'],
    bestSeasons: ['Été', 'Automne'],
    regulations: 'Pêche interdite dans certaines zones du port. Vérifier la réglementation locale.',
    rating: 4.0,
    reviews: [
      {
        user: 'Marie L.',
        comment: 'Bon spot pour la pêche du bar, mais parfois très fréquenté.',
        rating: 4
      }
    ]
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    // Nettoyer la base de données
    await Promise.all([
      Technique.deleteMany({}),
      Fish.deleteMany({}),
      FishingSpot.deleteMany({})
    ]);

    // Insérer les nouvelles données
    const insertedTechniques = await Technique.insertMany(techniques);
    const insertedFish = await Fish.insertMany(fishes);
    const insertedSpots = await FishingSpot.insertMany(fishingSpots);

    // Mettre à jour les références
    for (const fish of insertedFish) {
      fish.techniques = insertedTechniques.map(t => t._id);
      await fish.save();
    }

    for (const spot of insertedSpots) {
      spot.fishSpecies = insertedFish.map(f => f._id);
      await spot.save();
    }

    console.log('Base de données mise à jour avec succès !');
    process.exit(0);
  } catch (error) {
    console.error('Erreur lors de la mise à jour de la base de données:', error);
    process.exit(1);
  }
};

seedDatabase();
