const router = require('express').Router();
const { createNewUser, createLoginSession, logout } = require('../../controllers/UserController')

//create a new user
router.post('/', createNewUser);

//login the user - this creates a new session
router.post('/login', createLoginSession);

//logout the user - this deletes the session
router.post('/logout', logout);

module.exports = router;
