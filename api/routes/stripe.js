const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_KEY);

// when a payment is made in client side, stripe will return a tokenid
// make a payment request to node server with tokenid
router.post('/payment', (req, res) => {
	stripe.charges.create( // create Stripe object
		{
			source: req.body.tokenId,
			amount: req.body.amount,
			currency: 'usd',
		},
		(stripeError, stripeResponse) => {
			if (stripeError) {
				res.status(500).json(stripeError);
			} else {
				res.status(200).json(stripeResponse);
			}
		}
	);
});

module.exports = router;
