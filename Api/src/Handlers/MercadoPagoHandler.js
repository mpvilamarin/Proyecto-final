const mercadopago = require("mercadopago");

const postDonacion = (req, res) => {
  const donacion = req.body;
  let preference = {
    items: [
      {
        title: donacion.title,
        unit_price: 500,
        quantity: 1,
      },
    ],
    back_urls: {
      success: "http://localhost:3000/feedback",
      failure: " ",
      pending: " ",
    },
    auto_return: "approved",
  };
  mercadopago.preferences
    .create(preference)
    .then((response) => res.status(200).send({ response }))
    .catch((error) => res.status(404).send({ error: error.message }));
};

const getDonacion = (req, res) => {
  res.status(200).json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
};

module.exports = { postDonacion, getDonacion };
