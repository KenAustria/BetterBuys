const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    cartProducts: [
      {
        productId: {
          type: String,
        },
        productQuantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamp: true }
);

module.exports = mongoose.model('Cart', CartSchema);
