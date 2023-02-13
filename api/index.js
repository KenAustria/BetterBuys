const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const stripeRoute = require('./routes/stripe');
const cors = require('cors');
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
	res.send('Hello World!');
});  
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

