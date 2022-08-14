import { Response, Request } from 'express'
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

exports.createPaymentSession = async (req: Request, res: Response) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'PLN',
            product_data: {
              name: 'test',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_URL}/checkout-cancel`,
    })

    res.send({ url: session.url })
  } catch (err) {}
}
