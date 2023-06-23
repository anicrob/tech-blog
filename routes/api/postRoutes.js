const router = require('express').Router();
const withAuth = require('../../middleware/auth');
const {createNewPost, updatePost, deletePost} = require('../../controllers/PostController')

//create a new post
router.post('/', withAuth, createNewPost);

//update post
router.put('/:id', withAuth, updatePost);

//delete post
router.delete('/:id', withAuth, deletePost);

module.exports = router;
