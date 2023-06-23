const router = require('express').Router();
const withAuth = require('../../middleware/auth');
const {getAllPosts, getOnePost, getMyPosts, logIn, signIn} = require('../../controllers/PageController');

//render homepage and get all posts w/ user data
router.get('/', getAllPosts);

//render post page with single post by id
router.get('/post/:id', getOnePost);

// render profile page and Use withAuth middleware to prevent access to route with user's posts data
router.get('/profile', withAuth, getMyPosts);

//if not logged in, send to login page, or if already logged in, send to '/profile' route
router.get('/login', logIn);

//send to sign in page 
router.get('/signup', signIn)

module.exports = router;
