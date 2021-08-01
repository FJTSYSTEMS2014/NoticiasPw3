import React from 'react';
import { NavLink } from "react-router-dom";
import img from '../../components/img/noticias-franck.gif'

function Navbar() {
    return (
        <div className="navbar navbar-dark bg-dark"> <img src={img} className="img-fluid" alt="img-navbar"/>
        <div className="navbar navbar-dark bg-dark nav-container navbar navbar-expand-lg navbar-dark form-inline bg-light">

            <ul><li> <NavLink exact to="/hola" className="btn btn-outline-success my-0 my-sm-0"> Noticias de Franck
            </NavLink></li></ul>

            <ul><li> <NavLink exact to="/" className="btn btn-outline-success my-0 my-sm-0"> Home
            </NavLink></li></ul>

            <ul><li> <NavLink exact to="/" className="btn btn-outline-success my-0 my-sm-0"> Noticias de hoy
            </NavLink></li></ul>
            <ul><li> <NavLink exact to="/" className="btn btn-outline-success my-0 my-sm-0"> Noticias
            </NavLink></li></ul>
            <ul><li class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-4" type="search" placeholder="...Buscar" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar Noticias</button>
    </li></ul>



        </div></div>
    )
}

export default Navbar
