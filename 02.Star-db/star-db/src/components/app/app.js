import React, { Component } from 'react';
import Header from '../header';
import './app.scss';
import Row from '../row.js';
import ErrorBoundry from '../error-boundry';
import { API } from '../../services';
import { APIProvider } from '../api-context';

import {
  PeopleList,
  PlanetsList,
  StarshipsList,
  PeopleDetails,
  PlanetsDetails,
  StarshipsDetails
} from '../sw-components';

const APIService = new API();

export default class App extends Component {

    state = {
        currentPerson: 1,
        currentPlanet: 2,
        currentStarship: 6
    }

    onClick = (id, type) => {
        this.setState({
            [type]: id,
        })
    }

    render() {
        const { currentPerson, currentPlanet, currentStarship } = this.state;

        return (
            <ErrorBoundry>
                <APIProvider value={APIService} >
                    <Header />
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
