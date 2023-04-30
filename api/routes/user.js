import router from 'express';
import CryptoJS from 'crypto-js';
import User from '../models/User';
import {
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} from './verifyToken';

// UPDATE USER
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
	if (req.body.password) {
		req.body.password = CryptoJS.AES.encrypt(
			req.body.password,
			process.env.PASSWORD_SECRET
		).toString();
	}

	try {
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id, // find user by id
			{
				$set: req.body, // set req.body as updated user info
			},
			{ new: true } // return updated user
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
		res.status(200).json('User has been deleted!');
	} catch (error) {
		res.status(500).json(error);
	}
});

// GET USER
router.get('/find/:id', verifyTokenAndAdmin, async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		const { password, ...others } = user._doc; // prevent all user info from being sent
		res.status(200).json(others);
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
			{ $match: { createdAt: { $gte: lastYear } } }, // condition to match for createdAt date greater than last year
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
	} catch (error) {
		res.status(500).json(error);
	}
});

// GET USERS
router.get('/', verifyTokenAndAdmin, async (req, res) => {
	const query = req.query.new;
	try {
		const users = query
			? await User.find().sort({ _id: -1 }).limit(10) // sort users desc
			: await User.find();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json(error);
	}
});

export default router;
