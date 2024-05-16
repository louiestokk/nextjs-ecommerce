

import Stripe from "stripe";

const stripe = new Stripe('sk_test_51PEbGPJvlojyjdfOU5dehYvc6CaNWMfXGZwQgJ66uVfXkuqJgXaLzv5DimmOQ651NqHLEZlYoCBoBjQUXs5wTPKG00aANUQe4T');

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

export async function GET(req,res) {
  const {items} = req.body;
try {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "sek",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
} catch (error) {
  return new Response(error)
}
}