

import React from "react";
import '../CSS/detallesUser.css'

export default function UserDetail ({items:{id, nombre, category, fotos, wp, portada, descripcion}}){

    return(
        

        <div className="contenedorUserDetail">

            <div className="contenedorDetail" >
                <ul >
                    <h2>{nombre}</h2>
                    <li>{wp}</li>
                    <li>{descripcion}</li>

                </ul>

            </div>
            <div className="imgContainer">
                <div className="marco">
                    <img src={portada} className="imgDetail" alt="foto de portada"/>
                    {/* <img className="marcaDeAgua" src="https://github.com/faceweb22/face/blob/reacomodando/src/multimedia/faceLogo.png?raw=true" width="200px"></img> */}

                </div>

                {
                    fotos?.map(foto=>(
                        <div className="marco">
                            <img src={foto} key={foto.toString()} className="imgDetail" alt="fotos"></img>
                            {/* <img className="marcaDeAgua" src="https://github.com/faceweb22/face/blob/reacomodando/src/multimedia/faceLogo.png?raw=true" width="200px"></img> */}

                        </div>  
                    ))
                }
            </div>
            <br></br>
        </div>
    )

}