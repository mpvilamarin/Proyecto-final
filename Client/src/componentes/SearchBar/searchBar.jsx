import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameFundaciones } from "../Actions/index.js";

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name,setName] = useState("");

    function handleInputChange(event) {
        setName(event.target.value);
        console.log(name);
    }
    function handleSubmit(event) {
        event.preventDefault();
        dispatch(getNameFundaciones(name));
        setName("");
    }
    return (  
         <div>
            <input
                type="text"
                placeholder="Busque su fundacion..."
                onChange={(event) => handleInputChange(event)}
                value={name}
            />
            <button
                type="submit"
                onClick={(event) => handleSubmit(event)}
            >
                <img src="https://i.ibb.co/18gKfTf/search.png"alt="buscar"></img>
            </button>            
        </div> 
    )
}