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
      res.render("homepage",
      {
        posts,
        logged_in: req.session.logged_in,
      }
      );
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/create', withAuth, async (req, res) => {
    res.render("create", {
      logged_in: req.session.logged_in,
    });
  })

  //render post page with single post by id
router.get('/post/:id', withAuth, async (req, res) => {
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
});

// render dashboard page and Use withAuth middleware to prevent access to route with user's posts data
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });
    console.log(user)
    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

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

module.exports = router;
