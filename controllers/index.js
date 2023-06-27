const router = require('express').Router();

const apiRoutes = require('./api');
const pageRoutes = require('./pages');
//split controllers based on page or api routes
router.use('/', pageRoutes);
router.use('/api', apiRoutes);

module.exports = router;
