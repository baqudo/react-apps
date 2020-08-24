import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import Details from '../details';
import './app.scss';

const App = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <RandomPlanet />
                <div className="row">
                    <div className="col-12 col-md-6">

                    </div>
                    <div className="col-12 col-md-6">
                        <Details />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
