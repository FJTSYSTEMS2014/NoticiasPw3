import React from 'react';
import { NavLink } from "react-router-dom";
import img from '../../components/img/noticias-franck.gif'

function Navbar() {
    return (
        <div className="navbar-brand  btn-outline-success my-0 my-sm-0"> <img src={img} className="img-fluid" alt="img-navbar"/>
        <div className="navbar nav-container navbar navbar-expand-lg  bg-light">

             <NavLink exact to="/buscar" className="btn btn-outline-success my-0 my-sm-0"> Buscar Noticias
            </NavLink>

             <NavLink exact to="/home" className="btn btn-outline-success my-0 my-sm-0"> Ultimas Noticias
            </NavLink>

             <NavLink exact to="/formulario" className="btn btn-outline-success my-0 my-sm-0"> Crear url de NEWS.org
            </NavLink>
             <NavLink exact to="/news" className="btn btn-outline-success my-0 my-sm-0"> Noticias
            </NavLink>




        </div></div>
    )
}

export default Navbar
