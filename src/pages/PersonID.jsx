import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const PersonID = () => {
    const { personid } = useParams();

    const [details, updateDetails] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${personid}`)
            .then((res) => res.json())
            .then((details) => updateDetails(details))
            .catch((e) => console.log(e.message));
    }, personid);

    return (
        <>
            <h1 className="text-center">Person Details Page</h1>
            <div className="row">
                <div className="col-sm-6" key={details?.id}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{details?.name}</h5>
                            <p className="card-text">{details?.age}, {details?.gender}</p>
                            <a target="_blank" href={details?.url} className="btn btn-primary">Go to JSON Source</a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default PersonID;