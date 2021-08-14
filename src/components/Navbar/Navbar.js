import React from 'react';
import {NavLink} from 'react-router-dom';
import img from '../../components/img/01.jpg';

function Navbar () {
  return (
<<<<<<< HEAD
    <div className="navbar-brand   my-0 my-sm-0" >
=======
    <div className="navbar-brand  btn-outline-success my-0 my-sm-0" >
>>>>>>> 76d3c2b86b66e28ab7803030a68a91177dda3dcb
      {' '}<img src={img} className="img-fluid" alt="img-navbar" />
      <div className="navbar nav-container navbar navbar-expand-lg  bg-light">

        <NavLink
          exact
          to="/formulario"
          className="btn btn-outline-dark my-0 my-sm-0 p-4"
        >
          {' '}Crear URL
        </NavLink>
        <NavLink
          exact
<<<<<<< HEAD
          to="/google-ar"
          className="btn btn-outline-primary my-0 my-sm-0 p-3"
        >
          {' '}Noticias Argentinas Destacadas
        </NavLink>
        <NavLink
          exact
=======
>>>>>>> 76d3c2b86b66e28ab7803030a68a91177dda3dcb
          to="/general"
          className="btn btn-outline-danger my-0 my-sm-0"
        >
          {' '}General
        </NavLink>
        <NavLink
          exact
          to="/buscar"
          className="btn btn-outline-dark my-0 my-sm-0"
        >
          {' '}Buscar
        </NavLink>
        <NavLink
          exact
          to="/ciencia"
          className="btn btn-outline-dark my-0 my-sm-0"
        >
          {' '}Ciencia
        </NavLink>

        <NavLink
          exact
          to="/entretenimiento"
          className="btn btn-outline-dark my-0 my-sm-0"
        >
          {' '}Entretenimiento
        </NavLink>
     
        <NavLink
          exact
          to="/tec"
          className="btn btn-outline-dark my-0 my-sm-0"
        >
          {' '}Tecnologia
        </NavLink>
        <NavLink
          exact
          to="/salud"
<<<<<<< HEAD
          className="btn btn-outline-success my-0 my-sm-0"
=======
          className="btn btn-outline-dark my-0 my-sm-0"
>>>>>>> 76d3c2b86b66e28ab7803030a68a91177dda3dcb
        >
          {' '}Salud
        </NavLink>
        <NavLink
          exact
          to="/negocios"
          className="btn btn-outline-dark my-0 my-sm-0"
        >
          {' '}Negocios
        </NavLink>
        <NavLink
          exact
          to="/deportes"
          className="btn btn-outline-dark my-0 my-sm-0"
        >
          {' '}Deportes
        </NavLink>
        <NavLink
          exact
          to="/QR_Generator"
          className="btn btn-outline-danger my-0 my-sm-0"
        >
          {' '}QR_Generator
        </NavLink>
        <NavLink
          exact
          to="/QR_Scann"
          className="btn btn-outline-dark my-0 my-sm-0"
        >
          {' '}QR_Scann
        </NavLink>

      </div>
    </div>
  );
}

export default Navbar;
