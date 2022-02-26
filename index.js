const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
dotenv.config();

mongoose
  .connect(process.env.MONDODB_URL)
  .then(() => console.log('MongoDB connection successful'))
  .catch(error => console.log(error));

app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);

app.listen(process.env.PORT || 9000, () => {
  console.log('Server is running sucessfully');
});
