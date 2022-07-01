import React from 'react'
import '../CSS/footer.css'
import logo from '../multimedia/logo.png'


export default function Footer() {
  return (
    <div>
        <footer class="footerRedes">   
            <p> <img src={logo} className="logoFooter" alt='logo'></img> solo brinda espacio publicitario, no forma parte ni se responzabiliza por la calidad de los servicios ofrecidos por los publicantes, quienes trabajan por su propia voluntad siendo mayor de edad. 
            <br></br>Estamos en contra de la trata de persona, si sospecha que algun anunciante es menor de 18 años o que trabaja en contra de su voluntad contactenos</p>
            
        </footer>
    </div>
  )
}
