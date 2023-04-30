import express from 'express';
import dotenv from 'dotenv';
import stripePackage from 'stripe';

const router = express.Router();
dotenv.config();
const stripe = stripePackage(process.env.STRIPE_KEY);

// when a payment is made in client side, stripe will return a tokenid
// then a payment request is made to node server with tokenid to verify payment
router.post('/payment', (req, res) => {
	stripe.charges.create( // create Stripe object
		{
			source: req.body.tokenId,
			amount: req.body.amount,
			currency: 'usd',
		},
		(stripeError, stripeResponse) => {
			if (stripeError) {
				console.log(stripeError)
				res.status(500).json(stripeError);
			} else {
				res.status(200).json(stripeResponse);
			}
		}
	);
});

export default router;
