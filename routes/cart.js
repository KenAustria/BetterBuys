const Cart = require('../models/Cart');
const router = require('express').Router();
const { verifyToken } = require('./verifyToken');

// CREATE CART
router.post('/', verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
