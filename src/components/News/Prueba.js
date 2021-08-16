import React from 'react';
import {useState, useEffect} from 'react';
//https://laurenashpole.github.io/react-inner-image-zoom/
//import InnerImageZoom from 'react-inner-image-zoom';

const url4='https://raw.githubusercontent.com/FJTSYSTEMS2014/link_api_noticias/master/top-headlines-general.json';

function Get_Marvel2 () {
  const [personajes, setPersonajes] = useState ([]);

 
  useEffect (() => {
    fetch (url4) 
      .then (res => res.json ()) 
      .then (res => setPersonajes (res.articles)) 
      .catch (error => {
        console.log (error);
      });
  }, []); 
  console.log (personajes);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">

      {personajes.map (per => (
        <div className="row-2 shadow-lg p-2 mb-1 bg-light rounded">
          <img src={per.urlToImage}
            className="card-img-top mx-auto d-block"
            
            key={per.ObjectId}
          />
          <div className="card-body">

            <ul className="row-2 shadow-lg p-1 mb-1 bg-light rounded">
              <li className="list-group-item fw-bold">
                 # {per.title}</li>

             
     
              <a></a> <h6  className=" my-0 my-sm-0">{per.content}</h6><a href={per.url} target="_blank"
                                rel="noreferrer noopener"
                                className="btn btn-outline-danger p-3 my-3 my-sm-0"
                                role="button">...Seguir leyendo</a>

<li className="list-group-item">Publicado: {per.publishedAt}</li>
<li className="list-group-item">Fuente: {per.source.name}</li>
            </ul>

          </div>

        </div>
      ))}
    </div>
  );
}

export default Get_Marvel2;
