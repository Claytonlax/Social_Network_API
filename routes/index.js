const router = require('express').Router();
const apiRoutes = require('./API');

router.use('/API', apiRoutes);

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;