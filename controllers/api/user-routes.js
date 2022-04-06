
const router = require('express').Router();
const { User } = require('../../models');

//get all
router.get('/', (req, res) => {
    User.findAll({ attributes: {exclude: ['password']} }) //find all and exlude password
    .then(dbUserData => res.json(dbUserData)) //return data as json
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
//get by id

//create user
module.exports = router;