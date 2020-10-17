import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import { API, DummySwapiService } from '../../services';
import { APIProvider } from '../api-context';
import './app.scss';
import {
    PeoplePage,
    PlanetsPage,
    StarshipsPage
} from '../pages';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {

    state = {
        apiService: new API()
    }

    onServiceChange = () => {
        this.setState(({ apiService }) => {
            const Service = apiService instanceof API ? DummySwapiService : API

            console.log('service changed to: ', Service.name);

            return {
                apiService: new Service()
            }
        })
        console.log('Change context');
    }

    render() {
        return (
            <ErrorBoundry>
                <APIProvider value={this.state.apiService} >
                    <Router>
                        <Header onServiceChange={this.onServiceChange}/>

                        <div className="container">

                            <RandomPlanet /> 

                            <Route path="/people" component={PeoplePage} />
                            <Route path="/planets" component={PlanetsPage} />
                            <Route path="/starships" component={StarshipsPage} />

                        </div>
                    </Router>
                </APIProvider>
            </ErrorBoundry>
        )
    } 
}
