import React, { useEffect } from 'react';
import CardMascotas from '../Cartas/cardMascotas';
import CardFundaciones from '../Cartas/cardFundacion';
import style from './home.module.css';

const Home = () => {
  return (
    <div className='container'>
      <div className={style.cardContainer}>
        <CardMascotas />
        <CardFundaciones />
      </div>
    </div>
  );
};

export default Home;
