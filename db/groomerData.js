const { Groomer } = require('../models');

const groomerdata = 
[
    {
        "profilePicture": "profile1.jpg",
        "adress": "Enjoy each day in ;life",
        "bio":"hu",
        "userId": 1,
    },
    {
        "profilePicture": "profile2.jpg",
        "adress": "Enjoy each day in ;life",
        "bio":"hu",
        "userId": 2,
    },
    {
        "profilePicture": "profile3.jpg",
        "adress": "Enjoy each day in ;life",
        "bio":"hu",
        "userId": 3,
    }
];

const seedGroomer = () => Groomer.bulkCreate(groomerdata);

module.exports = seedGroomer;