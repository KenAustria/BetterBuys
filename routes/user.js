const User = require('../models/User');
const router = require('express').Router();
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('./verifyToken');

// UPDATE USER
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET
    ).toString();
  }

  // set updated user info
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

// DELETE USER
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('User has been deleted...');
  } catch {
    res.status(500).json(err);
  }
});

// GET USER
router.get('/find/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json({ others });
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET USER STATS
router.get('/stats', verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } }, // condition to match for createdAt date
      {
        $project: {
          month: { $month: '$createdAt' }, // take month number from createdAt date
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 }, // sum every registered user
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET USERS
router.get('/', verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(10)
      : await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
