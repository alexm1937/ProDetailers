
const router = require('express').Router();
const { User, Review } = require('../../models');

router.get('/', (req, res) => {
    Review.findAll({
        attributes: ['id', 'title', 'content', 'user_id', 'created_at'],
        //sorts by created_at in descending order starting at newest
        order: [['created_at', 'DESC']],
        //incluse User relation 
        include: { model: User, attributes: ['email']}
    }).then(dbReviewData => res.json(dbReviewData)) // return the response as json
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router;