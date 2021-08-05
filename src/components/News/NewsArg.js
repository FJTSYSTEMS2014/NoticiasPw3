import React, { useState, useEffect } from 'react';

function NewsArg() {
    const [data, setData] = useState([]);
    const [url, setUrl] = useState(["https://raw.githubusercontent.com/FJTSYSTEMS2014/React_init/master/top-headlines-general-3-8-2021.json"]);
  const url2="https://newsapi.org/v2/top-headlines?country=ar&category=&page=2&apiKey=d2358245efe14cf09b1f1e97c2e3a7f5"
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                {url},
            );
            const json = await res.json();
            setData(json.articles);
        };
        fetchData();
    }, []);

    return (
        <div className="w-50 p-2 " >

            <ul className="rounded float-center">
                {data.map(item => (
                    <li className="d-flex flex-column bg-light text-dark bd-highlight mb-4" key={item.ObjectId}>
                        <div className="d-flex flex-column text-white bg-dark">

                            <a href={item.url}  ><h4>{item.title}</h4></a>



                            <p className="alert alert-dark"> < img src={item.urlToImage}
                                className="rounded img-fluid img-thumbnail" alt={item.title} /></p>

                            <div><p className="bg-danger" href={item.url}><h4>"{item.description}"</h4></p></div>
                            <div><p className="bg-success text-white" >{item.content}</p><a href={item.url}>...Seguir leyendo</a></div>
                            <div> <h6>Fuente: {item.source.name} </h6>  <p> Fecha de Publicacion: {item.publishedAt}</p> </div>

                        </div>
                    </li>
                ))}
            </ul>

              <div className="conteiner m-auto">
                  <button onClick={()=>setUrl(url2)} className="btn btn-dark">siguiente</button>
                  <button onClick={()=>setUrl(url)} className="btn btn-dark">Anterior</button>
              </div>
        </div>
    );
}

export default NewsArg;