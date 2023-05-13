const router = require('express').Router();

const homeRoutes = require('../controllers/home-routes');
const dashboardRoutes = require('../controllers/dashboard-routes');
const postRoutes = require('../controllers/post-routes');
const commentRoutes = require('../controllers/comment-routes');
const userRoutes = require('../controllers/user-routes');
const notFoundRoutes = require('../controllers/notfound-routes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);
router.use('*',notFoundRoutes)

module.exports = router;