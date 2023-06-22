const router = require('express').Router();
const withAuth = require('../../utils/auth');
const {createNewPost, updatePost} = require('../../controllers/PostController')

//create a new post
router.post('/', withAuth, createNewPost);

//update post
router.put('/:id', withAuth, updatePost);

//delete post
router.delete('/:id', withAuth, deletePost);

module.exports = router;
