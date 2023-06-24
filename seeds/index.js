const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const userSeeds = require('./users.json');
const postSeeds = require('./posts.json');

const seedUserTable = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userSeeds, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

const seedPostTable = async () => {
    await sequelize.sync({ force: true });
  
    await Post.bulkCreate(postSeeds);
  
    process.exit(0);
  };

seedUserTable();
seedPostTable();
