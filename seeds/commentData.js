const { Comment } = require('../models');



const commentdata =
[
  {
    "commentText":"This Groomer is Very helpful",

    "userId":2,
    "groomerId":1,
  },
  {
    "commentText":"Dogs loves this Groomer.",

    "userId":1,
    "groomerId":1,
  },
  {
    "commentText":"Dog Friendly",

    "userId":3,
    "groomerId":1,
  },
  {
    "commentText":"Dog service really great with this groomer",

    "userId":4,
    "groomerId":10,
  },

];

const seedComment = () => Comment.bulkCreate(commentdata);


module.exports = seedComment;