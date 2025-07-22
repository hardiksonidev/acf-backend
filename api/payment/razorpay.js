// api/payment/razorpay.js
const Razorpay = require("razorpay");

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send({ error: "Only POST allowed" });
  }

  const { amount, planName } = req.body;

  try {
    const order = await instance.orders.create({
      amount: amount * 100, // in paise
      currency: "INR",
      receipt: `receipt_order_${Date.now()}`,
      notes: {
        plan: planName,
      },
    });

    res.status(200).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Payment initiation failed" });
  }
};
