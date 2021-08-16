import React, { useEffect, useState } from 'react';
import axios from "axios";

function App() {

  const [usuarios, setUsuarios] = useState([]);
  const [tablaUsuarios, setTablaUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const peticionGet = async () => {
    await axios.get("https://raw.githubusercontent.com/FJTSYSTEMS2014/link_api_noticias/master/top-headlines-general.json")
      .then(response => {
        setUsuarios(response.data.articles);
        setTablaUsuarios(response.data.articles);
        console.log(response.data.articles)
      }).catch(error => {
        console.log(error);
      })
  }


  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }

  const filtrar = (terminoBusqueda) => {
    let resultadosBusqueda = tablaUsuarios.filter((elemento) => {
      if (elemento.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()))  
        {
        return elemento;
      }
    });
    setUsuarios(resultadosBusqueda);
    console.log(resultadosBusqueda)
  }

  useEffect(() => {
    peticionGet();
  }, [])

  return (
    <div className="p-2">
      <div className="container blockquote lead"> 
        <input
          className="form-control mr-sm-4"
          value={busqueda}
          placeholder="Busqueda por titulo o descripcion de la Noticia"
          onChange={handleChange}
        />

      </div>

      <div className="ttable table-hover">
        <table className="thead-dark img-fluid table text-center table-bordered">
          <thead>
            <tr >
              <th >Titulo de la Noticia </th>
              <th>Descripcion</th>

            </tr>
          </thead>

          <tbody>
            {busqueda&&
              usuarios.map((usuario) => (
                <tr key={usuario.publishedAt}>
                  <td className="col-md-1">
                    <div className="">
                      <em>{usuario.title}</em>
                      <td className="col-md-1">
                        <a href={usuario.url} target="_blank"
                          rel="noreferrer noopener"
                          className="btn btn-outline-danger my-0 my-sm-0"
                          role="button">...Seguir leyendo</a> </td>
                      <img src={usuario.urlToImage}
                        style={{
                          borderBottomRightRadius: 20,
                          height: 300,
                          width: 500
                        }} alt={usuario.author} />
                    </div>
                    <div>

                    </div>
                  </td>
                  <td className="col-md-2">{usuario.description}
                    <div>
                      <td className="col">Fuente: {usuario.source.name}
                      </td>
                    </div>
                    <div>
                      <td className="col">Fecha: {usuario.publishedAt}</td>
                    </div>
                    <td className="col">
                      <a href={usuario.url} target="_blank"
                        rel="noreferrer noopener"
                        className="btn btn-outline-danger my-0 my-sm-0"
                        role="button">...Seguir leyendo</a>
                    </td>
                  </td>
                
                </tr>
              ))}
          </tbody>

        </table>

      </div>
    </div>
  );
}

export default App;

/*         <button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch}/>
        </button>  */