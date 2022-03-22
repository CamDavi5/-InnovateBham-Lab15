import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Films = () => {
    const [ films, updateFilms ] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then((res) => res.json())
            .then((films) => updateFilms(films))
            .catch((e) => console.log(e.message));
    }, []);

    const toDetails = (id) =>{
        navigate(`/films/${id}`);
    }

    return (
        <>
            <h1 className="text-center">Films Page</h1>
            <div className="row">
                {films.map((film) => (
                    <div className="col-sm-6" key={film.id}>
                        <div className="card mt-2">
                            <div className="card-body">
                                <h5 className="card-title">{film.title}</h5>
                                <p className="card-text">{film.description}</p>
                                <button className="btn btn-success" onClick={() => toDetails(film.id)} >More Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>

    );
}

export default Films;