
const router = require('express').Router();
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

//catch any other requests
router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;