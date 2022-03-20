const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

// SIGNUP
router.post('/signup', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// SIGNIN
router.post('/signin', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    // if user does not exist
    !user && res.status(401).json('Wrong credentials!');

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    // to verify if cart and order belongs to user
    const accessToken = jwt.sign(
      {
        id: user.id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: '5d' }
    );

    // if password does not match
    OriginalPassword !== req.body.password &&
      res.status(401).json('Wrong credentials!');

    // destructure to not reveal password
    // mondodb stores password in _doc
    const { password, ...others } = user._doc;

    // others = reveal all of user's info except password
    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
