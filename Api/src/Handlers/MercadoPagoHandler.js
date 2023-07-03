const { Donaciones } = require("../db");
const mercadopago = require("mercadopago");

const postDonacion = async (req, res) => {
  try {
    const donacion = req.body;
    const preference = {
      items: [
        {
          title: donacion.title,
          unit_price: donacion.unit_price,
          quantity: donacion.quantity,
          fundacionId: donacion.fundacionId,

        },
      ],
      back_urls: {
        success: "http://localhost:3000/donaciones/feedback",
        failure: "http://localhost:3000/donaciones/feedback",
        pending: "http://localhost:3000/donaciones/feedback",
      },
      auto_return: "approved",
    };

    const response = await mercadopago.preferences.create(preference);

    const nuevaDonacion = await Donaciones.create({
      monto: donacion.unit_price * donacion.quantity,
      fecha: new Date(),
      descripcion: donacion.title,
      fundacionId: donacion.fundacionId,
      usuarioId: donacion.usuarioId,
    });

    res.status(201).send({ response, donacion: nuevaDonacion });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const getDonacion = async (req, res) => {
  try {
    const donaciones = await Donaciones.findAll();

    res.status(200).json(donaciones);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postDonacion, getDonacion };

