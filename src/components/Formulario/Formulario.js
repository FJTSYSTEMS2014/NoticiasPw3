import React, {  useState } from 'react';

//https://bluuweb.github.io/react-udemy/04-formularios/

// key:  d2358245efe14cf09b1f1e97c2e3a7f5
// por pagina: https://newsapi.org/v2/top-headlines?country=ar&category=general&page=2&apiKey=d2358245efe14cf09b1f1e97c2e3a7f5

const Formulario = () => {

  const urlBaseNews = 'https://newsapi.org/v2/top-headlines?';
  const urlBaseNews1 = 'https://newsapi.org/v2/everything?';

  const [privateKey, setprivateKey] = useState('');

  const [pais,setPais] = useState('ar');
  const [categoria,setCategoria] = useState('general');
  const [urlnoticias, setUrlnoticias] = useState('');
  const [urlnoticias1, setUrlnoticias1] = useState('');
  
const buscar= "bariloche";
const fechaIni="2021-07-29";
const fechaOut="2021-08-01";
const popularity="popularity";
const page="1";

  const guardarDatos = e => {
    e.preventDefault();

    if (!privateKey.trim()) {
      console.log('esta vacio api-Key');
      return;
    }

/*
    if (!pais.trim()) {
      console.log('seleccionar pais');
      return;
    }

  */



    //'https://newsapi.org/v2/top-headlines?country=ar&category=&apiKey=d2358245efe14cf09b1f1e97c2e3a7f5',



    console.log('procesando datos...' + privateKey + pais + categoria);
    const key = `${privateKey}`;
   // const urlnoticias = `${urlBaseNews}country=${pais}&language=${language}&category=${categoria}&apiKey=${key}`;
      const urlnoticias = `${urlBaseNews}country=${pais}&category=${categoria}&apiKey=${key}`;
      const urlnoticias1 = `${urlBaseNews1}q=${buscar}&from=${fechaIni}&to=${fechaOut}&sortBy=${popularity}&page=${page}&apiKey=${key}`;

;
    
    
      setUrlnoticias(urlnoticias);
    setUrlnoticias1(urlnoticias1);


    e.target.reset();
    setprivateKey('');
     setPais('ar');
     setCategoria('general');
  };

  return (
    <div className="p-3 mb-2 bg-dark text-white">
      <h2>Generador de URL para consumir Api https://newsapi.org/</h2>
      <form onSubmit={guardarDatos}>

        
        <label for="exampleFormControlSelect1">Seleccionar Pais</label>
        <select className="form-control form-control-lg list-group-item-primary"
          onChange={e => setPais(e.target.value)}>
        
          <option value="ar">Argentina</option>
          <option value="br">Brasil</option>
          <option value="cn">China</option>
          <option value="it" >Italia</option>
          <option value="us">Estados Unidos</option>
          <option value="ve">Venezuela</option>
        </select>


      <label for="exampleFormControlSelect1">Seleccionar Categoria</label>
        <select className="form-control form-control-lg list-group-item-primary"
          onChange={e => setCategoria(e.target.value)}>
         <option value="general">General</option>  
          <option value="business">Negocio</option>
          <option value="entertainment">Entretenimiento</option>
          <option value="health">Salud</option>
          <option value="science">Ciencia</option>
          <option value="sports">Deportes</option>
          <option value="technology">Tecnologia</option>
        </select>
        <label for="exampleFormControlSelect1">Ingresar apiKey</label>
        <input
          type="text"
          placeholder="...apiKey"
          className="form-control mb-2"
          onChange={e => setprivateKey(e.target.value)}
        />

        <button className="btn btn-outline-success my-0 my-sm-0" type="submit">
          Generar Url 
        </button>
        <div />
      </form>

      <div className="form-group purple-border">
        <label for="exampleFormControlTextarea4"><h6>Titulares de noticias de última hora para países, categorías y editores particulares.</h6></label>
        <textarea
          className="form-control mb-2"
          id="exampleFormControlTextarea4"
          value={urlnoticias}
          rows="2"
        />
        <a
          href={urlnoticias}
          target="_blank"
          rel = "noreferrer noopener" 
          className="btn btn-outline-success my-0 my-sm-0"
          role="button"
        >
          Ejecutar el link #1
        </a>
      </div>
      <div className="form-group purple-border">
        <label for="exampleFormControlTextarea4"><h6>Artículos que mencionan a "bariloche" desde  el 29/07/2021 hasta 01/08/2021 ordenados por editores populares</h6></label>
        <textarea
          className="form-control mb-2"
          id="exampleFormControlTextarea4"
          value={urlnoticias1}
          rows="2"
        />
        <a
          href={urlnoticias1}
          target="_blank"
          rel = "noreferrer noopener" 
          className="btn btn-outline-success my-0 my-sm-0"
          role="button"
        >
          Ejecutar el link #2
        </a>
      </div>

      
    </div>
    
  );
};

export default Formulario;
