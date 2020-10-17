import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = ({ onServiceChange }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Star DB</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/people/">People</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/planets/">Planets</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/starships/">Starships</Link>
                    </li>
                </ul>
            </div>

            <button
                onClick={onServiceChange}
                className="btn btn-danger btn-sm"
            >Change service</button>
        </nav>
    )
}

export default Header;