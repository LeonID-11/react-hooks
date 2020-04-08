import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="navbar-brand">
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/" exact>
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                    Info
                </NavLink>
            </li>
        </ul>
        </div>
    </nav>
)
