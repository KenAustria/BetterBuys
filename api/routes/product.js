import router from 'express';
import Product from '../models/Product';
import { verifyTokenAndAdmin } from './verifyToken';

const router = router.Router();

// CREATE PRODUCT
router.post('/', verifyTokenAndAdmin, async (req, res) => {
	const newProduct = new Product(req.body);

	// use async await to await product to being saved, otherwise catch error
	try {
		const savedProduct = await newProduct.save();
		// send product to client side and respond successfully added
		res.status(200).json(savedProduct);
	} catch (error) {
		res.status(500).json(error);
	}
});

// UPDATE PRODUCT
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
	try {
		const updatedProduct = await Product.findByIdAndUpdate(
			req.params.id, // find product by id
			{
				$set: req.body, // set req.body as updated product info
			},
			{ new: true } // return updated product
		);
		res.status(200).json(updatedProduct);
	} catch (error) {
		res.status(500).json(error);
	}
});

// DELETE PRODUCT
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
	try {
		await Product.findByIdAndDelete(req.params.id);
		res.status(200).json('Product has been deleted!');
	} catch (error) {
		res.status(500).json(error);
	}
});

// GET PRODUCT
router.get('/find/:id', async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json(error);
	}
});

// GET PRODUCTS
router.get('/', async (req, res) => {
	const queryNew = req.query.new;
	const queryCategory = req.query.category;
	try {
		let products;

		if (queryNew) {
			products = await Product.find().sort({ createdAt: -1 }).limit(1); // sort products desc
		} else if (queryCategory) { // if queryCategory is inside query, fetch query's products
			products = await Product.find({
				categories: {
					$in: [queryCategory],
				},
			});
		} else { // if no query, fetch all products
			products = await Product.find();
		}

		res.status(200).json(products);
	} catch (error) {
		res.status(500).json(error);
	}
});

export default router;
