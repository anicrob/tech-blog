const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const userSeeds = require('./users.json');
const postSeeds = require('./posts.json');

const seedTables = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userSeeds, {
    individualHooks: true,
    returning: true,
  });
  await Post.bulkCreate(postSeeds);

  process.exit(0);
};

seedTables();
