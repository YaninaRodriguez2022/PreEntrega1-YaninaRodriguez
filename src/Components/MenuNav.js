import React from 'react'
import './navBarStyles.css';
import CartWidget from './CartWidget';

export const MenuNav = () => {
  return (
    <nav className="navbar navbar-expand-lg" >

        <div className='navBarNew'>
        <div id="logoTamaño">
       <img src="./imag/logo/logo negro.jpg" alt="logo"/>
       </div>
        </div>
      <div className="container-fluid">
        <div className="animacionBarraLi"><a className="navbar-brand" href="./index.html"> Inicio </a></div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="effectHover collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav animacionBarraLi">

            <li className="nav-item">
              <a className="nav-link" href="#">Quienes Somos</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Nuestros Productos
              </a>
              <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item bg-dark text-white" href="#">Mesas Industriales</a></li>
                <li><a className="dropdown-item bg-dark text-white" href="#">Mesas Pegables</a></li>
                <li><a className="dropdown-item bg-dark text-white" href="#">Living de Exterior</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Novedades</a>
            </li>

          </ul>

        </div>

        <div>
            <CartWidget></CartWidget>
        </div>
      </div>

  
    </nav>

        
  )
}
 export default MenuNav