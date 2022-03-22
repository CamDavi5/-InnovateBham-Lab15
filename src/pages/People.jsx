import React, { useState, useEffect } from 'react';

const People = () => {
    const [people, updatePeople] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then((res) => res.json())
            .then((people) => updatePeople(people))
            .catch((e) => console.log(e.message));
    }, []);

    return (
        <>
            <h1 className="text-center">People Page</h1>
            <div className="row">
                {people.map((person) => (
                    <div className="col-sm-6" key={person.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{person.name}</h5>
                                <p className="card-text">{person.age}, {person.gender}</p>
                                <a target="_blank" href={person.url} className="btn btn-primary">Go to JSON Source</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default People;