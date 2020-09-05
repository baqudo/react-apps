import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import Details from '../details';
import List from '../list';
import './app.scss';

const App = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <RandomPlanet />
                <div className="row">
                    <div className="col-12 col-md-4">
                        <List />
                    </div>
                    <div className="col-12 col-md-8">
                        <Details />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
