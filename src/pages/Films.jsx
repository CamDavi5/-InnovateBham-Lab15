import React, { useState, useEffect } from 'react';

const Films = () => {
    const [ films, updateFilms ] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then((res) => res.json())
            .then((films) => updateFilms(films))
            .catch((e) => console.log(e.message));
    }, []);

    return (
        <>
            <h1 className="text-center">Films Page</h1>
            <div className="row">
                {films.map((film) => (
                    <div className="col-sm-6" key={film.id}>
                        <div className="card">
                            <img className="card-img-top" src={film.image} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{film.title}</h5>
                                <p className="card-text">{film.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>

    );
}

export default Films;