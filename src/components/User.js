
import React from "react";
import { Link } from "react-router-dom";


export default function User({user:{id, nombre, category, wp, portada, descripcion}}){

    return( 
        <>
        <ul className="tarjetas">
            <Link to= {`/facescort/${nombre}-${id}-${wp}`} >
                <li> <img src= {portada} className="tarjetas-img" alt="portada"/></li>
                <li className="detallesCard">{nombre}</li>
                <li className="detallesCard">{wp}</li>
            </Link> 

        </ul>
        </>
    )
}