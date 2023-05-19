const { User } = require('../models');

const userData = 
[
{
    "username": "Avani",
    "email":"hello@gmail.com",
    "password":"avanijadeja",
},
{
    "username": "Parixit",
    "email":"h1@gmail.com",
    "password":"parixitparmar",
},
{
    "username": "Kayra",
    "email":"j@gmail.com",
    "password":"kayraparmar",
}
];

const seedUser = () => User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUser;

