// set routes for post and user

const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');

router.use('/users', userRoutes);
router.use('/post', postRoutes);


module.exports = router;
