const router = require("express").Router();

router.get("/userTest", (req, res) => {
	res.send("user test is successful");
});

router.post("/userPostTest", (req, res) => {
	const username = req.body.username;
	res.send("your name is:" + username)
});

module.exports = router;