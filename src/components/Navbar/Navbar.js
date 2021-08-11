import React from 'react';
import {NavLink} from 'react-router-dom';
import img from '../../components/img/noticias-franck.gif';

function Navbar () {
  return (
    <div className="navbar-brand  btn-outline-success my-0 my-sm-0">
      {' '}<img src={img} className="img-fluid" alt="img-navbar" />
      <div className="navbar nav-container navbar navbar-expand-lg  bg-light">

        <NavLink
          exact
          to="/formulario"
          className="btn btn-outline-success my-0 my-sm-0"
        >
          {' '}Crear URL
        </NavLink>
        <NavLink
          exact
          to="/general"
          className="btn btn-outline-success my-0 my-sm-0"
        >
          {' '}General
        </NavLink>
        <NavLink
          exact
          to="/buscar"
          className="btn btn-outline-success my-0 my-sm-0"
        >
          {' '}Buscar
        </NavLink>
        <NavLink
          exact
          to="/ciencia"
          className="btn btn-outline-success my-0 my-sm-0"
        >
          {' '}Ciencia
        </NavLink>

        <NavLink
          exact
          to="/entretenimiento"
          className="btn btn-outline-success my-0 my-sm-0"
        >
          {' '}Entretenimiento
        </NavLink>
     
        <NavLink
          exact
          to="/tec"
          className="btn btn-outline-success my-0 my-sm-0"
        >
          {' '}Tecnologia
        </NavLink>
        <NavLink
          exact
          to="/salud"
          className="btn btn-outline-success my-0 my-sm-0"
        >
          {' '}Salud
        </NavLink>
        <NavLink
          exact
          to="/negocios"
          className="btn btn-outline-success my-0 my-sm-0"
        >
          {' '}Negocios
        </NavLink>
        <NavLink
          exact
          to="/deportes"
          className="btn btn-outline-success my-0 my-sm-0"
        >
          {' '}Deportes
        </NavLink>
        <NavLink
          exact
          to="/prueba"
          className="btn btn-outline-success my-0 my-sm-0"
        >
          {' '}Prueba
        </NavLink>

      </div>
    </div>
  );
}

export default Navbar;
