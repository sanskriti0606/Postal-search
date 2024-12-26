const express = require('express');
const Favorite = require('../models/favorite');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const favorite = await Favorite.create(req.body);
        res.status(201).json(favorite);
    } catch (err) {
        res.status(500).json({ error: 'Error saving to database' });
    }
});

router.get('/', async (req, res) => {
    try {
        const favorites = await Favorite.findAll();
        res.json(favorites);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching favorites' });
    }
});

module.exports = router;
