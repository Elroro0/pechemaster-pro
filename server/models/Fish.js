const mongoose = require('mongoose');

const fishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  scientificName: String,
  category: {
    type: String,
    enum: ['Eau douce', 'Eau de mer'],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  habitat: {
    type: String,
    required: true
  },
  averageSize: {
    min: Number,
    max: Number,
    unit: {
      type: String,
      default: 'cm'
    }
  },
  averageWeight: {
    min: Number,
    max: Number,
    unit: {
      type: String,
      default: 'kg'
    }
  },
  season: [{
    name: {
      type: String,
      enum: ['Printemps', 'Été', 'Automne', 'Hiver']
    },
    activity: {
      type: String,
      enum: ['Forte', 'Moyenne', 'Faible']
    }
  }],
  techniques: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Technique'
  }],
  regulations: {
    minimumSize: Number,
    closedSeason: {
      start: String,
      end: String
    },
    quota: Number
  }
});

module.exports = mongoose.model('Fish', fishSchema);
