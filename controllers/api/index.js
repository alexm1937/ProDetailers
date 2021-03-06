
const router = require('express').Router();

const reviewRoutes = require('./review-routes');
const userRoutes = require('./user-routes');

router.use('/reviews/', reviewRoutes);
router.use('/users/', userRoutes);

module.exports = router;