import React, { Component } from 'react';
import Header from '../header';
import './app.scss';
import Row from '../row.js';
import ErrorBoundry from '../error-boundry';
import { API, DummySwapiService } from '../../services';
import { APIProvider } from '../api-context';

import {
  PeopleList,
  PlanetsList,
  StarshipsList,
  PeopleDetails,
  PlanetsDetails,
  StarshipsDetails
} from '../sw-components';

export default class App extends Component {

    state = {
        currentPerson: 1,
        currentPlanet: 2,
        currentStarship: 6,
        apiService: new API()
    }

    onClick = (id, type) => {
        this.setState({
            [type]: id,
        })
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
        const { currentPerson, currentPlanet, currentStarship } = this.state;

        return (
            <ErrorBoundry>
                <APIProvider value={this.state.apiService} >
                    <Header onServiceChange={this.onServiceChange}/>
                    <div className="container">

                        <Row
                            left={
                                <PeopleList onItemClick={id => this.onClick(id, 'currentPerson')} />
                            }
                            right={
                                <PeopleDetails id={currentPerson} />
                            }
                        />

                        <Row
                            left={
                                <PlanetsList onItemClick={id => this.onClick(id, 'currentPlanet')} />
                            }
                            right={
                                <PlanetsDetails id={currentPlanet} />
                            }
                        />
                        

                        <Row
                            left={
                                <StarshipsList onItemClick={id => this.onClick(id, 'currentStarship')} />
                            }
                            right={
                                <StarshipsDetails id={currentStarship} />
                            }
                        />
                        

                    </div>
                </APIProvider>
            </ErrorBoundry>
        )
    } 
}
