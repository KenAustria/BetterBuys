const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv")

dotenv.config()

mongoose.connect(process.env.MONDODB_URL)
	.then(() => console.log("MongoDB Connection Successful"))
	.catch((error) => console.log(error))

app.listen( process.env.PORT || 9000, () => {
  console.log('sanity check');
});
