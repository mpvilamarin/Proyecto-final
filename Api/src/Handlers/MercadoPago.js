const Donaciones = require("../models/Donaciones")(sequelize);

const postDonacion = (mercadopago) => async (req, res) => {
  try {
    const { descripcion, monto, fundacionId } = req.body;

    const donacion = await Donaciones.create({
      descripcion,
      monto,
      fundacionId,
    });

    let preference = {
      items: [
        {
          title: descripcion,
          unit_price: Number(monto),
          quantity: 1,
        },
      ],
      back_urls: {
        success: "http://localhost:3000/feedback",
        failure: "http://localhost:3000/feedback",
        pending: "http://localhost:3000/feedback",
      },
      auto_return: "approved",
      external_reference: donacion.id.toString(),
    };

    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        res.json({
          id: response.body.id,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getDonacion = async (req, res) => {
  try {
    const { payment_id, status, merchant_order_id } = req.query;
    const donacionId = req.query.external_reference;

    await Donaciones.update({ estado: status }, { where: { id: donacionId } });

    res.json({
      Payment: payment_id,
      Status: status,
      MerchantOrder: merchant_order_id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { postDonacion, getDonacion };
