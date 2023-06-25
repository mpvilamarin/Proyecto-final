import React, { useEffect } from 'react'
import CardMascotas from '../Cartas/cardMascotas'
import CardFundaciones from '../Cartas/cardFundacion'

const Home = () => {

  return (
    <div>
      <CardMascotas/>
      <CardFundaciones/>
    </div>
  )
}

export default Home