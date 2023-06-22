import React from "react";
import { Link } from "react-router-dom";


export default function Card ({img,name,genres,edad,id}) {  
    return (
        <div>
            <img src={img} alt="imagen card" />
             <div>{name[0].toUpperCase() + name.slice(1)}</div>
            <div>
                <p>{genres}</p>
            </div>
            <div>
                <p>{edad}</p>
            </div>
            <Link to={`/detail/${id}`}>
                <button><span>Read More</span></button>
            </Link>
        </div>
    )  
}