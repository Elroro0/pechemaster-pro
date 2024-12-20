const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  specifications: [{
    type: String
  }],
  estimatedPrice: {
    type: Number,
    required: true
  }
});

const seasonalAdviceSchema = new mongoose.Schema({
  season: {
    type: String,
    enum: ['Printemps', 'Été', 'Automne', 'Hiver'],
    required: true
  },
  advice: {
    type: String,
    required: true
  }
});

const techniqueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['Facile', 'Intermédiaire', 'Avancé'],
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  equipment: [equipmentSchema],
  seasonalAdvice: [seasonalAdviceSchema],
  tags: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Index pour la recherche
techniqueSchema.index({
  name: 'text',
  description: 'text',
  tags: 'text'
});

module.exports = mongoose.model('Technique', techniqueSchema);
