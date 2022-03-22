import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Films from './pages/Films';
import FilmID from './pages/FilmID';
import People from './pages/People';
import PersonID from './pages/PersonID';

import Navbar from './components/Navbar';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/films" element={<Films />}/>
                <Route path="/films/:filmid" element={<FilmID />}/>
                <Route path="/people" element={<People />}/>
                <Route path="/people/:personid" element={<PersonID />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;