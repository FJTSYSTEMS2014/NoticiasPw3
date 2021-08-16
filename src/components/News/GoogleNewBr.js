import React, { useState, useEffect } from 'react';


function General() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(

                'https://raw.githubusercontent.com/FJTSYSTEMS2014/link_api_noticias/master/top-headlines-google-news-br.json',
            );
            const json = await res.json();
            setData(json.articles);
        };
        fetchData();
    }, []);

    return (
        <div className="w-100 p-2 bd-highlight" >

            <ul className="rounded float-center">
                {data.map(item => (
                    <li className="d-flex flex-column  bd-highlight mb-4" key={item.ObjectId}>
                        <div className="d-flex flex-column text-white bg-dark">

                             <h4>{item.title}</h4><a href={item.url} target="_blank"
                                rel="noreferrer noopener"
                                className="btn btn-outline-danger my-0 my-sm-0"
                                role="button">...Seguir leyendo</a>

                            <p className="alert alert-dark"> < img src={item.urlToImage}
                                className="rounded img-fluid img-thumbnail" alt={item.title} /></p>
                            <div><p className="bg-light text-dark" >{item.content}  <a href={item.url} target="_blank"
                                rel="noreferrer noopener"
                                className="btn btn-outline-danger my-0 my-sm-0"
                                role="button">...Seguir leyendo</a></p></div>
                            <div> <h6>Fuente: {item.source.name} </h6>  <p> Fecha de Publicacion: {item.publishedAt}</p> </div>

                        </div>
                    </li>
                ))}
            </ul>


        </div>
    );
}

export default General;