export const fishData = [
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
  },
  {
    id: 'truite-fario',
    name: 'Truite fario',
    scientificName: 'Salmo trutta fario',
    family: 'Salmonidés',
    characteristics: {
      size: {
        min: 20,
        max: 35,
        unit: 'cm'
      },
      weight: {
        min: 200,
        max: 500,
        unit: 'g'
      }
    },
    regulation: {
      legalSize: 23,
      closedPeriod: 'Mi-septembre à mi-mars',
      quota: 6,
      specificRules: 'Taille légale et quota journalier variables selon les départements'
    },
    feeding: {
      type: 'Carnivore',
      preferences: ['insectes aquatiques', 'petites écrevisses', 'petits poissons']
    },
    reproduction: {
      period: {
        start: 10, // octobre
        end: 1     // janvier
      },
      conditions: 'Fraie sur gravier dans les zones de courant'
    },
    habitat: {
      type: ['ruisseaux', 'rivières de première catégorie'],
      characteristics: ['eaux vives', 'eaux claires', 'eaux oxygénées']
    },
    seasonalTips: {
      winter: {
        behavior: 'Période de frai',
        tips: ['Pêche fermée']
      },
      spring: {
        behavior: 'Active à l\'ouverture',
        tips: ['Pêche au toc', 'vers', 'appâts naturels']
      },
      summer: {
        behavior: 'Se tient à l\'ombre',
        tips: ['Pêche à la mouche sèche', 'leurres légers']
      },
      autumn: {
        behavior: 'Préparation au frai',
        tips: ['Mouches noyées', 'leurres']
      }
    }
  },
  {
    id: 'truite-arc-en-ciel',
    name: 'Truite arc-en-ciel',
    scientificName: 'Oncorhynchus mykiss',
    family: 'Salmonidés',
    characteristics: {
      size: {
        min: 25,
        max: 40,
        unit: 'cm'
      },
      weight: {
        min: 200,
        max: 1000,
        unit: 'g'
      }
    },
    regulation: {
      legalSize: 23,
      closedPeriod: 'Similaire à la truite fario',
      specificRules: 'Souvent issue de lâchers, réglementation variable selon les plans d\'eau'
    },
    feeding: {
      type: 'Carnivore',
      preferences: ['insectes', 'appâts artificiels', 'granulés']
    },
    reproduction: {
      period: {
        start: 10, // octobre
        end: 12    // décembre
      },
      conditions: 'En France, principalement issue de lâchers'
    },
    habitat: {
      type: ['plans d\'eau', 'rivières aménagées', 'parcours de pêche'],
      characteristics: ['eaux fraîches']
    },
    seasonalTips: {
      winter: {
        behavior: 'Moins active',
        tips: ['Pêche difficile']
      },
      spring: {
        behavior: 'Très active après les lâchers',
        tips: ['Leurres', 'appâts naturels']
      },
      summer: {
        behavior: 'Active tôt le matin',
        tips: ['Pêche à la mouche', 'leurres légers']
      },
      autumn: {
        behavior: 'Activité modérée',
        tips: ['Appâts naturels', 'leurres']
      }
    }
  },
  {
    id: 'ombre-commun',
    name: 'Ombre commun',
    scientificName: 'Thymallus thymallus',
    family: 'Salmonidés',
    characteristics: {
      size: {
        min: 25,
        max: 40,
        unit: 'cm'
      },
      weight: {
        average: 500,
        unit: 'g'
      }
    },
    regulation: {
      legalSize: 30,
      closedPeriod: 'Variable selon les régions',
      specificRules: 'Périodes spécifiques selon les départements'
    },
    feeding: {
      type: 'Insectivore',
      preferences: ['mouches', 'larves de trichoptères', 'éphémères']
    },
    reproduction: {
      period: {
        start: 3, // mars
        end: 5    // mai
      }
    },
    habitat: {
      type: ['rivières de seconde catégorie supérieure'],
      characteristics: ['eaux claires', 'eaux courantes', 'eaux froides']
    },
    seasonalTips: {
      winter: {
        behavior: 'Période difficile',
        tips: ['Souvent fermé à la pêche']
      },
      spring: {
        behavior: 'Reprise après le frai',
        tips: ['Pêche à la mouche']
      },
      summer: {
        behavior: 'Actif',
        tips: ['Sèche ou nymphe en eaux claires']
      },
      autumn: {
        behavior: 'Ralentissement',
        tips: ['Nymphes lourdes en eau froide']
      }
    }
  },
  {
    id: 'brochet',
    name: 'Brochet',
    scientificName: 'Esox lucius',
    family: 'Esociformes',
    characteristics: {
      size: {
        min: 50,
        max: 100,
        typical: '50 à 80',
        unit: 'cm'
      },
      weight: {
        min: 1,
        max: 10,
        typical: '1 à 4',
        unit: 'kg'
      }
    },
    regulation: {
      legalSize: 60,
      closedPeriod: 'Fin janvier à fin avril/début mai en seconde catégorie',
      quota: 2,
      specificRules: 'Quota journalier de 2 carnassiers/jour'
    },
    feeding: {
      type: 'Carnivore',
      preferences: ['poissons', 'grenouilles', 'petits mammifères']
    },
    reproduction: {
      period: {
        start: 2, // février
        end: 4    // avril
      },
      conditions: 'Dans les zones herbeuses peu profondes'
    },
    habitat: {
      type: ['étangs', 'lacs', 'rivières lentes'],
      characteristics: ['eaux calmes', 'bordures herbeuses']
    },
    seasonalTips: {
      winter: {
        behavior: 'Plus profond',
        tips: ['Pêche lente aux leurres souples']
      },
      spring: {
        behavior: 'Affamé après le frai',
        tips: ['Leurres de prospection', 'spinners', 'jerkbaits']
      },
      summer: {
        behavior: 'Chasse en surface',
        tips: ['Poppers', 'leurres bruyants']
      },
      autumn: {
        behavior: 'Gros brochets actifs',
        tips: ['Leurres volumineux', 'poissons-nageurs']
      }
    }
  },
  {
    id: 'perche',
    name: 'Perche',
    scientificName: 'Perca fluviatilis',
    family: 'Percidés',
    characteristics: {
      size: {
        min: 15,
        max: 30,
        unit: 'cm'
      },
      weight: {
        min: 100,
        max: 500,
        unit: 'g'
      }
    },
    regulation: {
      legalSize: null,
      quota: 2,
      specificRules: 'Quota souvent commun avec sandre et brochet'
    },
    feeding: {
      type: 'Carnivore',
      preferences: ['insectes', 'petits poissons', 'crustacés']
    },
    reproduction: {
      period: {
        start: 4, // avril
        end: 5    // mai
      }
    },
    habitat: {
      type: ['eaux calmes', 'eaux modérées'],
      characteristics: ['structures immergées'],
      preferences: 'Arbres immergés, quais, rochers'
    },
    seasonalTips: {
      winter: {
        behavior: 'Plus profonde',
        tips: ['Petits leurres souples en profondeur']
      },
      spring: {
        behavior: 'Active après la fraie',
        tips: ['Petits poissons-nageurs', 'cuillers']
      },
      summer: {
        behavior: 'Chasses en surface',
        tips: ['Leurres topwater', 'mini-jigs']
      },
      autumn: {
        behavior: 'Bancs en chasse',
        tips: ['Poissons-nageurs plus gros']
      }
    }
  },
  {
    id: 'sandre',
    name: 'Sandre',
    scientificName: 'Sander lucioperca',
    family: 'Percidés',
    characteristics: {
      size: {
        min: 40,
        max: 70,
        unit: 'cm'
      },
      weight: {
        min: 1,
        max: 4,
        unit: 'kg'
      }
    },
    regulation: {
      legalSize: 50,
      quota: 2,
      specificRules: 'Quota de 2 carnassiers/jour'
    },
    feeding: {
      type: 'Carnivore',
      preferences: ['poissons de fond'],
      details: 'Chasse souvent à l\'affût'
    },
    reproduction: {
      period: {
        start: 4, // avril
        end: 5    // mai
      },
      conditions: 'Le mâle garde le nid'
    },
    habitat: {
      type: ['lacs', 'rivières lentes'],
      characteristics: ['eaux calmes', 'fonds encombrés']
    },
    seasonalTips: {
      winter: {
        behavior: 'Dans les fosses',
        tips: ['Pêche en verticale au leurre souple']
      },
      spring: {
        behavior: 'Actif après le frai',
        tips: ['Leurres souples', 'vifs en bordure']
      },
      summer: {
        behavior: 'Actif la nuit',
        tips: ['Pêche nocturne', 'leurres souples', 'poissons-nageurs plongeants']
      },
      autumn: {
        behavior: 'Très actif avant l\'hiver',
        tips: ['Jigs', 'leurres souples', 'vifs']
      }
    }
  },
  {
    id: 'silure',
    name: 'Silure glane',
    scientificName: 'Silurus glanis',
    family: 'Siluriformes',
    characteristics: {
      size: {
        min: 100,
        max: 200,
        unit: 'cm'
      },
      weight: {
        min: 10,
        max: 50,
        record: '>100',
        unit: 'kg'
      }
    },
    regulation: {
      legalSize: null,
      specificRules: 'Espèce considérée comme invasive, parfois obligation de ne pas le remettre à l\'eau. Vérifier la réglementation locale.'
    },
    feeding: {
      type: 'Carnivore opportuniste',
      preferences: ['poissons', 'écrevisses', 'déchets', 'oiseaux aquatiques']
    },
    reproduction: {
      period: {
        start: 5, // mai
        end: 6    // juin
      }
    },
    habitat: {
      type: ['fleuves', 'grandes rivières', 'grands lacs'],
      characteristics: ['fosses profondes']
    },
    seasonalTips: {
      winter: {
        behavior: 'Moins actif',
        tips: ['Pêche verticale en profondeur']
      },
      spring: {
        behavior: 'Actif',
        tips: ['Pêche au vif', 'leurres de fond']
      },
      summer: {
        behavior: 'Très actif',
        tips: ['Pêche au clonk', 'leurres bruyants', 'vifs']
      },
      autumn: {
        behavior: 'Se gave avant l\'hiver',
        tips: ['Gros vifs', 'gros leurres']
      }
    }
  },
  {
    id: 'poisson-chat',
    name: 'Poisson-chat',
    scientificName: 'Ictalurus melas',
    family: 'Siluriformes',
    characteristics: {
      size: {
        min: 15,
        max: 30,
        unit: 'cm'
      }
    },
    regulation: {
      legalSize: null,
      specificRules: 'Espèce nuisible/invasive, obligation de ne pas remettre à l\'eau dans de nombreux endroits'
    },
    feeding: {
      type: 'Omnivore',
      preferences: ['vers', 'débris', 'petits invertébrés']
    },
    reproduction: {
      period: {
        start: 6, // juin
        end: 8    // août
      }
    },
    habitat: {
      type: ['eaux stagnantes', 'étangs', 'canaux'],
      characteristics: ['eaux vaseuses']
    },
    seasonalTips: {
      winter: {
        behavior: 'Moins actif',
        tips: ['Pêche aux vers possible']
      },
      spring: {
        behavior: 'Actif',
        tips: ['Vers de terre', 'appâts naturels']
      },
      summer: {
        behavior: 'Très actif',
        tips: ['Facile à pêcher aux vers']
      },
      autumn: {
        behavior: 'Actif',
        tips: ['Vers de terre', 'appâts naturels']
      }
    }
  },
  {
    id: 'black-bass',
    name: 'Black-bass',
    scientificName: 'Micropterus salmoides',
    family: 'Centrarchidés',
    characteristics: {
      size: {
        min: 20,
        max: 40,
        unit: 'cm'
      },
      weight: {
        min: 0.5,
        max: 2,
        unit: 'kg'
      }
    },
    regulation: {
      legalSize: 30,
      quota: 1,
      specificRules: 'Quotas restreints (souvent 1/jour), périodes de fermeture variables'
    },
    feeding: {
      type: 'Carnivore',
      preferences: ['poissons', 'écrevisses', 'grenouilles', 'insectes']
    },
    reproduction: {
      period: {
        start: 5, // mai
        end: 6    // juin
      }
    },
    habitat: {
      type: ['plans d\'eau calmes'],
      characteristics: ['eaux chaudes', 'herbiers', 'souches'],
      preferences: 'Zones avec abris'
    },
    seasonalTips: {
      winter: {
        behavior: 'Léthargique',
        tips: ['Leurres souples lents près du fond']
      },
      spring: {
        behavior: 'Sur les nids',
        tips: ['Pêches légères', 'leurres souples']
      },
      summer: {
        behavior: 'Actif',
        tips: ['Topwater', 'poppers', 'crankbaits', 'heures chaudes']
      },
      autumn: {
        behavior: 'Se nourrit avant l\'hiver',
        tips: ['Jerkbaits', 'spinnerbaits']
      }
    }
  },
  {
    id: 'perche-soleil',
    name: 'Perche soleil',
    scientificName: 'Lepomis gibbosus',
    family: 'Centrarchidés',
    characteristics: {
      size: {
        min: 10,
        max: 15,
        unit: 'cm'
      }
    },
    regulation: {
      legalSize: null,
      specificRules: 'Espèce invasive, ne pas remettre à l\'eau'
    },
    feeding: {
      type: 'Omnivore',
      preferences: ['vers', 'insectes', 'petits crustacés']
    },
    reproduction: {
      period: {
        start: 5, // mai
        end: 8    // août
      }
    },
    habitat: {
      type: ['eaux calmes', 'étangs', 'mares']
    },
    seasonalTips: {
      winter: {
        behavior: 'Moins active',
        tips: ['Pêche possible aux petits vers']
      },
      spring: {
        behavior: 'Active',
        tips: ['Facile à prendre aux vers']
      },
      summer: {
        behavior: 'Très active',
        tips: ['Mordeuse sur tous types d\'appâts']
      },
      autumn: {
        behavior: 'Active',
        tips: ['Pêche aux vers efficace']
      }
    }
  },
  {
    id: 'anguille',
    name: 'Anguille européenne',
    scientificName: 'Anguilla anguilla',
    family: 'Anguillidés',
    characteristics: {
      size: {
        min: 40,
        max: 80,
        unit: 'cm'
      },
      weight: {
        min: 0.2,
        max: 1,
        unit: 'kg'
      }
    },
    regulation: {
      legalSize: null,
      specificRules: 'Fortement réglementée, pêche strictement encadrée, quotas et périodes spécifiques, voire interdiction'
    },
    feeding: {
      type: 'Carnivore nocturne',
      preferences: ['vers', 'invertébrés', 'petits poissons']
    },
    reproduction: {
      period: null,
      conditions: 'Se reproduit en mer des Sargasses, cycle complexe, pas de frai en eau douce'
    },
    habitat: {
      type: ['zones calmes'],
      characteristics: ['fonds vaseux'],
      preferences: 'Caches sous les racines'
    },
    seasonalTips: {
      winter: {
        behavior: 'Peu ou pas active',
        tips: ['Pêche très difficile']
      },
      spring: {
        behavior: 'Reprise d\'activité',
        tips: ['Pêche nocturne', 'vers de terre']
      },
      summer: {
        behavior: 'Active la nuit',
        tips: ['Pêche nocturne', 'vers de terre']
      },
      autumn: {
        behavior: 'Ralentissement',
        tips: ['Pêche nocturne possible']
      }
    }
  },
  {
    id: 'lotte',
    name: 'Lotte de rivière',
    scientificName: 'Lota lota',
    family: 'Gadidés',
    characteristics: {
      size: {
        min: 30,
        max: 60,
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
      specificRules: 'Réglementation variable, peu fréquente, vérifier localement'
    },
    feeding: {
      type: 'Carnivore',
      preferences: ['poissons', 'larves', 'écrevisses']
    },
    reproduction: {
      period: {
        start: 12, // décembre
        end: 2     // février
      }
    },
    habitat: {
      type: ['eaux froides', 'eaux claires'],
      characteristics: ['fonds graveleux']
    },
    seasonalTips: {
      winter: {
        behavior: 'Très active',
        tips: ['Pêche au vif', 'poisson mort au fond']
      },
      spring: {
        behavior: 'Moins active',
        tips: ['Pêche difficile']
      },
      summer: {
        behavior: 'Peu active',
        tips: ['Pêche très difficile']
      },
      autumn: {
        behavior: 'Reprise d\'activité',
        tips: ['Pêche au vif possible']
      }
    }
  },
  {
    id: 'epinoche',
    name: 'Épinoche',
    scientificName: 'Gasterosteus aculeatus',
    family: 'Gasterostéidés',
    characteristics: {
      size: {
        min: 5,
        max: 10,
        unit: 'cm'
      }
    },
    regulation: {
      legalSize: null,
      specificRules: 'Aucune réglementation spécifique'
    },
    feeding: {
      type: 'Omnivore',
      preferences: ['insectes', 'larves', 'petits crustacés']
    },
    reproduction: {
      period: {
        start: 5, // mai
        end: 8    // août
      }
    },
    habitat: {
      type: ['eaux calmes', 'petits ruisseaux'],
      characteristics: ['végétation dense']
    },
    seasonalTips: {
      winter: {
        behavior: 'Peu active',
        tips: ['Non pêchée sportivement']
      },
      spring: {
        behavior: 'Plus active',
        tips: ['Non ciblée par la pêche']
      },
      summer: {
        behavior: 'Très active',
        tips: ['Observation possible']
      },
      autumn: {
        behavior: 'Ralentissement',
        tips: ['Non pêchée']
      }
    }
  },
  {
    id: 'chabot',
    name: 'Chabot',
    scientificName: 'Cottus gobio',
    family: 'Cottidés',
    characteristics: {
      size: {
        min: 5,
        max: 12,
        unit: 'cm'
      }
    },
    regulation: {
      legalSize: null,
      specificRules: 'Souvent protégé, pêche généralement interdite'
    },
    feeding: {
      type: 'Carnivore',
      preferences: ['invertébrés benthiques', 'petits insectes']
    },
    reproduction: {
      period: {
        start: 3, // mars
        end: 5    // mai
      }
    },
    habitat: {
      type: ['eaux vives'],
      characteristics: ['fonds pierreux']
    },
    seasonalTips: {
      winter: {
        behavior: 'Peu actif',
        tips: ['Espèce protégée, ne pas pêcher']
      },
      spring: {
        behavior: 'Période de reproduction',
        tips: ['Espèce protégée, ne pas pêcher']
      },
      summer: {
        behavior: 'Actif',
        tips: ['Espèce protégée, ne pas pêcher']
      },
      autumn: {
        behavior: 'Ralentissement',
        tips: ['Espèce protégée, ne pas pêcher']
      }
    }
  },
  {
    id: 'alose',
    name: 'Alose',
    scientificName: 'Alosa sp.',
    family: 'Clupéidés',
    characteristics: {
      size: {
        min: 30,
        max: 60,
        unit: 'cm'
      }
    },
    regulation: {
      legalSize: null,
      specificRules: 'Réglementations strictes, périodes courtes, vérifier localement'
    },
    feeding: {
      type: 'Planctonophage',
      preferences: ['plancton', 'petits poissons']
    },
    reproduction: {
      period: {
        start: 4, // avril
        end: 6    // juin
      },
      conditions: 'Remonte les fleuves pour frayer'
    },
    habitat: {
      type: ['fleuves grands gabarits'],
      characteristics: ['eaux courantes'],
      preferences: 'Migrateur'
    },
    seasonalTips: {
      winter: {
        behavior: 'En mer',
        tips: ['Pas de pêche en eau douce']
      },
      spring: {
        behavior: 'Remontée des fleuves',
        tips: ['Leurres légers', 'cuillers brillantes']
      },
      summer: {
        behavior: 'Reproduction',
        tips: ['Pêche possible selon réglementation']
      },
      autumn: {
        behavior: 'Retour en mer',
        tips: ['Pas de pêche en eau douce']
      }
    }
  }
];
