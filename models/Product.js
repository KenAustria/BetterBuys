const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
	{
		productTitle: { type: String, required: true, unique: true },
		productDescription: { type: String, required: true },
		productImage: { type: String, required: true },
		productCategories: { type: Array },
		productSize: { type: String },
		productColor: { type: String },
		productPrice: { type: Number, required: true }
	},
	{ timestamp: true }
)

module.exports =  mongoose.model("Product", ProductSchema);