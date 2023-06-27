const router = require('express').Router();
const withAuth = require('../../middleware/auth');
const {User, Post, Comment} = require('../../models');

//create a new comment
router.post('/', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        post_id: parseInt(req.body.post_id),
        content: req.body.content,
        user_id: req.session.user_id,
      });
      res.status(200).json(newComment);
    } 
    catch (err) {
      res.status(400).json(err);
    }
  });
  
  module.exports = router;
