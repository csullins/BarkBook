const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

// CREATE POST
router.post('/review', withAuth, async (req, res) => {
  const body = req.body;
    console.log(body);
  try {
    const newPost = await Comment.create({ ...body, userId: req.session.userId });
    console.log("Here is the new post: ",  newPost);
    res.json(newPost);
     } catch (err) {
       console.log('IT FAILED!', err);
    res.status(500).json(err);
  }
});

module.exports = router;