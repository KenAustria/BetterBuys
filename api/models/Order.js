const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const OrderSchema = new mongoose.Schema(
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
    totalOrderCost: { type: Number, required: true },
    orderAddress: { type: Object, required: true },
    orderStatus: { type: String, default: 'pending' },
  },
  { timestamp: true }
);

module.exports = mongoose.model('Order', OrderSchema);
