const router = require('express').Router();
const userRoutes = require('./userRoutes');
const homeRoutes = require('./homeRoutes');
const postRoutes = require('./postRoutes');

router.use('/users', userRoutes);
router.use('/home', homeRoutes);
router.use('/post', this.postRoutes)

module.exports = router;
