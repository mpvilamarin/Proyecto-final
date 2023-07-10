import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameFundaciones } from "../../redux/Actions/get";
import styles from "../SearchBar/searchBar.module.css";

export default function SearchBar() {
    const dispatch = useDispatch();
    //estado local
    const [name,setName] = useState("");

    function handleInputChange(event) {
        setName(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        dispatch(getNameFundaciones(name));  //name va a ser mi estado local.
        setName("");
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
          handleSubmit(event);
        }
      }


    return (
        
         <div className={styles.search}>
            <input
                type="text"
                placeholder="Busque su fundacion"
                onChange={(event) => handleInputChange(event)}
                onKeyDown={handleKeyPress}
                value={name}
                className={styles.input}
            />
            <button
                type="submit"
                onClick={(event) => handleSubmit(event)}
                className={styles.searchButton}
            >
                <img src={require("../../assets/Huella.png")} alt="buscar" className={styles.buscar}></img>
            </button>            
        </div> 
    )
}