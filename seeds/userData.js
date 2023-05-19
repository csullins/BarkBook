const { User } = require('../models');

const userdata =
[
  {
    "username": "Avani",
    "email":"hello@gmail.com",
    "password": "avanijadeja"
  },
  {
    "username": "Parixit",
    "email":"parixit@gmail.com",
    "password": "parixitparmar"
  },
  {
    "username": "Kayra",
    "email":"kayra@gmail.com",
    "password": "kayraparmar"
  },
  {
    "username": "Ashok",
    "email":"ashok@gmail.com",
    "password": "ashokparmar"
  },
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;
