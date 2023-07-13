const { Donaciones, Usuarios } = require("../db");
const mercadopago = require("mercadopago");

const postDonacion = async (req, res) => {
  try {
    const donacion = req.body;

    const usuario = await Usuarios.findOne({
      where: {
        email: donacion.email,
      },
    });

    if (!usuario) {
      throw new Error("El usuario no existe");
    }

    const preference = {
      items: [
        {
          title: donacion.title,
          unit_price: donacion.unit_price,
          quantity: donacion.quantity,
          fundacionId: donacion.fundacionId,
          usuarioId: usuario.id,
        },
      ],
      binary_mode: true,
      back_urls: {
        success: "http://localhost:3000/donaciones/feedback",
        failure: "http://localhost:3000/donaciones/rejected",
      },
      auto_return: "approved",
    };

    const response = await mercadopago.preferences.create(preference);

    const nuevaDonacion = await Donaciones.create({
      monto: donacion.unit_price * donacion.quantity,
      fecha: new Date(),
      descripcion: donacion.title,
      fundacionId: donacion.fundacionId,
      usuarioId: usuario.id,
    });

    console.log("Nueva donación creada:", nuevaDonacion);

    if (response.body.auto_return === "approved") {
      nuevaDonacion.estado = "success";
    } else {
      nuevaDonacion.estado = "failure";
    }

    await nuevaDonacion.save();

    res.status(201).send({ response, donacion: nuevaDonacion });
  } catch (error) {
    res.status(400).send({ error: error.message });
    console.log(error);
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
