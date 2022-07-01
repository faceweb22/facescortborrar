import React from 'react'
import {CopyToClipboard} from "react-copy-to-clipboard"
import toast, { Toaster } from 'react-hot-toast';

// el estilo de la clase copiar esta en el archivo contacto.css
export default function Copiar({toCopy}) {
    const copiar= ()=>{
        toast.success("copiado!")

    }
  return (
    <CopyToClipboard text={toCopy}>
        <div>
            <button className="copiar" onClick={copiar}>copiar</button> 
            <Toaster/>
        </div>
    </CopyToClipboard>
  )
}

