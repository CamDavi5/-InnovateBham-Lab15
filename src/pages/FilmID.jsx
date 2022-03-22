import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FilmsID = () => {
    const { filmid } = useParams();
    const navigate = useNavigate();
    
    const [ details, updateDetails ] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
            .then((res) => res.json())
            .then((details) => updateDetails(details))
            .catch((e) => console.log(e.message));
    }, [filmid]);

    const navigateBack = () =>{
        navigate(-1);
    }

    return (
        <>
            <h1 className="text-center">Film Details Page</h1>
            <div className="row d-flex justify-content-center">
                <div className="col-sm-6" key={details?.id}>
                    <div className="card">
                        <img className="card-img-top" src={details?.image} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{details?.title} <span className="text-muted">({details?.release_date})</span></h5>
                            <h6 className="card-subtitle mb-2 text-muted">Director: {details?.director}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Producer: {details?.producer}</h6>
                            <hr/>
                            <p className="card-text">{details?.description}</p>
                            <hr/>
                            <p className="card-text">Rotton Tomatoes Score: {details?.rt_score > 50 ? <span className="text-success">{details?.rt_score}</span> : <span className="text-danger">{details?.rt_score}</span>} </p>
                            <button className="btn btn-success" onClick={() => navigateBack()} >Go Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default FilmsID;