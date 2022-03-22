import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const FilmsID = () => {
    const { filmid } = useParams();

    const [ details, updateDetails ] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
            .then((res) => res.json())
            .then((details) => updateDetails(details))
            .catch((e) => console.log(e.message));
    }, filmid);

    return (
        <>
            <h1 className="text-center">Film Details Page</h1>
            <div className="row">
                <div className="col-sm-6" key={details?.id}>
                    <div className="card">
                        <img className="card-img-top" src={details?.image} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{details?.title}</h5>
                            <p className="card-text">{details?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default FilmsID;