const router = require('express').Router();
const withAuth = require('../utils/auth');
const {getAllPosts, getOnePost, getMyPosts, logIn} = require('../../controllers/PostController');
const { createNewUser } = require('../../controllers/UserController');

//get all posts w/ user data
router.get('/', getAllPosts);

//get single post by id
router.get('/post/:id', getOnePost);

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, getMyPosts);

//login or if already logged in, send to '/profile' route
router.get('/login', logIn);

//sign up
router.get('/signup', createNewUser)

module.exports = router;
