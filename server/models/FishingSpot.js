const mongoose = require('mongoose');

const fishingSpotSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  type: {
    type: String,
    enum: ['Lac', 'Rivière', 'Étang', 'Mer', 'Port'],
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  accessibility: {
    type: String,
    enum: ['Facile', 'Moyen', 'Difficile'],
    required: true
  },
  facilities: [{
    type: String,
    enum: ['Parking', 'Toilettes', 'Restaurant', 'Location de matériel', 'Ponton', 'Mise à l\'eau']
  }],
  fishSpecies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Fish'
  }],
  bestSeasons: [{
    type: String,
    enum: ['Printemps', 'Été', 'Automne', 'Hiver']
  }],
  regulations: {
    type: String
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  reviews: [{
    user: String,
    comment: String,
    rating: Number,
    date: {
      type: Date,
      default: Date.now
    }
  }]
});

fishingSpotSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('FishingSpot', fishingSpotSchema);
