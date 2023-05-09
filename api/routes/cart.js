import express from 'express';
import Cart from '../models/Cart.js';
import { 
  verifyToken, 
  verifyTokenAndAuthorization, 
  verifyTokenAndAdmin 
} from './verifyToken.js';

const router = express.Router();

// CREATE CART
router.post('/', verifyToken, async (req, res) => {
	const newCart = new Cart(req.body);

	// use async await to await cart to being saved, otherwise catch error
	try {
		const savedCart = await newCart.save();
		// send cart to client side and respond successfully added
		res.status(200).json(savedCart);
	} catch (error) {
		res.status(500).json(error);
	}
});

// UPDATE CART
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
	try {
		const updatedCart = await Cart.findByIdAndUpdate(
			req.params.id, // find cart by id
			{
				$set: req.body, // set req.body as updated cart info
			},
			{ new: true } // return cart product
		);
		res.status(200).json(updatedCart);
	} catch (error) {
		res.status(500).json(error);
	}
});

// DELETE CART
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
	try {
		await Cart.findByIdAndDelete(req.params.id);
		res.status(200).json('Cart has been deleted!');
	} catch (error) {
		res.status(500).json(error);
	}
});

// GET USER CART
router.get('/find/:userId', verifyTokenAndAuthorization, async (req, res) => {
	try {
		const cart = await Cart.findOne({ userId: req.params.userId }); // find user's cart
		res.status(200).json(cart);
	} catch (error) {
		res.status(500).json(error);
	}
});

// GET ALL CARTS
router.get('/', verifyTokenAndAdmin, async (req, res) => {
	try {
		const carts = await Cart.find();
		res.status(200).json(carts);
	} catch (error) {
		res.status(500).json(error);
	}
});

// GET MONTHLY INCOME
router.get('/income', verifyTokenAndAdmin, async (req, res) => {
	const date = new Date();
	const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
	const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

	try {
		const income = await Order.aggregate([
			{ $match: { createdAt: { $gte: previousMonth } } }, // sum is last 2 month's income
			{
				$project: {
					month: { $month: '$createdAt' },
					sales: '$month', // sum cart object's amount per amount
				},
			},
			{
				$group: {
					_id: '$month',
					total: { $sum: '$sales' }, // sum of sales 
				},
			},
		]);
		res.status(200).json(income);
	} catch (error) {
		res.status(500).json(error);
	}
});

export default router;
