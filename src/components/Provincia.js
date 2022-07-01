import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../multimedia/logo.png'

export default function Provincia() {
  return (
    <div className='main'>

        <h1 className='logo logoInitial'>
            <Link to="/facescort"> 
                <div className='logoContainer'>
                    <img src={logo} width="200px" alt='logo'></img>
                </div>
            </Link>
        </h1>
        <br></br>
        <h2>Seleccione una provincia</h2>
        <div className='provContainer'>

            <Link to="/facescort/buenos-aires">
                <div className='provincias'>
                    Buenos Aires
                </div>
            </Link>
            <Link to="#">
                <div className='provincias'>
                    Proximamente mas provincias...
                </div>
            </Link>
        </div>
        
    
    </div>
  )
}
