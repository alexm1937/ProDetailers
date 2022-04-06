
const router = require('express').Router();
const { User, Review } = require('../models');






router.get('/', (req, res) => {
    res.render('index')
});

router.get('/reviews', (req, res) => {
    Review.findAll({
        attributes: [
            'id',
            'title',
            'content', 
            'created_at'
        ]
    }).then(data => {
        const reviews = data;
        res.render('reviews', {
            reviews
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;