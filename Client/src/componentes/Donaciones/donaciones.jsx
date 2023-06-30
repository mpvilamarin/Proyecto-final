import axios from 'axios';
import React, { useState } from "react"
// import { useParams } from "react-router-dom";
import style from './Donaciones.module.css'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import logoMercadoPago from './mercadopago.png';

export default function Donacion() {

  // const { fundacionId } = useParams();
  const [inputValue, setInputValue] = useState('');
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago('TEST-02a2559f-5988-4feb-9e00-0b05cc1e1ab3');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // mercadopago functions
  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:3001/create_preference", {
        description: "Gracias por donar",
        price: inputValue,
        quantity: 1
      });
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error.message)
    }
  };
  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };
  return (
    <div className={style.container}>
      <div><h1>Donar es darles una oportunidad de ser amados y cuidados</h1></div>
      <div className={style.inputContainer}>
        <input
          type="number"
          className={style.donateInput}
          min="10"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className={style.p}>
          <p className={style.donateAmount}>Le donaras a los peluditos: ${inputValue} </p>
        </div>
      </div>
      <div className={style.inputContainer}>
        <button className={style.buttonDonar} onClick={handleBuy}>
          Donar
        </button>
        {
          preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} />
        }
      </div>
      <div className={style.mercadoPagoLogo}>
        <img src={logoMercadoPago} alt="MercadoPago Logo" />
      </div>
    </div>
  )
}
