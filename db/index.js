const sequelize = require('../config/config');
const seedUser = require('./userData');
const seedGroomer = require('./groomerData');

const seedAll = async () => {
    await sequelize.sync({ force: true});
    await seedUser();
    await seedGroomer();

    process.exit(0);
};

seedAll();