const Order = require('../models/Order');
const router = require('express').Router();
const {
	verifyToken,
	verifyTokenAndAdmin,
	verifyTokenAndAuthorization,
} = require('./verifyToken');

// CREATE ORDER
router.post('/', verifyToken, async (req, res) => {
	const newOrder = new Order(req.body);

	// use async await to await order to being saved, otherwise catch error
	try {
		const savedOrder = await newOrder.save();
		// send order to client side and respond successfully added
		res.status(200).json(savedOrder);
	} catch (error) {
		res.status(500).json(error);
	}
});

// UPDATE ORDER
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
	try {
		const updatedOrder = await Order.findByIdAndUpdate(
			req.params.id, // find order by id
			{
				$set: req.body, // set req.body as updated order info
			},
			{ new: true } // return order product
		);
		res.status(200).json(updatedOrder);
	} catch (error) {
		res.status(500).json(error);
	}
});

// DELETE ORDER
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
	try {
		await Order.findByIdAndDelete(req.params.id);
		res.status(200).json('Order has been deleted!');
	} catch (error) {
		res.status(500).json(error);
	}
});

// GET USER ORDERS
router.get('/find/:userId', verifyTokenAndAuthorization, async (req, res) => {
	try {
		const orders = await Order.find({ userId: req.params.userId }); // find user's order
		res.status(200).json(orders);
	} catch (error) {
		res.status(500).json(error);
	}
});

// GET ALL ORDERS
router.get('/', verifyTokenAndAdmin, async (req, res) => {
	try {
		const orders = await Order.find();
		res.status(200).json(orders);
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
			{ $match: { createdAt: { $gte: previousMonth } } }, // condition to match for createdAt date greater than previous month
			{
				$project: {
					month: { $month: '$createdAt' },
					sales: '$amount', // sum amount of all months
				},
			},
			{
				$group: {
					_id: '$month',
					total: { $sum: '$sales' },
				},
			},
		]);
		res.status(200).json(income);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
