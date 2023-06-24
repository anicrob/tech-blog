const router = require('express').Router();
const withAuth = require('../../middleware/auth');
const {User, Post, Comment} = require('../../models');

//render homepage and get all posts w/ user data
router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const PostData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ["username"],
          },
        ],
      });
      // Serialize data so the template can read it
      const posts = PostData.map((post) => post.get({ plain: true }));
      
      // Pass serialized data and session flag into template
      res.render("homepage"
      , {
        posts,
        logged_in: req.session.logged_in,
      }
      );
      // res.json("Hello World");
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
