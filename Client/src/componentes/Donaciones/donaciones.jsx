import React, { useState } from "react";
import { connect } from "react-redux";
import { postDonaciones } from "../../redux/Actions/post";
import { Wallet } from "@mercadopago/sdk-react";

const Donacion = ({ fundaciones, postDonaciones }) => {
  const [monto, setMonto] = useState("");
  const [fundacion, setFundacion] = useState("");
  const [paymentInfo, setPaymentInfo] = useState({
    showPaymentForm: false,
    preferenceId: null,
  });

  const handleDonar = async () => {
    if (monto && fundacion) {
      const nuevaDonacion = {
        monto,
        fundacionId: fundacion,
      };

      const response = await postDonaciones(nuevaDonacion);

      if (response && response.preferenceId) {
        setPaymentInfo({
          showPaymentForm: true,
          preferenceId: response.preferenceId,
        });
      }
    }
  };

  const handleWalletReady = () => {
    setPaymentInfo((prevState) => ({
      ...prevState,
      showPaymentForm: true,
    }));
  };

  const { showPaymentForm, preferenceId } = paymentInfo;

  return (
    <div>
      <input
        type="number"
        value={monto}
        onChange={({ target }) => setMonto(target.value)}
        placeholder="Monto a donar"
      />
      <select
        value={fundacion}
        onChange={({ target }) => setFundacion(target.value)}
      >
        <option value="">Seleccionar fundación</option>
        {fundaciones.map((fundacion) => (
          <option key={fundacion.id} value={fundacion.id}>
            {fundacion.nombre}
          </option>
        ))}
      </select>
      <button onClick={handleDonar}>Donar</button>

      {showPaymentForm && (
        <Wallet initialization={{ preferenceId }} onReady={handleWalletReady} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  fundaciones: state.fundaciones,
});

const mapDispatchToProps = (dispatch) => ({
  postDonaciones: (donacion) => dispatch(postDonaciones(donacion)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Donacion);
