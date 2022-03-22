import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav nav-pills bg-secondary justify-content-center p-2 shadow">
            <NavLink to="/" className={({ isActive }) => `nav-link text-white ${isActive && 'active'}`}>
                Home
            </NavLink>
            <NavLink to="/films" className={({ isActive }) => `nav-link text-white ${isActive && 'active'}`}>
                Films
            </NavLink>
            <NavLink to="/people" className={({ isActive }) => `nav-link text-white ${isActive && 'active'}`}>
                People
            </NavLink>
        </nav>
    );
}

export default Navbar;