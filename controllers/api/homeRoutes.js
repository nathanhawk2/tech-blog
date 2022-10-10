const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/home', withAuth, async (req, res) => {
  try {
    const userPosts = await User.findAll({
      attributes: { exclude: ['password', 'email'] },
      order: [['name', 'post']],
    })
  } catch (error) {
    res.status(500).json(error);
  }
});



module.exports = router;