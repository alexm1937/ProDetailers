
const router = require('express').Router();
const { User, Review } = require('../models');

router.get('/', (req, res) => {
    res.render('index')
});

router.get('/reviews', (req, res) => {
    Review.findAll
});

module.exports = router;