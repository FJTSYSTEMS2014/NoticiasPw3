import React from 'react';
import {useState, useEffect} from 'react';
//https://laurenashpole.github.io/react-inner-image-zoom/
//import InnerImageZoom from 'react-inner-image-zoom';

const url4='https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=20&apikey=0f7ec6e9620a0aea41af082d03d7a88d&hash=804f04417964946af208ca3ab2546bb9';
function Get_Marvel2 () {
  const [personajes, setPersonajes] = useState ([]);

 
  useEffect (() => {
    fetch (url4) 
      .then (res => res.json ()) 
      .then (res => setPersonajes (res.data.results)) 
      .catch (error => {
        console.log (error);
      });
  }, []); 
  console.log (personajes);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">

      {personajes.map (per => (
        <div className="row-2 shadow-lg p-1 mb-1 bg-light rounded">
          <img
            src={`${per.thumbnail.path}.${per.thumbnail.extension}`}
            className="card-img-top mx-auto d-block"
            style={{width: '15rem', height: '15rem'}}
            key={per.id}
          />
          <div className="card-body">

            <ul className="row-2 shadow-lg p-1 mb-1 bg-dark rounded">
              <li className="list-group-item fw-bold">Name:{per.name}</li>
              <li className="list-group-item">ID:{per.id}</li>
              <li className="list-group-item">Description:{per.description}</li>
              <li className="list-group-item">Modified:{per.modified}</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>

          </div>

        </div>
      ))}
    </div>
  );
}

export default Get_Marvel2;
