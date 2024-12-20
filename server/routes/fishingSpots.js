const express = require('express');
const router = express.Router();
const FishingSpot = require('../models/FishingSpot');

// Get all fishing spots with optional filters
router.get('/', async (req, res) => {
  try {
    const { type, search, lat, lon, radius } = req.query;
    let query = {};
    
    if (type) {
      query.type = type;
    }
    
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }
    
    // If coordinates and radius are provided, find spots within radius
    if (lat && lon && radius) {
      query.location = {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(lon), parseFloat(lat)]
          },
          $maxDistance: parseInt(radius) * 1000 // Convert km to meters
        }
      };
    }
    
    const spots = await FishingSpot.find(query).populate('fishSpecies');
    res.json(spots);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single fishing spot
router.get('/:id', async (req, res) => {
  try {
    const spot = await FishingSpot.findById(req.params.id).populate('fishSpecies');
    if (!spot) {
      return res.status(404).json({ message: 'Spot non trouvé' });
    }
    res.json(spot);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add review to a fishing spot
router.post('/:id/reviews', async (req, res) => {
  try {
    const { user, comment, rating } = req.body;
    const spot = await FishingSpot.findById(req.params.id);
    
    if (!spot) {
      return res.status(404).json({ message: 'Spot non trouvé' });
    }
    
    spot.reviews.push({ user, comment, rating });
    spot.rating = spot.reviews.reduce((acc, rev) => acc + rev.rating, 0) / spot.reviews.length;
    
    await spot.save();
    res.json(spot);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
