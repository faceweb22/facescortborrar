
import UserDetail from "./UserDetail";
import { data } from "./Data";
import { useEffect, useState } from "react";
import { useParams } from "react-router";



export default function UserDetailContainer(){
    const {id}= useParams()
   const [items,setItems]= useState([])
  useEffect(()=>{
      var promesa= new Promise((resolve,reject)=>{
          
          setTimeout(()=>{
              resolve(data)
          },500)
      })
      promesa.then((respuesta)=>{
          const encontrado=respuesta.find(item=> item.id===id)
          setItems(encontrado)
      
      }).catch((error)=>{
          console.log(error)
      })

  },[id])

    return(
        <>

        <div className="catalogo">
          <UserDetail items={items}  />
        </div>

        </>
    )
}