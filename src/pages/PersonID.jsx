import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PersonID = () => {
    const { personid } = useParams();
    const navigate = useNavigate();

    const [details, updateDetails] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${personid}`)
            .then((res) => res.json())
            .then((details) => updateDetails(details))
            .catch((e) => console.log(e.message));
    }, [personid]);

    const navigateBack = () =>{
        navigate(-1);
    }

    return (
        <>
            <h1 className="text-center">Person Details Page</h1>
            <div className="row d-flex justify-content-center">
                <div className="col-sm-6" key={details?.id}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Name: {details?.name}</h5>
                            <p className="card-text">Age: {details?.age}</p>
                            <hr/>
                            <p className="card-text">Gender: {details?.gender}</p>
                            <hr/>
                            <p className="card-text">Hair Color: {details?.hair_color}</p>
                            <hr/>
                            <p className="card-text">Eye Color: {details?.eye_color}</p>
                            <button className="btn btn-success" onClick={() => navigateBack()} >Go Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default PersonID;