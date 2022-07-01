
import React, {useEffect, useState} from "react";
import User from "./User";
import '../CSS/main.css'
import { data } from "./Data";
import { useParams } from "react-router-dom";
// import Contacto from "./Contacto";


export default function Users(){

    const [items,setItems]= useState([])
    let { ubicacion } = useParams();
    // let { category } = useParams();

    const[busqueda, setbusqueda]= useState("") //buscador
  
    useEffect(()=>{
        var promesa= new Promise((resolve,reject)=>{
            
            setTimeout(()=>{
                resolve(data)
            },0)
        })
        promesa.then((items)=>{
          if (ubicacion) {
              const filteredItems = items.filter(
                (item) => item.ubicacion === ubicacion
              );
              setItems(filteredItems);
            } else {
              setItems(items);
            }
        
        }).catch((error)=>{
            console.log(error)
        })
  
      },[ubicacion])


    //   buscador
    const handleChange=e=> {
        setbusqueda(e.target.value)
        filtrar(e.target.value)
    }
    const filtrar=(terminoBusqueda)=>{
        var resultadoBusqueda= data.filter((elemento)=>{
            if(elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elemento
            }
        })
        setItems(resultadoBusqueda)
    }

    return(
        <>
        <section>
        
        <div className="searchContainer">
            <input type="text" id="buscador" 
            placeholder='Buscar por nombre' 
            value={busqueda} onChange={handleChange} ></input>
            <i class="fa-solid fa-magnifying-glass"></i>
            
        </div>
        <div style={{textAlign:"center"}}>
            {items?.length===0?
            <h2>No hay resultado</h2>: null}
        </div>

        <div className="catalogo" id="catalogo"> 
            <div className="contenedorTarjetas"> 
                {
                    items.map(user=> (
                        
                        <User key={user.id} user={user}/>
                    ))
                }
            </div>


        </div>
      </section>
        </>
    )
}