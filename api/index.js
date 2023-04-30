import express from 'express';
const app = express();
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';
import userRoute from './routes/user.js';
import productRoute from './routes/product.js';
import cartRoute from './routes/cart.js';
import orderRoute from './routes/order.js';
import stripeRoute from './routes/stripe.js';
import cors from 'cors';
dotenv.config();

mongoose
	.connect(process.env.MONDODB_URL)
	.then(() => console.log('MongoDB connection successful'))
	.catch(error => console.log(error));

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', stripeRoute);

app.get('/', (req, res) => {
	res.send('Hello World from api.index.js!');	
});  
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
