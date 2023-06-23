const router = require('express').Router();

const withAuth = require('../middleware/auth')
const apiRoutes = require('./api');
const pageRoutes = require('./pages');

router.use('/', pageRoutes);
router.use('/api', apiRoutes);

module.exports = router;
