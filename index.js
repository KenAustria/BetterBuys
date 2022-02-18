const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");

dotenv.config()

mongoose
	.connect(process.env.MONDODB_URL)
	.then(() => console.log("MongoDB connection successful"))
	.catch((error) => console.log(error))

app.use(express.json())
app.use("/api/users", userRoute)

app.listen(process.env.PORT || 9000, () => {
  console.log("Server is running sucessfully");
});
