const express = require('express');
const router = express.Router();
const Fish = require('../models/Fish');

// Get all fish with optional filters
router.get('/', async (req, res) => {
  try {
    const { category, search } = req.query;
    let query = {};
    
    if (category) {
      query.category = category;
    }
    
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }
    
    const fish = await Fish.find(query).populate('techniques');
    res.json(fish);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single fish
router.get('/:id', async (req, res) => {
  try {
    const fish = await Fish.findById(req.params.id).populate('techniques');
    if (!fish) {
      return res.status(404).json({ message: 'Poisson non trouvé' });
    }
    res.json(fish);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
