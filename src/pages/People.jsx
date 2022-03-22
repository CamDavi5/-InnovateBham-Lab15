import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const People = () => {
    const [people, updatePeople] = useState([]);
    
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then((res) => res.json())
            .then((people) => updatePeople(people))
            .catch((e) => console.log(e.message));
    }, []);

    const toDetails = (id) =>{
        navigate(`/people/${id}`);
    }

    return (
        <>
            <h1 className="text-center">People Page</h1>
            <div className="row">
                {people.map((person) => (
                    <div className="col-sm-6" key={person.id}>
                        <div className="card mt-2">
                            <div className="card-body">
                                <h5 className="card-title">{person.name}</h5>
                                <button className="btn btn-success" onClick={() => toDetails(person.id)} >More Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default People;