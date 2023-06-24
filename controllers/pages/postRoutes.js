const router = require('express').Router();
const withAuth = require('../../middleware/auth');
const {User, Post, Comment} = require('../../models');

//render post page with single post by id
router.get('/post/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ["username"],
          },
        ],
      });
      const post = postData.get({ plain: true });

      res.render("post", {
        post,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/edit/:id', async (req,res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ["username"],
          },
          {
            model: Comment,
          },
        ],
      });
      const post = postData.get({ plain: true });
      console.log(post);
      res.render("edit", {
        post,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  })
