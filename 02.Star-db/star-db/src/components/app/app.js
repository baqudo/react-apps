import React, { Component } from 'react';
import Header from '../header';
import './app.scss';
import Row from '../row.js';

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
            <div>
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
            </div>
        )
    } 
}
