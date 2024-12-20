const express = require('express');
const router = express.Router();
const Technique = require('../models/Technique');

// Get all techniques with optional search
router.get('/', async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};
    
    if (search) {
      query = {
        $or: [
          { $text: { $search: search } },
          { name: { $regex: search, $options: 'i' } },
          { tags: { $regex: search, $options: 'i' } }
        ]
      };
    }
    
    const techniques = await Technique.find(query);
    res.json(techniques);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get suggestions for search autocomplete
router.get('/suggestions', async (req, res) => {
  try {
    const { q } = req.query;
    const suggestions = await Technique.find({
      $or: [
        { name: { $regex: q, $options: 'i' } },
        { tags: { $regex: q, $options: 'i' } }
      ]
    })
    .select('name tags')
    .limit(5);
    
    const results = suggestions.reduce((acc, curr) => {
      acc.push(curr.name, ...curr.tags);
      return acc;
    }, []);
    
    res.json([...new Set(results)]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single technique
router.get('/:id', async (req, res) => {
  try {
    const technique = await Technique.findById(req.params.id);
    if (!technique) {
      return res.status(404).json({ message: 'Technique not found' });
    }
    res.json(technique);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
