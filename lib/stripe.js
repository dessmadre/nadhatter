import Stripe from 'stripe';

// Init Stripe SDK

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default stripe;
