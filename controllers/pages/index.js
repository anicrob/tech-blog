const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
//use homeRoutes for any / requests
router.use('/', homeRoutes);


module.exports = router;