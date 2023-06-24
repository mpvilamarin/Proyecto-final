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
        console.log(name);
    }
    function handleSubmit(event) {
        event.preventDefault();
        dispatch(getNameFundaciones(name));  //name va a ser mi estado local.
        setName("");
    }
    return (
        
         <div className={styles.search}>
            <input
                type="text"
                placeholder="Busque su fundacion"
                onChange={(event) => handleInputChange(event)}
                value={name}
                className={styles.input}
            />
            <button
                type="submit"
                onClick={(event) => handleSubmit(event)}
                className={styles.searchButton}
            >
                <img src="https://i.ibb.co/18gKfTf/search.png"alt="buscar" className={styles.buscar}></img>
            </button>            
        </div> 
    )
}