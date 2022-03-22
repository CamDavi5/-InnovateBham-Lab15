import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1 className="text-center">Ghibli API Home</h1>
            <h3 className="text-center">Click the above Navbar to navigate</h3>
            <div id="logoContainer">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" alt="Totoro img" height="200px"/>
            </div>
        </div>
    );
}

export default Home;