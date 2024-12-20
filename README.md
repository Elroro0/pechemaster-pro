# PêcheMaster Pro

Application web de guide virtuel de techniques de pêche pour les pêcheurs débutants et intermédiaires.

## Fonctionnalités

- 🎣 Moteur de recherche avancé pour les techniques de pêche
- 📚 Catalogue détaillé des techniques
- 📋 Fiches techniques approfondies
- 🌤 Module météo intégré
- 💡 Conseils personnalisés

## Installation

### Prérequis

- Node.js (v14 ou supérieur)
- MongoDB
- NPM ou Yarn

### Installation du Front-end

```bash
cd client
npm install
npm start
```

### Installation du Back-end

```bash
cd server
npm install
npm run dev
```

## Configuration

1. Créez un fichier `.env` dans le dossier `server` avec les variables suivantes :
```
MONGODB_URI=votre_uri_mongodb
PORT=5000
OPENWEATHER_API_KEY=votre_clé_api
```

2. Assurez-vous que MongoDB est en cours d'exécution sur votre machine

## Technologies utilisées

- React
- Tailwind CSS
- Node.js/Express
- MongoDB
- OpenWeatherMap API

## Licence

MIT
