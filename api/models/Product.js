const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const ProductSchema = new mongoose.Schema(
	{
		productTitle: { type: String, required: true, unique: true },
		productDescription: { type: String, required: true },
		productImage: { type: String, required: true },
		productCategories: { type: Array },
		productSize: { type: Array },
		productColor: { type: Array },
		productPrice: { type: Number, required: true },
		inStock: { type: Boolean, default: true },
	},
	{ timestamp: true }
);

module.exports = mongoose.model('Product', ProductSchema);
