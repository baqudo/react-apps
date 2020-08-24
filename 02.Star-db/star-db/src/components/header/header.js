import React from 'react';

import './header.scss';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Star DB</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/people">People</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/planets">Planets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/starships">Starships</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;