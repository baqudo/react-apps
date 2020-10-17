import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import { API, DummySwapiService } from '../../services';
import { APIProvider } from '../api-context';
import './app.scss';
import {
    LoginPage,
    PeoplePage,
    PlanetsPage,
    StarshipsPage,
    SecretPage
} from '../pages';
import {
    PlanetsDetails,
    StarshipsDetails
} from '../sw-components';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

export default class App extends Component {

    state = {
        apiService: new API(),
        isLoggedIn: false
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        });
    };

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
        const { isLoggedIn } = this.state;

        return (
            <ErrorBoundry>
                <APIProvider value={this.state.apiService} >
                    <Router>
                        <Header onServiceChange={this.onServiceChange}/>

                        <div className="container">

                            <RandomPlanet /> 
                            
                            <Switch>
                                <Route
                                    path="/"
                                    render={() => (<h2>Welcome to StarDB</h2>)}
                                    exact
                                />

                                <Route
                                    path="/people"
                                    render={() => (<h2>People</h2>)}
                                    exact
                                />
                                <Route path="/people/:id?" component={PeoplePage} />

                                <Route
                                    path="/planets"
                                    exact
                                    component={PlanetsPage}
                                />
                                <Route
                                    path="/planets/:id"
                                    render={
                                        ({ match }) => {
                                            const { id } = match.params;
                                            return <PlanetsDetails id={id} />
                                        }
                                    }
                                />

                                <Route
                                    path="/starships"
                                    exact
                                    component={StarshipsPage}
                                />
                                <Route
                                    path="/starships/:id"
                                    render={
                                        ({ match }) => {
                                            const { id } = match.params;
                                            return <StarshipsDetails id={id} />
                                        }
                                    }
                                />

                                <Route
                                    path="/login"
                                    render={({ match }) => (
                                        <LoginPage
                                            isLoggedIn={isLoggedIn}
                                            onLogin={this.onLogin}
                                        />
                                    )}
                                />
                                <Route
                                    path="/secret"
                                    render={({ match }) => (
                                        <SecretPage isLoggedIn={isLoggedIn} />
                                    )}
                                />

                                <Route render={() => (<h2 className="jumbotron text-center">Page Not Found</h2>)}/>
                            </Switch>
                        </div>
                    </Router>
                </APIProvider>
            </ErrorBoundry>
        )
    } 
}
