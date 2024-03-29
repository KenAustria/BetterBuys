import express from 'express';
import User from '../models/User.js';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// SIGNUP
router.post('/signup', async (req, res) => {
	// use User model to create new user
	// encrypt password before user is saved
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET
    ).toString(),
  });

	// use async await to await user to being saved, otherwise catch error
  try {
    const savedUser = await newUser.save();
		// send user to client side and respond successfully added
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// SIGNIN
router.post('/signin', async (req, res) => {
	// find user by username inside db
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

export default router;
