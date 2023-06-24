const router = require('express').Router();
const withAuth = require('../../middleware/auth');
const {User, Post, Comment} = require('../../models');

//if not logged in, send to login page, or if already logged in, send to '/profile' route
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
    }

    res.render('login');
});

//send to sign in page 
router.get('/signup', (req,res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
        }
    res.render('signup');
});