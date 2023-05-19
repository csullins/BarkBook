const sequelize = require('../config/config');
const seedUser = require('./userData');
const seedGroomer = require('./groomerData');
const seedComment = require('./commentData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedGroomer();

  await seedComment();


  process.exit(0);
};

seedAll();