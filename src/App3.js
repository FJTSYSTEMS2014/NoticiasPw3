import React, { useState, useEffect } from 'react';
// const origin='https://newsapi.org/v2/top-headlines?country=ar&category=&apiKey=d2358245efe14cf09b1f1e97c2e3a7f5';

function NewsArg() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(

                'https://raw.githubusercontent.com/FJTSYSTEMS2014/React_init/master/noticiasFranck',
            );
            const json = await res.json();
            setData(json.articles);
        };
        fetchData();
    }, []);

    return (
        <div className="w-100 p-2 bd-highlight btn btn-outline-primary" >

            <ul className="rounded float-center">
                {data.map(item => (
                    <li className="d-flex flex-column bg-light text-dark bd-highlight mb-4" key={item.ObjectId}>
                        <div className="d-flex flex-column text-white bg-dark">

                            <a href={item.url} target="_blank"
                                rel="noreferrer noopener"
                                className="btn btn-outline-success my-0 my-sm-0"
                                role="button" ><h4>{item.title}</h4></a>

                            <p className="alert alert-dark"> < img src={item.urlToImage}
                                className="rounded img-fluid img-thumbnail" alt={item.title} /></p>






                            <div><p className="bg-danger" href={item.url}><h4>"{item.description}"</h4></p></div>
                            <div><p className="bg-success text-white" >{item.content}</p><a href={item.url} target="_blank"
                                rel="noreferrer noopener"
                                className="btn btn-outline-success my-0 my-sm-0"
                                role="button">...Seguir leyendo</a></div>
                            <div> <h6>Fuente: {item.source.name} </h6>  <p> Fecha de Publicacion: {item.publishedAt}</p> </div>

                        </div>
                    </li>
                ))}
            </ul>


        </div>
    );
}

export default NewsArg;