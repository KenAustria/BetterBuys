import mongoose from 'mongoose';

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

export default mongoose.model('Order', OrderSchema);
