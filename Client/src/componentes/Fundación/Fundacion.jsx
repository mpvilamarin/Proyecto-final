import React from 'react'
import CardFundacion from '../Cartas/cardFundacion';
import FundacionesFilter from '../Fundación/filterFundacion'
import SortFundaciones from '../Fundación/sortFundacion';
import SearchBar from '../SearchBar/searchBar';
import style from './Fundacion.module.css'




const Fundacion = () => {
  return (
    <div >
        <div className={style.filters}>
        {/* <FundacionesFilter /> */}
        <SortFundaciones />
        <SearchBar/>
        <CardFundacion/>
        
    </div>
  )
}

export default Fundacion