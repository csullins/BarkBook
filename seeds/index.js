
const sequelize = require('../config/config');
const seedGroomer = require('./groomerData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedGroomer();
  process.exit(0);
};

seedAll();